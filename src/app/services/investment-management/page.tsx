"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ContactCtaSection from "@/sections/ContactCtaSection";

export default function InvestmentManagementPage() {
  return (
    <main className="bg-[#F5F6FA] min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#338DF3] to-[#0A0C2C] py-16 px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 min-w-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
              It&apos;s all about the long game.
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#EAF2FC] mb-8">
              Your strategic partner to help you meet your investment goals.
            </h2>
          </div>
          {/* Image */}
          <div className="flex-1 min-w-0 flex justify-center items-center">
            <div className="w-full max-w-md h-[260px] sm:h-[300px] md:h-[340px] lg:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-white flex items-center justify-center relative">
              <Image
                src="/img/investment-management.png"
                alt="Investment Management"
                fill
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section (single card for now) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-0 mt-16 z-10 relative">
        <div className="font-bold text-xl mb-2 text-[#0A0C2C]">RF Investment Management Account (IMA)</div>
        <div className="text-[#181A2A] text-base mb-4">
          The RF Investment Management Account (IMA) was designed to enable the discerning investor to build a diversified portfolio, tailored to their specific investment objectives and risk tolerances. This IMA combines sound investment advice, personalized service, and expert management.
        </div>
        <div className="text-[#181A2A] text-base">
          The RF team prides itself on offering clients a range of investment strategies derived from in-depth research as well as on-the-ground experience and knowledge. Our local and global research capabilities provide an opportunity for our clients to maximize investment opportunities in securities that offer superior financial performance in the short, medium and long term.
        </div>
      </section>

      {/* Accordion Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 md:px-16 lg:px-0 mt-16 mb-16">
        <Accordion />
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#0A0C2C] py-24 px-4 sm:px-8 md:px-16 lg:px-32 mt-16">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Ready to take the long view?</h3>
          <p className="text-[#EAF2FC] mb-10 max-w-2xl mx-auto text-xl md:text-2xl font-semibold">
            Open your RF Investment Management Account or speak with an RF specialist to start building your strategic investment portfolio today.
          </p>
          <Link href="https://secure.rf-trust.com" target="_blank" className="inline-block bg-[#338DF3] text-white text-xl font-normal px-12 py-5 rounded shadow-lg hover:bg-[#2563EB] transition">
            Get Started with RF Investment Management
          </Link>
        </div>
      </section>
      <ContactCtaSection />
    </main>
  );
}

// Accordion component
function Accordion() {
  const [open, setOpen] = useState(0); // Only one open at a time, default to first
  const items = [
    {
      title: "An IMA may be right for you if:",
      content: (
        <>
          <ul className="list-disc pl-8 mb-6 text-lg text-[#181A2A] space-y-2">
            <li>I don&apos;t have enough knowledge of investments or the markets.</li>
            <li>I want my retirement savings and funds held on fixed deposit to work harder for me.</li>
            <li>I have a difficult time sticking to a disciplined strategy and find myself buying and selling at the wrong times.</li>
            <li>I don&apos;t have the time to monitor, evaluate or make periodic changes to my investments or portfolio.</li>
          </ul>
          <div className="text-lg text-[#181A2A]">
            If one or more of these statements describes your situation, why not consider what a customized IMA might do for you?
          </div>
        </>
      ),
    },
    {
      title: "The Value of Professional Advice:",
      content: (
        <>
          <div className="mb-4">
            From setting goals to selecting investments and fine-tuning strategies, RF&apos;s investment team helps you maximize the available opportunities and minimize the investment risks by providing you with:
          </div>
          <ul className="list-disc pl-8 mb-4 text-lg text-[#181A2A] space-y-2">
            <li>Guidance in evaluating and selecting investment options;</li>
            <li>Objective advice to help you make the most informed decisions;</li>
            <li>Educational resources that inform and empower;</li>
            <li>Ongoing portfolio monitoring and periodic rebalancing;</li>
            <li>Regular consultation and review of your portfolio,</li>
          </ul>
          <div>
            As market conditions change, your investment manager will help you keep a long-term perspective and recommend appropriate strategies. As your personal situation evolves, your investment manager will help you determine the most effective way forward for you.
          </div>
        </>
      ),
    },
    {
      title: "Your Successful Investment Strategy:",
      content: (
        <>
          Investing for maximum, risk-adjusted returns requires a well-thought-out strategy and current knowledge of available investment options. Our IMA solutions are built around protecting your wealth, minimizing risk, and generating higher returns over the long run.
        </>
      ),
    },
    {
      title: "How Your Investment Manager Addresses Risk and Return",
      content: (
        <>
          <div className="mb-4">
            <b>Asset allocation</b> - investing your money across different types of investments is one of the primary features of your IMA. It is a key strategy that seeks to maximize the rewards of investing while helping to manage risk. By investing across various asset classes, our professionals help balance the appeal of stocks — which tend to fluctuate in value but historically have been the best long-term performers — with that of bonds and short-term investments, which traditionally have been more stable but may not produce the highest long-term gains. Note that past performance is no guarantee of future results.
          </div>
          <div>
            <b>Diversification on a number of levels</b> — diversification is the principle of spreading out your investments to help to moderate investment risk — not just in different types of investments, but in different ways. By spreading your investments across asset classes and styles, we strive to reduce your downside exposure to any one area and ensure your participation in the upside potential of other areas. Of course, asset allocation and diversification do not guarantee a profit or protect against loss.
          </div>
        </>
      ),
    },
  ];
  const toggle = (idx: number) => setOpen(open === idx ? -1 : idx);
  return (
    <div className="divide-y divide-gray-300 bg-transparent">
      {items.map((item, idx) => (
        <div key={item.title}>
          <button
            className="w-full flex items-center justify-between py-6 px-2 text-left focus:outline-none"
            onClick={() => toggle(idx)}
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl text-gray-400">&rarr;</span>
              <span className="text-xl font-semibold text-[#181A2A]">{item.title}</span>
            </div>
            <span className="text-3xl text-gray-500">{open === idx ? "−" : "+"}</span>
          </button>
          {open === idx && (
            <div className="pl-12 pb-6 pr-2 text-lg text-[#181A2A] animate-fade-in">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
} 