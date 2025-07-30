import React from 'react';
import Logo from '../Shared/Logo';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const LoveUs = () => {
    return (
     <div className="px-4 py-10">
      <h1 className="text-2xl md:text-3xl text-center font-semibold mb-6">
        Why Customers Love ❤️ Us?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
      
        <div className="md:col-span-3 bg-[#F2F4F6] p-6 rounded-xl relative">
          <div className="text-green-500 text-6xl md:text-7xl leading-none">“</div>

          <div className="flex flex-col justify-center items-center text-center">
            <p className="text-lg md:text-2xl text-gray-700 mt-2 mb-4">
              I had initial issue with stock availability and delivery. <br />
              Once the product arrived on site the work has <br />
              completed very fast (400ft.) Value for money and easy to install.
              Happy with the product
            </p>
            <p className="text-[#1A1A1A] text-base md:text-xl">
              - Samuel Varughese
            </p>
          </div>


          <div className="absolute bottom-4 right-4 flex gap-3">
            <FaChevronLeft className="cursor-pointer text-gray-400 hover:text-black" />
            <FaChevronRight className="cursor-pointer text-gray-400 hover:text-black" />
          </div>
        </div>

        <div className="md:col-span-1 bg-[#F2F4F6] rounded-2xl overflow-hidden">
          <img
            src="/assets/image 43.png"
            alt="Customer Testimonial"
            className="w-full h-full object-cover aspect-[3/4] md:h-[450px]"
          />
        </div>
      </div>
    </div>
    );
};

export default LoveUs;