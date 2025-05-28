import Image from 'next/image';

const services = [
  {
    title: 'Fund Services',
    icon: '/img/icons/money-outline.svg',
    bg: 'bg-white',
    border: 'border border-[#E5E7EB]',
    rounded: '',
    text: "We help private equity, venture capital, and real estate funds run smoothly — so you can stay focused on what matters. Our expert team provides end-to-end fund administration, including investor onboarding, regulatory reporting, accounting, and compliance. Whether you're launching a new fund or managing a complex portfolio, we tailor our services to your structure and strategy. With global reach and local expertise, we ensure seamless coordination across jurisdictions — giving fund managers the confidence to scale, adapt, and succeed."
  },
  {
    title: 'Private Services',
    icon: '/img/icons/handshake.svg',
    bg: 'bg-[#EAF2FC]',
    border: '',
    rounded: 'rounded-tr-[64px]',
    text: "We provide tailored fiduciary solutions to help families and entrepreneurs protect, manage, and grow their wealth across generations. Whether you're planning for the future, preserving a legacy, or navigating complex family or business structures, our team offers bespoke trust and estate services built around your unique needs. From succession planning to asset protection and governance, we work closely with you and your advisers to provide clarity, security, and peace of mind — now and for years to come."
  },
  {
    title: 'Corporate Services',
    icon: '/img/icons/handshake.svg',
    bg: 'bg-[#EAF2FC]',
    border: '',
    rounded: 'rounded-tl-[64px]',
    text: "From company formation to regulatory compliance, we help businesses stay structured, scalable, and globally aligned. Whether you're launching a new venture or expanding across borders, we simplify the complexities of running a business internationally. Our team supports you with everything from directorships and registered offices to governance, reporting, and ongoing compliance — all with a proactive, detail-driven approach that keeps your operations running smoothly. We don't just tick boxes; we help you build a solid foundation for sustainable growth."
  },
  {
    title: 'Marine & Aviation Trust',
    icon: '/img/icons/money-outline.svg',
    bg: 'bg-white',
    border: 'border border-[#E5E7EB]',
    rounded: '',
    text: "Our experienced team helps you navigate the complexities of international registration and compliance — so you can enjoy peace of mind, wherever you are in the world. From superyachts and cargo vessels to private jets and aircraft fleets, we create tailored trust structures that support safe, compliant, and tax-efficient ownership. We handle the paperwork, legalities, and logistics behind the scenes — so whether you're setting sail or taking flight, your assets are protected, and your journey is stress-free."
  },
];

const ServicesGridSection = () => {
  return (
    <section id="services-grid" className="w-full bg-white py-20 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Top row */}
        <div className="flex flex-col gap-8">
          {/* Fund Services */}
          <div className={`p-8 ${services[0].bg} ${services[0].border} rounded-lg flex flex-col h-full min-h-[420px]`}>
            <Image src={services[0].icon} alt="Fund Services" width={64} height={64} className="mb-6" />
            <div className="text-2xl font-bold text-[#0A0C2C] mb-3">{services[0].title}</div>
            <div className="text-[#181A2A] text-base leading-relaxed">{services[0].text}</div>
          </div>
          {/* Corporate Services */}
          <div className={`p-8 ${services[2].bg} ${services[2].rounded} flex flex-col h-full min-h-[420px]`}>
            <Image src={services[2].icon} alt="Corporate Services" width={64} height={64} className="mb-6" />
            <div className="text-2xl font-bold text-[#0A0C2C] mb-3">{services[2].title}</div>
            <div className="text-[#181A2A] text-base leading-relaxed">{services[2].text}</div>
          </div>
        </div>
        {/* Right column */}
        <div className="flex flex-col gap-8">
          {/* Private Services */}
          <div className={`p-8 ${services[1].bg} ${services[1].rounded} flex flex-col h-full min-h-[420px]`}>
            <Image src={services[1].icon} alt="Private Services" width={64} height={64} className="mb-6" />
            <div className="text-2xl font-bold text-[#0A0C2C] mb-3">{services[1].title}</div>
            <div className="text-[#181A2A] text-base leading-relaxed">{services[1].text}</div>
          </div>
          {/* Marine & Aviation Trust */}
          <div className={`p-8 ${services[3].bg} ${services[3].border} rounded-lg flex flex-col h-full min-h-[420px]`}>
            <Image src={services[3].icon} alt="Marine & Aviation Trust" width={64} height={64} className="mb-6" />
            <div className="text-2xl font-bold text-[#0A0C2C] mb-3">{services[3].title}</div>
            <div className="text-[#181A2A] text-base leading-relaxed">{services[3].text}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGridSection; 