import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/userModel';
import { connect } from '@/dbConfig/dbConfig';

connect();

// GET request to fetch doctor details by ID
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const doctor = await User.findById(id).select('username speciality image experience address consultingTime fee');
    if (!doctor) {
      return NextResponse.json({ error: 'Doctor not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Doctor fetched successfully', data: doctor });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
