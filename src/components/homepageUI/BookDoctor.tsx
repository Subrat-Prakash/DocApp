import React from 'react'
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import FindDoc from '@/assets/img/FindDoc.png';
import Book from '@/assets/img/Book.png';
import View from '@/assets/img/View.png';



const steps = [
  {
    title: 'FIND A DOCTOR',
    description: 'With more than 1000+ doctors and on mission to provide best care Health Care Service',
    image: FindDoc, // Add the appropriate path to your image
  },
  {
    title: 'VIEW DOCTOR',
    description: 'Share your health concern here and we shall assign you a top doctor across the North East',
    image: View, // Add the appropriate path to your image
  },
  {
    title: 'BOOK A VISIT',
    description: 'Book your time slot with doctor from your comfort zone',
    image: Book, // Add the appropriate path to your image
  },
];

const BookDoctor = () => {
  return (
    <div className="bg-blue-100 py-12 px-6 md:px-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Discover the Online Appointment!</h1>
        <p className="text-lg">A step-by-step guide to build an on-demand appointment for patients</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 relative w-full md:w-1/3">
            <Image
              src={step.image}
              alt={step.title}
              width={150}
              height={150}
              className="object-cover mb-4 rounded-full"
            />
            <h2 className="text-2xl font-semibold mb-2">{step.title}</h2>
            <p className="text-center">{step.description}</p>
            {index < steps.length - 1 && (
              <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500 hidden md:block" size={24} />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          Find Doctor <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};




export default BookDoctor