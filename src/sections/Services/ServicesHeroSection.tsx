const ServicesHeroSection = () => {
  return (
    <section className="w-full bg-[#F5F6FA] py-24 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[#0A0C2C] mb-4">Tailored services, backed by</h1>
        <div className="text-4xl md:text-6xl font-bold text-[#338DF3] italic mb-8">global <span className="not-italic">strength</span></div>
        <p className="text-lg md:text-xl text-[#181A2A] mb-10 max-w-2xl">
          We deliver bespoke solutions grounded in deep local knowledge and backed by international expertise. Whether you&apos;re building your business, managing a fund, or preserving wealth, we&apos;re right here with you—every step of the way.
        </p>
        <a href="https://secure.rf-trust.com" className="mt-2 px-10 py-4 bg-[#338DF3] text-white text-xl font-normal rounded-none shadow hover:bg-[#1e2746] transition">Let&apos;s Work Together</a>
      </div>
    </section>
  );
};

export default ServicesHeroSection; 