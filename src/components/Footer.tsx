"use client"
import React from 'react';
import Image from 'next/image';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-[#FFFFFF] py-10 px-4 sm:px-8 md:px-16 lg:px-20">
        <div className="max-w-screen-xl mx-auto">
     
          <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-start gap-6 mb-12">
            <div className="w-full sm:w-[500px]">
              <h4 className="text-lg font-semibold mb-2">Subscribe to our newsletter</h4>
              <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 w-full sm:w-[400px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="border rounded-[5px] p-3 w-full sm:w-[265px] h-12 mb-2 sm:mb-0"
              />
              <button className="w-full sm:w-[119px] h-12 border rounded-[5px] bg-black text-white">
                Subscribe
              </button>
            </div>
          </div>

          <p className="text-xs text-center sm:text-right sm:ml-[50px]">
            By subscribing you agree to with our Privacy Policy
          </p>

         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
          
            <div className="flex items-center">
              <Image
                alt="logo"
                src="/images/assignment-figma-logo.png"
                width={35.76}
                height={36.6}
              />
              <h3 className="font-bold text-[25.07px] ml-3">Ddsgnr</h3>
            </div>

            <div className="flex flex-col gap-4 cursor-pointer">
              <h3 className="font-semibold text-base">Courses</h3>
              <p className="text-sm">Business</p>
              <p className="text-sm">Development</p>
              <p className="text-sm">Technology</p>
              <p className="text-sm">Design</p>
              <p className="text-sm">Programming</p>
            </div>

           
            <div className="flex flex-col gap-4 cursor-pointer">
              <h3 className="font-semibold text-base">Resources</h3>
              <p className="text-sm">Career</p>
              <p className="text-sm">Resume</p>
              <p className="text-sm">Learning</p>
              <p className="text-sm">Interview Preparation</p>
              <p className="text-sm">Jobs</p>
            </div>

          
            <div className="flex flex-col gap-4 cursor-pointer">
              <h3 className="font-semibold text-base">About Us</h3>
              <p className="text-sm">Contact</p>
              <p className="text-sm">Help/Support</p>
              <p className="text-sm">FAQ</p>
              <p className="text-sm">Terms and Conditions</p>
              <p className="text-sm">Partners</p>
            </div>
          </div>

        
          <Image
            src="/images/lineimg.png"
            alt="divider"
            width={1120}
            height={1}
            className="w-full"
          />

        
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 sm:gap-8 mt-6">
            <div className="text-center sm:text-left">
              <h5 className="text-sm">2023 Ddsgnr. All rights reserved.</h5>
            </div>

            <div className="flex gap-4 justify-center sm:justify-end">
              <p className="text-sm">Privacy Policy</p>
              <p className="text-sm">Terms of Service</p>
              <p className="text-sm">Cookies Settings</p>
            </div>
          </div>

    
          <div className="flex justify-center sm:justify-end gap-4 mt-6">
            <FaFacebookF className="text-xl cursor-pointer" />
            <FaInstagram className="text-xl cursor-pointer" />
            <FaTwitter className="text-xl cursor-pointer" />
            <FaLinkedin className="text-xl cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
