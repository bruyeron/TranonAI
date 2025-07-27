import "./index.css";
import HeroSection from "./components/hero";
import NavBar from "./components/NavBar";
import Probleme from "./components/probleme";
import { FeaturesSection } from "./components/FeatureSection";
import QuickInstall from "./components/quickInstall";
import ControleMobile from "./components/controleMobile";
import { AppSection } from "./components/appSection";
import Innovation from "./components/innovation";
import { PricingSection } from "./components/pricingSection";
import { TestimonialsSection } from "./components/testimonialSection";
import FAQSection from "./components/FaqsSection";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <NavBar />
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
      <Footer />
    </>
  );
}

export default App;
