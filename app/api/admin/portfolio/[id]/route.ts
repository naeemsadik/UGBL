import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Port from '@/models/Port';

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    await dbConnect();

    const portfolio = await Port.findByIdAndUpdate(id, body, {
      returnDocument: 'after',
      runValidators: true,
    });

    if (!portfolio) {
      return NextResponse.json({ success: false, error: 'Port not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: portfolio });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await dbConnect();

    const deletedPortfolio = await Port.findByIdAndDelete(id);

    if (!deletedPortfolio) {
      return NextResponse.json({ success: false, error: 'Port not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: {} }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
