import StanWars from "../../assets/img/stan-wars.png";
import Zest from "../../assets/img/zest.png";
import Volunteering from "../../assets/img/cover.webp";
import PlayOfShadows from "../../assets/img/play-of-shadows.png";
import PaolaMirai from "../../assets/img/paolamirai.webp";

const ProjectData = [
  {
    name: "volunteering",
    text: (
      <>
        Online platform connecting <strong>nonprofit</strong> organizations with{" "}
        <strong>volunteers</strong> and <strong>donors</strong>.
      </>
    ),
    tags: ["Data visualization", "UX/UI design", "React", "d3.js"],
    image: Volunteering,
    headline: (
      <>
        A digital portal for <span className="highlight">non profit</span>{" "}
        sector with <span className="highlight">volunteers</span> and{" "}
        <span className="highlight">donors</span>
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
    overview: {
      headline:
        "Digital concerts made easy, accessible and social experiences worth to pay for",
      paragraph:
        "It is to provide the audience with an interactive and accessible experience. We want to make again the live concert a social experience that is worth to pay for, even in this period of social distancing.",
    },
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
    summary: [
      {
        title: "research",
        content: ["Interviews", "User Personas", "Journey maps"],
      },
      {
        title: "define",
        content: ["User insight", "Concept definition", "Key features"],
      },
      {
        title: "structure",
        content: ["Ecosystem map", "Information architecture"],
      },
      {
        title: "prototype",
        content: ["Wireframe", "Design system", "High-fidelity prototype"],
      },
    ],
    chapters: [
      {
        title: "Research",
        sections: [
          {
            title: "user interviews",
            headline:
              "Understanding the organizations' main needs and discovering motivations and goals behind different types of volunteers",
            paragraph:
              "It is to provide the audience with an interactive and accessible experience. We want to make again the live concert a social experience that is worth to pay for, even in this period of social distancing.",
            contents: [
              {
                main: {
                  image: "/research/0.png",
                },
                support: {
                  title: "Interviews with artists",
                  text: "Digital concerts made easy, accessible and social experiences worth to pay for.",
                },
              },
            ],
          },
          {
            title: "user insights",
            contents: [
              {
                main: {
                  carousel: true,
                  images: [
                    "/insights/0.png",
                    "/insights/1.png",
                    "/insights/2.png",
                  ],
                },
              },
            ],
          },
          {
            title: "user personas",
            contents: [
              {
                main: {
                  carousel: true,
                  images: [
                    "/personas/0.png",
                    "/personas/1.png",
                    "/personas/2.png",
                    "/personas/3.png",
                    "/personas/4.png",
                    "/personas/5.png",
                  ],
                },
                support: {
                  title: "two coordinators, four volunteers",
                  text: "Digital concerts made easy, accessible and social experiences worth to pay for.",
                },
              },
            ],
          },
        ],
      },
      {
        title: "Define",
        sections: [
          {
            title: "concept definition",
            headline:
              "Developing a platform meeting the goals and needs of organizations and volunteers",
            paragraph:
              "It is to provide the audience with an interactive and accessible experience. We want to make again the live concert a social experience that is worth to pay for, even in this period of social distancing.",
            contents: [
              {
                main: {
                  image: "/concept/1.png",
                },
              },
            ],
          },
          {
            title: "key features",
            contents: [
              {
                main: {
                  image: "/concept/0.png",
                },
                support: {
                  title: "three volunteering options",
                  text: "Digital concerts made easy, accessible and social experiences worth to pay for.",
                },
              },
              {
                main: {
                  image: "/concept/2.png",
                },
                support: {
                  title: "two fundraising types",
                  text: "Digital concerts made easy, accessible and social experiences worth to pay for.",
                },
              },
            ],
          },
        ],
      },
      {
        title: "Structure",
        sections: [
          {
            title: "ecosystem map",
            headline:
              "Mapping the service ecosystem to highlight main stakeholders, service components and their relationships",
            paragraph:
              "It is to provide the audience with an interactive and accessible experience. We want to make again the live concert a social experience that is worth to pay for, even in this period of social distancing.",
            contents: [
              {
                main: {
                  image: "/ecosystem.png",
                },
              },
            ],
          },
          {
            title: "information architecture",
            contents: [
              {
                main: {
                  image: "/information_architecture.png",
                },
              },
            ],
          },
        ],
      },
      {
        title: "Prototype",
        sections: [
          {
            title: "wireframe",
            headline:
              "Mapped the service ecosystem highlighting main stakeholders and their relationships",
            paragraph:
              "It is to provide the audience with an interactive and accessible experience. We want to make again the live concert a social experience that is worth to pay for, even in this period of social distancing.",
            contents: [
              {
                main: {
                  wireframe: true,
                  screens: [
                    [
                      {
                        interactions: [],
                      },
                      {
                        interactions: [],
                      },
                    ],
                    [
                      {
                        interactions: [],
                      },
                      {
                        interactions: [],
                      },
                    ],
                  ],
                },
              },
            ],
          },
          {
            title: "design system",
            headline:
              "Mapped the service ecosystem highlighting main stakeholders and their relationships",
            paragraph:
              "It is to provide the audience with an interactive and accessible experience. We want to make again the live concert a social experience that is worth to pay for, even in this period of social distancing.",
            contents: [
              {
                main: {
                  carousel: true,
                  images: [
                    "/design system/0.png",
                    "/design system/1.png",
                    "/design system/2.png",
                    "/design system/3.png",
                    "/design system/4.png",
                    "/design system/5.png",
                  ],
                },
              },
            ],
          },
          {
            title: "high-fidelity prototype",
            contents: [
              {
                main: {
                  image: "/overview/0.webp",
                },
                support: {
                  title: "three volunteering options",
                  text: "Digital concerts made easy, accessible and social experiences worth to pay for.",
                },
              },
            ]
          }
        ],
      },
    ],
  },
  {
    name: "paola mirai ar jewels",
    text: (
      <>
        <strong>Augmented reality</strong> app for trying on 3D{" "}
        <strong>virtual jewels</strong> using a smartphone camera
      </>
    ),
    tags: ["AR", "UX/UI design", "Unity3D", "Computer vision"],
    image: PaolaMirai,
  },
  {
    name: "zest",
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
    name: "play of shadows",
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
