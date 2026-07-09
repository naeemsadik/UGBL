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

/**
 * PATCH – Partial content update.
 *
 * Merges only the supplied keys into the existing overrides for the given locale.
 * Body: { "locale": "EN"|"BN", "overrides": { "hero.title": "New Title", ... } }
 *
 * Unlike PUT (which also merges), PATCH is the semantically correct verb for
 * partial updates and is what external clients should use.
 *
 * Returns { success: true, updated: { ...mergedKeys } }
 */
export async function PATCH(request: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const locale = body.locale as string | undefined;
    const overrides = body.overrides as Record<string, string> | undefined;

    if (locale !== "EN" && locale !== "BN") {
      return NextResponse.json(
        { error: "Invalid locale. Only EN and BN are supported." },
        { status: 400 }
      );
    }

    if (!overrides || typeof overrides !== "object" || Array.isArray(overrides)) {
      return NextResponse.json(
        { error: 'Invalid payload. Send { "locale": "EN", "overrides": { "key": "value" } }' },
        { status: 400 }
      );
    }

    // Merge only the provided keys
    await updateOverrides(locale as "EN" | "BN", overrides);

    return NextResponse.json({ success: true, updated: overrides });
  } catch (error) {
    console.error("Admin Content PATCH error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
