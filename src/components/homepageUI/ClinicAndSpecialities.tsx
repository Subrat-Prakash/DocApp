"use client"
import React from 'react';
import Slider from 'react-slick';
import { FaCheckDouble } from 'react-icons/fa';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import Image from 'next/image';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import DoctorHero from '@/assets/img/DoctorHero.jpg';

const specialities = [
  { name: 'Urology', image: DoctorHero },  // Replace with actual image paths
  { name: 'Neurology', image: DoctorHero },
  { name: 'Orthopedic', image: DoctorHero },
  { name: 'Cardiologist', image: DoctorHero },
  { name: 'Dentist', image: DoctorHero },
];

const SampleNextArrow = (props: { className: any; style: any; onClick: any; }) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-gray-800`}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}
    >
      <MdKeyboardArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500 hidden md:block" size={30}/>
    </div>
  );
}

const SamplePrevArrow = (props: { className: any; style: any; onClick: any; }) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-gray-800`}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    >
      <MdKeyboardArrowLeft className="absolute right-0 top-1/2 transform -translate-y-1/2 text-black-1000 hidden md:block" size={30} />
    </div>
  );
}

const ClinicAndSpecialities = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
    prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="bg-blue-100 py-12 px-6 md:px-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Clinic and Specialities</h1>
        <p className="text-lg">Find experienced doctors across all specialties</p>
      </div>
      <div className="row justify-content-center ">
        <div className="col-md-9 space-x-4 bg-red-500">
          <Slider {...settings} className="specialities-slider d-flex justify-content-center align-items-center gap-5">
            {specialities.map((speciality, index) => (
              <div key={index} className="speicality-item text-center bg-white shadow-md rounded-lg p-6">
                <div className="speicality-img mb-4 relative">
                  <Image
                    src={speciality.image}
                    alt={speciality.name}
                    width={150}
                    height={150}
                    className="img-fluid rounded-full"
                  />
                  <span className="absolute top-0 right-0 text-green-500">
                    <FaCheckDouble />
                  </span>
                </div>
                <p className="text-lg font-semibold">{speciality.name}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ClinicAndSpecialities;
