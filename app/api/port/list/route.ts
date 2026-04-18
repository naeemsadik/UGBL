import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Port from '@/models/Port';

export async function GET() {
  try {
    await dbConnect();
    // Only return _id and name
    const portfolios = await Port.find({}, '_id name');
    return NextResponse.json({ success: true, data: portfolios });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
