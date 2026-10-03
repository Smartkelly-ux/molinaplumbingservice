import React, { useState, useEffect } from 'react';
import { EditorialImage } from './EditorialImage.tsx';

interface HeroProps {
  imageLoaded?: boolean;
}

export const Hero: React.FC<HeroProps> = () => {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    // Trigger scan and reveal shortly after mount
    const timer = setTimeout(() => {
      setRevealed(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex flex-col justify-between pt-24 lg:pt-16 pb-10 px-6 sm:px-10 lg:px-14 bg-[#F4F5F2] overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Top Metadata Row / Boundary */}
      <div className="flex flex-wrap gap-2 justify-between items-center text-[10px] min-[380px]:text-[11px] sm:text-xs tracking-[0.16em] sm:tracking-[0.2em] uppercase text-[#46524E] border-b border-[#DCE4E1] pb-3 sm:pb-4 mb-6 sm:mb-8 lg:mb-12">
        <span className="font-medium text-[#183635]">SERVICE DISPATCH · HIALEAH</span>
        <span className="hidden md:inline text-[#8A9691]">MOLINA PLUMBING SERVICES LLC</span>
        <span className="font-mono text-xs tabular-nums text-[#C56D4C]">EST. 2026</span>
      </div>

      {/* Main Three-Zone Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
        {/* Center Zone: Headline & CTAs (Spans 7 cols on desktop) */}
        <div className="lg:col-span-7 flex flex-col justify-center max-w-3xl">
          <div className="space-y-2 lg:space-y-3">
            <h1 className="text-[34px] min-[360px]:text-[40px] min-[420px]:text-[46px] sm:text-[58px] md:text-[70px] lg:text-[88px] leading-[0.98] sm:leading-[0.94] font-normal tracking-[-0.03em] text-[#161B19]">
              <span
                className={`block transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                RIGHT WHEN
              </span>
              <span
                className={`block text-[#183635] transition-all duration-700 delay-150 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                YOU NEED IT.
              </span>
            </h1>

            <p
              className={`pt-3 sm:pt-5 text-sm sm:text-base md:text-lg lg:text-xl text-[#46524E] font-normal max-w-xl leading-relaxed transition-all duration-700 delay-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Plumbing help for homes across Hialeah and South Florida.
            </p>
          </div>

          {/* Action CTAs */}
          <div
            className={`pt-6 sm:pt-8 lg:pt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 md:gap-6 transition-all duration-700 delay-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a
              href="tel:7867931122"
              className="btn-motion text-center px-6 sm:px-8 py-3.5 sm:py-4 bg-[#183635] text-[#FAFBF9] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase hover:bg-[#161B19] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#183635]"
            >
              CALL NOW
            </a>

            <a
              href="#booking"
              className="btn-motion text-center px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent border border-[#46524E] text-[#161B19] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase hover:border-[#C56D4C] hover:text-[#C56D4C] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C56D4C]"
            >
              REQUEST SERVICE
            </a>
          </div>
        </div>

        {/* Right Zone: Vertical Photographic Image (Spans 5 cols on desktop) */}
        <div className="lg:col-span-5 relative w-full flex justify-end">
          <div
            className={`relative w-full max-w-md lg:max-w-none aspect-[3/4] bg-[#DCE4E1] overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              revealed ? 'clip-path-full opacity-100' : 'clip-path-initial opacity-40'
            }`}
            style={{
              clipPath: revealed ? 'inset(0 0 0 0)' : 'inset(0 80% 0 0)',
            }}
          >
            <EditorialImage
              src={`${import.meta.env.BASE_URL}images/hero_plumber_repair_1791018627356.jpg`}
              alt="Plumbing technician servicing residential water lines in Hialeah"
              priority={true}
              aspectRatioClass="w-full h-full"
              overlayBadge="DISPATCH READY"
            />
          </div>
        </div>
      </div>

      {/* Bottom Information Rail */}
      <div className="border-t border-[#DCE4E1] pt-4 mt-8 flex justify-between items-center text-[12px] tracking-[0.2em] uppercase text-[#46524E]">
        <div
          className={`flex items-center gap-2 transition-all duration-700 delay-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <span className="w-2 h-2 bg-[#C56D4C]" />
          <span className="font-semibold text-[#161B19]">HIALEAH / FL</span>
        </div>

        <div
          className={`font-mono text-sm sm:text-base font-medium tracking-normal text-[#183635] transition-all duration-700 delay-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <a
            href="tel:7867931122"
            className="phone-motion focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#183635]"
          >
            (786) 793-1122
          </a>
        </div>
      </div>
    </section>
  );
};
