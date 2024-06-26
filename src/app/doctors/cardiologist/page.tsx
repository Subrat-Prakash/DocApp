import React from 'react';

const cardiologists = [
  {
    name: 'Dr. A. K. Singh',
    specialty: 'Cardiologist',
    location: 'Mumbai, Maharashtra',
    experience: '10 years',
  },
  {
    name: 'Dr. R. Sharma',
    specialty: 'Cardiologist',
    location: 'Delhi, Delhi',
    experience: '8 years',
  },
  {
    name: 'Dr. S. Gupta',
    specialty: 'Cardiologist',
    location: 'Bangalore, Karnataka',
    experience: '15 years',
  },
  {
    name: 'Dr. L. Kumar',
    specialty: 'Cardiologist',
    location: 'Chennai, Tamil Nadu',
    experience: '12 years',
  },
];

const Cardiologist = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Cardiologists</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardiologists.map((doctor, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">{doctor.name}</h2>
            <p className="text-lg mb-1">Specialty: {doctor.specialty}</p>
            <p className="text-lg mb-1">Location: {doctor.location}</p>
            <p className="text-lg mb-1">Experience: {doctor.experience}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Book Appointment</button>
          </div>
        ))}
      </div>
    </div>
  </>
  );
};

export default Cardiologist;
