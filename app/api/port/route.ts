import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Port from '@/models/Port';

export async function GET() {
  try {
    await dbConnect();
    const portfolios = await Port.find({});
    return NextResponse.json({ success: true, data: portfolios });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
