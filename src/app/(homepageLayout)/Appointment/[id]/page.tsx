import React from 'react';
import BookAppointment from '@/components/Appointment/[id]/BookAppointment';

const DoctorBookingPage = ({ params }: { params: { id: string } }) => {
    return <BookAppointment id={params.id} />;
};

export default DoctorBookingPage;
