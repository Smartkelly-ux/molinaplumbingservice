import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [step, setStep] = useState<number>(0);
  const [splitOpen, setSplitOpen] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onComplete();
      return;
    }

    // Step 0: Initial render with scan line traversing
    const t1 = setTimeout(() => setStep(1), 400); // scan passes first text blocks
    const t2 = setTimeout(() => setStep(2), 900); // info visible, ready status
    const t3 = setTimeout(() => setStep(3), 1500); // M shifts left, locks MOLINA
    const t4 = setTimeout(() => setSplitOpen(true), 2100); // Screen divides into two horizontal panels
    const t5 = setTimeout(() => onComplete(), 2800); // reveal hero completely

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 pointer-events-none transition-opacity duration-500 ${
        splitOpen ? 'opacity-0' : 'opacity-100'
      }`}
      aria-label="Dispatch System Preloader"
    >
      {/* Top Split Panel */}
      <div
        className={`absolute inset-x-0 top-0 h-1/2 bg-[#F4F5F2] border-b border-[#DCE4E1] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          splitOpen ? '-translate-y-full' : 'translate-y-0'
        }`}
      />

      {/* Bottom Split Panel */}
      <div
        className={`absolute inset-x-0 bottom-0 h-1/2 bg-[#F4F5F2] border-t border-[#DCE4E1] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          splitOpen ? 'translate-y-full' : 'translate-y-0'
        }`}
      />

      {/* Content Layer */}
      <div className={`relative z-10 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-14 select-none transition-opacity duration-300 ${splitOpen ? 'opacity-0' : 'opacity-100'}`}>
        {/* Top Header Information */}
        <div className="flex flex-wrap gap-2 justify-between items-center text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.2em] uppercase text-[#46524E]">
          <span className={`transition-opacity duration-500 ${step >= 1 ? 'opacity-100' : 'opacity-0'}`}>
            DISPATCH 001
          </span>
          <span className={`transition-opacity duration-500 delay-100 ${step >= 1 ? 'opacity-100' : 'opacity-0'}`}>
            HIALEAH · SOUTH FLORIDA
          </span>
        </div>

        {/* Center-Left Giant M and Typography */}
        <div className="relative flex items-baseline gap-4 sm:gap-8 md:gap-12 my-auto pl-2 sm:pl-8 md:pl-16">
          {/* Giant M */}
          <div
            className={`text-[64px] min-[360px]:text-[80px] sm:text-[110px] md:text-[150px] lg:text-[180px] font-light leading-none text-[#161B19] tracking-tighter transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              step >= 3 ? '-translate-x-2 sm:-translate-x-4 md:-translate-x-8 text-[#183635]' : 'translate-x-0'
            }`}
          >
            M
          </div>

          {/* Adjacent Information */}
          <div className="space-y-1">
            <div
              className={`text-lg sm:text-2xl md:text-3xl font-medium tracking-tight text-[#161B19] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                step >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'
              } ${step >= 3 ? 'text-[#C56D4C]' : ''}`}
            >
              MOLINA
            </div>
            <div
              className={`text-[11px] sm:text-xs md:text-sm tracking-[0.16em] uppercase text-[#46524E] transition-all duration-500 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                step >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'
              }`}
            >
              HIALEAH
            </div>
            <div
              className={`text-[10px] sm:text-xs tracking-[0.18em] sm:tracking-[0.2em] uppercase text-[#8A9691] transition-all duration-500 delay-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                step >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'
              }`}
            >
              PLUMBING SERVICES
            </div>
          </div>
        </div>

        {/* Bottom Status */}
        <div className="flex justify-between items-end border-t border-[#DCE4E1] pt-4">
          <div
            className={`text-[11px] tracking-[0.22em] font-medium uppercase text-[#183635] flex items-center gap-2 transition-opacity duration-500 ${
              step >= 2 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className="w-1.5 h-1.5 bg-[#C56D4C]" />
            STATUS / READY
          </div>
          <button
            type="button"
            onClick={onComplete}
            className="link-motion pointer-events-auto text-[11px] tracking-[0.15em] uppercase text-[#8A9691] hover:text-[#161B19] hover:scale-105 active:scale-95 transition-all duration-200"
          >
            SKIP [ESC]
          </button>
        </div>

        {/* Thin Horizontal Scan Line */}
        <div
          className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#C56D4C] to-transparent pointer-events-none opacity-60"
          style={{
            animation: 'scanLine 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards'
          }}
        />
      </div>

      <style>{`
        @keyframes scanLine {
          0% { transform: translateY(-40vh) scaleX(0.2); opacity: 0; }
          40% { transform: translateY(0vh) scaleX(1); opacity: 0.8; }
          100% { transform: translateY(40vh) scaleX(0.8); opacity: 0; }
        }
      `}</style>
    </div>
  );
};
