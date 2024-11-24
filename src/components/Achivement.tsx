import React from 'react';

const Achivement = () => {
  return (
    <>
      <div className="py-10 px-4 sm:px-8 lg:px-16 bg-white">
   
        <div className="text-center">
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Our Achievements
          </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
          <p className="mt-2 text-gray-600 text-base sm:text-lg">
            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        
          <div className="bg-[#F7F7F7] py-8 px-4 rounded-lg shadow-sm">
            <h1 className="font-bold text-3xl lg:text-4xl text-black">+200</h1>
            <p className="mt-2 text-gray-600 text-sm lg:text-base">Courses</p>
          </div>
          <div className="bg-[#F7F7F7] py-8 px-4 rounded-lg shadow-sm">
            <h1 className="font-bold text-3xl lg:text-4xl text-black">50K</h1>
            <p className="mt-2 text-gray-600 text-sm lg:text-base">Mentors</p>
          </div>
          <div className="bg-[#F7F7F7] py-8 px-4 rounded-lg shadow-sm">
            <h1 className="font-bold text-3xl lg:text-4xl text-black">370K</h1>
            <p className="mt-2 text-gray-600 text-sm lg:text-base">Students</p>
          </div>
          <div className="bg-[#F7F7F7] py-8 px-4 rounded-lg shadow-sm">
            <h1 className="font-bold text-3xl lg:text-4xl text-black">100+</h1>
            <p className="mt-2 text-gray-600 text-sm lg:text-base">Recognition</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achivement;
