import React from 'react';
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { RiEmotionHappyLine } from "react-icons/ri";
import CountUp from 'react-countup';
const Partners = () => {
    return (
        <div className="bg-[#003366] text-white py-12 px-4 rounded-xl shadow-md max-w-7xl mx-auto">
            <h2 className="text-center text-xl md:text-2xl font-semibold mb-10 border px-4 py-2 w-fit mx-auto border-cyan-300 rounded">
                Trusted by over <CountUp end={6000} duration={5} separator="," />+ customers
            </h2>

            <div className="flex flex-col md:flex-row justify-around items-center gap-8">
               
                <div className="flex items-center gap-4">
                    <div className="text-4xl text-white">
                        <MdOutlineWorkspacePremium />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Premium</h3>
                        <p className="text-sm">Products</p>
                        <div className="mt-2 bg-orange-500 text-white px-3 py-1 rounded font-bold text-center w-fit">
                            <CountUp end={968} duration={3} />
                        </div>
                    </div>
                </div>

                
                <div className="flex items-center gap-4">
                    <div className="text-4xl text-white">
                        <RiEmotionHappyLine />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">
                            <CountUp end={4000} duration={4} separator="," />+
                        </h3>
                        <p className="text-sm">Google Review</p>
                        <div className="mt-2 bg-orange-500 text-white px-3 py-1 rounded font-bold text-center w-fit">
                            <CountUp end={219} duration={3} />
                        </div>
                    </div>
                </div>

               
                <div className="flex items-center gap-4">
                    <div className="text-4xl text-white">
                        <TbTruckDelivery />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Delivery</h3>
                        <p className="text-sm">Across India</p>
                        <div className="mt-2 bg-orange-500 text-white px-3 py-1 rounded font-bold text-center w-fit">
                            <CountUp end={91} duration={2} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;