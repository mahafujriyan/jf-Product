import React from 'react';
import Logo from '../Shared/Logo';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const LoveUs = () => {
    return (
        <div>
            <h1 className='text-3xl text-center'>Why Customers Love ❤️ Us?</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3 '>
                <div className='col-span-1 md:col-span-3 bg-[#F2F4F6] p-3 rounded-xl '>
            <div className="text-green-500 text-7xl ">“</div>

     <div className='flex flex-col justify-center items-center' >
      <p className="text-2xl text-gray-700 mt-2 mb-4">
        I had initial issue with stock availability and delivery. <br /> Once the product arrived on site the work  has <br /> completed very fast(400ft.) Value for money and easy to install. Happy with the product
      </p>
      <p className='text-[#1A1A1A] text-xl '> - Samuel Varughese</p>

      
     

      <div className="absolute bottom-4 right-4 flex gap-2">
        <FaChevronLeft className="cursor-pointer text-gray-400 hover:text-black" />
        <FaChevronRight className="cursor-pointer text-gray-400 hover:text-black" />
      </div>
        </div>
        </div>
              <div className='col-span-1 bg-[#F2F4F6] rounded-2xl  ' >
               <img className='h-[450px] w-full' src="/assets/image 43.png" alt="" /> 
              </div>
       </div>
        </div>
    );
};

export default LoveUs;