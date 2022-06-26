import StanWars from "../../assets/img/stan-wars.png";
import Zest from "../../assets/img/zest.png";
import Volunteering from "../../assets/img/cover.webp";
import PlayOfShadows from "../../assets/img/play-of-shadows.png";
import PaolaMirai from "../../assets/img/paolamirai.webp";
import Card from "../shared/Card";

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
                  customContent: (
                    <>
                      <div className="fact">
                        <h5 className="fact__heading">
                          <span className="fact__heading-number">10</span>
                          <span className="fact__heading-text">Interviews</span>
                        </h5>
                        <ul>
                          <li className="fact__list-item">
                            <div className="arrow"></div>
                            <p>
                              5 di sesso <strong>femminile</strong>, 5 di sesso{" "}
                              <strong>maschile</strong>
                            </p>
                          </li>
                          <li className="fact__list-item">
                            <div className="arrow"></div>
                            <p>
                              Tra i <strong>25</strong> e i <strong>75</strong>{" "}
                              anni
                            </p>
                          </li>
                          <li className="fact__list-item">
                            <div className="arrow"></div>
                            <p>
                              Residenti in <strong>diverse regioni</strong>{" "}
                              italiane
                            </p>
                          </li>
                          <li className="fact__list-item">
                            <div className="arrow"></div>
                            <p>
                              Che ricoprono <strong>diversi ruoli</strong> in
                              organizzazioni non profit: coordinatori,
                              dipendenti, volontari, volontari occasionali
                            </p>
                          </li>
                        </ul>
                      </div>
                    </>
                  ),
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
                  insights: [
                    {
                      mainText:
                        "Main headline summarizing the insight, telling about an issue that emerged while i was interviewing people.",
                      bodyText:
                        "A more in-depth explaination of the issue, highlighting some opportunities of intervento. Giusto tre o quattro righe che diano un contesto.",
                      image: "/insights/0.png",
                      quote: {
                        text: "ciao questa è una citazione.",
                        author: "Michele, 48",
                      },
                    },
                    {
                      mainText: "ciao",
                      bodyText: "ciao ciao",
                      image: null,
                      quote: {
                        text: "ciao questa è una citazione.",
                        author: "Michele, 48",
                      },
                    },
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
                  customContent: (
                    <Card
                      projectName={"volunteering"}
                      cards={[
                        {
                          heading: (
                            <>
                              Exploring <br /> the diverse world <br /> of Third
                              Sector
                            </>
                          ),
                          text: "Finding nonprofit organizations by location, social causes, type or size.",
                          image: "/concept/icon0.svg",
                        },
                        {
                          heading: (
                            <>
                              The right <br /> volunteer for <br /> the right
                              activity
                            </>
                          ),
                          text: "Volunteer activities focused on personal skills and preferences, with varying degrees of commitment.",
                          image: "/concept/icon1.svg",
                        },
                        {
                          heading: (
                            <>
                              Funding causes <br /> and efforts, <br /> not just
                              projects
                            </>
                          ),
                          text: "Inclusion of fundraising campaigns that aim to cover the certified expenses that organizations have to face.",
                          image: "/concept/icon2.svg",
                        },
                      ]}
                    />
                  ),
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
            ],
          },
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
