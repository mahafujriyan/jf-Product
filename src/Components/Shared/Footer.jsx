import React from 'react';
import Logo from './Logo';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
      <div>
         <footer className="bg-gradient-to-r from-[#001f4d] to-[#003366] text-white pt-10 px-4 md:px-20 pb-6 relative overflow-hidden">
    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       
        <div>
          <h2 className="text-xl font-semibold mb-3">Join Our JF Products</h2>
          <p className="mb-4 text-sm text-gray-300">
            Stay updated with our latest products and offers.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-2xl  w-full sm:w-auto text-white bg-[#102344]"
            />
            
            <button className="bg-white text-blue-900 font-semibold px-3 py-2  rounded-2xl hover:bg-gray-200 transition">
              Join Now
            </button>
          </form>
          {/* Logo */}
          <div className="mt-6 flex  gap-3 ">
        <div> <Logo></Logo></div>
           <div>
            <h1 className='text-white text-2xl'>Our Branches</h1>
            <p className='text-white  text-sm'>Coimbatore, Chennai, Hyderabad, Goa, Kochi</p>
           </div>
          </div>
        </div>

      
        <div>
          <h2 className="text-xl font-semibold mb-3">Information</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Home</li>
            <li>Shop</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 3: Helpful */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Helpful</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Terms & Conditions</li>
            <li>Return Policy</li>
            <li>Shipping Info</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>

      
      
    </footer>
    <div className='flex justify-around  flex-col md:flex-row'>
        <h3 className='text-sm'>Copyright © 2025 JF Products. All rights reserved</h3>
        <div className='flex gap-3 text-2xl'>
            <FaFacebook></FaFacebook>
            <FaInstagram></FaInstagram>
            <FaTwitter></FaTwitter>
        </div>
    </div>
      </div>
    );
};

export default Footer;