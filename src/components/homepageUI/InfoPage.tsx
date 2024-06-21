import React from 'react'

const InfoPage = () => {
  return (
    
      <div className="bg-blue-100 shadow-md p-6">
        <h1 className="text-3xl font-bold mb-4 flex justify-center">Doctor Appointment Information</h1>
        <p className="text-gray-700 mb-4">
          Welcome to our doctor appointment booking app. Here you can find all the necessary information to book an appointment with a doctor easily and quickly.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Steps to Book an Appointment</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Select the type of doctor you need.</li>
          <li>Choose an available date and time.</li>
          <li>Provide your personal details and confirm the appointment.</li>
        </ol>
        <h2 className="text-2xl font-semibold mt-6 mb-2">FAQs</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">How can I cancel an appointment?</h3>
            <p className="text-gray-700">
              You can cancel your appointment by going to the My Appointments section and selecting the appointment you wish to cancel.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Is there a fee for booking an appointment?</h3>
            <p className="text-gray-700">
              No, booking an appointment through our app is completely free.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Can I reschedule an appointment?</h3>
            <p className="text-gray-700">
              Yes, you can reschedule your appointment by selecting a new date and time in the My Appointments section.
            </p>
          </div>
        </div>
      </div>
  
  );
};

export default InfoPage;

