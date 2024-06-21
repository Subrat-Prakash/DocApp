import React from 'react'
import InfoPage from '@/components/homepageUI/InfoPage';

const page = () => {
  return (
    <div className="bg-blue-100 flex flex-col min-h-screen">
     
      <main className="flex-grow container mx-auto mt-4 p-4">
        <section className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-700">
            Welcome to Doctor Appointment Booking App, your trusted platform for scheduling appointments with healthcare professionals. Our mission is to make healthcare accessible and convenient for everyone.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to bridge the gap between patients and doctors by providing a seamless appointment booking experience. We believe in leveraging technology to improve healthcare accessibility and ensure that everyone can get the care they need when they need it.
          </p>
        </section>

        
        
        <section>
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions, feel free to <a href="/contact" className="text-blue-600 hover:underline">contact us</a>. We are here to help!
          </p>
        </section>
      </main>
      <InfoPage />
    </div>
  );
};

export default page