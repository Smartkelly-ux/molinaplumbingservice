import React, { useEffect, useRef, useState } from 'react';

export const TrustBlock: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const trustWords = [
    { word: 'PUNCTUAL', delay: 0 },
    { word: 'CLEAR', delay: 150 },
    { word: 'PROFESSIONAL', delay: 300 },
    { word: 'FAIR', delay: 450 },
  ];

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#F4F5F2] py-24 lg:py-36 px-6 sm:px-10 lg:px-14 border-b border-[#DCE4E1] select-none"
      aria-label="Core Principles"
    >
      <div className="max-w-6xl mx-auto">
        {/* Subtle Section Label */}
        <div className="text-[12px] font-medium tracking-[0.24em] uppercase text-[#46524E] flex items-center gap-2 mb-12 sm:mb-16">
          <span className="w-1.5 h-1.5 bg-[#C56D4C]" />
          <span>STANDARDS OF PRACTICE</span>
        </div>

        {/* 2 × 2 Desktop Composition - No Cards, No Borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-y-16 gap-x-8 sm:gap-x-12 lg:gap-x-24">
          {trustWords.map((item, index) => (
            <div key={index} className="flex flex-col justify-start overflow-hidden">
              <span
                className={`text-[26px] min-[360px]:text-[30px] min-[410px]:text-[36px] sm:text-[46px] md:text-[56px] lg:text-[76px] leading-tight tracking-[-0.03em] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  inView
                    ? 'text-[#161B19] font-normal opacity-100'
                    : 'text-[#8A9691] font-light opacity-30'
                }`}
                style={{
                  transitionDelay: `${item.delay}ms`,
                  transform: 'none', // Strict 0px movement rule
                }}
              >
                {item.word}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
