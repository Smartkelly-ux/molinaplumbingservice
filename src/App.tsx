/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Preloader } from './components/Preloader.tsx';
import { DesktopRail } from './components/DesktopRail.tsx';
import { MobileNav } from './components/MobileNav.tsx';
import { Hero } from './components/Hero.tsx';
import { ServiceBand } from './components/ServiceBand.tsx';
import { TheResponse } from './components/TheResponse.tsx';
import { ProblemIndex } from './components/ProblemIndex.tsx';
import { RepairHero } from './components/RepairHero.tsx';
import { ServiceDetail } from './components/ServiceDetail.tsx';
import { CustomerJourney } from './components/CustomerJourney.tsx';
import { TrustBlock } from './components/TrustBlock.tsx';
import { SouthFlorida } from './components/SouthFlorida.tsx';
import { InlineBooking } from './components/InlineBooking.tsx';
import { ContactBlock } from './components/ContactBlock.tsx';
import { FinalCta } from './components/FinalCta.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#F4F5F2] text-[#161B19] antialiased">
      {/* Dispatch 001 Preloader */}
      {!preloaderDone && (
        <Preloader onComplete={() => setPreloaderDone(true)} />
      )}

      {/* Desktop Fixed Left Utility Rail (88-110px width) */}
      <DesktopRail />

      {/* Tablet & Mobile Top Header with Hamburger */}
      <MobileNav />

      {/* Main Page Content - Offset by 96px on desktop for the left rail */}
      <main className="lg:pl-[96px] w-full flex flex-col overflow-x-hidden">
        {/* Hero Section */}
        <Hero imageLoaded={preloaderDone} />

        {/* Section 01: Service Band */}
        <ServiceBand />

        {/* Section 02: The Response */}
        <TheResponse />

        {/* Section 03: Problem Index */}
        <ProblemIndex />

        {/* Section 04: Full Screen Image */}
        <RepairHero />

        {/* Section 05: Service Detail */}
        <ServiceDetail />

        {/* Section 06: How the Customer Journey Works */}
        <CustomerJourney />

        {/* Section 07: Trust Without Testimonials */}
        <TrustBlock />

        {/* Section 08: South Florida */}
        <SouthFlorida />

        {/* Section 09: Inline Booking */}
        <InlineBooking />

        {/* Section 10: Contact Block */}
        <ContactBlock />

        {/* Final CTA */}
        <FinalCta />

        {/* Horizontal Footer */}
        <Footer />
      </main>
    </div>
  );
}
