import Image from 'next/image';

const AboutHeroSection = () => {
  return (
    <section className="bg-[#f6f6fa] w-full py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-8 lg:px-12">
        {/* Left: Text */}
        <div className="flex-1 min-w-0 md:pr-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-none text-[#00012E] mb-8">
            We&apos;re <span className="text-[#338DF3] font-bold">experts</span> who care, and <span className="text-[#338DF3] font-bold">partners</span> who <span className="italic font-bold">show up</span>
          </h1>
          <p className="text-lg text-[#23263B] mb-8 max-w-xl">
            Our strength is global, but our commitment is always personal. That&apos;s how we help you move forward, confidently.
          </p>
          <a href="/services" className="inline-block text-lg font-semibold text-[#23263B] underline underline-offset-4 decoration-[#338DF3] hover:text-[#338DF3] transition">
            Our Services
          </a>
        </div>
        {/* Right: Image */}
        <div className="flex-1 min-w-0 flex justify-end md:pl-8">
          <div className="w-full max-w-xl h-[340px] md:h-[400px] lg:h-[440px] overflow-hidden">
            <Image
              src="/img/hero-about.png"
              alt="City skyline"
              width={800}
              height={600}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection; 