import Image from 'next/image';

const team = [
  {
    name: 'Pete Randazzo',
    title: 'President',
    img: '/img/president.jpg',
    location: 'South Dakota',
    link: null,
  },
  {
    name: 'Valerie Chui',
    title: 'Director – Business Development',
    img: '/img/director.jpg',
    location: 'Singapore',
    link: null,
  },
  {
    name: 'Nigel Grant',
    title: 'Managing Director',
    img: '/img/manager.jpg',
    location: 'United Kingdom',
    link: null,
  },
];

const TeamsSection = () => {
  return (
    <section id="team" className="w-full bg-white py-20 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
          {/* Section Label */}
          <div className="flex items-center">
            <span className="inline-block w-1.5 h-6 bg-[#338DF3] rounded-full mr-4" />
            <span className="text-[#181A2A] text-xl font-medium tracking-wide">MEET OUR TEAM</span>
          </div>
          {/* Intro Text */}
          <div className="text-[#181A2A] text-lg md:text-right max-w-2xl">
            Our people power everything we do—bringing care, expertise, and fresh thinking to every client relationship
          </div>
        </div>
        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:w-[70%] md:ml-auto">
          {team.map((member, i) => (
            <div key={member.name} className="bg-[#F5F6FA] rounded-lg overflow-hidden shadow-sm flex flex-col">
              <div className="relative w-full h-64">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-end">
                <div className="text-xl font-bold text-[#181A2A] mb-1">{member.name}</div>
                <div className="text-[#8B8FA7] text-base">
                  {member.title}
                  {member.location && (
                    <> {' / '}<span>{member.location}</span></>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsSection; 