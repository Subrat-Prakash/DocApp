"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const HomepageHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">
            DocApp
          </Link>
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
              <Link href="/login" className="hover:underline">
                Signin
              </Link>
            </li>
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
              <Link href="/login" className="hover:underline" onClick={toggleMenu}>
                Signin
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};



export default HomepageHeader;

