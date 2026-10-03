import React from 'react';
import { EditorialImage } from './EditorialImage.tsx';

export const RepairHero: React.FC = () => {
  return (
    <section
      className="relative w-full h-[88vh] min-h-[560px] max-h-[920px] bg-[#161B19] overflow-hidden select-none"
      aria-label="Repair Section Showcase"
    >
      {/* Background Image with Ken Burns Micro-Motion */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <EditorialImage
          src={`${import.meta.env.BASE_URL}images/modern_residential_fixtures_1791018652097.jpg`}
          alt="Quiet residential plumbing fixtures and pristine interior"
          className="ken-burns-slow"
          aspectRatioClass="w-full h-full"
        />
        {/* Measured scrim for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#161B19]/85 via-[#161B19]/35 to-[#161B19]/50 pointer-events-none" />
      </div>

      {/* Content overlay sitting directly against image */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-16">
        {/* Top-Right: Brand Wordmark */}
        <div className="flex justify-end">
          <span className="text-[10px] sm:text-xs font-medium tracking-[0.18em] sm:tracking-[0.24em] text-[#FAFBF9] uppercase bg-[#161B19]/50 backdrop-blur-xs px-2.5 sm:px-3 py-1 sm:py-1.5 border border-[#FAFBF9]/15">
            MOLINA PLUMBING SERVICES LLC
          </span>
        </div>

        {/* Bottom-Left: 02 / REPAIR + Large Text */}
        <div className="space-y-3 sm:space-y-4 max-w-2xl">
          <div className="text-[11px] sm:text-[12px] font-medium tracking-[0.24em] uppercase text-[#DCE4E1] flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#C56D4C]" />
            <span>02 / REPAIR</span>
          </div>

          <h2 className="text-[34px] min-[360px]:text-[40px] min-[420px]:text-[46px] sm:text-[56px] md:text-[70px] lg:text-[92px] leading-[0.96] sm:leading-[0.92] font-normal tracking-[-0.03em] text-[#FAFBF9]">
            GET IT<br />
            WORKING<br />
            AGAIN.
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#DCE4E1] max-w-md pt-1 sm:pt-2 leading-relaxed">
            Precision troubleshooting and lasting repair for fixtures, lines, and residential water distribution.
          </p>
        </div>
      </div>
    </section>
  );
};
