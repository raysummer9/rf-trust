import React from 'react';

const milestones = [
  {
    year: '1983',
    color: 'bg-lime-300',
    desc: 'Established our Jersey office, marking our first expansion beyond the UK',
  },
  {
    year: '1984',
    color: 'bg-orange-400',
    desc: 'Opened offices in the USA and US Virgin Islands, extending our reach into the Americas.',
  },
  {
    year: '1986',
    color: 'bg-teal-300',
    desc: 'Became one of the first international trust companies in the British Virgin Islands.',
  },
  {
    year: '1992',
    color: 'bg-pink-300',
    desc: 'Entered the Asian market with an office in Hong Kong.',
  },
  {
    year: '2000',
    color: 'bg-violet-400',
    desc: 'Launched our Mauritius office, serving as a hub for African operations.',
  },
];

const OurJourneySection = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-[#0A0C2C]">
      {/* Decorative triangles */}
      <div className="hidden md:block absolute left-0 bottom-0" style={{ width: 220, height: 110 }}>
        <div className="w-0 h-0 border-l-[220px] border-l-[#233A7D] border-t-[110px] border-t-transparent" />
      </div>
      <div className="hidden md:block absolute right-0 top-0" style={{ width: 220, height: 110 }}>
        <div className="w-0 h-0 border-r-[220px] border-r-[#233A7D] border-b-[110px] border-b-transparent" />
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex flex-col md:flex-row md:items-start gap-12">
        {/* Left: Label */}
        <div className="flex flex-col md:w-1/3">
          <div className="flex items-center gap-3 mb-8 mt-2">
            <span className="inline-block w-1.5 h-6 bg-[#338DF3] rounded-full" />
            <span className="uppercase tracking-wide text-[#EAF2FC] text-base font-medium">Our Journey</span>
          </div>
        </div>
        {/* Right: Content */}
        <div className="flex-1 flex flex-col gap-8">
          <p className="text-white text-lg max-w-2xl">
            Founded in London in 1978, RF Trust has grown from a single office into a global leader in corporate, fiduciary, and fund administration services. Our expansion has been guided by a commitment to client service and a deep understanding of the evolving financial landscape.
          </p>
          <div>
            <div className="text-2xl font-bold text-white mb-6">Key Milestones</div>
            <ul className="space-y-5">
              {milestones.map((m, i) => (
                <li key={m.year} className="flex items-start gap-4">
                  <span className={`mt-1 w-4 h-4 ${m.color} inline-block skew-x-[-20deg] rounded-sm`} />
                  <div>
                    <span className="font-bold text-white text-lg">{m.year}</span>
                    <span className="text-white text-lg font-normal"> - {m.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <a href="https://secure.rf-trust.com" className="mt-4 text-lg font-semibold text-white underline underline-offset-4 decoration-[#338DF3] hover:text-[#338DF3] transition w-fit">
            View More Milestones
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurJourneySection; 