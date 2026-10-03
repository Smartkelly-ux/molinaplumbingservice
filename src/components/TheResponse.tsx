import React, { useEffect, useRef, useState } from 'react';
import { EditorialImage } from './EditorialImage.tsx';

export const TheResponse: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [imageRevealed, setImageRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageRevealed(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="w-full bg-[#F4F5F2] pt-16 lg:pt-24 select-none">
      {/* Three-Zone Layout Container */}
      <div className="px-6 sm:px-10 lg:px-14 pb-10 sm:pb-14 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left Zone: Label (Spans 2 cols) */}
        <div className="md:col-span-2">
          <div className="text-[11px] sm:text-[12px] font-medium tracking-[0.24em] uppercase text-[#46524E] flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#C56D4C]" />
            <span>01 / RESPONSE</span>
          </div>
        </div>

        {/* Center Zone: Large Headline (Spans 7 cols) */}
        <div className="md:col-span-7">
          <h2 className="text-[28px] min-[360px]:text-[34px] min-[420px]:text-[40px] sm:text-[46px] md:text-[54px] lg:text-[68px] leading-[0.98] sm:leading-[0.96] font-normal tracking-[-0.03em] text-[#161B19]">
            TELL US<br />
            WHAT’S<br />
            HAPPENING.
          </h2>
        </div>

        {/* Right Zone: Small Contact Block (Spans 3 cols) */}
        <div className="md:col-span-3 space-y-4 pt-2 border-t md:border-t-0 md:border-l border-[#DCE4E1] md:pl-6">
          <div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-[#8A9691]">DIRECT LINE</div>
            <div className="text-xs uppercase font-medium text-[#46524E] mt-1">CALL</div>
            <a
              href="tel:7867931122"
              className="phone-motion font-mono text-lg font-semibold text-[#183635] mt-0.5"
            >
              (786) 793-1122
            </a>
          </div>

          <p className="text-xs text-[#46524E] leading-relaxed">
            Same-day service and emergency plumbing support are publicly advertised across Hialeah and South Florida.
          </p>
        </div>
      </div>

      {/* Long Horizontal Photograph - Edge to Edge, No Rounded Corners */}
      <div
        ref={imageRef}
        className="relative w-full aspect-[21/9] sm:aspect-[24/9] md:aspect-[28/9] min-h-[260px] max-h-[520px] bg-[#161B19] overflow-hidden"
      >
        <div
          className={`w-full h-full transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            imageRevealed ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            clipPath: imageRevealed ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
          }}
        >
          <EditorialImage
            src={`${import.meta.env.BASE_URL}images/service_residential_action_1791018639118.jpg`}
            alt="Residential plumbing technician working on service lines"
            aspectRatioClass="w-full h-full"
            overlayBadge="ACTIVE DISPATCH"
          />
        </div>
      </div>
    </section>
  );
};
