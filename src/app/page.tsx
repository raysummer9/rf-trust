import HeroSection from "../sections/HeroSection";
import VideoSection from "../sections/VideoSection";
import WhoWeAreSection from "../sections/WhoWeAreSection";
import ExpertiseSection from "../sections/ExpertiseSection";
import WhyUsSection from "../sections/WhyUsSection";
import GlobalPresenceSection from "../sections/GlobalPresenceSection";
import ContactCtaSection from "../sections/ContactCtaSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <WhoWeAreSection />
      <ExpertiseSection />
      <WhyUsSection />
      <GlobalPresenceSection />
      <ContactCtaSection />
      <Footer />
    </>
  );
}
