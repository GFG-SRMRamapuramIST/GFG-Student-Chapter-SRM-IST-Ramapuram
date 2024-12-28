import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { courses } from '../../Utility/constants';

const GFGCourses = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % courses.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const getOrder = (index) => {
    const diff = (index - currentIndex + courses.length) % courses.length;
    return diff === 0 ? 1 : diff === 1 ? 2 : 0;
  };

  return (
    <div className="flex justify-center items-stretch flex-col md:flex-row w-full m-0">
      <div className="flex justify-center items-center w-full md:w-1/2 bg-hover-gray px-8 py-16 min-h-[600px]">
        <div className="max-w-md space-y-8">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Why Choose GeeksforGeeks?</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Industry-Ready Content</h3>
                <p className="text-gray-600">Curated by industry experts with real-world applications</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Practice-Oriented Learning</h3>
                <p className="text-gray-600">Hands-on coding practice with 10,000+ problems</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Learn at Your Pace</h3>
                <p className="text-gray-600">Flexible learning schedule with lifetime access</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-[#E6F9E6] px-8 py-16 min-h-[600px]">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Our Impact</h2>
          <div className="flex justify-center space-x-12">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">2M+</p>
              <p className="text-sm text-gray-600">Students</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">500+</p>
              <p className="text-sm text-gray-600">Courses</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">98%</p>
              <p className="text-sm text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>

        <div className="relative w-full h-52 mb-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`absolute top-0 left-1/2 transition-all duration-500 cursor-pointer bg-white rounded-lg
                ${getOrder(index) === 0 ? 'w-48 -translate-x-full opacity-60 scale-85' :
                  getOrder(index) === 1 ? 'w-64 -translate-x-1/2 opacity-100 scale-100 z-20' :
                    'w-48 translate-x-0 opacity-60 scale-85'}
              `}
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="font-semibold text-sm truncate">{course.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="font-bold text-xl mb-2">{courses[currentIndex].title}</h3>
          <div className="flex justify-center items-center space-x-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`w-4 h-4 ${i < Math.floor(courses[currentIndex].rating) 
                  ? 'text-yellow-400 fill-yellow-400' 
                  : 'text-gray-300'}`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">{courses[currentIndex].rating}/5</span>
          </div>
          <p className="text-gray-600">{courses[currentIndex].description}</p>
        </div>
      </div>
    </div>
  );
};

export default GFGCourses;