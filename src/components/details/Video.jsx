import { useState, useRef, useEffect } from "react";
import ToggleButton from "../shared/ToggleButton";

function Video({ source }) {
  const [isMobile, setIsMobile] = useState(false);
  const mobileVideoRef = useRef(null);
  const desktopVideoRef = useRef(null);
  const videoRect = useRef(null);

  const changeVersion = () => {
    if (isMobile) {
      mobileVideoRef.current.pause();
      desktopVideoRef.current.play();
    } else {
      desktopVideoRef.current.pause();
      mobileVideoRef.current.play();
    }
    setIsMobile(!isMobile);
  };

  const isPlaying = (video) => {
    return !!(
      video.currentTime > 0 &&
      !video.paused &&
      !video.ended &&
      video.readyState > 2
    );
  };

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const playOnScroll = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        if (
          !isPlaying(desktopVideoRef.current) &&
          !isPlaying(mobileVideoRef.current)
        )
          if (!isMobile) {
            desktopVideoRef.current.play();
            console.log("playing");
          } else {
            mobileVideoRef.current.play();
          }
      } else {
        if (
          isPlaying(desktopVideoRef.current) ||
          isPlaying(mobileVideoRef.current)
        )
          if (!isMobile) {
            desktopVideoRef.current.pause();
          } else {
            mobileVideoRef.current.pause();
          }
      }
    };

    const observer = new IntersectionObserver(playOnScroll, observerOptions);
    if (desktopVideoRef.current) observer.observe(desktopVideoRef.current);

    return () => {
      if (desktopVideoRef.current) observer.unobserve(desktopVideoRef.current);
    };
  }, [desktopVideoRef, observerOptions]);

  return (
    <div className="details__video-container">
      <ToggleButton options={["Desktop", "Mobile"]} onToggle={changeVersion} />
      <>
        <video
          className={`details__video ${!isMobile ? "u_visible" : "u_hidden"}`}
          ref={desktopVideoRef}
          loop
          muted>
          <source
            src={process.env.PUBLIC_URL + "/videos" + source + ".mp4"}
            type="video/mp4"
          />
        </video>
        <video
          className={`details__video ${isMobile ? "u_visible" : "u_hidden"}`}
          ref={mobileVideoRef}
          loop
          muted>
          <source
            src={process.env.PUBLIC_URL + "/videos" + source + "-mobile.mp4"}
            type="video/mp4"
          />
        </video>
      </>
    </div>
  );
}

export default Video;
