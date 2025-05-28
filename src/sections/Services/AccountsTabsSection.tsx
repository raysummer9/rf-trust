"use client";
import { useState } from 'react';
import Image from 'next/image';

const accounts = [
  {
    key: 'savings',
    label: 'Savings Account',
    img: '/img/savings.jpg',
    heading: 'Savings Account',
    text: "Our Savings Account offers competitive interest rates and flexible access to your funds. Whether you're saving for a goal or building an emergency fund, enjoy peace of mind and security with every deposit.",
  },
  {
    key: 'checking',
    label: 'Checking Account',
    img: '/img/checking.jpg',
    heading: 'Checking Account',
    text: "Manage your day-to-day finances with ease. Our Checking Account provides unlimited transactions, online banking, and a debit card for convenient access to your money anytime, anywhere.",
  },
  {
    key: 'business',
    label: 'Business Account',
    img: '/img/business.jpg',
    heading: 'Business Account',
    text: "Empower your business with our tailored Business Account solutions. Enjoy seamless payments, multi-user access, and dedicated support to help your company grow and thrive.",
  },
];

const AccountsTabsSection = () => {
  const [active, setActive] = useState('savings');
  const current = accounts.find(a => a.key === active);

  return (
    <section id="accounts" className="w-full bg-white py-20 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto">
        {/* Tabs */}
        <div className="flex gap-2 mb-10">
          {accounts.map(a => (
            <button
              key={a.key}
              onClick={() => setActive(a.key)}
              className={`px-6 py-3 text-lg font-semibold rounded-t transition-all duration-200 focus:outline-none ${active === a.key ? 'bg-[#338DF3] text-white' : 'bg-[#F5F6FA] text-[#0A0C2C] hover:bg-[#EAF2FC]'}`}
            >
              {a.label}
            </button>
          ))}
        </div>
        {/* Tab Content */}
        <div
          className="flex flex-col md:flex-row items-center gap-12"
          id={
            active === 'savings' ? 'accounts-savings' :
            active === 'checking' ? 'accounts-checking' :
            active === 'business' ? 'accounts-business' :
            undefined
          }
        >
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-md aspect-[4/3] bg-[#F5F6FA] flex items-center justify-center overflow-hidden rounded-lg">
              <Image
                src={current?.img || ''}
                alt={current?.heading || ''}
                width={480}
                height={360}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          {/* Text */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <h2 className="text-3xl md:text-4xl font-bold text-[#181A2A] mb-4 leading-tight">{current?.heading}</h2>
            <p className="text-lg text-[#181A2A] mb-6">{current?.text}</p>
            <button
              className="bg-[#338DF3] text-white text-lg font-semibold px-8 py-3 rounded transition hover:bg-[#1e2746] w-full md:w-auto"
              onClick={() => {
                window.open('https://secure.rf-trust.com', '_blank');
              }}
            >
              {`Open a ${current?.label}`}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountsTabsSection; 