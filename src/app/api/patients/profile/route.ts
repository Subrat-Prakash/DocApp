import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/userModel';
import { connect } from '@/dbConfig/dbConfig';
import { getDataFromToken } from '@/helpers/getDataFromToken';

connect();

// GET request to fetch patient profile
export async function GET(request: NextRequest) {
  try {
    const patientId = await getDataFromToken(request);
    const patient = await User.findById(patientId).select('username email bloodGroup image gender mobileNumber address');
    if (!patient) {
      return NextResponse.json({ error: 'Patient not found' }, { status: 404 });
    }
    return NextResponse.json({
      message: 'Patient found',
      data: patient,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// PUT request to update patient profile
export async function PUT(request: NextRequest) {
  try {
    const patientId = await getDataFromToken(request);
    const body = await request.json();
    const updatedPatient = await User.findByIdAndUpdate(patientId, body, { new: true, runValidators: true });
    if (!updatedPatient) {
      return NextResponse.json({ error: 'Patient not found' }, { status: 404 });
    }
    return NextResponse.json({
      message: 'Profile updated successfully',
      data: updatedPatient,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
