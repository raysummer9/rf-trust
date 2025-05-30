"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ContactCtaSection from "@/sections/ContactCtaSection";

export default function InvestmentBankingPage() {
  return (
    <main className="bg-[#F5F6FA] min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#338DF3] to-[#0A0C2C] py-16 px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 min-w-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
              Meet your business objectives with our solutions.
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#EAF2FC] mb-8">
              Take your business further with us as your knowledgeable and strategic partner.
            </h2>
          </div>
          {/* Image */}
          <div className="flex-1 min-w-0 flex justify-center items-center">
            <div className="w-full max-w-md h-[260px] sm:h-[300px] md:h-[340px] lg:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-white flex items-center justify-center relative">
              <Image
                src="/img/investment-banking.png"
                alt="Investment Banking"
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
        <div className="font-bold text-xl mb-2 text-[#0A0C2C]">RF Investment Banking Solutions</div>
        <div className="text-[#181A2A] text-base mb-6">
          As a leading advisor for Investment Banking services in the region, we pride ourselves on our understanding of Bahamian capital markets and our ability to execute complex transactions across a variety of industries. We provide our clients with value-driven solutions for achieving business objectives based on over 20 years of developing and advancing capital markets in The Bahamas.
        </div>
        <div className="text-[#181A2A] text-base mb-8">
          We offer a variety of services to assist governments and private companies, including:
        </div>
        <ul className="list-disc pl-8 mb-12 text-lg text-[#181A2A] space-y-2">
          <li>Equity and Debt Financing</li>
          <li>Business Valuation</li>
          <li>Public Offerings and Private Placements</li>
          <li>Transaction Structuring</li>
          <li>Mergers and Acquisitions</li>
          <li>Privatizations</li>
          <li>Alternative Sources of Financing</li>
        </ul>
      </section>

      {/* Accordion Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 md:px-16 lg:px-0 mt-16 mb-16">
        <BankingAccordion />
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#0A0C2C] py-24 px-4 sm:px-8 md:px-16 lg:px-32 mt-16">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Ready to take your business further?</h3>
          <p className="text-[#EAF2FC] mb-10 max-w-2xl mx-auto text-xl md:text-2xl font-semibold">
            Open your RF Investment Banking Account or speak with an RF specialist to start building your strategic business solutions today.
          </p>
          <Link href="https://secure.rf-trust.com" target="_blank" className="inline-block bg-[#338DF3] text-white text-xl font-normal px-12 py-5 rounded shadow-lg hover:bg-[#2563EB] transition">
            Get Started with RF Investment Banking
          </Link>
        </div>
      </section>
      <ContactCtaSection />
    </main>
  );
}

function BankingAccordion() {
  const [open, setOpen] = useState(0);
  const items = [
    {
      title: "Equity and Debt Financing",
      content: "We help clients raise capital through equity and debt offerings, structuring solutions that fit their unique needs and market conditions.",
    },
    {
      title: "Business Valuation",
      content: "Our team provides objective, thorough business valuations to support transactions, strategic planning, and regulatory requirements.",
    },
    {
      title: "Public & Private Placements",
      content: "We advise on and execute public offerings and private placements, helping clients access capital efficiently and compliantly.",
    },
    {
      title: "Transaction Structuring",
      content: "We design and implement optimal transaction structures for mergers, acquisitions, divestitures, and other complex deals.",
    },
    {
      title: "Mergers & Acquisitions",
      content: "Our experts guide clients through the entire M&A process, from target identification and due diligence to negotiation and closing.",
    },
    {
      title: "Privatization",
      content: "We assist governments and companies in the transition from public to private ownership, ensuring transparency and value creation.",
    },
    {
      title: "Alternative Sourcing",
      content: "We identify and secure alternative sources of financing to help clients achieve their business objectives in dynamic markets.",
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