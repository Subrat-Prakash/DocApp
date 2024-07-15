import { NextRequest, NextResponse } from 'next/server';
import Appointment from '@/models/appointmentModel';
import { connect } from '@/dbConfig/dbConfig';

connect();

// POST request to book an appointment
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { doctorId, patientName, appointmentDate, appointmentTime } = body;

    const newAppointment = new Appointment({
      doctor: doctorId,
      patientName,
      appointmentDate,
      appointmentTime,
    });

    await newAppointment.save();

    return NextResponse.json({ message: 'Appointment booked successfully', data: newAppointment });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
