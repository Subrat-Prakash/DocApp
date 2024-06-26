import React from 'react'
import HeroSection from '@/components/homepageUI/HeroSection';
import InfoPage from '@/components/homepageUI/InfoPage';
import Service from '@/components/homepageUI/Service';
import ClinicAndSpecialities from '@/components/homepageUI/ClinicAndSpecialities'; 
import BookDoctor from '@/components/homepageUI/BookDoctor';
import Blog from '@/components/homepageUI/Blog';
import Available from '@/components/homepageUI/Available';
import OurDoctors from '@/components/homepageUI/OurDoctors';
import Testimonial from '@/components/homepageUI/Testimonial';
import Gallery from '@/components/homepageUI/Gallery';




const page = () => {
  return (
    <>
          
            <HeroSection />
            <BookDoctor />
            <ClinicAndSpecialities />
            <InfoPage />

          
           
    </>
  )
}

export default page