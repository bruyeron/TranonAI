import "../index.css";
import HeroSection from "../components/hero";
import Probleme from "../components/probleme";
import { FeaturesSection } from "../components/FeatureSection";
import QuickInstall from "../components/quickInstall";
import ControleMobile from "../components/controleMobile";
import { AppSection } from "../components/appSection";
import Innovation from "../components/innovation";
import { PricingSection } from "../components/pricingSection";
import { TestimonialsSection } from "../components/testimonialSection";
import FAQSection from "../components/FaqsSection";

function App() {
  return (
    <>
      <HeroSection />
      <Probleme />
      <FeaturesSection />
      <QuickInstall />
      <ControleMobile />
      <AppSection />
      <Innovation />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}

export default App;
