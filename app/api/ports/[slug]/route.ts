import { NextRequest, NextResponse } from "next/server";
import { ports } from "@/lib/data/ports";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const portData = ports[slug];

  if (!portData) {
    return NextResponse.json(
      { error: "Port not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(portData);
}
