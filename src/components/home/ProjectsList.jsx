import { useState, useEffect, useRef } from "react";
import { Vector } from 'p5';

import ProjectsItem from "./ProjectsItem";
import ProjectData from "./ProjectsData";

function ProjectsList() {

    const animationStateRef = useRef({
        mouseX: 0,
        mouseY: 0,
        targetX: 0,
        targetY: 0,
        distanceX: 0,
        distanceY: 0,
        request: null
    });

    const bubbleRef = useRef(null);
    const bubbleBackgroundRef = useRef(null);

    const [bubbleVisible, setbubbleVisible] = useState(false);

    const handleHover = (isHovering) => {
        if (isHovering) {
            setbubbleVisible(true);
        } else {
            setbubbleVisible(false);
        }
    }

    const remToPixels = (rem) => {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    }

    const radToDeg = (rad) => {
        return rad * (180/Math.PI);
    }

    useEffect(() => {
      const updateMousePosition = (e) => {
          animationStateRef.current.mouseX = e.x;
          animationStateRef.current.mouseY = e.y;
      };
      window.addEventListener('mousemove', updateMousePosition);

      return () => {
        window.removeEventListener('mousemove', updateMousePosition);
      };
    }, []);

    useEffect(() => {
        const followCursor = () => {
            animationStateRef.current.request = requestAnimationFrame(followCursor);

            let {
                mouseX,
                mouseY,
                targetX,
                targetY,
                distanceX,
                distanceY
            } = animationStateRef.current;

            if(!targetX | !targetY) {
                animationStateRef.current.targetX = mouseX;
                animationStateRef.current.targetY = mouseY;
            } else {
                animationStateRef.current.distanceX = (mouseX - targetX) * 0.15;
                animationStateRef.current.distanceY = (mouseY - targetY) * 0.15;

                if (Math.abs(animationStateRef.current.distanceX) + Math.abs(animationStateRef.current.distanceY) < 0.1) {
                    animationStateRef.current.targetX = mouseX;
                    animationStateRef.current.targetY = mouseY;
                } else {
                    animationStateRef.current.targetX += distanceX;
                    animationStateRef.current.targetY += distanceY;
                }
            }

            let distance = Math.sqrt(distanceX*distanceX + distanceY*distanceY) * 0.01;
            if (distance > 0.2) {
                distance = 0.2;
            }
            let direction = new Vector(distanceX, distanceY);
            let angle = radToDeg(direction.heading());

            bubbleRef.current.style.transform = 
            `translate(${animationStateRef.current.targetX - remToPixels(5)}px, ${animationStateRef.current.targetY - remToPixels(5.5)}px)`;
            bubbleBackgroundRef.current.style.transform = 
            `rotate(${angle}deg)
            scaleX(${1 + distance}) 
            scaleY(${1 - distance})`;
        };

        followCursor();

        return () => cancelAnimationFrame(animationStateRef.current.request);
    }, [])

    const projectsListItems = ProjectData;
    return (
        <div className="projects-list">
            {projectsListItems.map((item, index) => (
                <ProjectsItem key={index} name={item.name} text={item.text} tags={item.tags} image={item.image} handleHover={handleHover} />
            ))}
            <div className="exploreBubble" ref={bubbleRef}>
            <div className={`exploreBubble__content ${bubbleVisible?'exploreBubble__content--show':'exploreBubble__content--hide'}`}>
                <div className="exploreBubble__background" ref={bubbleBackgroundRef}></div>
                <span>Explore</span> 
            </div>
            </div>
        </div>
    )
}

export default ProjectsList
