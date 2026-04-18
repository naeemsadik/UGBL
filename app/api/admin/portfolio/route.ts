import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Port from '@/models/Port';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await dbConnect();
    
    const portfolio = await Port.create(body);
    return NextResponse.json({ success: true, data: portfolio }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
