// pages/api/doctors/route.ts
import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/userModel';
import { connect } from '@/dbConfig/dbConfig';
import { getDataFromToken } from '@/helpers/getDataFromToken';

connect();

// GET request to fetch all doctors
export async function GET(request: NextRequest) {
  try {
    // Fetch all doctors
    const doctors = await User.find({ userType: 'doctor' }).select('username speciality image experience address consultingTime fee');
    return NextResponse.json({
      message: 'Doctors fetched successfully',
      data: doctors,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// PUT request to update a doctor's profile
export async function PUT(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);
    const body = await request.json();
    const updatedUser = await User.findByIdAndUpdate(userId, body, { new: true, runValidators: true });
    if (!updatedUser) {
      return NextResponse.json({ error: 'Doctor not found' }, { status: 404 });
    }
    return NextResponse.json({
      message: 'Profile updated successfully',
      data: updatedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
