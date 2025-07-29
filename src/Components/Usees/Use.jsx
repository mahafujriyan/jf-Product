import React from 'react';
import { FaBoxOpen, FaShieldAlt, FaUserFriends } from 'react-icons/fa';

const Use = () => {
    return (
      <section className="py-16 px-4 max-w-7xl mx-auto text-center ">
        <h3 className="text-3xl md:text-4xl font-bold mb-2"> Why us </h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">We specialize in delivering durable and innovative fencing solutions built to last. With a focus on quality and trust, we help secure spaces across industries and communities.</p>
        {/* for card  */}
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
         <div className='p-6 border-2 border-purple-600 rounded-xl shadow-md bg-gradient-to-r from-[#bfddfa] to-[#3785d3]'>
            <div className="text-3xl text-purple-600 mb-4">
            <FaShieldAlt  size={30}/>
          </div>
          <h3 className="text-xl font-semibold mb-2">
            Unmatched Durability with Corrosion-Free Technology
          </h3>
          <p className="text-gray-600 text-sm">
           Our JF-270 barbed wire features a robust 270 GSM zinc coating, ensuring superior resistance against rust and corrosion. <br /> Paired with stainless steel binding wire, our fencing solutions are designed to withstand harsh environmental conditions, offering longevity and reliability.
          </p>

        </div>
            <div className="p-6 rounded-xl shadow-md bg-gradient-to-br from-blue-900 to-blue-400 text-white">
        
           <div>
            <FaUserFriends></FaUserFriends>
           </div>
          <h3 className="text-xl font-semibold mb-2">
           Customer-Centric Approach
          </h3>
          <p className="text-sm">
          At JF Products, customer satisfaction is paramount. We pride ourselves on delivering timely services, maintaining transparent communication, and ensuring a seamless purchasing experience. Our commitment to excellence is reflected in the positive feedback from our valued clients.
          </p>
          </div>

          <div className="p-6 rounded-xl shadow-md bg-gradient-to-br from-gray-100 to-blue-100 text-black">
          <div className="text-3xl text-blue-500 mb-4">
            <FaBoxOpen />
          </div>
          <h3 className="text-xl font-semibold mb-2">
            Innovative and Diverse Product Range
          </h3>
          <p className="text-sm text-gray-700">
            From wire fencing to barbed and razor wire, our full range of JF security products
            is built for every industry. Backed by years of R&D, we continue to innovate in safety and strength.
          </p>
        </div>
       </div>
       <div className="mt-10">
        <button className="bg-lime-400 hover:bg-lime-500 text-black px-6 py-2 rounded-full font-medium shadow-md">
          Contact Us
        </button>
      </div>
       
    
      </section>
    );
};

export default Use;