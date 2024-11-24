"use client"
import React from 'react';
import Image from 'next/image';

const Exploring = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16 py-10">

      <div className="text-center max-w-4xl mx-auto">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
          Explore Courses By Category
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

  {[
 {
         title: 'Design & Development',
            description: '50+ Courses Available',
            img: '/images/courseimg1.png',
          },
          {
            title: 'Marketing',
            description: '50+ Courses Available',
            img: '/images/courseimg2.png',
          },
          {
            title: 'Development',
            description: '50+ Courses Available',
            img: '/images/courseimg3.png',
          },
          {
            title: 'Communication',
            description: '50+ Courses Available',
            img: '/images/courseimg4.png',
          },
          {
            title: 'Digital Marketing',
            description: '50+ Courses Available',
            img: '/images/courseimg5.png',
          },
          {
            title: 'Self Development',
            description: '50+ Courses Available',
            img: '/images/courseimg6.png',
          },
          {
            title: 'Business',
            description: '50+ Courses Available',
            img: '/images/courseimg7.png',
          },
          {
            title: 'Finance',
            description: '50+ Courses Available',
            img: '/images/courseimg8.png',
          },
          {
            title: 'Consulting',
            description: '50+ Courses Available',
            img: '/images/courseimg9.png',
          },
        ].map((course, index) => (
          <div
            key={index}
            className="flex items-center p-4 bg-[#F7F7F7] rounded-lg shadow-sm transition-transform transform hover:scale-105"
          >
            <div className="flex-shrink-0 w-16 h-16 bg-white flex justify-center items-center rounded-md shadow">
    <Image src={course.img} alt={course.title} width={32} height={32} />
            </div>
            <div className="ml-4">
              <h2 className="font-semibold text-lg">{course.title}</h2>
              <p className="text-sm text-gray-600">{course.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg shadow text-base font-medium hover:bg-gray-100">
          View All Courses
        </button>
           </div>
    </div>
  );
};

export default Exploring;
