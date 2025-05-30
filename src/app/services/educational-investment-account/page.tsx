"use client";

import Link from "next/link";

export default function EducationalInvestmentAccountPage() {
  return (
    <main className="bg-[#F5F6FA] min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#338DF3] to-[#0A0C2C] py-16 px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
            Prepare for a future of boundless possibilities.
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#EAF2FC] mb-8">
            For all the places they will go, an investment plan can help to get them there.
          </h2>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-0 mt-16 z-10 relative">
        <div className="font-bold text-xl mb-2 text-[#0A0C2C]">Preparing for the future starts now!</div>
        <div className="text-lg text-[#181A2A] mb-8">
          Whatever the future holds for your child, you want to make sure you are prepared for it. With the rising costs of college tuition, it is important to come up with a financial plan early. The most cost-effective way to pay for college is to plan in advance and save diligently. In reality, many families get behind schedule and don't begin saving in earnest until college is right around the corner. With an RF Education Investment Account, you can not only develop a strategy towards covering your child's future educational costs, but you can invest those savings to earn higher returns, giving you both a better chance of meeting your goals.
        </div>
        <div className="text-lg text-[#181A2A] mb-8">
          The RF Educational Investment Account (EIA) is a flexible and effective way to prepare for future educational costs. The EIA provides access to our family of mutual funds and allows the flexibility to invest according to your personal investment risk preferences, all through a single account.
        </div>
        <div className="font-bold text-xl mb-2 text-[#0A0C2C]">How Much Can I Save?</div>
        <div className="text-lg text-[#181A2A] mb-8">
          Although saving for college might feel unattainable, it's far more possible when time is on your side. That's why starting early is so important - half of your savings years will have passed by the time your child is in the second grade. When you start early, you can take advantage of the power of compounding. A compounding effect occurs when any accrued interest or earnings collects additional interest or earnings. The earlier you start, the more opportunity your money has to grow.
        </div>
        <div className="text-lg text-[#181A2A] mb-8">
          The amount will be different for each investor, depending on the amount of time until enrollment, private or public school, as well as any supplemental assistance, afforded. One thing is certain, it will cost more for an education tomorrow than it does today.
        </div>
        <div className="font-bold text-xl mb-2 text-[#0A0C2C]">What Makes the RF EIA Different?</div>
        <div className="font-bold text-lg mb-2 text-[#0A0C2C]">Flexibility</div>
        <div className="text-lg text-[#181A2A] mb-8">
          It takes a village to raise a child, and paying for college is no different. With an RF Education Investment Account, anyone can invest on behalf of your child. That means parents, grandparents, aunts, uncles, and friends can all contribute to your child's academic future with no deposit limits for contributors.
        </div>
        <div className="font-bold text-lg mb-2 text-[#0A0C2C]">Multiple Investment Options</div>
        <div className="text-lg text-[#181A2A] mb-8">
          Our EIA allows for access to six different investment strategies through one program. This option allows for the potential for higher returns over time.
        </div>
        <div className="font-bold text-lg mb-2 text-[#0A0C2C]">You can use it at any college institution</div>
        <div className="text-lg text-[#181A2A] mb-8">
          Where you decide to send your child to college is an important choice involving a host of factors, such as available degree programs, academic reputation, and distance from home. The EIA proceeds can be used at any college and study abroad programs to pay for tuition, fees, room and board, books, and other expenses.
        </div>
        <div className="font-bold text-lg mb-2 text-[#0A0C2C]">Control</div>
        <div className="text-lg text-[#181A2A] mb-8">
          You control the account. Unlike other college savings programs, you retain control over withdrawals for the life of the account. You can even change beneficiaries to another family member if your child decides not to attend college or if there is money left over.
        </div>
        <div className="text-lg text-[#181A2A] mb-8">
          We bring our expertise to every college savings portfolio. When you open an RF Education Investment Account, you get more than a powerful college savings tool: you also get experienced and knowledgeable management of your assets.
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#0A0C2C] py-24 px-4 sm:px-8 md:px-16 lg:px-32 mt-16">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Contact us on how to get started</h3>
          <Link href="/contact" className="inline-block bg-[#338DF3] text-white text-xl font-normal px-12 py-5 rounded shadow-lg hover:bg-[#2563EB] transition mt-6">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
} 