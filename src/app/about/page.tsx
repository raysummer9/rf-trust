"use client";
import { AboutHeroSection, CommitmentSection, OurJourneySection, TeamsSection, TridentTouchSection } from '@/sections/About';
import ContactCtaSection from '@/sections/ContactCtaSection';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

export default function AboutPage() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const el = document.getElementById(window.location.hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <main>
      <AboutHeroSection />
      <CommitmentSection />
      <OurJourneySection />
      <TridentTouchSection />
      <TeamsSection />
      <ContactCtaSection />
      <Footer />
      {/* Other About sections will go here */}
    </main>
  );
} 