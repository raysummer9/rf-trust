import { ServicesHeroSection, ServicesGridSection, AccountsTabsSection, BeyondBasicsSection, LoansTabsSection } from '@/sections/Services';
import WhyUsSection from '@/sections/WhyUsSection';
import ContactCtaSection from '@/sections/ContactCtaSection';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <main>
      <ServicesHeroSection />
      <ServicesGridSection />
      <AccountsTabsSection />
      <BeyondBasicsSection />
      <WhyUsSection />
      <LoansTabsSection />
      <ContactCtaSection />
      <Footer />
    </main>
  );
} 