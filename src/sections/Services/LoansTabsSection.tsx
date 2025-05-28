'use client';

import { useState } from 'react';
import Image from 'next/image';

const loans = [
  {
    key: 'personal',
    label: 'Personal Loans',
    img: '/img/personal-loans.jpg',
    heading: 'Personal Loans',
    text: "Get the financial flexibility you need with our competitive personal loans. Whether you're consolidating debt, making a major purchase, or handling unexpected expenses, we offer tailored solutions with flexible terms and competitive rates.",
  },
  {
    key: 'business',
    label: 'Business Loans',
    img: '/img/business-loans.jpg',
    heading: 'Business Loans',
    text: "Fuel your business growth with our comprehensive business loan solutions. From working capital to equipment financing, we provide the funding you need to expand operations, invest in new opportunities, or manage cash flow.",
  },
  {
    key: 'student',
    label: 'Student Loans',
    img: '/img/student-loans.jpg',
    heading: 'Student Loans',
    text: "Invest in your future with our student loan options. We offer competitive rates and flexible repayment terms to help you pursue your educational goals without financial stress.",
  },
  {
    key: 'mortgage',
    label: 'Mortgage Loans',
    img: '/img/mortgage.jpg',
    heading: 'Mortgage Loans',
    text: "Turn your dream home into reality with our mortgage solutions. We offer competitive rates, flexible terms, and personalized service to help you find the perfect mortgage for your needs.",
  },
  {
    key: 'grants',
    label: 'Grants',
    img: '/img/grants.jpg',
    heading: 'Grants',
    text: "Access funding opportunities through our grant programs. We support various initiatives and projects with non-repayable grants, helping you achieve your goals without the burden of repayment.",
  },
];

const LoansTabsSection = () => {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <section id="loans" className="w-full bg-white py-20 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Label and Heading */}
        <div className="flex items-center mb-4">
          <span className="inline-block w-1.5 h-6 bg-[#338DF3] rounded-full mr-4" />
          <span className="text-[#181A2A] text-lg font-medium tracking-wide">LOANS</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-[#0A0C2C] mb-12">Financial Solutions for Every Need</h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-8">
          {loans.map((loan) => (
            <button
              key={loan.key}
              onClick={() => setActiveTab(loan.key)}
              className={`px-6 py-3 rounded-full text-base font-medium transition-all ${
                activeTab === loan.key
                  ? 'bg-[#338DF3] text-white'
                  : 'bg-[#F3F4F6] text-[#181A2A] hover:bg-[#E5E7EB]'
              }`}
            >
              {loan.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[350px] lg:h-[450px] rounded-[40px] overflow-hidden">
            <Image
              src={loans.find(loan => loan.key === activeTab)?.img || ''}
              alt={loans.find(loan => loan.key === activeTab)?.heading || ''}
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0A0C2C]">
              {loans.find(loan => loan.key === activeTab)?.heading}
            </h3>
            <p className="text-lg text-[#181A2A] leading-relaxed">
              {loans.find(loan => loan.key === activeTab)?.text}
            </p>
            <a 
              href="https://secure.rf-trust.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block px-8 py-4 bg-[#338DF3] text-white rounded-none text-base font-medium hover:bg-[#2563EB] transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoansTabsSection; 