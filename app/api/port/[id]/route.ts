import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Port from '@/models/Port';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;
    const portfolio = await Port.findById(id);
    
    if (!portfolio) {
      return NextResponse.json({ success: false, error: 'Port not found' }, { status: 404 });
    }
    
    return NextResponse.json({ success: true, data: portfolio });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
