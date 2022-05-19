import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import ProjectDetails from "./pages/ProjectDetails";
import Lottie from "react-lottie-player";
import introAnimation from "./assets/intro_animation.json";
import ScrollToTop from "./components/ScrollToTop";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  const onAnimationEnd = () => {
    console.log("animation ended");
    setIsIntroComplete(true);
  };

  const projectProps = {
    name: "volunteering",
    headline: (
      <>
        Translating <span className="highlight">social dynamics</span> of live
        events into the <span className="highlight">digital space</span>
      </>
    ),
    info: [
      { label: "time frame", text: "September 2021 - March 2022" },
      { label: "type of project", text: "Thesis solo project" },
      {
        label: "I was involved in",
        text: "UX research, UX design, UI design, prototyping",
      },
      { label: "Tools", text: "Figma, Illustrator, React" },
    ],
    tags: ["nonprofit", "UX/UI design", "job posting"],
    highlights: [
      {
        title: "explore",
        text: "Digital concerts made easy, accessible and social experiences worth to pay for.",
      },
      {
        title: "engage",
        text: "Digital concerts made easy, accessible and social experiences worth to pay for.",
      },
      {
        title: "interact",
        text: "Digital concerts made easy, accessible and social experiences worth to pay for.",
      },
    ],
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
        <Route
          path="/project"
          element={
            <ProjectDetails
              name={projectProps.name}
              headline={projectProps.headline}
              info={projectProps.info}
              tags={projectProps.tags}
              highlights={projectProps.highlights}
            />
          }
        />
      </Routes>
      <ScrollToTop />
    </Router>
  );
}

export default App;
