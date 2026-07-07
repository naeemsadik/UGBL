import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Basic validation to check if it's an image
    const validTypes = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/jpg"];
    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        { error: `Invalid file type: ${file.type}. Only JPEG, PNG, WEBP, and GIF are allowed.` },
        { status: 400 }
      );
    }

    // Set up directory paths
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    
    try {
      await fs.mkdir(uploadDir, { recursive: true });
    } catch (mkdirError: any) {
      console.error("[upload-api] Directory creation failed:", mkdirError);
      if (mkdirError.code === "EROFS" || mkdirError.message?.includes("read-only")) {
        return NextResponse.json(
          { error: "Server filesystem is read-only. Serverless environments (like Vercel) require external media storage (like Cloudinary)." },
          { status: 400 }
        );
      }
    }

    // Generate unique file name
    const timestamp = Date.now();
    const extension = path.extname(file.name) || ".jpg";
    const baseName = path.basename(file.name, extension).replace(/[^a-zA-Z0-9_-]/g, "_");
    const uniqueFileName = `${baseName}_${timestamp}${extension}`;
    const filePath = path.join(uploadDir, uniqueFileName);

    // Save to public/uploads
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    try {
      await fs.writeFile(filePath, buffer);
    } catch (writeError: any) {
      console.error("[upload-api] File write failed:", writeError);
      if (writeError.code === "EROFS" || writeError.message?.includes("read-only")) {
        return NextResponse.json(
          { error: "Server filesystem is read-only. Serverless environments (like Vercel) require external media storage (like Cloudinary)." },
          { status: 400 }
        );
      }
      throw writeError; // Let outer catch block handle other write errors
    }

    const publicUrl = `/uploads/${uniqueFileName}`;
    console.info(`[upload-api] File uploaded successfully: ${publicUrl}`);

    return NextResponse.json({ url: publicUrl });
  } catch (error: any) {
    console.error("Upload API error:", error);
    return NextResponse.json({ error: "Failed to upload file: " + (error.message || "Unknown error") }, { status: 500 });
  }
}
