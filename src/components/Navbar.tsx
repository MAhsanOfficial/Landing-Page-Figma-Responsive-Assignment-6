import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#F7F7F7] text-black shadow-md">

      <div className="max-w-[1262px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between h-auto md:h-[54px] py-2 md:py-0">
     
        <ul className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm">
          <li>Phone Number: 956 742 455 678</li>
          <li className="hidden md:block">│</li>
          <li>Email: info@ddsgnr.com</li>
        </ul>

      
        <ul className="flex items-center gap-4 mt-2 md:mt-0">
          <li className="text-lg cursor-pointer hover:text-gray-600">
            <FaFacebookF />
          </li>
          <li className="text-lg cursor-pointer hover:text-gray-600">
            <FaInstagram />
          </li>
          <li className="text-lg cursor-pointer hover:text-gray-600">
            <FaTwitter />
          </li>
          <li className="text-lg cursor-pointer hover:text-gray-600">
            <FaLinkedin />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
