import React, { useState } from 'react';

type CountyKey = 'all' | 'miami-dade' | 'broward' | 'palm-beach';

interface CountyData {
  name: string;
  key: CountyKey;
  hub: string;
  cities: string[];
  coverageNote: string;
  coordinates: string;
}

const countyInfo: Record<Exclude<CountyKey, 'all'>, CountyData> = {
  'miami-dade': {
    name: 'Miami-Dade County',
    key: 'miami-dade',
    hub: 'Hialeah (HQ & Dispatch Base)',
    cities: ['Hialeah', 'Miami', 'Miami Beach', 'Doral', 'Coral Gables'],
    coverageNote: 'Primary dispatch headquarters with immediate same-day residential routing.',
    coordinates: '25.8576° N, 80.2781° W',
  },
  'broward': {
    name: 'Broward County',
    key: 'broward',
    hub: 'Fort Lauderdale / Hollywood Corridor',
    cities: ['Hollywood', 'Fort Lauderdale', 'Pembroke Pines', 'Miramar'],
    coverageNote: 'Direct transit access via I-95 and Florida Turnpike corridors.',
    coordinates: '26.1224° N, 80.1373° W',
  },
  'palm-beach': {
    name: 'Palm Beach County',
    key: 'palm-beach',
    hub: 'West Palm Beach Corridor',
    cities: ['West Palm Beach', 'Boca Raton', 'Delray Beach', 'Boynton Beach'],
    coverageNote: 'Scheduled service and publicly advertised residential support.',
    coordinates: '26.7153° N, 80.0534° W',
  },
};

export const ServiceAreaMap: React.FC = () => {
  const [selectedCounty, setSelectedCounty] = useState<CountyKey>('all');
  const [hoveredHub, setHoveredHub] = useState<string | null>(null);

  const hubs = [
    {
      id: 'hialeah',
      name: 'Hialeah HQ',
      county: 'miami-dade',
      x: 180,
      y: 330,
      isHQ: true,
      tag: 'DISPATCH BASE',
    },
    {
      id: 'miami',
      name: 'Miami',
      county: 'miami-dade',
      x: 215,
      y: 360,
      isHQ: false,
      tag: 'URBAN CORRIDOR',
    },
    {
      id: 'hollywood',
      name: 'Hollywood',
      county: 'broward',
      x: 210,
      y: 280,
      isHQ: false,
      tag: 'SOUTH BROWARD',
    },
    {
      id: 'ft-lauderdale',
      name: 'Fort Lauderdale',
      county: 'broward',
      x: 220,
      y: 235,
      isHQ: false,
      tag: 'CENTRAL BROWARD',
    },
    {
      id: 'west-palm',
      name: 'West Palm Beach',
      county: 'palm-beach',
      x: 235,
      y: 110,
      isHQ: false,
      tag: 'NORTH CORRIDOR',
    },
  ];

  return (
    <div className="relative w-full bg-[#161B19] text-[#FAFBF9] border border-[#183635] flex flex-col justify-between overflow-hidden select-none">
      {/* Top Header Bar: County Filter Controls */}
      <div className="p-4 sm:p-5 border-b border-[#FAFBF9]/10 bg-[#161B19]/90 backdrop-blur-xs flex flex-wrap items-center justify-between gap-3 z-20">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#C56D4C] animate-pulse" />
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#DCE4E1]">
            SERVICE DISPATCH CORRIDOR
          </span>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 text-[10px] tracking-[0.16em] uppercase">
          {(['all', 'miami-dade', 'broward', 'palm-beach'] as CountyKey[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setSelectedCounty(key)}
              className={`px-2.5 py-1 transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C56D4C] ${
                selectedCounty === key
                  ? 'bg-[#183635] text-[#FAFBF9] border border-[#C56D4C]'
                  : 'bg-transparent text-[#8A9691] hover:text-[#FAFBF9] hover:bg-[#FAFBF9]/5'
              }`}
            >
              {key === 'all' ? 'TRI-COUNTY' : key.replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Main Stylized Map Container with CSS Grid Overlays */}
      <div className="relative w-full h-[400px] sm:h-[450px] overflow-hidden bg-[#161B19]">
        {/* CSS Coordinate Grid Lines (Cartographic Grid Overlay) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, #46524E 1px, transparent 1px),
              linear-gradient(to bottom, #46524E 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Topographic & Regional Vector Artwork */}
        <svg
          viewBox="0 0 380 440"
          className="w-full h-full object-contain filter drop-shadow-sm"
          aria-hidden="true"
        >
          <defs>
            {/* Gradient Scrims for county coverage zones */}
            <linearGradient id="miamiDadeGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#183635" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#C56D4C" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="browardGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#183635" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#183635" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="palmBeachGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#183635" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#46524E" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Atlantic Ocean Coastline Fill / Landmass Outline */}
          <path
            d="M 50,20 L 260,20 Q 255,100 245,160 Q 235,220 230,270 Q 220,330 240,380 Q 220,410 180,420 L 50,420 Z"
            fill="#1D2321"
            stroke="#2B3633"
            strokeWidth="1.2"
          />

          {/* County Polygon Zones with interactive highlights */}
          {/* Palm Beach County Zone */}
          <path
            d="M 50,20 L 260,20 Q 255,90 245,160 L 50,160 Z"
            fill={selectedCounty === 'all' || selectedCounty === 'palm-beach' ? 'url(#palmBeachGrad)' : '#161B19'}
            stroke="#46524E"
            strokeWidth={selectedCounty === 'palm-beach' ? '1.5' : '0.75'}
            strokeDasharray="4 3"
            className="transition-colors duration-300"
          />

          {/* Broward County Zone */}
          <path
            d="M 50,160 L 245,160 Q 235,220 230,290 L 50,290 Z"
            fill={selectedCounty === 'all' || selectedCounty === 'broward' ? 'url(#browardGrad)' : '#161B19'}
            stroke="#46524E"
            strokeWidth={selectedCounty === 'broward' ? '1.5' : '0.75'}
            strokeDasharray="4 3"
            className="transition-colors duration-300"
          />

          {/* Miami-Dade County Zone */}
          <path
            d="M 50,290 L 230,290 Q 220,340 240,380 Q 220,410 180,420 L 50,420 Z"
            fill={selectedCounty === 'all' || selectedCounty === 'miami-dade' ? 'url(#miamiDadeGrad)' : '#161B19'}
            stroke={selectedCounty === 'miami-dade' ? '#C56D4C' : '#46524E'}
            strokeWidth={selectedCounty === 'miami-dade' ? '1.5' : '0.75'}
            strokeDasharray="4 3"
            className="transition-colors duration-300"
          />

          {/* Major Transit Corridor Paths: I-95 & Palmetto Express Lines */}
          <path
            d="M 235,30 Q 230,120 220,220 Q 215,280 205,340 L 195,390"
            fill="none"
            stroke="#8A9691"
            strokeWidth="1.2"
            strokeOpacity="0.5"
          />
          <path
            d="M 180,310 Q 170,330 180,360 Q 200,380 215,395"
            fill="none"
            stroke="#C56D4C"
            strokeWidth="1.2"
            strokeDasharray="3 2"
            strokeOpacity="0.8"
          />

          {/* County Watermark Labels */}
          <text x="65" y="90" fill="#8A9691" opacity="0.4" fontSize="9" letterSpacing="0.2em">
            PALM BEACH COUNTY
          </text>
          <text x="65" y="210" fill="#8A9691" opacity="0.4" fontSize="9" letterSpacing="0.2em">
            BROWARD COUNTY
          </text>
          <text x="65" y="325" fill="#C56D4C" opacity="0.75" fontSize="9.5" fontWeight="600" letterSpacing="0.2em">
            MIAMI-DADE COUNTY (HQ)
          </text>

          {/* Atlantic Ocean Label */}
          <text x="270" y="230" fill="#46524E" opacity="0.6" fontSize="8" letterSpacing="0.25em" transform="rotate(90 270 230)">
            ATLANTIC CORRIDOR
          </text>

          {/* Pinpoint Hub Markers */}
          {hubs.map((hub) => {
            const isMatch = selectedCounty === 'all' || selectedCounty === hub.county;
            const isHovered = hoveredHub === hub.id;

            return (
              <g
                key={hub.id}
                className="cursor-pointer transition-opacity duration-300"
                opacity={isMatch ? 1 : 0.25}
                onMouseEnter={() => setHoveredHub(hub.id)}
                onMouseLeave={() => setHoveredHub(null)}
              >
                {/* Radar Ring for HQ */}
                {hub.isHQ && (
                  <>
                    <circle
                      cx={hub.x}
                      cy={hub.y}
                      r="16"
                      fill="none"
                      stroke="#C56D4C"
                      strokeWidth="1"
                      strokeOpacity="0.4"
                      className="animate-ping"
                      style={{ transformOrigin: `${hub.x}px ${hub.y}px`, animationDuration: '3s' }}
                    />
                    <circle
                      cx={hub.x}
                      cy={hub.y}
                      r="10"
                      fill="none"
                      stroke="#C56D4C"
                      strokeWidth="1.2"
                      strokeOpacity="0.7"
                    />
                  </>
                )}

                {/* Hub Point */}
                <circle
                  cx={hub.x}
                  cy={hub.y}
                  r={hub.isHQ ? '4.5' : '3.5'}
                  fill={hub.isHQ ? '#C56D4C' : isHovered ? '#C56D4C' : '#FAFBF9'}
                  stroke="#161B19"
                  strokeWidth="1.5"
                />

                {/* Hub Text Label */}
                <text
                  x={hub.x + (hub.isHQ ? 14 : 10)}
                  y={hub.y + 3}
                  fill={hub.isHQ ? '#FAFBF9' : isHovered ? '#C56D4C' : '#DCE4E1'}
                  fontSize={hub.isHQ ? '10' : '9'}
                  fontWeight={hub.isHQ ? '600' : '400'}
                  letterSpacing="0.08em"
                >
                  {hub.name}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Latitude & Longitude Coordinate Badges (Edge Overlays) */}
        <div className="absolute top-3 left-4 font-mono text-[9px] text-[#8A9691] tracking-widest uppercase">
          26°42' N / 80°03' W
        </div>
        <div className="absolute bottom-3 left-4 font-mono text-[9px] text-[#C56D4C] tracking-widest uppercase flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-[#C56D4C]" />
          <span>HQ: 25.8576° N, 80.2781° W (HIALEAH)</span>
        </div>
        <div className="absolute bottom-3 right-4 font-mono text-[9px] text-[#8A9691] tracking-widest uppercase">
          SCALE: 0 — 30 MILES
        </div>
      </div>

      {/* Bottom Information Card: Selected Region Context */}
      <div className="p-4 sm:p-5 bg-[#183635]/80 border-t border-[#FAFBF9]/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#DCE4E1] flex items-center gap-1.5">
              <span>ACTIVE SERVICE REGION</span>
              <span className="text-[#FAFBF9]">·</span>
              <span className="text-[#C56D4C] font-semibold">
                {selectedCounty === 'all'
                  ? 'TRI-COUNTY SOUTH FLORIDA'
                  : countyInfo[selectedCounty].name}
              </span>
            </div>
            <p className="text-[#DCE4E1] text-[11px] mt-0.5">
              {selectedCounty === 'all'
                ? 'Full coverage across Miami-Dade, Broward, and Palm Beach residential corridors.'
                : countyInfo[selectedCounty].coverageNote}
            </p>
          </div>

          <a
            href="#booking"
            className="btn-motion px-4 py-2 bg-[#FAFBF9] text-[#183635] text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-[#C56D4C] hover:text-[#FAFBF9] shrink-0"
          >
            DISPATCH SERVICE HERE
          </a>
        </div>
      </div>
    </div>
  );
};
