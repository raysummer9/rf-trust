import React from 'react';
import Image from 'next/image';

const cardData = [
  {
    title: 'Personal Service',
    description:
      'We build meaningful relationships with our clients, offering tailored solutions that reflect their unique goals and circumstances.',
    icon: (
      <Image src="/img/icons/money-outline.svg" alt="Personal Service" width={56} height={56} />
    ),
    bg: 'bg-white',
    rounded: '',
  },
  {
    title: 'Reliability',
    description:
      'We consistently deliver on our promises, ensuring that our clients can depend on us every step of the way.',
    icon: (
      <Image src="/img/icons/handshake.svg" alt="Reliability" width={56} height={56} />
    ),
    bg: 'bg-[#EAF2FC]',
    rounded: '',
  },
  {
    title: 'Attention to Detail',
    description:
      'We understand the smallest details can have significant impact, and approach every task with meticulous care.',
    icon: (
      <Image src="/img/icons/handshake.svg" alt="Attention to Detail" width={56} height={56} />
    ),
    bg: 'bg-white',
    rounded: '',
  },
  {
    title: 'Responsiveness',
    description:
      'We prioritize prompt communication and swift action to meet our clients\' needs efficiently.',
    icon: (
      <Image src="/img/icons/handshake.svg" alt="Responsiveness" width={56} height={56} />
    ),
    bg: 'bg-[#EAF2FC]',
    rounded: 'rounded-tr-[80px]',
  },
];

const CommitmentSection = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-block w-1.5 h-6 bg-[#338DF3] rounded-full" />
          <span className="uppercase tracking-wide text-[#23263B] text-base font-medium">Our Commitment to You</span>
        </div>
        {/* Heading and subtext */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00012E] leading-none max-w-2xl">
            What matters to you,<br className="hidden md:block" /> drives us
          </h2>
          <div className="text-lg text-[#23263B] max-w-md md:text-right">
            We're committed to being more than just a service provider—we're your long-term partner.
          </div>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4">
          {cardData.map((card, i) => (
            <div
              key={card.title}
              className={`flex flex-col items-start ${card.bg} ${card.rounded} border border-[#D1D5DB] p-8 h-full min-h-[260px] md:min-h-[340px]`}
            >
              <div className="mb-6">{card.icon}</div>
              <div className="text-xl font-bold text-[#00012E] mb-2">{card.title}</div>
              <div className="text-base text-[#23263B]">{card.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection; 