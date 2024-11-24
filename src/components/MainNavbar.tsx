import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const MainNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-[72px] border-b border-[#676767] bg-[#F7F7F7] px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image
          alt="logo"
          src={'/images/assignment-figma-logo.png'}
          height={30}
          width={30}
          className="cursor-pointer"
        />
        <span className="font-bold text-lg md:text-xl cursor-pointer">Ddsgnr</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 items-center">
        <ul className="flex gap-6 text-sm md:text-base items-center">
          <li>
            <Link href={'#'}>Home</Link>
          </li>
          <li>
            <Link href={'#'}>Courses</Link>
          </li>
          <li>
            <Link href={'#'}>Services</Link>
          </li>
          <li>
            <Link href={'#'}>Achievement</Link>
          </li>
          <li>
            <Link href={'#'}>About Us</Link>
          </li>
          <li>
            <Link href={'#'}>Testimonial</Link>
          </li>
        </ul>
        <div className="flex gap-4">
          <button className="px-4 py-2 border border-black text-black rounded-md">Login</button>
          <button className="px-4 py-2 bg-black text-white rounded-md">Sign Up</button>
        </div>
      </nav>
      <div className="md:hidden">
        <button
          className="text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-[72px] left-0 w-full bg-[#F7F7F7] shadow-md flex flex-col items-center py-4">
          <ul className="flex flex-col gap-4 text-sm items-center">
            <li>
              <Link href={'#'}>Home</Link>
            </li>
            <li>
              <Link href={'#'}>Courses</Link>
            </li>
            <li>
       <Link href={'#'}>Services</Link>
</li>
            <li>
              <Link href={'#'}>Achievement</Link>
            </li>
            <li>
              <Link href={'#'}>About Us</Link>
            </li>
            <li>
              <Link href={'#'}>Testimonial</Link>
            </li>
          </ul>
          <div className="flex flex-col gap-4 mt-6">
            <button className="px-6 py-2 border border-black text-black rounded-md">
              Login
            </button>
            <button className="px-6 py-2 bg-black text-white rounded-md">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainNavbar;



































