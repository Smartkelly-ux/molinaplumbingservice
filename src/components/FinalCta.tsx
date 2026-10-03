import React from 'react';

export const FinalCta: React.FC = () => {
  return (
    <section
      className="w-full bg-[#183635] text-[#FAFBF9] py-20 lg:py-28 px-6 sm:px-10 lg:px-14 border-t border-[#161B19] select-none"
      aria-label="Final Service Action"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* Left: Asymmetric Large Headline (Spans 8 cols) */}
        <div className="lg:col-span-8">
          <div className="text-[11px] font-medium tracking-[0.24em] uppercase text-[#DCE4E1] flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-[#C56D4C]" />
            <span>DIRECT SERVICE HANDOFF</span>
          </div>

          <h2 className="text-[28px] min-[360px]:text-[34px] min-[420px]:text-[40px] sm:text-[50px] md:text-[60px] lg:text-[76px] leading-[0.98] sm:leading-[0.96] font-light tracking-[-0.03em] text-[#FAFBF9]">
            WHEN WATER<br />
            BECOMES THE<br />
            <span className="font-medium text-[#FAFBF9]">PROBLEM.</span>
          </h2>
        </div>

        {/* Right: Direct Handoff Call Action (Spans 4 cols) */}
        <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center space-y-3 w-full sm:w-auto">
          <span className="text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[#DCE4E1]">
            EMERGENCY & SAME-DAY
          </span>

          <a
            href="tel:7867931122"
            className="btn-motion text-center w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-[#C56D4C] text-[#FAFBF9] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase hover:bg-[#FAFBF9] hover:text-[#183635] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAFBF9]"
          >
            CALL NOW
          </a>

          <a
            href="tel:7867931122"
            className="phone-motion font-mono text-lg sm:text-xl md:text-2xl font-normal text-[#FAFBF9] tracking-tight"
          >
            (786) 793-1122
          </a>
        </div>
      </div>
    </section>
  );
};
