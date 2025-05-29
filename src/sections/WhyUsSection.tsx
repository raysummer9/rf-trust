import React from "react";

export default function WhyUsSection() {
  return (
    <section className="w-full bg-[#F5F7F7] py-20 px-4 sm:px-8 md:px-16 lg:px-32 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(/img/bg-whyus.jpg)' }} />
        <div className="absolute inset-0 bg-white opacity-70" />
      </div>
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Column 1: Title */}
          <div className="flex flex-row items-center mb-8 md:mb-0">
            <span className="inline-block w-1 h-6 bg-[#3B82F6] rounded-full mr-4" />
            <span className="text-[#00012E] text-xl font-medium tracking-wide">WHY CLIENTS TRUST TRIDENT</span>
          </div>
          {/* Column 2: First two features */}
          <div className="flex flex-col gap-12">
            <div>
              <h3 className="text-[#00012E] text-xl font-bold mb-2">45+ Years of Experience</h3>
              <p className="text-[#00012E] text-base">We&apos;ve spent decades helping clients navigate the complexities of global finance. Our experience means we know how to anticipate challenges — and solve them before they slow you down.</p>
            </div>
            <div>
              <h3 className="text-[#00012E] text-xl font-bold mb-2">Industry-Specific Expertise</h3>
              <p className="text-[#00012E] text-base">From funds to family wealth to global businesses, our teams bring deep knowledge of your world. You get advice and service that fit your industry — not just generic solutions.</p>
            </div>
          </div>
          {/* Column 3: Last two features */}
          <div className="flex flex-col gap-12">
            <div>
              <h3 className="text-[#00012E] text-xl font-bold mb-2">Award-Winning Service</h3>
              <p className="text-[#00012E] text-base">We don&apos;t just deliver — we&apos;re recognized for it. Our commitment to quality, independence, and excellence has earned us industry-leading awards and long-standing client trust.</p>
            </div>
            <div>
              <h3 className="text-[#00012E] text-xl font-bold mb-2">Personalized Client Relationships</h3>
              <p className="text-[#00012E] text-base">You&apos;re never just another account number to us. We take the time to understand your goals, so we can build the right solutions — and the right partnership — for you.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 