import React from 'react';

export const ContactBlock: React.FC = () => {
  const directionsUrl = "https://www.google.com/maps/search/?api=1&query=1035+W+77th+St+Apt+214+Hialeah+FL+33014";

  return (
    <section id="contact" className="w-full bg-[#FAFBF9] py-20 lg:py-28 px-6 sm:px-10 lg:px-14 border-b border-[#DCE4E1] select-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: Large Call Molina Heading (Spans 6 cols) */}
        <div className="lg:col-span-6 space-y-3 sm:space-y-4">
          <div className="text-[11px] sm:text-[12px] font-medium tracking-[0.24em] uppercase text-[#46524E] flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#C56D4C]" />
            <span>DISPATCH HEADQUARTERS</span>
          </div>

          <h2 className="text-[32px] min-[360px]:text-[38px] min-[420px]:text-[44px] sm:text-[52px] md:text-[64px] lg:text-[84px] leading-[0.96] sm:leading-[0.94] font-normal tracking-[-0.03em] text-[#161B19]">
            CALL<br />
            MOLINA.
          </h2>

          <div className="pt-2 sm:pt-4">
            <a
              href="tel:7867931122"
              className="phone-motion font-mono text-xl min-[360px]:text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#183635]"
            >
              (786) 793-1122
            </a>
          </div>
        </div>

        {/* Right: Business details, address visually secondary (Spans 6 cols) */}
        <div className="lg:col-span-6 pt-4 space-y-8 lg:border-l lg:border-[#DCE4E1] lg:pl-12">
          <div>
            <div className="text-[11px] tracking-[0.22em] uppercase text-[#8A9691] mb-1">
              REGISTERED FLORIDA ENTITY
            </div>
            <div className="text-xl sm:text-2xl font-normal text-[#161B19]">
              MOLINA PLUMBING SERVICES LLC
            </div>
          </div>

          {/* Address kept visually secondary */}
          <div className="space-y-1 text-xs sm:text-sm text-[#46524E]">
            <div className="text-[11px] tracking-[0.2em] uppercase text-[#8A9691] mb-2">
              DISPATCH OFFICE
            </div>
            <div>1035 W 77th St</div>
            <div>Apt 214</div>
            <div>Hialeah, FL 33014</div>
          </div>

          <div>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#183635] hover:text-[#C56D4C] pb-1 border-b border-[#183635] hover:border-[#C56D4C] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>GET DIRECTIONS</span>
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
