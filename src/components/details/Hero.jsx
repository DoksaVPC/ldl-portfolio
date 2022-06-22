import { useState, useRef, useEffect, useLayoutEffect } from "react";

function Hero({ name }) {
  const animationStateRef = useRef({
    containerY: 0,
    containerHeight: 0,
    mouseX: 0,
    mouseY: 0,
    scrollY: 0,
    targetX: 0,
    targetY: 0,
    distanceX: 0,
    distanceY: 0,
    request: null,
  });

  const containerRef = useRef(null);
  const backgroundRef = useRef(null);
  const foregroundRef = useRef(null);

  useLayoutEffect(() => {
    let dimensions = containerRef.current.getBoundingClientRect();
    animationStateRef.current.containerHeight = dimensions.height;
    animationStateRef.current.containerY = dimensions.y + window.scrollY;
    console.log(animationStateRef.current.containerHeight);
    console.log(animationStateRef.current.containerY);
  }, []);

  useEffect(() => {
    const updateMousePosition = (e) => {
      let centerX = window.innerWidth / 2;
      let centerY =
        animationStateRef.current.containerY -
        window.scrollY +
        animationStateRef.current.containerHeight / 2;
      animationStateRef.current.mouseX =
        (e.x - centerX) / (window.innerWidth / 2);
      animationStateRef.current.mouseY =
        (e.y - centerY) / (animationStateRef.current.containerHeight / 2);
    };
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  useEffect(() => {
    const updateScrollPosition = () => {
      animationStateRef.current.scrollY = window.scrollY / window.innerHeight;
    };
    document.addEventListener("scroll", updateScrollPosition);

    return () => {
      document.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

  useEffect(() => {
    const followCursor = () => {
      animationStateRef.current.request = requestAnimationFrame(followCursor);

      let { mouseX, mouseY, scrollY, targetX, targetY, distanceX, distanceY } =
        animationStateRef.current;

      if (!targetX | !targetY) {
        animationStateRef.current.targetX = mouseX;
        animationStateRef.current.targetY = mouseY + scrollY * 4;
      } else {
        animationStateRef.current.distanceX = (mouseX - targetX) * 0.1;
        animationStateRef.current.distanceY =
          (mouseY + scrollY * 4 - targetY) * 0.1;

        if (
          Math.abs(animationStateRef.current.distanceX) +
            Math.abs(animationStateRef.current.distanceY) <
          0.0001
        ) {
          animationStateRef.current.targetX = mouseX;
          animationStateRef.current.targetY = mouseY + scrollY * 4;
        } else {
          animationStateRef.current.targetX += distanceX;
          animationStateRef.current.targetY += distanceY;
        }
      }

      backgroundRef.current.style.transform = `translate(${
        -50 - animationStateRef.current.targetX * 1.6
      }%, ${-40 - animationStateRef.current.targetY * 1.8}%)`;
      foregroundRef.current.style.transform = `translate(${
        -50 - animationStateRef.current.targetX * 2.25
      }%, ${-45 - animationStateRef.current.targetY * 3.2}%)`;
    };

    followCursor();

    return () => cancelAnimationFrame(animationStateRef.current.request);
  }, []);

  return (
    <section className="details__hero" ref={containerRef}>
      <img
        src={
          process.env.PUBLIC_URL +
          "/images/volunteering/overview/hero-back.webp"
        }
        alt={"hero image background " + name}
        ref={backgroundRef}
      />
      <img
        src={
          process.env.PUBLIC_URL +
          "/images/volunteering/overview/hero-front.webp"
        }
        alt={"hero image foreground " + name}
        ref={foregroundRef}
      />
    </section>
  );
}

export default Hero;
