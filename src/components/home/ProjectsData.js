import StanWars from "../../assets/img/stan-wars.png";
import Zest from "../../assets/img/zest.png";
import PlayOfShadows from "../../assets/img/play-of-shadows.png";

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
    image: Zest,
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
              "We conducted a research on users through a survey, followed by some interviews with music artists and several focus groups with music fans",
            paragraph:
              "It is to provide the audience with an interactive and accessible experience. We want to make again the live concert a social experience that is worth to pay for, even in this period of social distancing.",
            contents: [
              {
                main: {
                  image: "/overview/0.jpg",
                },
                support: {
                  title: "Online survey",
                  text: "Digital concerts made easy, accessible and social experiences worth to pay for.",
                },
              },
              {
                main: {
                  image: "/overview/0.jpg",
                },
                support: {
                  title: "Interviews with artists",
                  text: "Digital concerts made easy, accessible and social experiences worth to pay for.",
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
                  title: "the personas",
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
            title: "user insights",
            headline:
              "Gathered some insights emerging from the research phase that guided the concept definition",
            paragraph:
              "It is to provide the audience with an interactive and accessible experience. We want to make again the live concert a social experience that is worth to pay for, even in this period of social distancing.",
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
            title: "concept definition",
            contents: [
              {
                main: {
                  image: "/overview/0.jpg",
                },
              },
              {
                main: {
                  image: "/overview/0.jpg",
                },
              },
            ],
          },
          {
            title: "key features",
            contents: [
              {
                main: {
                  image: "/overview/0.jpg",
                },
              },
              {
                main: {
                  image: "/overview/0.jpg",
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
              "Mapped the service ecosystem highlighting main stakeholders and their relationships",
            paragraph:
              "It is to provide the audience with an interactive and accessible experience. We want to make again the live concert a social experience that is worth to pay for, even in this period of social distancing.",
            contents: [
              {
                main: {
                  image: "/overview/0.jpg",
                },
              },
            ],
          },
          {
            title: "information architecture",
            contents: [
              {
                main: {
                  image: "/overview/0.jpg",
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
                    "/overview/0.jpg",
                    "/overview/1.jpg",
                    "/overview/2.jpg",
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
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
    name: "paola mirai ar jewels",
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
