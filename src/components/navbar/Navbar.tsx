"use client";

import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';
import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Function to handle navigation and close the menu
  const handleNavigation = (path: string) => {
    if (pathname === '/contactus') {
      router.push('/'); // Redirect to home page
    } else {
      router.push(`#${path}`); // Normal navigation for other pages
    }
    setIsMenuOpen(false); // Close the menu after navigation
  };

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
        <button onClick={() => handleNavigation('products')} className="text-white hover:text-gray-300 transition duration-300">Products</button>
        <button onClick={() => handleNavigation('howitworks')} className="text-white hover:text-gray-300 transition duration-300">How it Works</button>
        <button onClick={() => handleNavigation('services')} className="text-white hover:text-gray-300 transition duration-300">Services</button>
        <button onClick={() => handleNavigation('faqs')} className="text-white hover:text-gray-300 transition duration-300">FAQs</button>
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
        <div className="flex flex-col items-start justify-start flex-grow mt-12 p-6">
          <Image src="/flashlogo.png" alt="logo" width={32} height={32} className="mb-6" />
          <div className="text-white">
            <button onClick={() => handleNavigation('products')} className="block py-2 hover:text-gray-300 transition duration-300">Products</button>
            <button onClick={() => handleNavigation('howitworks')} className="block py-2 hover:text-gray-300 transition duration-300">How it Works</button>
            <button onClick={() => handleNavigation('services')} className="block py-2 hover:text-gray-300 transition duration-300">Services</button>
            <button onClick={() => handleNavigation('faqs')} className="block py-2 hover:text-gray-300 transition duration-300">FAQs</button>
          </div>

          {/* Contact Us Button (Mobile) */}
          <div className="mt-8 mb-8">
            <Link href="/contactus">
              <button onClick={() => handleNavigation('contactus')} className="bg-[#1c1c78] text-white font-semibold py-2 px-4 rounded hover:bg-[#000044] hover:text-gray-300 transition duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
