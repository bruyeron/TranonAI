import "./index.css";
import HeroSection from "./components/hero";
import Probleme from "./components/probleme";
import { FeaturesSection } from "./components/FeatureSection";
import QuickInstall from "./components/quickInstall";
import ControleMobile from "./components/controleMobile";
import { AppSection } from "./components/appSection";

function App() {
  return (
    <>
      <HeroSection />
      <Probleme />
      <FeaturesSection />
      <QuickInstall />
      <ControleMobile />
      <AppSection />
    </>
  );
}

export default App;
