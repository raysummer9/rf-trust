"use client";

import Image from "next/image";
import Link from "next/link";

export default function CreditCardPage() {
  return (
    <main className="bg-[#F5F6FA] min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#338DF3] to-[#0A0C2C] py-16 px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 min-w-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
              Effortlessly enrich your lifestyle.
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#EAF2FC] mb-8">
              With unsurpassed rewards, worldwide acceptance and a host of international services, the Black MasterCard® Credit Card from RF is available by invitation only.
            </h2>
          </div>
          {/* Image */}
          <div className="flex-1 min-w-0 flex justify-center items-center">
            <div className="w-full max-w-md h-[260px] sm:h-[300px] md:h-[340px] lg:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-white flex items-center justify-center relative">
              <Image
                src="/img/credit-card-img.jpeg"
                alt="Credit Card"
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
        <div className="font-bold text-xl mb-2 text-[#0A0C2C]">All Benefits:</div>
        <ul className="list-disc pl-8 mb-8 text-lg text-[#181A2A] space-y-2">
          <li>MasterCard® Concierge: Comprehensive, personalized assistance anytime, anywhere. From scheduling a personal shopper at your favourite luxury fashion retailer to snagging the Chefs table at the hottest restaurant for a special occasion.</li>
          <li>Global Airport Concierge: Personal meet & greet agent. Expedited security/immigration processes and more.</li>
          <li>Boingo Wi-Fi: Global access to over 1 million hotspots with connection 4x faster than global average broadband speed. Hotspots include a network of airports, hotels, restaurants, arenas, stadiums, transportation hubs, and in-flight.</li>
          <li>Spending Alerts: Real-time transaction alerts sent to your mobile phone, giving you the ability to track any purchase above a minimum amount of your choosing.</li>
          <li>MasterCard® Travel Services: Travel planning, booking, assistance and benefits, special offers at over 1,000 Luxury Hotels & Resorts worldwide. Plus, exclusive savings and benefits on car rentals, air, tours, cruises and much more.</li>
          <li>Trip Insurance: With the RF Black Card you and your card are protected with a range of security features and convenient services. These include baggage loss, trip delays, missed connections, emergency medical expenses and more!</li>
          <li>Worldwide Acceptance: No card is more accepted worldwide then MasterCard.</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#0A0C2C] py-24 px-4 sm:px-8 md:px-16 lg:px-32 mt-16">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Apply now</h3>
          <a
            href="https://secure.rf-trust.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#338DF3] text-white text-xl font-normal px-12 py-5 rounded shadow-lg hover:bg-[#2563EB] transition mt-6"
          >
            Apply Now
          </a>
        </div>
      </section>
    </main>
  );
} 