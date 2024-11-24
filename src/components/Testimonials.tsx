"use client"
import React from 'react';
import Image from 'next/image';
import { IoIosStar } from "react-icons/io";
import { CgBorderStyleDotted } from "react-icons/cg";
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";

const Testimonials = () => {
  return (
    <div className="bg-[#F7F7F7] py-28 px-4 sm:px-16 gap-20">

      <div className="w-full max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight">Customer Testimonials</h1>
        <p className="text-base sm:text-lg leading-[27px] mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16">

        <div className="w-full sm:w-[362.67px] md:w-[362.67px] lg:w-[362.67px] bg-white p-8 border border-black rounded-lg">
          <div className="flex gap-1 mb-4">
            <IoIosStar className="text-yellow-500" />
            <IoIosStar className="text-yellow-500" />
            <IoIosStar className="text-yellow-500" />
            <IoIosStar className="text-yellow-500" />
            <IoIosStar className="text-yellow-500" />
          </div>
          <p className="text-lg leading-[27px] mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
          <div className="flex items-center gap-4">
            <Image src={'/images/testimonial.png'} alt='testimonial1' width={56} height={56} className='rounded-full' />
            <div>
              <h5 className='text-base font-semibold'>James Nduku</h5>
              <p className='text-base'>Software Developer</p>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[362.67px] md:w-[362.67px] lg:w-[362.67px] bg-white p-8 border border-black rounded-lg">
          <div className="flex gap-1 mb-4">
            <IoIosStar className="text-yellow-500" />
            <IoIosStar className="text-yellow-500" />
            <IoIosStar className="text-yellow-500" />
            <IoIosStar className="text-yellow-500" />
            <IoIosStar className="text-yellow-500" />
          </div>
          <p className="text-lg leading-[27px] mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
          <div className="flex items-center gap-4">
            <Image src={'/images/testimonial2.png'} alt='testimonial2' width={56} height={56} className='rounded-full' />
            <div>
              <h5 className='text-base font-semibold'>Erick Kipkemboi</h5>
              <p className='text-base'>Scrum Master</p>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[362.67px] md:w-[362.67px] lg:w-[362.67px] bg-white p-8 border border-black rounded-lg">
          <div className="flex gap-1 mb-4">
            <IoIosStar />
            <IoIosStar  />
            <IoIosStar  />
            <IoIosStar  />
            <IoIosStar  />
          </div>
          <p className="text-lg leading-[27px] mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare</p>
          <div className="flex items-center gap-4">
            <Image src={'/images/testimonial3.png'} alt='testimonial3' width={56} height={56} className='rounded-full' />
            <div>
              <h5 className='text-base font-semibold'>Stephen Kerubo</h5>
              <p className='text-base'>UI/UX Designer</p>
            </div>
          </div>
        </div>

      </div>

      <div className="w-full flex justify-center gap-3 mt-8">
        <CgBorderStyleDotted className="w-8 h-8 text-gray-500" />
        <div className="flex gap-2">
          <div className="rounded-full border border-black h-12 w-12 flex justify-center items-center cursor-pointer">
            <IoArrowBack className="w-6 h-6 text-black" />
          </div>
          <div className="rounded-full border border-black h-12 w-12 flex justify-center items-center cursor-pointer">
            <IoArrowForwardOutline className="w-6 h-6 text-black" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Testimonials;
