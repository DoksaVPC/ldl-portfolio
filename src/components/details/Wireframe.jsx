import { useState } from "react";
import ToggleButton from "../shared/ToggleButton";
import WireframeScreen from "./WireframeScreen";

function Wireframe({ projectName, screens }) {
  const [isMobile, setIsMobile] = useState(false);

  const changeVersion = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className="wireframe">
      <ToggleButton options={["Desktop", "Mobile"]} onToggle={changeVersion} />
      <div className="wireframe__container">
        {screens.map((row, rowIndex) => (
          <div className="wireframe__row" key={"wireframe row " + rowIndex}>
            {row.map((screen, index) => (
              <WireframeScreen
                projectName={projectName}
                index={index + rowIndex * 2}
                interactions={screen.interactions}
                isMobile={isMobile}
                key={"wireframe" + index}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wireframe;
