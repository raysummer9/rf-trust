import React from "react";

export default function GlobalPresenceSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-8 md:px-16 lg:px-32 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Left: City Image */}
        <div className="w-full aspect-[513/461] overflow-hidden rounded-md max-w-[513px] max-h-[461px] mx-auto md:mx-0 md:ml-[120px] md:pr-8">
          <img
            src="/img/city.jpg"
            alt="City at night"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right: Text Content */}
        <div className="md:pl-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#18181B] mb-6 leading-none">
            Wherever you are, we're already there
          </h2>
          <p className="text-lg text-[#18181B] mb-2">
            With offices across 24 key financial hubs and a dedicated team of 1,100+ experts globally, we offer a perfect blend of local insights and international strength. Whether you're navigating established markets or exploring emerging ones, we've got the experience and resources to help you thrive. From bustling global cities to fast-growing regions, our team is always close by, ready to support your ambitions and fuel your success wherever you are.
          </p>
        </div>
      </div>
    </section>
  );
} 