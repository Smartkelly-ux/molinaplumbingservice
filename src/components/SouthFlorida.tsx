import React, { useState } from 'react';
import { ServiceAreaMap } from './ServiceAreaMap.tsx';
import { EditorialImage } from './EditorialImage.tsx';

export const SouthFlorida: React.FC = () => {
  const [activeView, setActiveView] = useState<'map' | 'photo'>('map');
  const coverage = ['Hialeah', 'Miami', 'Fort Lauderdale', 'Hollywood', 'West Palm Beach'];

  return (
    <section className="w-full bg-[#FAFBF9] border-b border-[#DCE4E1] overflow-hidden select-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
        {/* Left: Interactive Map Component with CSS Grid Overlays or Photography (Spans 7 cols on desktop) */}
        <div className="lg:col-span-7 flex flex-col justify-between bg-[#161B19] border-b lg:border-b-0 lg:border-r border-[#183635]">
          {/* View Mode Toggle Header */}
          <div className="p-3 sm:p-4 bg-[#161B19] border-b border-[#FAFBF9]/10 flex items-center justify-between text-[11px] tracking-[0.2em] uppercase">
            <span className="text-[#8A9691] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#C56D4C]" />
              <span>VISUAL COVERAGE</span>
            </span>

            {/* Toggle Buttons */}
            <div className="flex items-center gap-1 bg-[#183635]/80 p-0.5 border border-[#FAFBF9]/10">
              <button
                type="button"
                onClick={() => setActiveView('map')}
                className={`px-3 py-1 text-[10px] tracking-[0.16em] uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C56D4C] ${
                  activeView === 'map'
                    ? 'bg-[#F4F5F2] text-[#161B19] font-medium'
                    : 'text-[#DCE4E1] hover:text-[#FAFBF9]'
                }`}
              >
                DISPATCH MAP
              </button>
              <button
                type="button"
                onClick={() => setActiveView('photo')}
                className={`px-3 py-1 text-[10px] tracking-[0.16em] uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C56D4C] ${
                  activeView === 'photo'
                    ? 'bg-[#F4F5F2] text-[#161B19] font-medium'
                    : 'text-[#DCE4E1] hover:text-[#FAFBF9]'
                }`}
              >
                PHOTOGRAPHY
              </button>
            </div>
          </div>

          {/* View Container */}
          <div className="relative w-full flex-1 min-h-[460px]">
            {activeView === 'map' ? (
              <ServiceAreaMap />
            ) : (
              <div className="relative w-full h-full min-h-[460px] bg-[#161B19]">
                <EditorialImage
                  src={`${import.meta.env.BASE_URL}images/hialeah_residential_scene_1791018664546.jpg`}
                  alt="South Florida residential neighborhood environment in Hialeah"
                  aspectRatioClass="w-full h-full"
                  overlayBadge="LOCAL DISPATCH BASE · MIAMI-DADE"
                />
              </div>
            )}
          </div>
        </div>

        {/* Right: Information, County Breakdown and Geographic Metadata (Spans 5 cols on desktop) */}
        <div className="lg:col-span-5 p-6 sm:p-10 lg:p-16 flex flex-col justify-between">
          <div className="space-y-4 sm:space-y-6">
            <div className="text-[11px] sm:text-[12px] font-medium tracking-[0.24em] uppercase text-[#46524E] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#C56D4C]" />
              <span>REGIONAL REACH</span>
            </div>

            <h2 className="text-[30px] min-[360px]:text-[36px] min-[420px]:text-[42px] sm:text-[46px] md:text-[54px] lg:text-[68px] leading-[0.98] sm:leading-[0.96] font-normal tracking-[-0.03em] text-[#161B19]">
              HIALEAH<br />
              <span className="text-[#C56D4C] font-light">+</span><br />
              SOUTH FLORIDA
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-[#46524E] max-w-md leading-relaxed pt-1 sm:pt-2">
              Public-facing business information describes service across Hialeah and other South Florida communities.
            </p>

            {/* Tri-County Division List */}
            <div className="space-y-3 pt-2">
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#8A9691]">
                COUNTY COVERAGE BREAKDOWN
              </div>
              <div className="space-y-2 border-l-2 border-[#183635] pl-3 text-xs text-[#46524E]">
                <div>
                  <strong className="text-[#161B19] font-medium">Miami-Dade County:</strong> Hialeah (Headquarters), Miami, Doral, Coral Gables
                </div>
                <div>
                  <strong className="text-[#161B19] font-medium">Broward County:</strong> Hollywood, Fort Lauderdale, Pembroke Pines
                </div>
                <div>
                  <strong className="text-[#161B19] font-medium">Palm Beach County:</strong> West Palm Beach, Boca Raton corridor
                </div>
              </div>
            </div>
          </div>

          {/* Small Geographic Metadata Row */}
          <div className="pt-8 mt-8 border-t border-[#DCE4E1]">
            <div className="text-[11px] tracking-[0.2em] uppercase text-[#8A9691] mb-3">
              PRIMARY SERVICE REGION
            </div>
            <div className="flex flex-wrap items-center gap-y-2 text-xs sm:text-sm font-medium text-[#183635]">
              {coverage.map((city, idx) => (
                <React.Fragment key={city}>
                  <a
                    href="#booking"
                    className="inline-block hover:-translate-y-0.5 hover:text-[#C56D4C] active:translate-y-0 transition-transform duration-200"
                    title={`Request plumbing service in ${city}`}
                  >
                    {city}
                  </a>
                  {idx < coverage.length - 1 && (
                    <span className="mx-2.5 text-[#8A9691]">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
