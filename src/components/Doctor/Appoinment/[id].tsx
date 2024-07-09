"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const BookAppointment = () => {
  const router = useRouter();
  const { id } = router.query;
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [patientName, setPatientName] = useState<string>('');
  const [appointmentDate, setAppointmentDate] = useState<string>('');
  const [appointmentTime, setAppointmentTime] = useState<string>('');

  useEffect(() => {
    if (id) {
      axios.get(`/api/doctors/${id}`)
        .then(response => {
          setDoctor(response.data);
        })
        .catch(error => {
          console.error("There was an error fetching the doctor data!", error);
        });
    }
  }, [id]);

  const handleBooking = () => {
    const bookingData = {
      doctorId: id,
      patientName,
      appointmentDate,
      appointmentTime
    };

    axios.post('/api/appointments', bookingData)
      .then(response => {
        alert('Appointment booked successfully!');
        router.push('/');
      })
      .catch(error => {
        console.error("There was an error booking the appointment!", error);
      });
  };

  if (!doctor) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Book Appointment with {doctor.name}</h1>
      <div className="mb-4">
        <label className="block mb-2">Patient Name</label>
        <input
          type="text"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          className="border rounded py-2 px-4 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Appointment Date</label>
        <input
          type="date"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          className="border rounded py-2 px-4 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Appointment Time</label>
        <input
          type="time"
          value={appointmentTime}
          onChange={(e) => setAppointmentTime(e.target.value)}
          className="border rounded py-2 px-4 w-full"
        />
      </div>
      <button
        onClick={handleBooking}
        className="bg-green-500 text-white py-2 px-4 rounded"
      >
        Book Appointment
      </button>
    </div>
  );
};

export default BookAppointment;

interface Doctor {
    _id: string;
    image: string;
    name: string;
    username: string;
    speciality: string;
    experience: number;
    address: string;
    consultingTime: string;
    fee: number;
}
