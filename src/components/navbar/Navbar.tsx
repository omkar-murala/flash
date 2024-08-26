"use client";

import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
// import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#000033] p-4 md:p-6 flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center mr-6 md:ml-6">
        <Link href="/" passHref>
          <div className="flex items-center cursor-pointer">
            <Image src="/flashlogo.png" alt="logo" width={32} height={32} className="mr-2" />
            <span className="text-white text-lg md:text-xl font-bold">Flash</span>
          </div>
        </Link>
      </div>

      {/* Desktop Menu Links */}
      <div className="hidden md:flex flex-grow justify-center space-x-8">
        <Link href="#products" className="text-white hover:text-gray-300 transition duration-300">Products</Link>
        <Link  href="#howitworks" className="text-white hover:text-gray-300 transition duration-300">How it Works</Link>
        <Link href="#services" className="text-white hover:text-gray-300 transition duration-300">Services</Link>
        <Link href="#faqs" className="text-white hover:text-gray-300 transition duration-300">FAQs</Link>
      </div>

      {/* Contact Us Button (Desktop) */}
      <div className="hidden md:block">
        <Link href="/contactus">
          <button className="bg-[#1c1c78] text-white font-semibold py-2 px-4 rounded hover:bg-[#000044] hover:text-gray-300 transition duration-300">
            Contact Us
          </button>
        </Link>
      </div>

      {/* Hamburger Menu Icon (Mobile) */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white text-2xl"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex flex-col transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} z-50`}>
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="text-white text-3xl absolute top-4 right-4"
        >
          <FaTimes />
        </button>
        
        {/* Mobile Menu Content */}
        <div className="flex flex-col items-center justify-center flex-grow mt-12">
          <Image src="/flashlogo.png" alt="logo" width={32} height={32} className="mb-6" />
          <div className="text-white text-center">
            <Link href="#products" className="block py-2 hover:text-gray-300 transition duration-300">Products</Link>
            <Link href="#howitworks" className="block py-2 hover:text-gray-300 transition duration-300">How it Works</Link>
            <Link href="#services" className="block py-2 hover:text-gray-300 transition duration-300">Services</Link>
            <Link href="#faqs" className="block py-2 hover:text-gray-300 transition duration-300">FAQs</Link>
          </div>
        </div>
        
        {/* Contact Us Button (Mobile) */}
        <div className="mb-8">
          <Link href="/contactus">
            <button className="bg-[#1c1c78] text-white font-semibold py-2 px-4 rounded hover:bg-[#000044] hover:text-gray-300 transition duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
