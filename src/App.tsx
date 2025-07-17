import "./index.css";
import HeroSection from "./components/hero";
import Probleme from "./components/probleme";
import Innovation from "./components/innovation";
import QuickInstall from "./components/quickInstall";
import Footer from "./components/footer";
import ControleMobile from "./components/controleMobile";
import FAQSection from "./components/FaqsSection";
import { FeaturesSection } from "./components/FeatureSection";

function App() {
  return (
    <>
      <HeroSection />
      <Probleme />
      <FeaturesSection />
      <QuickInstall />
      <ControleMobile />
      <Innovation />
      <FAQSection />
      <Footer />
    </>
  );
}

export default App;
