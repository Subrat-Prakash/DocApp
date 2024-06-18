import React from 'react'

const services = [
  {
    title: "General Consultation",
    description: "Schedule a general consultation with our experienced doctors for any health concerns.",
    imageUrl: "/images/general-consultation.jpg",
  },
  {
    title: "Pediatrics",
    description: "Specialized medical care for infants, children, and adolescents.",
    imageUrl: "/images/pediatrics.jpg",
  },
  {
    title: "Dermatology",
    description: "Comprehensive care for skin conditions, from acne to skin cancer.",
    imageUrl: "/images/dermatology.jpg",
  },
  {
    title: "Cardiology",
    description: "Expert care for heart conditions, including diagnostics and treatment.",
    imageUrl: "/images/cardiology.jpg",
  },
  {
    title: "Orthopedics",
    description: "Treatment for musculoskeletal issues, including bones, joints, and muscles.",
    imageUrl: "/images/orthopedics.jpg",
  },
];

const ServicesPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-8">Our Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
