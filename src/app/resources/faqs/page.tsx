"use client";

import { useState } from "react";
import Link from "next/link";

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What services does RF Trust offer?",
      answer: "RF Trust offers a range of services including Mutual Funds, Investment Management, Investment Banking, Group & Personal Pension Plans, Trust & Estate Planning, Educational Investment Accounts, and Credit Card services."
    },
    {
      question: "How can I open an account with RF Trust?",
      answer: "You can open an account by visiting our secure online platform at secure.rf-trust.com or by contacting our customer service for assistance."
    },
    {
      question: "What are the benefits of using RF Trust's services?",
      answer: "Benefits include personalized investment strategies, access to a variety of investment options, expert management, and comprehensive support for financial planning and asset protection."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can contact customer support through our contact page or by calling our support line directly."
    },
    {
      question: "What are the fees associated with RF Trust's services?",
      answer: "Fees vary by service. Please refer to our service pages or contact us directly for detailed fee information."
    },
    {
      question: "What is the RF Educational Investment Account?",
      answer: "The RF Educational Investment Account (EIA) is a flexible and effective way to prepare for future educational costs, providing access to our family of mutual funds and allowing investment according to personal risk preferences."
    },
    {
      question: "What makes the RF Black MasterCard® Credit Card different?",
      answer: "The RF Black MasterCard® Credit Card offers exclusivity, security, and purchasing power with benefits like MasterCard® Concierge, Global Airport Concierge, Boingo Wi-Fi, and more."
    }
  ];

  return (
    <main className="bg-[#F5F6FA] min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#338DF3] to-[#0A0C2C] py-16 px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
            Frequently Asked Questions
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#EAF2FC] mb-8">
            Find answers to common questions about our services and offerings.
          </h2>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-0 mt-16 z-10 relative">
        <div className="font-bold text-xl mb-2 text-[#0A0C2C]">Common Questions:</div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full text-left p-4 hover:bg-gray-50 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg text-[#0A0C2C]">{faq.question}</span>
                  <span className="text-gray-500">{openIndex === index ? "−" : "+"}</span>
                </div>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-gray-50">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#0A0C2C] py-24 px-4 sm:px-8 md:px-16 lg:px-32 mt-16">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Contact us</h3>
          <Link href="/contact" className="inline-block bg-[#338DF3] text-white text-xl font-normal px-12 py-5 rounded shadow-lg hover:bg-[#2563EB] transition mt-6">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
} 