import React, { useEffect, useRef, useState } from 'react';

export const CustomerJourney: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollFactor, setScrollFactor] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setScrollFactor(1);
      return;
    }

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.top < viewportHeight && rect.bottom > 0) {
        const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
        setScrollFactor(Math.max(0, Math.min(1, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Motion calculations:
  // On desktop/tablet: CALL moves 12px left, THE remains nearly fixed, PLUMBER moves 12px right
  // On small mobile: keep shifts restrained (0 to 4px) to eliminate lateral edge collisions
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const callShift = isMobile ? 0 : -12 * scrollFactor;
  const plumberShift = isMobile ? 0 : 12 * scrollFactor;

  // Progressive darkness for DESCRIBE, UNDERSTAND, REPAIR
  const opacity1 = Math.min(1, 0.35 + scrollFactor * 0.65);
  const opacity2 = Math.min(1, 0.25 + Math.max(0, scrollFactor - 0.2) * 0.75);
  const opacity3 = Math.min(1, 0.15 + Math.max(0, scrollFactor - 0.4) * 0.85);

  return (
    <section
      id="journey"
      ref={containerRef}
      className="w-full bg-[#FAFBF9] py-16 sm:py-24 lg:py-36 px-6 sm:px-10 lg:px-14 border-b border-[#DCE4E1] overflow-hidden select-none"
      aria-label="How the Customer Journey Works"
    >
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-16">
        <div className="text-[12px] font-medium tracking-[0.24em] uppercase text-[#46524E] flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#C56D4C]" />
          <span>CUSTOMER JOURNEY</span>
        </div>

        {/* Large Horizontal Sentence occupying multiple horizontal zones */}
        <div className="flex flex-wrap items-baseline justify-between text-[28px] min-[360px]:text-[34px] min-[420px]:text-[40px] sm:text-[54px] md:text-[68px] lg:text-[96px] font-light leading-none tracking-[-0.03em] text-[#161B19] gap-x-3 gap-y-4">
          {/* CALL */}
          <div
            className="transition-transform duration-100 ease-out shrink-0"
            style={{ transform: `translateX(${callShift}px)` }}
          >
            <span>CALL</span>
          </div>

          {/* THE */}
          <div className="text-[#8A9691] shrink-0">
            <span>THE</span>
          </div>

          {/* PLUMBER */}
          <div
            className="text-[#183635] font-normal transition-transform duration-100 ease-out shrink-0"
            style={{ transform: `translateX(${plumberShift}px)` }}
          >
            <span>PLUMBER.</span>
          </div>
        </div>

        {/* Beneath in smaller text across multiple horizontal zones */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-[#DCE4E1]">
          {/* DESCRIBE */}
          <div
            className="space-y-2 transition-all duration-300"
            style={{ opacity: opacity1 }}
          >
            <div className="text-xl sm:text-2xl font-medium tracking-tight text-[#161B19]">
              DESCRIBE.
            </div>
            <p className="text-xs sm:text-sm text-[#46524E] leading-relaxed">
              Tell us the problem on the phone. What fixtures are affected, where moisture is seen, or if water is actively flowing.
            </p>
          </div>

          {/* UNDERSTAND */}
          <div
            className="space-y-2 transition-all duration-300"
            style={{ opacity: opacity2 }}
          >
            <div className="text-xl sm:text-2xl font-medium tracking-tight text-[#161B19]">
              UNDERSTAND.
            </div>
            <p className="text-xs sm:text-sm text-[#46524E] leading-relaxed">
              We assess the source, discuss the recommended scope of work openly, and provide clear information before touching a pipe.
            </p>
          </div>

          {/* REPAIR */}
          <div
            className="space-y-2 transition-all duration-300"
            style={{ opacity: opacity3 }}
          >
            <div className="text-xl sm:text-2xl font-medium tracking-tight text-[#183635]">
              REPAIR.
            </div>
            <p className="text-xs sm:text-sm text-[#46524E] leading-relaxed">
              Clean, professional execution with quality brass, copper, and PVC components. Tested thoroughly before closing the job.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
