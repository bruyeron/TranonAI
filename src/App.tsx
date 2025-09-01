import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";

import Home from "./pages/Home";
import { AboutSection } from "./pages/About";
import { TeamSection } from "./pages/equipe";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/team" element={<TeamSection />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
