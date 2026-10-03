import React, { useState } from 'react';
import { EditorialImage } from './EditorialImage.tsx';

interface ProblemItem {
  id: string;
  name: string;
  detail: string;
  thumbnail: string;
}

const problems: ProblemItem[] = [
  {
    id: '01',
    name: 'LEAKS',
    detail: 'Supply line seepage, pinhole copper leaks, joint failure, and valve dripping in residential walls and under sinks.',
    thumbnail: `${import.meta.env.BASE_URL}images/hero_plumber_repair_1791018627356.jpg`,
  },
  {
    id: '02',
    name: 'CLOGS',
    detail: 'Slow draining fixtures, kitchen sink grease blockages, bathroom mainline clearing, and drain cleanouts.',
    thumbnail: `${import.meta.env.BASE_URL}images/service_residential_action_1791018639118.jpg`,
  },
  {
    id: '03',
    name: 'TOILETS',
    detail: 'Continuous running, cracked porcelain, wax ring replacement, flush valve rebuilds, and sewer seal seating.',
    thumbnail: `${import.meta.env.BASE_URL}images/modern_residential_fixtures_1791018652097.jpg`,
  },
  {
    id: '04',
    name: 'FAUCETS',
    detail: 'Cartridge replacements, low water pressure troubleshooting, sprayer repair, and new fixture installations.',
    thumbnail: `${import.meta.env.BASE_URL}images/modern_residential_fixtures_1791018652097.jpg`,
  },
  {
    id: '05',
    name: 'WATER HEATERS',
    detail: 'Thermostat issues, pilot assemblies, electric elements, pressure relief valves, and tank/tankless service.',
    thumbnail: `${import.meta.env.BASE_URL}images/service_residential_action_1791018639118.jpg`,
  },
  {
    id: '06',
    name: 'EMERGENCY PLUMBING',
    detail: 'Active residential water overflow, line breaks, emergency shutoff isolation, and immediate service dispatch.',
    thumbnail: `${import.meta.env.BASE_URL}images/hero_plumber_repair_1791018627356.jpg`,
  },
];

export const ProblemIndex: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);

  const toggleMobile = (index: number) => {
    setMobileExpanded(mobileExpanded === index ? null : index);
  };

  return (
    <section className="w-full bg-[#FAFBF9] py-14 sm:py-20 lg:py-28 border-b border-[#DCE4E1] select-none">
      <div className="px-6 sm:px-10 lg:px-14">
        {/* Main Grid: Left Headline, Right Index Rows */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
          {/* Left Column: Headline */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 self-start">
            <div className="text-[11px] sm:text-[12px] font-medium tracking-[0.24em] uppercase text-[#46524E] flex items-center gap-2 mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 bg-[#C56D4C]" />
              <span>DIAGNOSTIC INDEX</span>
            </div>

            <h2 className="text-[26px] min-[360px]:text-[32px] sm:text-[42px] md:text-[48px] lg:text-[56px] leading-[1.05] sm:leading-[1.0] font-normal tracking-[-0.03em] text-[#161B19]">
              THE PROBLEM<br />
              HAS A NAME.
            </h2>

            <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-[#46524E] max-w-sm leading-relaxed">
              Every plumbing failure gives signals before it creates damage. Select your situation to understand our scope of repair.
            </p>

            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#DCE4E1] hidden lg:block">
              <div className="text-[11px] tracking-[0.2em] uppercase text-[#8A9691]">DIRECT SERVICE CALL</div>
              <a
                href="tel:7867931122"
                className="phone-motion font-mono text-base font-semibold text-[#183635] mt-1 inline-block"
              >
                (786) 793-1122
              </a>
            </div>
          </div>

          {/* Right Column: Problem Rows */}
          <div className="lg:col-span-8 divide-y divide-[#DCE4E1] border-t border-b border-[#DCE4E1]">
            {problems.map((item, index) => {
              const isHovered = hoveredIndex === index;
              const isExpanded = mobileExpanded === index;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative transition-colors duration-200"
                >
                  {/* Desktop Row Layout */}
                  <div
                    onClick={() => toggleMobile(index)}
                    className="cursor-pointer py-4 sm:py-6 lg:py-8 flex items-center justify-between gap-3 sm:gap-4"
                  >
                    <div className="flex items-center gap-4 sm:gap-8 lg:gap-10">
                      {/* Number */}
                      <span
                        className={`font-mono text-xs sm:text-sm md:text-base font-medium tracking-normal transition-colors duration-200 ${
                          isHovered ? 'text-[#C56D4C]' : 'text-[#8A9691]'
                        }`}
                      >
                        {item.id}
                      </span>

                      {/* Name with 3px shift */}
                      <div className="flex items-center gap-3 sm:gap-4">
                        <span
                          className={`text-base min-[360px]:text-lg sm:text-2xl lg:text-3xl font-light tracking-tight text-[#161B19] transition-transform duration-200 ease-out ${
                            isHovered ? 'translate-x-[3px] text-[#183635] font-normal' : 'translate-x-0'
                          }`}
                        >
                          {item.name}
                        </span>

                        {/* Extending horizontal rule */}
                        <div
                          className={`hidden lg:block h-[1px] bg-[#C56D4C] transition-all duration-300 ease-out ${
                            isHovered ? 'w-10 opacity-100' : 'w-0 opacity-0'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Right Side: Desktop Thumbnail preview */}
                    <div className="hidden lg:flex items-center gap-6">
                      <div
                        className={`w-28 h-16 bg-[#161B19] overflow-hidden transition-all duration-300 ${
                          isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                        }`}
                      >
                        <EditorialImage
                          src={item.thumbnail}
                          alt={item.name}
                          aspectRatioClass="w-full h-full"
                        />
                      </div>
                      <span
                        className={`text-xs uppercase tracking-[0.2em] font-medium transition-all duration-200 flex items-center gap-1 ${
                          isHovered ? 'text-[#C56D4C] translate-x-1' : 'text-[#8A9691]'
                        }`}
                      >
                        <span>SELECT</span>
                        <span className={`inline-block transition-transform duration-200 ${isHovered ? 'translate-x-1' : ''}`}>→</span>
                      </span>
                    </div>

                    {/* Mobile Chevron */}
                    <div className="lg:hidden text-[#8A9691] text-xs">
                      {isExpanded ? '—' : '+'}
                    </div>
                  </div>

                  {/* Mobile Accordion Content */}
                  <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ${
                      isExpanded ? 'max-h-64 pb-6 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-sm text-[#46524E] mb-4 pl-12">
                      {item.detail}
                    </p>
                    <div className="w-full h-32 bg-[#161B19] overflow-hidden pl-12">
                      <EditorialImage
                        src={item.thumbnail}
                        alt={item.name}
                        aspectRatioClass="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
