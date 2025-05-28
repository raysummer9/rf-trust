const cards = [
  {
    title: 'Escrow & Agency Services',
    desc: 'Independent handling for complex transactions.',
    bg: 'bg-white',
    text: 'text-[#181A2A]'
  },
  {
    title: 'Estate & Succession Planning',
    desc: 'Secure your legacy with thoughtful planning.',
    bg: 'bg-[#EAF2FC]',
    text: 'text-[#181A2A]'
  },
  {
    title: 'Accounting & Reporting',
    desc: 'Stay compliant with tailored financial reporting.',
    bg: 'bg-white',
    text: 'text-[#0A0C2C]'
  },
  {
    title: 'Foundations & Philanthropy',
    desc: 'Structuring charitable giving for lasting impact.',
    bg: 'bg-[#EAF2FC]',
    text: 'text-[#181A2A]'
  },
];

const BeyondBasicsSection = () => {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Label and Headings */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center mb-4">
              <span className="inline-block w-1.5 h-6 bg-[#338DF3] rounded-full mr-4" />
              <span className="text-[#181A2A] text-lg font-medium tracking-wide">BEYOND THE BASICS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0A0C2C] leading-tight">Always one step<br className="hidden md:block" /> ahead.</h2>
          </div>
          <div className="text-[#181A2A] text-lg md:text-right max-w-xl mt-6 md:mt-0">
            A little extra, where it counts — smart solutions to support your big-picture goals.
          </div>
        </div>
        {/* Cards Grid in a single rounded container */}
        <div className="bg-white rounded-[48px] shadow-md p-2 md:p-6 flex flex-col md:flex-row gap-0 items-stretch">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`flex-1 flex flex-col h-full p-8 ${card.bg} ${card.text} ${i === 0 ? 'rounded-l-[40px]' : ''} ${i === cards.length - 1 ? 'rounded-r-[40px]' : ''}`}
            >
              <div className="text-xl font-bold mb-2">{card.title}</div>
              <div className="text-base">{card.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondBasicsSection; 