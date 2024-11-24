import Image from 'next/image'
import React from 'react'
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { FaDribbble } from "react-icons/fa6";

const Team = () => {
  return (
    <>
      <div className="h-auto px-4 sm:px-16 py-28 bg-[#F7F7F7]">

        <div className="w-full max-w-4xl mx-auto text-center mb-12">
          <h1 className='font-bold text-3xl sm:text-5xl md:text-6xl leading-tight'>Our Team</h1><br />
          <p className='text-base sm:text-lg mx-auto leading-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        
        <div className="flex flex-wrap justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16">

         
          <div className="w-[100%] sm:w-[320px] md:w-[350px] lg:w-[394.67px] h-[auto] gap-6 text-center">
            <Image src={'/images/team1.png'} alt='team1' width={80} height={80} className="mx-auto" /><br />
            <h4 className='font-semibold text-xl'>James Nduku</h4>
            <p className="text-lg">Marketing Coordinator</p><br />
            <div className="w-[100px] h-6 gap-[14px] flex justify-center mx-auto">
              <IoLogoLinkedin className="text-2xl" />
              <IoLogoTwitter className="text-2xl" />
              <FaDribbble className="text-2xl" />
            </div>
          </div>

          <div className="w-[100%] sm:w-[320px] md:w-[350px] lg:w-[394.67px] h-[auto] gap-6 text-center">
            <Image src={'/images/team2.png'} alt='team2' width={80} height={80} className="mx-auto" /><br />
            <h4 className='font-semibold text-xl'>Joseph Munyambu</h4>
            <p className="text-lg">Nursing Assistant</p><br />
            <div className="w-[100px] h-6 gap-[14px] flex justify-center mx-auto">
              <IoLogoLinkedin className="text-2xl" />
              <IoLogoTwitter className="text-2xl" />
              <FaDribbble className="text-2xl" />
            </div>
          </div>

            <div className="w-[100%] sm:w-[320px] md:w-[350px] lg:w-[394.67px] h-[auto] gap-6 text-center">
            <Image src={'/images/team3.png'} alt='team3' width={80} height={80} className="mx-auto" /><br />
            <h4 className='font-semibold text-xl'>Joseph Ngumbau</h4>
            <p className="text-lg">Medical Assistant</p><br />
            <div className="w-[100px] h-6 gap-[14px] flex justify-center mx-auto">
              <IoLogoLinkedin className="text-2xl" />
              <IoLogoTwitter className="text-2xl" />
              <FaDribbble className="text-2xl" />
            </div>
          </div>

     
          <div className="w-[100%] sm:w-[320px] md:w-[350px] lg:w-[394.67px] h-[auto] gap-6 text-center">
            <Image src={'/images/team4.png'} alt='team4' width={80} height={80} className="mx-auto" /><br />
            <h4 className='font-semibold text-xl'>Erick Kipkemboi</h4>
            <p className="text-lg">Web Designer</p><br />
            <div className="w-[100px] h-6 gap-[14px] flex justify-center mx-auto">
              <IoLogoLinkedin className="text-2xl" />
              <IoLogoTwitter className="text-2xl" />
              <FaDribbble className="text-2xl" />
            </div>
          </div>

        
          <div className="w-[100%] sm:w-[320px] md:w-[350px] lg:w-[394.67px] h-[auto] gap-6 text-center">
            <Image src={'/images/team5.png'} alt='team5' width={80} height={80} className="mx-auto" /><br />
            <h4 className='font-semibold text-xl'>Stephen Kerubo</h4>
            <p className="text-lg">Nurse</p><br />
            <div className="w-[100px] h-6 gap-[14px] flex justify-center mx-auto">
              <IoLogoLinkedin className="text-2xl" />
              <IoLogoTwitter className="text-2xl" />
              <FaDribbble className="text-2xl" />
            </div>
          </div>

          <div className="w-[100%] sm:w-[320px] md:w-[350px] lg:w-[394.67px] h-[auto] gap-6 text-center">
            <Image src={'/images/team6.png'} alt='team6' width={80} height={80} className="mx-auto" /><br />
            <h4 className='font-semibold text-xl'>John Leboo</h4>
            <p className="text-lg">Dog Trainer</p><br />
            <div className="w-[100px] h-6 gap-[14px] flex justify-center mx-auto">
              <IoLogoLinkedin className="text-2xl" />
              <IoLogoTwitter className="text-2xl" />
              <FaDribbble className="text-2xl" />
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default Team;






















