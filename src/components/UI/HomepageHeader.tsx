"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';


interface User {
  username: string;
  userType: 'patient' | 'doctor';
}

const HomepageHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter(); // Correct usage of router

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await axios.get('/api/users/me');
        if (res.status === 200) {
          setUser(res.data.data);
        } else {
          toast.error('Failed to fetch user details');
        }
      } catch (error: any) {
        console.error('Error fetching user details:', error.message);
        toast.error('Failed to fetch user details');
      }
    };

    fetchUserDetails();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = async () => {
    try {
      const res = await axios.get('/api/users/logout');
      if (res.status === 200) {
        toast.success('Logout successful');
        router.push('/home');
      } else {
        toast.error('Logout failed');
      }
    } catch (error: any) {
      console.error('Error during logout:', error.message);
      toast.error('Logout failed');
    }
  };

  const handleLogoutClick = () => {
    logout();
    toggleMenu();
  };

  const renderProfileLink = () => {
    if (user) {
      const profileLink = user.userType === 'doctor' ? '/DoctorProfile' : '/PatientProfile';
      return (
        <Link href={profileLink} className="hover:underline">
          {user.username}
        </Link>
      );
    }
    return null;
  };

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">DocApp</Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/OurServices" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/appointment" className="hover:underline">
                Appointments
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              {user ? (
                <>{renderProfileLink()}</>
              ) : (
                <Link href="/login" className="hover:underline">
                  Signin
                </Link>
              )}
            </li>
            {user && (
              <li>
                <button onClick={handleLogoutClick} className="hover:underline">
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col space-y-4 mt-4">
            <li>
              <Link href="/" className="hover:underline" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline" onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/OurServices" className="hover:underline" onClick={toggleMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/appointment" className="hover:underline" onClick={toggleMenu}>
                Appointments
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <li>
              {user ? (
                <>
                  <Link href={`/${user.userType === 'doctor' ? '/DoctorProfile' : '/PatientProfile'}`} className="hover:underline" onClick={toggleMenu}>
                    {user.username}
                  </Link>
                  <button onClick={handleLogoutClick} className="hover:underline">
                    Logout
                  </button>
                </>
              ) : (
                <Link href="/login" className="hover:underline" onClick={toggleMenu}>
                  Signin
                </Link>
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default HomepageHeader;
