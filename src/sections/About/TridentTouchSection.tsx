import Image from 'next/image';

const TridentTouchSection = () => {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center mb-8">
          <span className="inline-block w-1 h-6 bg-[#338DF3] rounded-full mr-4" />
          <span className="text-[#00012E] text-xl font-medium tracking-wide uppercase">The Trident Touch</span>
        </div>
        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-0">
          {/* Top Left: Mug Image */}
          <div className="flex items-center justify-center p-4 md:p-0">
            <Image
              src="/img/mug.jpg"
              alt="RF Trust Mug"
              width={480}
              height={360}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          {/* Top Right: Independence Text */}
          <div className="flex flex-col justify-center p-4 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#181A2A] mb-4 leading-tight">
              Independence that puts<br />you first
            </h2>
            <p className="text-base md:text-lg text-[#181A2A]">
              As a privately owned and independent firm, RF Trust is free from external pressures and conflicts of interest. This autonomy allows us to focus entirely on our clients' needs, providing unbiased advice and customized solutions.<br />
              Our purpose is clear: to empower our clients by delivering exceptional service, fostering long-term relationships, and supporting their growth across borders.
            </p>
          </div>
          {/* Bottom Left: Global Presence Text */}
          <div className="flex flex-col justify-center p-4 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#181A2A] mb-4 leading-tight">
              Our Global Presence
            </h2>
            <p className="text-base md:text-lg text-[#181A2A]">
              With over 1,100 professionals across Africa, the Americas, Asia, the Caribbean, and Europe, RF Trust combines global reach with local expertise. Our multilingual teams bring cultural insight and deep industry knowledge, helping clients navigate complex markets with confidence. Wherever you are, we're close by and ready to move your goals forward.
            </p>
          </div>
          {/* Bottom Right: Globe Image */}
          <div className="flex items-center justify-center p-4 md:p-0">
            <Image
              src="/img/globe.jpg"
              alt="Global Presence"
              width={480}
              height={360}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TridentTouchSection; 