import { useState } from "react";
import ToggleButton from "../shared/ToggleButton";

function Wireframe({ projectName }) {
  const [isMobile, setIsMobile] = useState(false);

  const changeVersion = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className="wireframe">
      <ToggleButton options={["Desktop", "Mobile"]} onToggle={changeVersion} />
      <div className="wireframe__container">
        <img
          src={
            process.env.PUBLIC_URL +
            "/images/" +
            projectName +
            "/wireframes/desktop.webp"
          }
          alt={
            "low-fidelity prototype of the desktop version of " + projectName
          }
          className={`wireframe__image ${!isMobile ? "u_visible" : "u_hidden"}`}
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "/images/" +
            projectName +
            "/wireframes/mobile.webp"
          }
          alt={"low-fidelity prototype of the mobile version of " + projectName}
          className={`wireframe__image ${isMobile ? "u_visible" : "u_hidden"}`}
        />
      </div>
    </div>
  );
}

export default Wireframe;
