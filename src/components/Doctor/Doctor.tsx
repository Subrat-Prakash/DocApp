"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Doctor {
  _id: string;
  username: string;
  image: string;
  speciality: string;
  experience: number;
  address: string;
  consultingTime: string;
  fee: number;
}

const Doctors = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    // Fetch doctors data from the server
    axios
      .get("/api/doctors/cards")
      .then((response) => {
        console.log("API response:", response.data.data); // Log the response data
        const fetchedDoctors = response.data.data;

        if (Array.isArray(fetchedDoctors)) {
          setDoctors(fetchedDoctors);
          setFilteredDoctors(fetchedDoctors);
        } else {
          console.error("Fetched data is not an array", fetchedDoctors);
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the doctors data!", error);
      });
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  const handleSearch = () => {
    const filtered = doctors.filter(
      (doctor) =>
        doctor.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.speciality.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDoctors(filtered);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Find Your Doctor</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or specialization"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded py-2 px-4 w-full"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDoctors.map((doctor) => (
          <DoctorCard key={doctor._id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

const DoctorCard = ({ doctor }: { doctor: Doctor }) => {
  const router = useRouter();

  const handleBookAppointment = (doctorId: string) => {
    router.push(`/Appointment/${doctorId}`);
  };

  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <img
        src={doctor.image}
        alt={doctor.username}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl font-bold">{doctor.username}</h2>
      <p className="text-gray-700">{doctor.speciality}</p>
      <p className="text-gray-700">{doctor.experience} years of experience</p>
      <p className="text-gray-700">{doctor.address}</p>
      <p className="text-gray-700">Consulting Time: {doctor.consultingTime}</p>
      <p className="text-gray-700">Fee: ${doctor.fee}</p>
      <button
        onClick={() => handleBookAppointment(doctor._id)}
        className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Book Appointment
      </button>
    </div>
  );
};

export default Doctors;
