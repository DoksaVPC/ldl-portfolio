import { ReactComponent as DesktopTemplate } from "../../assets/wireframe_desktop.svg";
import { ReactComponent as MobileTemplate } from "../../assets/wireframe_mobile.svg";

function WireframeScreen({ projectName, index, interactions, isMobile }) {
  return (
    <div className="wireframe__screen">
      <div
        className={`wireframe__screen-container ${
          !isMobile
            ? "wireframe__screen-container--desktop"
            : "wireframe__screen-container--mobile"
        }`}>
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
