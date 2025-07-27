import "./index.css";
import HeroSection from "./components/hero";
import NavBar from "./components/navbar";
import { FeaturesSection } from "./components/FeatureSection";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <FeaturesSection />
    </>
  );
}

export default App;
