import React, { useEffect, useRef, useState } from 'react';

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full bg-[#161B19] text-[#FAFBF9] border-t border-[#C56D4C]/35 pt-12 pb-10 px-6 sm:px-10 lg:px-14 select-none overflow-hidden"
      aria-label="Site Footer"
    >
      {/* Top Horizontal Row: Left, Center, Right */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-10 border-b border-[#FAFBF9]/10">
        {/* Left: Brand name (Spans 4 cols, enters from left 10px) */}
        <div
          className={`md:col-span-4 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            revealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'
          }`}
        >
          <div className="text-xs tracking-[0.24em] uppercase font-semibold text-[#FAFBF9]">
            MOLINA PLUMBING SERVICES LLC
          </div>
          <div className="text-[11px] tracking-[0.16em] uppercase text-[#8A9691] mt-1">
            HIALEAH, FLORIDA
          </div>
        </div>

        {/* Center: Navigation Links (Spans 4 cols, enters from bottom 10px) */}
        <nav
          className={`md:col-span-4 flex flex-wrap justify-start md:justify-center items-center gap-4 sm:gap-6 md:gap-8 text-xs tracking-[0.16em] sm:tracking-[0.2em] uppercase font-medium text-[#DCE4E1] transition-all duration-700 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
          aria-label="Footer Navigation"
        >
          <a href="#services" className="hover:-translate-y-1 hover:text-[#C56D4C] active:translate-y-0 transition-all duration-200">
            SERVICES
          </a>
          <a href="#journey" className="hover:-translate-y-1 hover:text-[#C56D4C] active:translate-y-0 transition-all duration-200">
            PROCESS
          </a>
          <a href="#contact" className="hover:-translate-y-1 hover:text-[#C56D4C] active:translate-y-0 transition-all duration-200">
            CONTACT
          </a>
        </nav>

        {/* Right: Phone number (Spans 4 cols, enters from right 10px) */}
        <div
          className={`md:col-span-4 flex justify-start md:justify-end items-center transition-all duration-700 delay-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            revealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3'
          }`}
        >
          <a
            href="tel:7867931122"
            className="phone-motion font-mono text-base tracking-normal text-[#FAFBF9]"
          >
            (786) 793-1122
          </a>
        </div>
      </div>

      {/* Bottom Row: Address and Copyright (Appears last) */}
      <div
        className={`pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[11px] tracking-[0.18em] uppercase text-[#8A9691] transition-all duration-700 delay-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          revealed ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span>1035 W 77th St, Apt 214, Hialeah, FL 33014</span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <span className="text-[#FAFBF9]">HIALEAH / FL</span>
        </div>

        <div>
          © 2026 MOLINA PLUMBING SERVICES LLC
        </div>
      </div>
    </footer>
  );
};
