import React, { useState, useEffect } from 'react';

export const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // Lock body scroll and listen for Escape key when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') closeMenu();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const navLinks = [
    { label: 'SERVICES', href: '#services', index: '01' },
    { label: 'PROCESS', href: '#journey', index: '02' },
    { label: 'REQUEST SERVICE', href: '#booking', index: '03' },
    { label: 'CONTACT', href: '#contact', index: '04' },
  ];

  return (
    <>
      {/* Top Navbar Header */}
      <header className="lg:hidden fixed top-0 inset-x-0 z-40 bg-[#F4F5F2] border-b border-[#DCE4E1]">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Brand Wordmark */}
          <a
            href="#top"
            className="font-semibold text-sm tracking-[0.24em] text-[#161B19] uppercase hover:scale-105 active:scale-95 transition-transform duration-200"
            onClick={closeMenu}
          >
            MOLINA
          </a>

          {/* Hamburger Toggle Button */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close navigation drawer' : 'Open navigation drawer'}
            className="p-2 -mr-2 text-[#161B19] hover:text-[#C56D4C] active:scale-90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#183635]"
          >
            <div className="w-6 h-4 relative flex flex-col justify-between">
              <span
                className={`h-[1.5px] w-full bg-current transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-[7.5px]' : ''
                }`}
              />
              <span
                className={`h-[1.5px] w-full bg-current transition-all duration-200 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`h-[1.5px] w-full bg-current transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-[7.5px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Slide-In Drawer Backdrop Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-[#161B19]/50 backdrop-blur-xs transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Slide-In Drawer Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-50 w-[84vw] max-w-sm bg-[#F4F5F2] border-l border-[#DCE4E1] shadow-2xl flex flex-col justify-between p-6 sm:p-8 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Top Row: Wordmark & Close Button */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#DCE4E1]">
            <div>
              <span className="font-semibold text-sm tracking-[0.24em] text-[#161B19] uppercase block">
                MOLINA
              </span>
              <span className="text-[10px] tracking-[0.16em] text-[#8A9691] uppercase block mt-0.5">
                PLUMBING SERVICES LLC
              </span>
            </div>

            <button
              type="button"
              onClick={closeMenu}
              className="p-2 -mr-2 text-[#46524E] hover:text-[#C56D4C] hover:scale-110 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#183635]"
              aria-label="Close drawer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Navigation Links with large typography and touch targets */}
          <nav className="mt-8 flex flex-col space-y-2" aria-label="Mobile Drawer Navigation">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="group flex items-center justify-between py-3.5 border-b border-[#DCE4E1]/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#183635]"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#8A9691] group-hover:text-[#C56D4C] transition-colors">
                    {item.index}
                  </span>
                  <span className="text-lg font-light tracking-tight text-[#161B19] group-hover:text-[#C56D4C] group-hover:translate-x-1.5 transition-all duration-200">
                    {item.label}
                  </span>
                </div>
                <span
                  className="text-xs text-[#8A9691] group-hover:text-[#C56D4C] group-hover:translate-x-1 transition-all duration-200"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* Drawer Bottom Actions & Information */}
        <div className="pt-6 border-t border-[#DCE4E1] space-y-5">
          {/* Direct Emergency Call Button */}
          <div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#8A9691] mb-2">
              DISPATCH HOTLINE
            </div>
            <a
              href="tel:7867931122"
              className="btn-motion w-full py-3.5 px-4 bg-[#183635] text-[#FAFBF9] text-xs font-semibold tracking-[0.2em] uppercase text-center hover:bg-[#161B19] active:scale-[0.98]"
            >
              CALL NOW: (786) 793-1122
            </a>
          </div>

          {/* Status & Headquarters Metadata */}
          <div className="space-y-1.5 text-[11px] text-[#46524E]">
            <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-[#183635] font-medium">
              <span className="w-1.5 h-1.5 bg-[#C56D4C]" />
              STATUS / READY FOR DISPATCH
            </div>
            <div className="text-[10px] tracking-[0.12em] text-[#8A9691] uppercase">
              1035 W 77th St, Apt 214 · Hialeah, FL 33014
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
