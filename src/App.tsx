import "./index.css";
import HeroSection from "./components/hero";
import Probleme from "./components/probleme";
import Innovation from "./components/innovation";
import QuickInstall from "./components/quickInstall";
import Footer from "./components/footer";
import ControleMobile from "./components/controleMobile";
import FAQSection from "./components/FaqsSection";
import { FeaturesSection } from "./components/FeatureSection";
import { PricingSection } from "./components/pricingSection";
import { TestimonialsSection } from "./components/testimonialSection";
import { AppSection } from "./components/appSection";

function App() {
  return (
    <>
      <HeroSection />
      <Probleme />
      <ControleMobile />
      <AppSection />
      <FeaturesSection />
      <QuickInstall />
      <Innovation />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </>
  );
}

export default App;
