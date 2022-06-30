import { ReactComponent as DesktopTemplate } from "../../assets/wireframe_desktop.svg";
import { ReactComponent as MobileTemplate } from "../../assets/wireframe_mobile.svg";

import {useLayoutEffect, useRef} from "react";

function WireframeScreen({ projectName, index, interactions, isMobile, setPosition, setStartPoints}) {

  const screenRef = useRef(null);
  const startPointsRef = useRef([]);
  
  useLayoutEffect(() => {
    let startPoints = [];

    startPointsRef.current.forEach((point)=>{
      let rect = point.getBoundingClientRect();
      let pointCoordinates = {
        x: rect.left + window.scrollX,
        y: rect.top + window.scrollY,
        width: rect.width,
        height: rect.height
      }

      startPoints.push(pointCoordinates);
    })

    setStartPoints(index, startPoints);


    let rect = screenRef.current.getBoundingClientRect();
    setPosition(index, rect.left + window.scrollX, rect.top + window.scrollY);
  })
  


  return (
    <div className="wireframe__screen">
      <div
        className={`wireframe__screen-container ${
          !isMobile
            ? "wireframe__screen-container--desktop"
            : "wireframe__screen-container--mobile"
        }`}  ref={screenRef}>
        <img
          className="wireframe__screen-image"
          src={
            process.env.PUBLIC_URL +
            "/images/" +
            projectName +
            (isMobile ? "/wireframes/mobile/" : "/wireframes/desktop/") +
            index +
            ".webp"
          }
          alt={projectName + " wireframe screen " + index}
        />
        {interactions.map((interaction, index)=>(
          <div className="wireframe__start-point" style={{top: interaction.y + "%", left: interaction.x + "%"}} ref={(element)=>startPointsRef.current.splice(index, 1, element)}></div>
        ))}
      </div>
      {!isMobile ? (
        <DesktopTemplate className="wireframe__template wireframe__template--desktop" />
      ) : (
        <MobileTemplate className="wireframe__template wireframe__template--mobile" />
      )}
    </div>
  );
}

export default WireframeScreen;
