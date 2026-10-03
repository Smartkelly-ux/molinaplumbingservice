import React, { useState } from 'react';

interface ServiceItem {
  name: string;
  code: string;
  category: string;
}

const serviceItems: ServiceItem[] = [
  { name: 'LEAKS', code: '01', category: 'PIPE & FIXTURE SEEPAGE' },
  { name: 'CLOGS', code: '02', category: 'DRAIN & MAINLINE CLEARING' },
  { name: 'TOILETS', code: '03', category: 'SEALS, FLANGES & VALVES' },
  { name: 'FAUCETS', code: '04', category: 'CARTRIDGES & SPRAYERS' },
  { name: 'WATER HEATERS', code: '05', category: 'TANK & TANKLESS SYSTEMS' },
  { name: 'EMERGENCY', code: '06', category: 'RAPID RESIDENTIAL DISPATCH' },
];

export const ServiceBand: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  // We duplicate the items array so the CSS marquee runs continuously with 0% to -50% translation without gaps
  const doubledItems = [...serviceItems, ...serviceItems];

  return (
    <section
      id="services"
      className="w-full bg-[#161B19] text-[#FAFBF9] py-8 lg:py-12 overflow-hidden border-y border-[#183635] select-none relative"
      aria-label="Continuous Service Dispatch Carousel"
    >
      {/* Top Header Information & Interactive Carousel Controls */}
      <div className="px-6 lg:px-14 flex flex-wrap gap-3 items-center justify-between mb-4 sm:mb-6 text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.24em] uppercase text-[#8A9691]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#C56D4C] animate-pulse" />
          <span className="text-[#FAFBF9] font-medium">WHAT WE HANDLE</span>
          <span className="hidden sm:inline text-[#8A9691]/40" aria-hidden="true">/</span>
          <span className="hidden md:inline font-mono text-[10px] text-[#8A9691]">
            CONTINUOUS DISPATCH CAROUSEL
          </span>
        </div>

        {/* Carousel State Indicator and Pause/Resume Action */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            className="flex items-center gap-2 text-[9px] sm:text-[10px] tracking-[0.18em] uppercase text-[#8A9691] hover:text-[#FAFBF9] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C56D4C] px-2 py-1 border border-[#FAFBF9]/10"
            aria-label={isPaused ? 'Resume moving carousel' : 'Pause moving carousel'}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isPaused ? 'bg-[#8A9691]' : 'bg-[#C56D4C]'
              }`}
            />
            <span>{isPaused ? 'RESUME STREAM' : 'PAUSE'}</span>
          </button>
          <span className="hidden sm:inline font-mono text-[10px] text-[#8A9691]">
            SAME-DAY AVAILABILITY
          </span>
        </div>
      </div>

      {/* Moving Carousel Container */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Soft edge fade masks for seamless horizontal motion */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-20 bg-gradient-to-r from-[#161B19] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-20 bg-gradient-to-l from-[#161B19] to-transparent z-10" />

        {/* Moving Track */}
        <div
          className="animate-carousel flex items-center"
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {doubledItems.map((service, index) => (
            <a
              key={`${service.code}-${index}`}
              href="#booking"
              className="group flex items-center shrink-0 pr-8 sm:pr-12 md:pr-16 lg:pr-20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C56D4C]"
              title={`Request service for ${service.name}`}
            >
              <div className="flex flex-col">
                <div className="flex items-baseline gap-2 sm:gap-3">
                  <span className="font-mono text-[11px] sm:text-xs md:text-sm text-[#8A9691] group-hover:text-[#C56D4C] transition-colors">
                    {service.code}
                  </span>
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extralight tracking-tight text-[#FAFBF9] group-hover:text-[#C56D4C] transition-colors">
                    {service.name}
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.2em] uppercase text-[#8A9691] group-hover:text-[#FAFBF9] transition-colors mt-0.5 sm:mt-1 pl-4 sm:pl-6">
                  {service.category}
                </span>
              </div>

              {/* Editorial Separator */}
              <span
                className="text-base sm:text-xl md:text-2xl font-light text-[#46524E] pl-8 sm:pl-12 md:pl-16 lg:pl-20"
                aria-hidden="true"
              >
                /
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="px-6 lg:px-14 mt-3 sm:mt-4 flex flex-wrap gap-2 justify-between items-center text-[9px] sm:text-[10px] tracking-[0.14em] sm:tracking-[0.16em] uppercase text-[#8A9691]/70">
        <span>HOVER TO PAUSE · CLICK ITEM TO REQUEST SERVICE</span>
        <span className="font-mono text-[#8A9691]">(786) 793-1122</span>
      </div>
    </section>
  );
};
