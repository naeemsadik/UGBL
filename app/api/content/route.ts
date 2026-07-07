import { NextRequest, NextResponse } from "next/server";
import { getOverridesForLocale } from "@/lib/content-store";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const localeInput = searchParams.get("locale")?.toUpperCase() || "EN";
    
    if (localeInput !== "EN" && localeInput !== "BN") {
      return NextResponse.json(
        { error: "Invalid locale. Only EN and BN are supported." },
        { status: 400 }
      );
    }

    const overrides = await getOverridesForLocale(localeInput as "EN" | "BN");
    return NextResponse.json(overrides);
  } catch (error) {
    console.error("Error in public content API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
