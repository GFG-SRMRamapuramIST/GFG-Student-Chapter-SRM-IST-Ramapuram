import React from 'react';
import fidelityLogo from './assets/fidelity.svg';
import jpmorganLogo from './assets/jpm.svg';
import razorpayLogo from './assets/Razorpay.svg';
import siemensLogo from './assets/smn.svg';

const AlumniWorkAt = () => {
  const logos = [
    {
      id: 1,
      src: fidelityLogo,
      alt: 'Fidelity',
    },
    {
      id: 2,
      src: jpmorganLogo,
      alt: 'JP Morgan',
    },
    {
      id: 3,
      src: razorpayLogo,
      alt: 'Razorpay',
    },
    {
      id: 4,
      src: siemensLogo,
      alt: 'Siemens',
    },

  ];

  return (
    <div className="w-full py-6 sm:py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
          <p className="text-gray-500 text-base sm:text-lg font-medium text-center sm:text-left mb-6 sm:mb-0">
            Our Alumni Work at
          </p>
          <div className="grid grid-cols-2 sm:flex sm:flex-row items-center gap-8 sm:gap-6 md:gap-8 lg:gap-12">
            {logos.map((logo) => (
              <div 
                key={logo.id} 
                className="flex items-center justify-center w-20 sm:w-24 md:w-28 lg:w-32"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="w-full h-auto object-contain grayscale opacity-70 hover:opacity-100 transition-opacity" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniWorkAt;