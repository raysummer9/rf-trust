import React from "react";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function ExpertiseSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center mb-2 px-4 sm:px-0">
          <span className="inline-block w-1 h-6 bg-[#3B82F6] rounded-full mr-4" />
          <span className="text-[#00012E] text-xl font-medium tracking-wide">OUR EXPERTISE</span>
        </div>
        {/* Heading and Subtext */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4 px-4 sm:px-0">
          <h2 className="text-[#00012E] text-2xl sm:text-3xl md:text-5xl font-bold leading-none max-w-2xl">
            Here's how we help you<br />move forward.
          </h2>
          <p className="text-[#00012E] text-base sm:text-lg max-w-md md:text-right">
            We offer expert help for your funds, future, and growth — wherever you're headed next.
          </p>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Fund Services */}
          <div className="border border-[#C6C6C6] bg-white rounded-none p-4 sm:p-10 flex flex-col justify-between min-h-[340px] sm:min-h-[420px] max-w-xs mx-auto md:max-w-none">
            <div>
              <Image src="/img/icons/money-outline.svg" alt="Fund Services" width={64} height={64} className="mb-8" />
              <h3 className="text-[#00012E] text-xl sm:text-2xl font-bold mb-2">Fund Services</h3>
              <p className="text-[#00012E] text-sm sm:text-base mb-4">We help private equity, venture capital, and real estate funds run smoothly — so you can stay focused on what matters.</p>
            </div>
            <button className="w-12 h-12 flex items-center justify-center border-2 border-[#C6C6C6] rounded-full hover:bg-[#F3F7FF] transition">
              <ArrowUpRightIcon className="w-6 h-6 text-[#00012E]" />
            </button>
          </div>
          {/* Private Client Services */}
          <div className="border border-[#C6C6C6] bg-white rounded-none p-4 sm:p-10 flex flex-col justify-between min-h-[340px] sm:min-h-[420px] max-w-xs mx-auto md:max-w-none">
            <div>
              <Image src="/img/icons/handshake.svg" alt="Private Client Services" width={64} height={64} className="mb-8" />
              <h3 className="text-[#00012E] text-xl sm:text-2xl font-bold mb-2">Private Client Services</h3>
              <p className="text-[#00012E] text-sm sm:text-base mb-4">We work with families and entrepreneurs to protect, manage, and grow their wealth across generations.</p>
            </div>
            <button className="w-12 h-12 flex items-center justify-center border-2 border-[#C6C6C6] rounded-full hover:bg-[#F3F7FF] transition">
              <ArrowUpRightIcon className="w-6 h-6 text-[#00012E]" />
            </button>
          </div>
          {/* Additional Services */}
          <div className="border border-[#C6C6C6] bg-[#D6E8FA] rounded-tr-[80px] p-4 sm:p-10 flex flex-col justify-between min-h-[340px] sm:min-h-[420px] max-w-xs mx-auto md:max-w-none">
            <div>
              <Image src="/img/icons/globe-pointer.svg" alt="Additional Services" width={64} height={64} className="mb-8" />
              <h3 className="text-[#00012E] text-xl sm:text-2xl font-bold mb-2">Additional Services</h3>
              <p className="text-[#00012E] text-sm sm:text-base mb-4">From corporate setups to marine ownership solutions, we offer extra support to help you move confidently across borders.</p>
            </div>
            <button className="w-12 h-12 flex items-center justify-center bg-[#00012E] rounded-full hover:bg-[#3B82F6] transition">
              <ArrowUpRightIcon className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 