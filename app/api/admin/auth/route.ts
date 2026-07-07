import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated, setAdminSession, clearAdminSession } from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function GET() {
  const authenticated = await isAdminAuthenticated();
  return NextResponse.json({ authenticated });
}

export async function POST(request: NextRequest) {
  try {
    const { secretKey } = await request.json();
    const systemSecret = process.env.ADMIN_SECRET_KEY || "default_fallback_admin_secret_key_12345!";

    if (secretKey === systemSecret) {
      await setAdminSession();
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { error: "Invalid admin secret key" },
      { status: 401 }
    );
  } catch (error) {
    console.error("Auth API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  await clearAdminSession();
  return NextResponse.json({ success: true });
}
