import StanWars from "../../assets/img/stan-wars.png";
import Zest from "../../assets/img/zest.png";
import PlayOfShadows from "../../assets/img/play-of-shadows.png";

const ProjectData = [
  {
    name: "Volunteering",
    text: (
      <>
        Online platform connecting <strong>nonprofit</strong> organizations with{" "}
        <strong>volunteers</strong> and <strong>donors</strong>.
      </>
    ),
    tags: ["Data visualization", "UX/UI design", "React", "d3.js"],
    image: Zest,
  },
  {
    name: "Zest",
    text: (
      <>
        <strong>Interaction-focused</strong> streaming platform, designed for{" "}
        <strong>live events</strong>
      </>
    ),
    tags: ["Data visualization", "UX/UI design", "React", "d3.js"],
    image: Zest,
  },
  {
    name: (
      <>
        <span className="avoid-wrap">Stan Wars:</span>{" "}
        <span className="avoid-wrap">the Rise of a New Army</span>
      </>
    ),
    text: (
      <>
        Interactive <strong>data visualizations</strong> about stan groups and{" "}
        <strong>hashtag hijacking</strong>
      </>
    ),
    tags: ["Data visualization", "UX/UI design", "React", "d3.js"],
    image: StanWars,
  },
  {
    name: "Paola Mirai AR Jewels",
    text: (
      <>
        <strong>Augmented reality</strong> app for trying on 3D{" "}
        <strong>virtual jewels</strong> using a smartphone camera
      </>
    ),
    tags: ["AR", "UX/UI design", "Unity3D", "Computer vision"],
    image: StanWars,
  },
  {
    name: "Play of Shadows",
    text: (
      <>
        A mind-bending puzzle <strong>videogame</strong> about{" "}
        <strong>light and shadows</strong>
      </>
    ),
    tags: ["Information design", "UX/UI design", "React"],
    image: PlayOfShadows,
  },
];

export default ProjectData;
