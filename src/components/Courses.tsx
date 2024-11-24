import Image from 'next/image'
import React from 'react'

const Courses = () => {
  return (
    <>
      <div className="w-full px-4 sm:px-8 lg:px-16 py-10">
       
        <div className="text-center mb-12">
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">Courses</h1>
          <p className="text-lg sm:text-xl mt-4">Your Ultimate Guide to learning</p>
        </div>
  
        <div className="flex justify-center gap-8 mb-12">
          <div className="w-[87px] h-10 px-4 py-2 underline cursor-pointer">
            <h1 className="text-base">Popular</h1>
          </div>
          <div className="w-[87px] h-10 px-4 py-2 cursor-pointer">
            <h1 className="text-base">Recommended</h1>
          </div>
          <div className="w-[87px] h-10 px-4 py-2 cursor-pointer">
            <h1 className="text-base">Best Price</h1>
          </div>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
         
          <div className="w-full bg-white shadow-md rounded-lg">
            <Image src="/images/course1.png" alt="course image" width={416} height={300} className="rounded-t-lg"/>
            <div className="bg-[#F7F7F7] p-4">
              <p className="font-semibold text-sm">Design</p>
              <h3 className="font-bold text-2xl leading-tight">UX/UI Design 201</h3>
              <p className="text-base mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              <div className="flex justify-between items-center mt-4">
                <button className="h-10 rounded-[5px] border-2 border-black px-5 py-2">Enroll Now</button>
                <p className="w-[77px] h-10 rounded-[5px] py-2 px-5 text-base font-medium">$400</p>
              </div>
            </div>
          </div>

      
          <div className="w-full bg-white shadow-md rounded-lg">
            <Image src="/images/course2.png" alt="course image" width={416} height={300} className="rounded-t-lg"/>
            <div className="bg-[#F7F7F7] p-4">
              <p className="font-semibold text-sm">Programming</p>
              <h3 className="font-bold text-2xl leading-tight">Introduction to Python</h3>
              <p className="text-base mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              <div className="flex justify-between items-center mt-4">
                <button className="h-10 rounded-[5px] border-2 border-black px-5 py-2">Enroll Now</button>
                <p className="w-[77px] h-10 rounded-[5px] py-2 px-5 text-base font-medium">$400</p>
              </div>
            </div>
          </div>

          
          <div className="w-full bg-white shadow-md rounded-lg">
            <Image src="/images/course3.png" alt="course image" width={416} height={300} className="rounded-t-lg"/>
            <div className="bg-[#F7F7F7] p-4">
              <p className="font-semibold text-sm">Business</p>
              <h3 className="font-bold text-2xl leading-tight">Data Analysis for Beginners</h3>
              <p className="text-base mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              <div className="flex justify-between items-center mt-4">
                <button className="h-10 rounded-[5px] border-2 border-black px-5 py-2">Enroll Now</button>
                <p className="w-[77px] h-10 rounded-[5px] py-2 px-5 text-base font-medium">$400</p>
              </div>
            </div>
          </div>

       
          <div className="w-full bg-white shadow-md rounded-lg">
            <Image src="/images/course4.png" alt="course image" width={416} height={300} className="rounded-t-lg"/>
            <div className="bg-[#F7F7F7] p-4">
              <p className="font-semibold text-sm">Art</p>
              <h3 className="font-bold text-2xl leading-tight">Art Specialization</h3>
              <p className="text-base mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              <div className="flex justify-between items-center mt-4">
                <button className="h-10 rounded-[5px] border-2 border-black px-5 py-2">Enroll Now</button>
                <p className="w-[77px] h-10 rounded-[5px] py-2 px-5 text-base font-medium">$400</p>
              </div>
            </div>
          </div>

          
          <div className="w-full bg-white shadow-md rounded-lg">
            <Image src="/images/course5.png" alt="course image" width={416} height={300} className="rounded-t-lg"/>
            <div className="bg-[#F7F7F7] p-4">
              <p className="font-semibold text-sm">Law</p>
              <h3 className="font-bold text-2xl leading-tight">Rule of Law</h3>
              <p className="text-base mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              <div className="flex justify-between items-center mt-4">
                <button className="h-10 rounded-[5px] border-2 border-black px-5 py-2">Enroll Now</button>
                <p className="w-[77px] h-10 rounded-[5px] py-2 px-5 text-base font-medium">$400</p>
              </div>
            </div>
          </div>

      
          <div className="w-full bg-white shadow-md rounded-lg">
            <Image src="/images/course1.png" alt="course image" width={416} height={300} className="rounded-t-lg"/>
            <div className="bg-[#F7F7F7] p-4">
              <p className="font-semibold text-sm">Tech</p>
              <h3 className="font-bold text-2xl leading-tight">Introduction to Webflow</h3>
              <p className="text-base mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
              <div className="flex justify-between items-center mt-4">
                <button className="h-10 rounded-[5px] border-2 border-black px-5 py-2">Enroll Now</button>
                <p className="w-[77px] h-10 rounded-[5px] py-2 px-5 text-base font-medium">$400</p>
              </div>
            </div>
          </div>
        </div>

       
        <div className="flex justify-center mt-12">
          <button className="w-[200px] h-12 px-6 py-2 text-base font-medium border border-black rounded-[5px]">
            View All Courses
          </button>
        </div>
      </div>
    </>
  )
}

export default Courses
