import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import ProjectDetails from "./pages/ProjectDetails";
import ProjectData from "./components/home/ProjectsData";
import Lottie from "react-lottie-player";
import introAnimation from "./assets/intro_animation.json";
import ScrollToTop from "./components/ScrollToTop";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/shared/Footer";

function App() {
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  const onAnimationEnd = () => {
    console.log("animation ended");
    setIsIntroComplete(true);
  };

  return (
    <Router>
      {/* <Lottie 
    animationData={introAnimation}
    play
    loop={false}
    style={{position: 'absolute', width: '100%', zIndex: 2000}}
    onComplete={onAnimationEnd}
    /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/:projectId" element={<ProjectDetails />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </Router>
  );
}

export default App;
