import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaWallet, FaExchangeAlt, FaChartLine, FaUserTie } from "react-icons/fa";
import ContactCtaSection from "@/sections/ContactCtaSection";

export default function MutualFundsPage() {
  return (
    <main className="bg-[#F5F6FA] min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#338DF3] to-[#0A0C2C] py-16 px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 min-w-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
            When your money is working hard, you don&apos;t have to.
          </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#EAF2FC] mb-8">
            Start putting your money to work with RF Mutual Funds.
          </h2>
        </div>
          {/* Image */}
        <div className="flex-1 min-w-0 flex justify-center md:justify-end">
            <div className="w-full max-w-md h-[260px] md:h-[340px] lg:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-white flex items-center justify-center relative">
            <Image
              src="/img/mutual-fund.png"
              alt="Mutual Funds"
                fill
                className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
      </section>

      {/* Mutual Funds Info Cards Section (2x2 grid) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-0 mt-16 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: What is a mutual fund? */}
          <div className="bg-white rounded-tl-[40px] shadow p-10 flex flex-col min-h-[420px] h-full border border-[#E6F0FB]">
            <div className="mb-8">
              <svg width="104" height="104" fill="none" viewBox="0 0 104 104"><ellipse cx="52" cy="46" rx="26" ry="9" fill="#000" fillOpacity="0.08"/><ellipse cx="52" cy="46" rx="26" ry="9" stroke="#000" strokeWidth="2"/><path d="M52 20v26" stroke="#000" strokeWidth="2" strokeLinecap="round"/><path d="M52 20l8 8M52 20l-8 8" stroke="#000" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <div className="font-bold text-xl mb-2 text-[#0A0C2C]">What is a mutual fund?</div>
            <div className="text-[#181A2A] text-base">
          In simple terms, a mutual fund is an investment product that pools money from many different people to invest in a portfolio of stocks and/or bonds. Funds are managed by professionals who decide which stocks or bonds to buy, and investors benefit from the performance of the portfolio. Mutual funds typically earn higher returns than a traditional savings account, between 5% and 10% depending on the type of fund*.
            </div>
          </div>
          {/* Card 2: Saving versus investing */}
          <div className="bg-[#EAF2FC] rounded-tr-[120px] shadow p-10 flex flex-col min-h-[420px] h-full border border-[#E6F0FB]">
            <div className="mb-8">
              <svg width="104" height="104" fill="none" viewBox="0 0 104 104"><ellipse cx="52" cy="46" rx="26" ry="9" fill="#000" fillOpacity="0.08"/><ellipse cx="52" cy="46" rx="26" ry="9" stroke="#000" strokeWidth="2"/><path d="M52 20v26" stroke="#000" strokeWidth="2" strokeLinecap="round"/><path d="M52 20l8 8M52 20l-8 8" stroke="#000" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <div className="font-bold text-xl mb-2 text-[#0A0C2C]">Saving versus investing</div>
            <div className="text-[#181A2A] text-base">
              The rate of return matters. Even if you are a consistent saver, due to the impact of inflation, you could still be losing purchasing power. This means that the rate of return on a typical savings account is not enough to account for the rising cost of living. So, while it is important to save, it is even more important to get the best possible returns on your money. This is the difference between saving and investing and is illustrated in the table below. By making monthly contributions of $200 into a mutual fund for 10 years, you could significantly increase your earnings and create a more stable financial future.
            </div>
          </div>
          {/* Card 3: RF Mutual Funds */}
          <div className="bg-[#EAF2FC] rounded-bl-[120px] shadow p-10 flex flex-col min-h-[420px] h-full border border-[#E6F0FB]">
            <div className="mb-8">
              <svg width="104" height="104" fill="none" viewBox="0 0 104 104"><ellipse cx="52" cy="46" rx="26" ry="9" fill="#000" fillOpacity="0.08"/><ellipse cx="52" cy="46" rx="26" ry="9" stroke="#000" strokeWidth="2"/><path d="M52 20v26" stroke="#000" strokeWidth="2" strokeLinecap="round"/><path d="M52 20l8 8M52 20l-8 8" stroke="#000" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <div className="font-bold text-xl mb-2 text-[#0A0C2C]">RF Mutual Funds</div>
            <div className="text-[#181A2A] text-base">
              Offering more mutual funds than any other company in The Bahamas, RF Mutual Funds are designed to match any investor&apos;s risk tolerance. We offer low, medium and high-risk investment options and the flexibility for investors to scale up or down based on their specific investment goals. Our experienced Investment Specialists provide expert management of a diversified portfolio as part of a strategic investment plan. We also offer competitive fees and an &apos;easy pay&apos; option for subscriptions.
            </div>
          </div>
          {/* Card 4: Suitability Note */}
          <div className="bg-white rounded-br-[40px] shadow p-10 flex flex-col min-h-[420px] h-full border border-[#E6F0FB]">
            <div className="mb-8">
              <svg width="104" height="104" fill="none" viewBox="0 0 104 104"><ellipse cx="52" cy="46" rx="26" ry="9" fill="#000" fillOpacity="0.08"/><ellipse cx="52" cy="46" rx="26" ry="9" stroke="#000" strokeWidth="2"/><path d="M52 20v26" stroke="#000" strokeWidth="2" strokeLinecap="round"/><path d="M52 20l8 8M52 20l-8 8" stroke="#000" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <div className="font-bold text-xl mb-2 text-[#0A0C2C]">Is a mutual fund right for you?</div>
            <div className="text-[#181A2A] text-base">
          Mutual funds are designed to fund long-term financial goals like saving for a child&apos;s college education or retirement. They may not be right for you if you will need your funds within five years. They may also not be right for you if you do not wish to take on any investment risk, or if you are unwilling or unable to withstand fluctuations in the value of your portfolio.
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full bg-[#0A0C2C] py-24 px-4 sm:px-8 md:px-16 lg:px-32 mt-16">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Benefits of RF Mutual Funds</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div className="flex items-start gap-4">
              <FaCheckCircle className="text-white text-2xl mt-1" />
              <div className="text-[#EAF2FC]">
                <b className="text-white">Convenience:</b> Professionally managed, well-researched portfolios—no guesswork.
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaWallet className="text-white text-2xl mt-1" />
              <div className="text-[#EAF2FC]">
                <b className="text-white">Affordability:</b> Start investing with as little as $500.
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaExchangeAlt className="text-white text-2xl mt-1" />
              <div className="text-[#EAF2FC]">
                <b className="text-white">Access to your money:</b> Redeem or switch funds any month, no lock-in.
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaChartLine className="text-white text-2xl mt-1" />
              <div className="text-[#EAF2FC]">
                <b className="text-white">Access to markets:</b> Diversified investments and access to markets you may not reach alone.
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaUserTie className="text-white text-2xl mt-1" />
              <div className="text-[#EAF2FC]">
                <b className="text-white">Professional management:</b> Our Investment Specialists are experts at maximizing returns while controlling risk.
              </div>
            </div>
          </div>
        <div className="mt-8">
            <Link href="https://secure.rf-trust.com" target="_blank" className="inline-block font-semibold text-white border-b-2 border-[#338DF3] hover:text-[#338DF3] transition text-lg">
            Start Investing with RF Mutual Funds
          </Link>
        </div>
      </div>
      </section>
      <ContactCtaSection />
    </main>
  );
} 