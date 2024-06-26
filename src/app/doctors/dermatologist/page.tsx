import React from 'react';

const dermatologists = [
  {
    name: 'Dr. P. N. Verma',
    specialty: 'Dermatologist',
    location: 'Hyderabad, Telangana',
    experience: '9 years',
  },
  {
    name: 'Dr. K. Mehta',
    specialty: 'Dermatologist',
    location: 'Pune, Maharashtra',
    experience: '11 years',
  },
  // Add more dummy data as needed
];

const Dermatologist = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Dermatologists</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dermatologists.map((doctor, index) => (
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
  );
};

export default Dermatologist;
