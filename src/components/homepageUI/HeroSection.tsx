import React from 'react'

import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="bg-blue-50 py-20 min-h-screen">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Your Health, Our Responsibility
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Book Your Doctor's Appointment Easily
        </p>
        <Link href="/book-appointment" className="bg-blue-600 text-white py-3 px-6 rounded-full text-lg hover:bg-blue-700 transition duration-300">
          Book Appointment
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
