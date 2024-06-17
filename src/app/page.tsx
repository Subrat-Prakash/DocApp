import HomePage from "./(homepageLayout)/home/page";
import HomePageLayout from './(homepageLayout)/layout';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DocApp",
  description: "Doctor Appointment Booking app",
};
export default function Home() {

  return (
      <HomePageLayout>
        <HomePage />
      </HomePageLayout>
  )
}
