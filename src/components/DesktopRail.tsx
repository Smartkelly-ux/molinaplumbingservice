import React from 'react';

export const DesktopRail: React.FC = () => {
  return (
    <aside
      className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[96px] bg-[#F4F5F2] border-r border-[#DCE4E1] z-40 flex-col justify-between items-center py-8 select-none"
      aria-label="Primary Desktop Navigation Rail"
    >
      {/* Top: Small Vertical Logo Mark */}
      <a
        href="#top"
        className="group flex flex-col items-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#183635] hover:scale-110 active:scale-95 transition-transform duration-200"
        aria-label="Molina Plumbing Services - Back to Top"
      >
        <span className="font-semibold text-[13px] tracking-[0.28em] text-[#161B19] uppercase [writing-mode:vertical-lr] rotate-180 group-hover:text-[#C56D4C] transition-colors">
          MOLINA
        </span>
      </a>

      {/* Middle: Navigation Letters and Labels */}
      <nav className="flex flex-col items-center gap-9" aria-label="Sections">
        <a
          href="#services"
          className="group flex flex-col items-center text-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#183635] hover:-translate-y-1 active:translate-y-0 transition-transform duration-200"
          title="Services"
        >
          <span className="text-[13px] font-semibold text-[#183635] tracking-widest group-hover:text-[#C56D4C] group-hover:scale-110 transition-all duration-200">
            S
          </span>
          <span className="text-[9px] tracking-[0.2em] font-medium text-[#8A9691] uppercase group-hover:text-[#161B19] transition-colors mt-0.5">
            SERVICES
          </span>
        </a>

        <a
          href="#about"
          className="group flex flex-col items-center text-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#183635] hover:-translate-y-1 active:translate-y-0 transition-transform duration-200"
          title="About & Coverage"
        >
          <span className="text-[13px] font-semibold text-[#183635] tracking-widest group-hover:text-[#C56D4C] group-hover:scale-110 transition-all duration-200">
            A
          </span>
          <span className="text-[9px] tracking-[0.2em] font-medium text-[#8A9691] uppercase group-hover:text-[#161B19] transition-colors mt-0.5">
            ABOUT
          </span>
        </a>

        <a
          href="#booking"
          className="group flex flex-col items-center text-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#183635] hover:-translate-y-1 active:translate-y-0 transition-transform duration-200"
          title="Contact & Service Request"
        >
          <span className="text-[13px] font-semibold text-[#183635] tracking-widest group-hover:text-[#C56D4C] group-hover:scale-110 transition-all duration-200">
            C
          </span>
          <span className="text-[9px] tracking-[0.2em] font-medium text-[#8A9691] uppercase group-hover:text-[#161B19] transition-colors mt-0.5">
            CONTACT
          </span>
        </a>
      </nav>

      {/* Bottom: Direct CALL Action */}
      <div className="flex flex-col items-center">
        <a
          href="tel:7867931122"
          className="btn-motion text-[11px] font-semibold tracking-[0.24em] text-[#FAFBF9] bg-[#183635] hover:bg-[#C56D4C] hover:scale-105 active:scale-95 py-2 px-3 text-center uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#183635]"
          aria-label="Call Molina at 786-793-1122"
        >
          CALL
        </a>
      </div>
    </aside>
  );
};
