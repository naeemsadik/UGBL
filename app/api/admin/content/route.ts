import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getOverridesForLocale, updateOverrides, resetOverrideKeys, readOverrides } from "@/lib/content-store";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

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
    console.error("Admin Content GET error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { locale, overrides } = await request.json();

    if (locale !== "EN" && locale !== "BN") {
      return NextResponse.json(
        { error: "Invalid locale. Only EN and BN are supported." },
        { status: 400 }
      );
    }

    if (!overrides || typeof overrides !== "object") {
      return NextResponse.json({ error: "Invalid overrides payload" }, { status: 400 });
    }

    await updateOverrides(locale as "EN" | "BN", overrides);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Admin Content PUT error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { locale, keys } = await request.json();

    if (locale !== "EN" && locale !== "BN") {
      return NextResponse.json(
        { error: "Invalid locale. Only EN and BN are supported." },
        { status: 400 }
      );
    }

    if (!Array.isArray(keys)) {
      return NextResponse.json({ error: "Keys must be an array of strings" }, { status: 400 });
    }

    await resetOverrideKeys(locale as "EN" | "BN", keys);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Admin Content DELETE error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
