import React from 'react';

export const ServiceDetail: React.FC = () => {
  const services = [
    { title: 'Leaks', note: 'Concealed pipe and fixture isolation' },
    { title: 'Clogs', note: 'Drain clearing and mainline restoration' },
    { title: 'Toilets', note: 'Component rebuilds and seal replacements' },
    { title: 'Faucets', note: 'Cartridges, sprayers, and new assemblies' },
    { title: 'Water Heaters', note: 'Heating elements and tank diagnostics' },
  ];

  return (
    <section className="w-full bg-[#F4F5F2] py-20 lg:py-28 px-6 sm:px-10 lg:px-14 border-b border-[#DCE4E1] select-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left 60%: Large Text (Spans 7 cols on desktop) */}
        <div className="lg:col-span-7">
          <div className="text-[11px] sm:text-[12px] font-medium tracking-[0.24em] uppercase text-[#46524E] flex items-center gap-2 mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 bg-[#C56D4C]" />
            <span>SCOPE OF PRACTICE</span>
          </div>

          <h2 className="text-[30px] min-[360px]:text-[36px] min-[420px]:text-[42px] sm:text-[48px] md:text-[58px] lg:text-[76px] leading-[0.98] sm:leading-[0.96] font-normal tracking-[-0.03em] text-[#161B19]">
            PLUMBING<br />
            FOR THE<br />
            EVERYDAY.
          </h2>

          <p className="mt-4 sm:mt-8 text-sm sm:text-base lg:text-lg text-[#46524E] max-w-lg leading-relaxed">
            Focused, clean residential service designed to resolve everyday plumbing issues without disruption to your home.
          </p>
        </div>

        {/* Right 40%: Services List (Spans 5 cols on desktop) */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-6 pt-2">
          <div className="divide-y divide-[#DCE4E1]">
            {services.map((item, index) => (
              <div key={index} className="py-3 sm:py-4 flex flex-col min-[480px]:flex-row justify-between min-[480px]:items-baseline gap-1">
                <span className="text-lg sm:text-xl md:text-2xl font-light text-[#161B19]">
                  {item.title}
                </span>
                <span className="text-[11px] sm:text-xs text-[#8A9691] uppercase tracking-[0.12em]">
                  {item.note}
                </span>
              </div>
            ))}
          </div>

          {/* Tiny Line Note */}
          <div className="pt-4 border-t border-[#DCE4E1]">
            <p className="text-xs tracking-wide text-[#46524E] flex items-center gap-2">
              <span className="w-1 h-1 bg-[#183635]" />
              Emergency plumbing support is also advertised.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
