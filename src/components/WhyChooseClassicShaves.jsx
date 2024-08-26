import React from 'react';
import { FaCut, FaClock, FaWallet, FaShieldAlt, FaCommentAlt, FaHandHoldingUsd, FaMoneyCheckAlt, FaHeadset, FaArrowsAlt, FaClock as FaClockAlt } from 'react-icons/fa';

const WhyChooseClassicShaves = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto">
        <h2 className="text-center text-xl md:text-3xl font-bold mb-8">WHY CHOOSE Classic Shaves</h2>
        
        <div className="flex flex-col md:flex-row items-center">
          {/* Customer Benefits */}
          <div className="space-y-6 text-center md:text-left flex-1 sm:mr-0 lg:ml-20">
            <div className="flex items-center md:justify-start">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <FaCut className="text-white" />
              </div>
              <span className="ml-4">Professional Service</span>
            </div>
            <div className="flex items-center md:justify-start">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <FaClock className="text-white" />
              </div>
              <span className="ml-4">Saves Time</span>
            </div>
            <div className="flex items-center md:justify-start">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <FaWallet className="text-white" />
              </div>
              <span className="ml-4">Cashless</span>
            </div>
            <div className="flex items-center md:justify-start">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <FaShieldAlt className="text-white" />
              </div>
              <span className="ml-4">Safety</span>
            </div>
            <div className="flex items-center md:justify-start">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <FaCommentAlt className="text-white" />
              </div>
              <span className="ml-4">Feedback Noted</span>
            </div>
          </div>

          {/* Images */}
          <div className="relative flex-1 mx-8 my-8 md:my-0">
            <div className="relative">
              <img
                src="./barbershop.jpg"
                alt="Customer"
                className="w-full h-60 md:h-96 object-cover rounded-t-lg"
              />
            </div>
          </div>

          {/* Barber Benefits */}
          <div className="space-y-6 text-center md:text-right flex-1 sm:mr-0 lg:mr-20">
            <div className="flex items-center md:justify-end">
              <span className="mr-4 ">Prepaid Services</span>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <FaHandHoldingUsd className="text-white" />
              </div>
            </div>
            <div className="flex items-center md:justify-end">
              <span className="mr-4">Tax Advantages</span>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <FaMoneyCheckAlt className="text-white" />
              </div>
            </div>
            <div className="flex items-center md:justify-end">
              <span className="mr-4">Classic Shaves Support</span>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <FaHeadset className="text-white" />
              </div>
            </div>
            <div className="flex items-center md:justify-end">
              <span className="mr-4">Flexibility</span>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <FaArrowsAlt className="text-white" />
              </div>
            </div>
            <div className="flex items-center md:justify-end">
              <span className="mr-4">Full/Part-time</span>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <FaClockAlt className="text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 space-x-4">
        <button className="w-full sm:w-auto rounded bg-yellow-500 px-8 py-3 text-sm lg:text-base font-medium text-white shadow hover:bg-yellow-600 focus:outline-none focus:ring active:bg-yellow-700">
    VIP Pre Register
  </button>
  <button className="w-full sm:w-auto rounded bg-gray-700 px-8 py-3 text-sm lg:text-base font-medium text-white shadow hover:bg-gray-800 focus:outline-none focus:ring active:bg-gray-900">
    Partner Pre Register
  </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseClassicShaves;
