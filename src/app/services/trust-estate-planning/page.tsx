"use client";

import Image from "next/image";
import Link from "next/link";

export default function TrustEstatePlanningPage() {
  return (
    <main className="bg-[#F5F6FA] min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#338DF3] to-[#0A0C2C] py-16 px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 min-w-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
              Protect what matters
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#EAF2FC] mb-8">
              Trust and estate solutions to give you and your family peace of mind.
            </h2>
          </div>
          {/* Image */}
          <div className="flex-1 min-w-0 flex justify-center items-center">
            <div className="w-full max-w-md h-[260px] sm:h-[300px] md:h-[340px] lg:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-white flex items-center justify-center relative">
              <Image
                src="/img/taep.png"
                alt="Trust & Estate Planning"
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
        <div className="font-bold text-xl mb-2 text-[#0A0C2C]">As a premier trust company in the region, our estate and trust professionals can provide personalized solutions that will help you preserve the wealth you have worked so hard to accumulate and transfer that wealth to future generations. Our goal is simple - we endeavour to make the estate settlement process as easy as possible for those friends and loved ones left behind. We achieve this through our years of experience as well as through a healthy balance of empathy and professionalism.</div>
        <div className="font-bold text-lg mb-2 text-[#0A0C2C]">RF&apos;s Estate & Trust Solutions:</div>
        <ul className="list-disc pl-8 mb-8 text-lg text-[#181A2A] space-y-2">
          <li>Executorship services</li>
          <li>Estate settlement</li>
          <li>Trustee services</li>
          <li>Inter-Vivos and testamentary trust solutions</li>
          <li>Investment administration</li>
          <li>Security plus investment solutions</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#0A0C2C] py-24 px-4 sm:px-8 md:px-16 lg:px-32 mt-16">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Contact us to learn more about Trust & Estate Services</h3>
          <Link href="/contact" className="inline-block bg-[#338DF3] text-white text-xl font-normal px-12 py-5 rounded shadow-lg hover:bg-[#2563EB] transition mt-6">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
} 