import React from "react";

export default function WhoWeAreSection() {
  return (
    <section className="w-full bg-[#0A0C2C] py-20 px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Left: Label in line with content */}
        <div className="flex flex-row items-center md:w-1/3 w-full mb-8 md:mb-0">
          <span className="inline-block w-1 h-6 bg-[#3B82F6] rounded-full mr-4" />
          <span className="text-white text-xl font-medium tracking-wide">WHO WE ARE</span>
        </div>
        {/* Right: Content */}
        <div className="w-full md:w-2/3">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">Built on Independence, Powered<br className="hidden md:block" /> by Excellence</h2>
          <p className="text-white text-lg md:text-xl mb-10 max-w-3xl">
            With 1,100+ professionals across 24 jurisdictions, RF Trust helps private clients, asset managers, financial institutions, and businesses manage and grow their global interests. For over 45 years, we&apos;ve delivered independent, first-class corporate, fiduciary, and fund services — all built on personal relationships, not just transactions. Wherever you are, our people and expertise are always within reach, ready to move your ambitions forward.
          </p>
          <a href="/about" className="inline-block text-white text-xl font-normal border-b-2 border-[#3B82F6] pb-1 hover:text-[#3B82F6] transition">Learn More About Us</a>
        </div>
      </div>
    </section>
  );
} 