"use client"
import React, { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Doctor } from '@/components/Doctype/Doctype'; // Adjust the path as necessary
import DoctorHero from '@/assets/img/DoctorHero.jpg';


const doctors: Doctor[] = [
  { name: 'Cardiologist', path: '/doctors/cardiologist' },
  { name: 'Dermatologist', path: '/doctors/dermatologist' },
  { name: 'Neurologist', path: '/doctors/neurologist' },
  { name: 'Dentist', path: '/doctors/dentist' },
  { name: 'Dermetologist', path: '/doctors/dermetologist' },
  { name: 'Surgeon', path: '/doctors/surgeon' },

  // Add more doctors as needed
];

const HeroSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [suggestions, setSuggestions] = useState<Doctor[]>([]);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filteredSuggestions = doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col-reverse md:flex-row items-center bg-blue-100 p-8">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4">Your Health, Our Responsibility</h1>
        <h2 className="text-2xl mb-2">Book Your Doctors Appointment Easily</h2>
        <p className="text-lg mb-4">Find the best doctors nearest you</p>
        <div className="relative flex items-center justify-center md:justify-start">
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search nearest Doctor specialization"
            className="w-full md:w-2/3 px-4 py-2 border rounded-l-md"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md">Search</button>
          {suggestions.length > 0 && (
            <ul className="absolute left-0 right-0 z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion.path)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  {suggestion.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <Image
          src={DoctorHero}
          alt="Doctor"
          width={700}
          height={700}
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;

