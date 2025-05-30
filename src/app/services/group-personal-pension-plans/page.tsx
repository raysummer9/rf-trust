"use client";

import Image from "next/image";
import Link from "next/link";
import ContactCtaSection from "@/sections/ContactCtaSection";

export default function PensionPlansPage() {
  return (
    <main className="bg-[#F5F6FA] min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#338DF3] to-[#0A0C2C] py-16 px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 min-w-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
              You deserve to retire on your terms.
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#EAF2FC] mb-8">
              Let us help you take the guesswork out of your retirement planning.
            </h2>
          </div>
          {/* Image */}
          <div className="flex-1 min-w-0 flex justify-center items-center">
            <div className="w-full max-w-md h-[260px] sm:h-[300px] md:h-[340px] lg:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-white flex items-center justify-center relative">
              <Image
                src="/img/pension-img.png"
                alt="Pension Plans"
                fill
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-0 mt-16 z-10 relative">
        <div className="font-bold text-xl mb-2 text-[#0A0C2C]">Retirement: The longest holiday of your life!</div>
        <div className="text-[#181A2A] text-base mb-6">
          The transition from work-life to retirement should be an exciting time in your life. However, far too many people do not prepare to enjoy it. Retirement planning can be daunting especially with some of the hard realities to consider. National Insurance may not be insufficient. There is also the trend of longer life spans which means your savings need to last longer. And what if retirement comes sooner than expected? All these challenges may seem so overwhelming that you may be tempted to put off thinking about them altogether.
        </div>
        <div className="font-bold text-lg mb-2 text-[#0A0C2C]">As you start planning your retirement, here are some points to consider:</div>
        <ul className="list-disc pl-8 mb-6 text-lg text-[#181A2A] space-y-2">
          <li>
            <b>How much will I need when I retire?</b> People have unique goals and priorities so there is no magic number for the amount you should have saved for retirement. However, as general advice, we recommend that you plan to have at least 70% of your pre-retirement earnings saved for when you do retire. For example, if your yearly income before you retire is $30,000, you should plan to have at least $21,000 per year after retirement to maintain your lifestyle.
          </li>
          <li>
            <b>Can I rely solely on my National Insurance as retirement income?</b> Your National Insurance pension income will likely only meet a small portion of your retirement requirements. Your employer and/or personal pension investments will likely form the core of your retirement assets. The bottom line is that if you want to maintain your lifestyle at retirement, you will need to take matters into your own hands.
          </li>
          <li>
            <b>How soon should I start saving for retirement?</b> Believe it or not, the early bird really does catch the worm. The earlier you can contribute savings towards your retirement, the more time they will have to grow. Time can be your biggest ally in retirement planning. An extra 1% can be the difference between retiring on your terms or someone else&apos;s.
          </li>
        </ul>
        <div className="font-bold text-lg mb-2 text-[#0A0C2C]">By the Numbers</div>
        <div className="text-[#181A2A] text-base mb-8">
          Retiring the way you want to takes careful planning. The first step is determining where you are in the process. The below chart gives an estimation of the amount needed for retirement based on income level, the number of years left to retirement, investment rate and inflation. This can give you an idea of what you need to do to get to your retirement goal.
        </div>
        {/* TODO: Add chart/visual here if needed */}
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#0A0C2C] py-24 px-4 sm:px-8 md:px-16 lg:px-32 mt-16">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Ready to plan your retirement?</h3>
          <p className="text-[#EAF2FC] mb-10 max-w-2xl mx-auto text-xl md:text-2xl font-semibold">
            Open your RF Pension Plan or speak with an RF specialist to start building your retirement strategy today.
          </p>
          <Link href="https://secure.rf-trust.com" target="_blank" className="inline-block bg-[#338DF3] text-white text-xl font-normal px-12 py-5 rounded shadow-lg hover:bg-[#2563EB] transition">
            Get Started with RF Pension Plans
          </Link>
        </div>
      </section>
      <ContactCtaSection />
    </main>
  );
} 