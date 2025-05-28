import React from "react";

export default function ContactCtaSection() {
  return (
    <section className="w-full bg-[#3B82F6] py-20 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Let's build your success together.
          </h2>
          <p className="text-lg text-white mb-8 max-w-xl">
            Partner with a trusted global provider who puts your needs at the center of everything we do. Let's talk about how we can support your goals and build a lasting, successful partnership
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#00012E] text-white text-xl font-normal px-10 py-4 rounded-none shadow hover:bg-[#1e2746] transition"
          >
            Contact Us
          </a>
        </div>
        {/* Right: Image */}
        <div className="flex justify-center md:justify-end items-end h-full">
          <div className="bg-white rounded-tr-[120px] overflow-hidden w-[420px] h-[420px] flex items-end justify-center p-0 m-0">
            <img
              src="/img/contact.png"
              alt="Contact support"
              className="w-full h-full object-cover align-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 