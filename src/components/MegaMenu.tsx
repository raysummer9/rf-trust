import React, { useState } from "react";
import { FaVideo, FaFileAlt, FaDownload, FaLink } from "react-icons/fa";
import Image from "next/image";

const categories = [
  {
    name: "Mutual Funds",
    subItems: [
      "BSD Open-End Mutual Funds",
      "US Dollar Open End Mutual Funds",
      "Mutual Fund Resources",
      "Frequently Asked Questions",
      "Fund Reports",
    ],
    link: "/services/mutual-funds",
  },
  {
    name: "Investment Management",
    subItems: [],
    link: "/services/investment-management",
  },
  {
    name: "Investment Banking",
    subItems: [],
    link: "/services/investment-banking",
  },
  {
    name: "Group & Personal Pension Plans",
    subItems: [],
    link: "/services/group-personal-pension-plans",
  },
  {
    name: "Trust & Estate Planning",
    subItems: [
      "Trusts",
      "Estate Planning",
      "Executorship Services",
      "Investment Management",
    ],
    link: "/services/trust-estate-planning",
  },
  {
    name: "Educational Investment Account",
    subItems: [
      "Investment Options",
      "Frequently Asked Questions",
    ],
    link: "/services/educational-investment-account",
  },
  {
    name: "Credit Card",
    subItems: [],
    link: "/services/credit-card",
  },
];

const quickLinks = [
  { icon: <FaVideo />, label: "More Videos", href: "#" },
  { icon: <FaFileAlt />, label: "View All Documents", href: "#" },
  { icon: <FaDownload />, label: "Download Forms", href: "#" },
  { icon: <FaLink />, label: "Links", href: "#" },
];

const MegaMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="fixed left-0 top-[90px] max-w-7xl w-full mx-auto bg-white text-[#181A2A] shadow-2xl rounded-b-lg flex z-50" style={{ minHeight: 350, right: 0, left: 0 }}>
      {/* Left: Categories */}
      <div className="flex-1 bg-[#0A0C2C] p-6 flex flex-col gap-2 rounded-bl-lg">
        {categories.map((cat, idx) => (
          cat.link ? (
            <a
              key={cat.name}
              href={cat.link}
              className={`text-left px-4 py-2 rounded font-normal text-sm transition-all flex items-center justify-between ${
                idx === activeIndex
                  ? "bg-white text-[#338DF3] font-semibold shadow"
                  : "hover:bg-[#3B82F6] hover:text-white text-white"
              }`}
              onMouseEnter={() => setActiveIndex(idx)}
            >
              {cat.name}
              <span className="ml-auto">&gt;</span>
            </a>
          ) : (
            <button
              key={cat.name}
              className={`text-left px-4 py-2 rounded font-normal text-sm transition-all flex items-center justify-between ${
                idx === activeIndex
                  ? "bg-white text-[#338DF3] font-semibold shadow"
                  : "hover:bg-[#3B82F6] hover:text-white text-white"
              }`}
              onMouseEnter={() => setActiveIndex(idx)}
            >
              {cat.name}
              <span className="ml-auto">&gt;</span>
            </button>
          )
        ))}
      </div>
      {/* Middle: Sub-items */}
      <div className="flex-[2] p-8 flex flex-col items-start border-l border-[#E5E7EB] border-r !bg-[#EAF2FC]" style={{ backgroundColor: '#EAF2FC' }}>
        <div className="w-full">
          <div className="text-2xl font-semibold mb-4 text-[#0A0C2C]">{categories[activeIndex].name}</div>
          {categories[activeIndex].name === "Mutual Funds" ? (
            <>
              <ul className="pl-0 mb-6 space-y-3">
                {categories[activeIndex].subItems.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0A0C2C] inline-block" />
                    <span className="text-base text-[#0A0C2C] font-normal">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/services/mutual-funds"
                className="inline-block mt-2 bg-[#338DF3] text-white text-base font-normal px-6 py-2 rounded shadow hover:bg-[#2563EB] transition"
              >
                Learn more
              </a>
            </>
          ) : categories[activeIndex].name === "Investment Management" ? (
            <>
              <div className="text-[#181A2A] text-base mb-6">
                The RF Investment Management Account (IMA) was designed to enable the discerning investor to build a diversified portfolio, tailored to their specific investment objectives and risk tolerances. This IMA combines sound investment advice, personalized service, and expert management.
              </div>
              <a
                href="/services/investment-management"
                className="inline-block mt-2 bg-[#338DF3] text-white text-base font-normal px-6 py-2 rounded shadow hover:bg-[#2563EB] transition"
              >
                Learn more
              </a>
            </>
          ) : categories[activeIndex].name === "Investment Banking" ? (
            <>
              <div className="text-[#181A2A] text-base mb-6">
                As a leader in Caribbean investment banking and corporate advisory, RF offers a variety of services to assist governments and private companies.
              </div>
              <a
                href="/services/investment-banking"
                className="inline-block mt-2 bg-[#338DF3] text-white text-base font-normal px-6 py-2 rounded shadow hover:bg-[#2563EB] transition"
              >
                Learn more
              </a>
            </>
          ) : categories[activeIndex].name === "Group & Personal Pension Plans" ? (
            <>
              <div className="text-[#181A2A] text-base mb-4">
                We provide retirement advisory services with a customized personal pension plan for those who want to supplement their current pension plan or do not have a company-sponsored pension plan or an individual retirement account.
              </div>
              <ul className="list-disc pl-6 mb-4 text-base text-[#181A2A] space-y-1">
                <li>Personal Pension Plans</li>
                <li>Group Pension Plans</li>
                <li>Stand Alone Pension Plans</li>
              </ul>
              <a
                href="/services/group-personal-pension-plans"
                className="inline-block mt-2 bg-[#338DF3] text-white text-base font-normal px-6 py-2 rounded shadow hover:bg-[#2563EB] transition"
              >
                Learn more
              </a>
            </>
          ) : categories[activeIndex].name === "Trust & Estate Planning" ? (
            <>
              <div className="text-[#181A2A] text-base mb-6">
                Advisors and Trust Officers assist clients in optimizing estate planning and asset protection strategies. We want to ensure that you are provided with a secure and effective solution for the safe and seamless distribution of assets, whether before or after death.
              </div>
              <ul className="pl-0 mb-6 space-y-3">
                {categories[activeIndex].subItems.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0A0C2C] inline-block" />
                    <span className="text-base text-[#0A0C2C] font-normal">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/services/trust-estate-planning"
                className="inline-block mt-2 bg-[#338DF3] text-white text-base font-normal px-6 py-2 rounded shadow hover:bg-[#2563EB] transition"
              >
                Learn more
              </a>
            </>
          ) : categories[activeIndex].name === "Educational Investment Account" ? (
            <>
              <div className="text-[#181A2A] text-base mb-6">
                As soon as your child is born, you begin imagining what his or her future will hold. You await the first word, watch for the first step, and try to envision what they will grow up to be. Whatever that is, it's likely to require a college degree. So as your child takes the first steps toward the future, it's important that you take the first steps toward seeing that a college education will be a part of it.
              </div>
              <ul className="pl-0 mb-6 space-y-3">
                {categories[activeIndex].subItems.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0A0C2C] inline-block" />
                    <span className="text-base text-[#0A0C2C] font-normal">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/services/educational-investment-account"
                className="inline-block mt-2 bg-[#338DF3] text-white text-base font-normal px-6 py-2 rounded shadow hover:bg-[#2563EB] transition"
              >
                Learn more
              </a>
            </>
          ) : categories[activeIndex].name === "Credit Card" ? (
            <>
              <div className="text-[#181A2A] text-base mb-6">
                Credit Card: Enjoy the exclusivity, security, and purchasing power of a world-class Credit Card anywhere in the world with RF!
              </div>
              <a
                href="https://secure.rf-trust.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 bg-[#338DF3] text-white text-base font-normal px-6 py-2 rounded shadow hover:bg-[#2563EB] transition"
              >
                Apply now
              </a>
            </>
          ) : (
            <ul className="list-disc pl-6 space-y-2">
              {categories[activeIndex].subItems.length > 0 ? (
                categories[activeIndex].subItems.map((item) => (
                  <li key={item} className="text-lg text-[#181A2A]">{item}</li>
                ))
              ) : (
                <li className="text-gray-400 italic">No items available</li>
              )}
            </ul>
          )}
        </div>
      </div>
      {/* Right: Quick Links or CTA/Image */}
      <div className="flex-1 p-8 flex flex-col items-start justify-start !bg-[#EAF2FC] rounded-br-lg" style={{ backgroundColor: '#EAF2FC' }}>
        {categories[activeIndex].name === "Investment Management" || categories[activeIndex].name === "Investment Banking" ? (
          <div className="w-full flex flex-col items-start mb-0">
            <Image src="/img/ima-menu.jpg" alt="Investment Management" width={420} height={420} className="object-contain" />
          </div>
        ) : categories[activeIndex].name === "Mutual Funds" ? (
          <div className="w-full flex flex-col items-start gap-3">
            <div className="text-2xl font-semibold text-[#0A0C2C] mb-1">Ready to get started?</div>
            <div className="text-[#181A2A] text-base mb-2">Open your account or speak with an RF Mutual Funds specialist today.</div>
            <a
              href="https://secure.rf-trust.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#338DF3] text-white text-base font-normal px-6 py-2 rounded shadow hover:bg-[#2563EB] transition"
            >
              Get Started
            </a>
          </div>
        ) : categories[activeIndex].name === "Trust & Estate Planning" ? (
          <div className="w-full flex flex-col items-start mb-0">
            <Image src="/img/taep.png" alt="Trust & Estate Planning" width={420} height={420} className="object-contain" />
          </div>
        ) : categories[activeIndex].name === "Educational Investment Account" ? (
          <div className="w-full flex flex-col items-start gap-3">
            <div className="text-2xl font-semibold text-[#0A0C2C] mb-1">Contact us on how to get started</div>
            <a
              href="/contact"
              className="inline-block bg-[#338DF3] text-white text-base font-normal px-6 py-2 rounded shadow hover:bg-[#2563EB] transition"
            >
              Contact Us
            </a>
          </div>
        ) : categories[activeIndex].name === "Credit Card" ? (
          <div className="w-full flex flex-col items-start mb-0">
            <Image src="/img/rf-blackcard-image.png" alt="Credit Card" width={420} height={420} className="object-contain" />
          </div>
        ) : (
          <div className="w-full flex flex-col items-start gap-3">
            <div className="text-2xl font-semibold text-[#0A0C2C] mb-1">Ready to get started?</div>
            <div className="text-[#181A2A] text-base mb-2">Open your account or speak with an RF specialist today.</div>
            <a
              href="https://secure.rf-trust.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#338DF3] text-white text-base font-normal px-6 py-2 rounded shadow hover:bg-[#2563EB] transition"
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default MegaMenu; 