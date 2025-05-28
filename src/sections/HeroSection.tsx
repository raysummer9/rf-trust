import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section className="w-full bg-white pt-20 pb-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-8 lg:px-12 gap-8">
        {/* Left: Text */}
        <div className="w-full md:basis-3/5 flex-1 max-w-xl text-center md:text-left md:pr-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-4 text-[#00012E]">
            Your goals<br />
            <span className="text-[#3B82F6] font-bold">Our partnership</span><br />
            <span className="italic font-normal text-[#00012E]">Real <span className="font-semibold italic">results</span></span>
          </h1>
          <p className="text-gray-700 text-base sm:text-lg mb-6">
            At the heart of everything we do are our people and technology — delivering trusted, independent services to private clients, asset managers, financial institutions, and international businesses worldwide.
          </p>
          <a href="/about" className="inline-block text-[#00012E] border-b border-[#3B82F6] hover:text-[#3B82F6] transition">Learn More</a>
        </div>
        {/* Right: Image */}
        <div className="w-full md:basis-2/5 flex-1 flex justify-center md:justify-end md:pl-8">
          <div className="w-full h-[260px] md:h-[340px] lg:h-[400px] flex items-center justify-center">
            <Image
              src="/img/hero-img.jpg"
              alt="Team discussion"
              width={600}
              height={400}
              className="object-cover w-full h-full rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 