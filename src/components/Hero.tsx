import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <>

      <div className="flex flex-col-reverse md:flex-row items-center px-4 sm:px-8 lg:px-16 py-10 md:py-20 gap-10 md:gap-16">
        
        <div className="md:w-1/2 flex flex-col items-center md:items-start gap-6">
          <h1 className="text-center md:text-left font-bold text-[32px] sm:text-[40px] lg:text-[56px] leading-tight">
            Learn new skills online with ease
          </h1>
          <p className="text-center md:text-left text-base sm:text-lg leading-relaxed text-gray-600">
            Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button className="px-6 py-3 bg-black text-white rounded-md text-sm sm:text-base font-medium">
              Start Learning Now
            </button>
            <button className="px-6 py-3 border border-black text-black rounded-md text-sm sm:text-base font-medium">
              Explore Courses
            </button>
          </div>
        </div>

      
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            alt="Hero Image"
            src="/images/image.png"
            width={640}
            height={900}
            className="max-w-full h-auto"
          />
        </div>
      </div>


      <div className="bg-[#F7F7F7] px-4 sm:px-8 lg:px-16 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-center md:text-left font-bold text-lg sm:text-xl md:text-2xl">
            Trusted by 2000+ companies worldwide.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <Image
              src="/images/logoimg1.png"
              alt="Company 1"
              width={124}
              height={39}
              className="max-w-full h-auto"
            />
            <Image
              src="/images/logoimg2.png"
              alt="Company 2"
              width={124}
              height={39}
              className="max-w-full h-auto"
            />
            <Image
              src="/images/logoimg3.png"
              alt="Company 3"
              width={124}
              height={39}
              className="max-w-full h-auto"
            />
            <Image
              src="/images/logoimg4.png"
              alt="Company 4"
              width={124}
              height={39}
              className="max-w-full h-auto"
            />
            <Image
              src="/images/logoimg5.png"
              alt="Company 5"
              width={124}
              height={39}
              className="max-w-full h-auto"
            />
            <Image
              src="/images/logoimg6.png"
              alt="Company 6"
              width={124}
              height={39}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
