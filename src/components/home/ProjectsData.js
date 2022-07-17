import StanWars from "../../assets/img/stan-wars.png";
import Zest from "../../assets/img/zest.webp";
import Volunteering from "../../assets/img/cover.webp";
import PlayOfShadows from "../../assets/img/play-of-shadows.png";
import PaolaMirai from "../../assets/img/paolamirai.webp";
import Card from "../shared/Card";
import Video from "../details/Video";
import Carousel from "../shared/Carousel";
import Benchmark from "../details/Benchmark";

const ProjectData = {
  projectsList: ["volunteering", "paola-mirai-ar-jewels", "zest"],

  volunteering: {
    name: "volunteering",
    text: (
      <>
        Online platform designed <span className="avoid-wrap">to support</span>{" "}
        the growth of nonprofit organizations.
      </>
    ),
    tags: ["Nonprofit", "Digital transformation", "Web app"],
    image: Volunteering,
    headline: (
      <>
        Facilitating <span className="highlight">collaboration</span> between
        citizens and <span className="highlight">nonprofits</span>
      </>
    ),
    info: [
      { label: "time frame", text: "September 2021 ― March 2022" },
      { label: "type of project", text: "Thesis solo project" },
      {
        label: "I was involved in",
        text: "UX research · UX design · UI design · prototyping",
      },
      { label: "Tools", text: "Figma · Illustrator · React · CSS" },
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
        content: ["Interviews", "User Insights", "User Personas"],
      },
      {
        title: "define",
        content: ["Concept definition", "Key features"],
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
            paragraph: (
              <>
                It is to provide the audience with an interactive and accessible
                experience. We want to make again the live concert a social
                experience that is worth to pay for, even in this period of
                social distancing.
                <h5 className="fact__heading">10 interviewees</h5>
                <ul className="fact__list">
                  <li className="fact__list-item">
                    <div className="arrow arrow--horizontal"></div>
                    <p>
                      5 di sesso <strong>femminile</strong>, 5 di sesso{" "}
                      <strong>maschile</strong>
                    </p>
                  </li>
                  <li className="fact__list-item">
                    <div className="arrow arrow--horizontal"></div>
                    <p>
                      Tra i <strong>25</strong> e i <strong>75</strong> anni
                    </p>
                  </li>
                  <li className="fact__list-item">
                    <div className="arrow arrow--horizontal"></div>
                    <p>
                      Residenti in <strong>diverse regioni</strong> italiane
                    </p>
                  </li>
                  <li className="fact__list-item">
                    <div className="arrow arrow--horizontal"></div>
                    <p>
                      Che ricoprono <strong>diversi ruoli</strong> in
                      organizzazioni non profit: coordinatori, dipendenti,
                      volontari, volontari occasionali
                    </p>
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: "user insights",
            contents: [
              {
                main: {
                  carousel: true,
                  insights: [
                    {
                      mainText: (
                        <>
                          Many nonprofit organizations report a{" "}
                          <strong>lack of expertise</strong> within the sector
                          and a rising need for{" "}
                          <strong>specialized professionals</strong> among
                          volunteers.
                        </>
                      ),
                      bodyText:
                        "A more in-depth explaination of the issue, highlighting some opportunities of intervento. Giusto tre o quattro righe che diano un contesto.",
                      image: "/insights/0.webp",
                      quote: {
                        text: "ciao questa è una citazione.",
                        author: "Michele, 48",
                      },
                    },
                    {
                      mainText: (
                        <>
                          A <strong>major struggle</strong> for many
                          organizations is to <strong>find volunteers</strong>{" "}
                          interested in crucial{" "}
                          <strong>back-office activities</strong>.
                        </>
                      ),
                      bodyText: "ciao ciao",
                      image: "/insights/1.webp",
                      quote: {
                        text: "ciao questa è una citazione.",
                        author: "Michele, 48",
                      },
                    },
                    {
                      mainText: (
                        <>
                          Organizations are increasingly relying on the{" "}
                          <strong>joint employment</strong> of{" "}
                          <strong>professional workers</strong> and{" "}
                          <strong>volunteers</strong>, focusing on the training
                          of the latter.
                        </>
                      ),
                      bodyText: "ciao ciao",
                      image: "/insights/2.webp",
                      quote: {
                        text: "ciao questa è una citazione.",
                        author: "Michele, 48",
                      },
                    },
                    {
                      mainText: (
                        <>
                          The <strong>volunteer modes</strong>, especially among
                          young people, are <strong>varied</strong>, often{" "}
                          <strong>occasional</strong>, and no longer anchored to
                          traditional patterns.
                        </>
                      ),
                      bodyText: "ciao ciao",
                      image: "/insights/3.webp",
                      quote: {
                        text: "ciao questa è una citazione.",
                        author: "Michele, 48",
                      },
                    },
                    {
                      mainText: (
                        <>
                          Most of the <strong>economic resources</strong> are
                          used by institutions to cover their{" "}
                          <strong>operating expenses</strong>, but the main
                          funding options are directed to{" "}
                          <strong>specific projects</strong>.
                        </>
                      ),
                      bodyText: "ciao ciao",
                      image: "/insights/4.webp",
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
              "A web platform where organizations' needs meet supporters' goals to create a network of meaningful collaborations",
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
            headline:
              "From Figma to code: building a highly realistic prototype in React",
            paragraph:
              "It is to provide the audience with an interactive and accessible experience. We want to make again the live concert a social experience that is worth to pay for, even in this period of social distancing.",

            contents: [
              {
                main: {
                  customContent: (
                    <>
                      <Video source="/volunteering/0" />
                    </>
                  ),
                },
                support: {
                  above: true,
                  title: "landing page",
                  text: "Browse through volunteering opportunities, fundraising campaigns or organizations.",
                },
              },
              {
                main: {
                  customContent: (
                    <>
                      <Video source={"/volunteering/1"} />
                    </>
                  ),
                },
                support: {
                  title: "landing page",
                  text: "Browse through volunteering opportunities, fundraising campaigns or organizations.",
                },
              },
              {
                main: {
                  customContent: (
                    <>
                      <Video source="/volunteering/2" />
                    </>
                  ),
                },
                support: {
                  title: "landing page",
                  text: "Browse through volunteering opportunities, fundraising campaigns or organizations.",
                },
              },
              {
                main: {
                  customContent: (
                    <>
                      <Video source="/volunteering/3" />
                    </>
                  ),
                },
                support: {
                  above: true,
                  title: "landing page",
                  text: "Browse through volunteering opportunities, fundraising campaigns or organizations.",
                },
              },
            ],
          },
        ],
      },
    ],
    conclusions:
      "During a few tests with users, the concept was generally very well received. In particular, users found the navigation to be simple and intuitive and the content clear and easily understandable.",
  },
  "paola-mirai-ar-jewels": {
    name: "paola mirai ar jewels",
    text: (
      <>
        <strong>Augmented reality</strong> app for trying on 3D{" "}
        <strong>virtual jewels</strong> using a smartphone camera
      </>
    ),
    tags: ["AR", "Computer vision", "Mobile app"],
    image: PaolaMirai,
    headline: (
      <>
        Delivering{" "}
        <span className="avoid-wrap">
          an <span className="highlight">immersive</span>
        </span>{" "}
        <span className="avoid-wrap">try-on</span> experience through{" "}
        <span className="highlight">AR</span>
      </>
    ),
    info: [
      { label: "time frame", text: "May 2021 ― December 2021" },
      { label: "type of project", text: "Freelance project" },
      {
        label: "I was involved in",
        text: "UX design · UI design · prototyping · development",
      },
      { label: "Tools", text: "Figma · Illustrator · Blender · Unity3D · C#" },
    ],
    overview: {
      headline:
        "Digital concerts made easy, accessible and social experiences worth to pay for",
      paragraph:
        "It is to provide the audience with an interactive and accessible experience. We want to make again the live concert a social experience that is worth to pay for, even in this period of social distancing.",
    },
    highlights: [
      {
        title: "3d views of jewels",
        text: "Digital concerts made easy, accessible and social experiences worth to pay for.",
      },
      {
        title: "browse collections",
        text: "Digital concerts made easy, accessible and social experiences worth to pay for.",
      },
      {
        title: "try jewels on with AR",
        text: "Digital concerts made easy, accessible and social experiences worth to pay for.",
      },
    ],
    summary: [
      {
        title: "client brief",
        content: ["The challenge", "Creative direction"],
      },
      {
        title: "research",
        content: ["Competitor analysis", "Technological research"],
      },
      {
        title: "prototype",
        content: ["Wireframe", "High-fidelity prototype"],
      },
      {
        title: "development",
        content: ["AR implementation", "Working demo", "User testing"],
      },
    ],
    chapters: [
      {
        title: "Research",
        sections: [
          {
            title: "competitor analysis",
            headline: (
              <>
                Comparing the user experience{" "}
                <span className="avoid-wrap">provided by</span> existing{" "}
                solutions and their technological implementation
              </>
            ),
            paragraph:
              "It is to provide the audience with an interactive and accessible experience. We want to make again the live concert a social experience that is worth to pay for, even in this period of social distancing.",
            contents: [
              {
                main: {
                  customContent: (
                    <>
                      <Carousel>
                        <Benchmark
                          projectName="paola-mirai-ar-jewels"
                          index={0}
                          title="manually placed ar"
                          mainText="Very basic AR technique that requires the users to take pictures of their hand and manually place the products on them."
                          pros={["Very easy to implement."]}
                          cons={[
                            "Very unrealistic result.",
                            "Impossible to try the product from different angles.",
                            "Unpratical for the user.",
                          ]}
                        />
                        <Benchmark
                          projectName="paola-mirai-ar-jewels"
                          index={1}
                          title="marker-based ar"
                          mainText="AR experience relying on a printed paper strip to track the user’s hand and place virtual content on top of it."
                          pros={[
                            "Easy to implement.",
                            "Accurate tracking and very realistic result.",
                          ]}
                          cons={[
                            "Requires the user to have a printer available.",
                            "Requires a lot of extra effort from the user.",
                          ]}
                        />
                        <Benchmark
                          projectName="paola-mirai-ar-jewels"
                          index={2}
                          title="non-real time hand tracking"
                          mainText="AR technique that leverages computer vision to track the user’s hand from a picture and place virtual content on it."
                          pros={[
                            "Realistic result.",
                            "Practical user experience.",
                          ]}
                          cons={[
                            "Harder to implement.",
                            "Impossible to try the product from different angles.",
                          ]}
                        />
                      </Carousel>
                    </>
                  ),
                },
              },
            ],
          },
          {
            title: "technological research",
            headline:
              "Finding the right tools to make the experience as immersive, realistic and unconstrained as possible",
            paragraph:
              "It is to provide the audience with an interactive and accessible experience. We want to make again the live concert a social experience that is worth to pay for, even in this period of social distancing.",
            contents: [
              {
                main: {
                  image: "/tech/0.webp",
                },
                support: {
                  title: "tracking the user's hand",
                  text: "An open source set of machine learning solutions bla bla",
                },
              },
              {
                main: {
                  image: "/tech/1.webp",
                },
                support: {
                  title: "visualizing virtual content",
                  text: "An open source set of machine learning solutions bla bla",
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
              "Mapping the service ecosystem to highlight main stakeholders, service components and their relationships",
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
        ],
      },
      {
        title: "Prototype",
        sections: [
          {
            title: "wireframe",
            contents: [{ main: { image: "/wireframe/0.webp" } }],
          },
          {
            title: "high-fidelity prototype",
            contents: [
              {
                main: {
                  customContent: (
                    <>
                      <iframe
                        className="figma-prototype"
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FMnl6JKWobrqMZrldKLHxcM%2FPaola-Mirai-app-wireframe%3Fpage-id%3D0%253A1%26node-id%3D1%253A2%26viewport%3D418%252C-31%252C0.5%26scaling%3Dcontain%26starting-point-node-id%3D1%253A2"
                        allowfullscreen></iframe>
                    </>
                  ),
                },
              },
            ],
          },
        ],
      },
      {
        title: "Development",
        sections: [
          {
            title: "AR implementation",
            contents: [
              {
                main: {
                  customContent: (
                    <>
                      <video className="details__video" loop muted autoPlay>
                        <source
                          src={
                            process.env.PUBLIC_URL +
                            "/videos/paola-mirai-ar-jewels/development.mp4"
                          }
                          type="video/mp4"
                        />
                      </video>
                    </>
                  ),
                },
                support: {
                  title: "from hand-tracking to AR",
                  text: "After writing a lot of custom C# code, I was able to use the coordinates provided by Mediapipe to render a 3D skeleton of the tracked hand in real time.",
                },
              },
            ],
          },
          {
            title: "working demo",
            headline:
              "Putting pieces together to build a simplified working demo of the app's main functionalities",
            paragraph:
              "It is to provide the audience with an interactive and accessible experience. We want to make again the live concert a social experience that is worth to pay for, even in this period of social distancing.",
            contents: [
              {
                main: {
                  customContent: (
                    <>
                      <video className="details__video" loop muted autoPlay>
                        <source
                          src={
                            process.env.PUBLIC_URL +
                            "/videos/paola-mirai-ar-jewels/demo0.mp4"
                          }
                          type="video/mp4"
                        />
                      </video>
                    </>
                  ),
                },
                support: {
                  title: "jewel selection screen",
                  text: "After writing a lot of custom C# code, I was able to use the coordinates provided by Mediapipe to render a 3D skeleton of the tracked hand in real time.",
                },
              },
              {
                main: {
                  customContent: (
                    <>
                      <video className="details__video" loop muted autoPlay>
                        <source
                          src={
                            process.env.PUBLIC_URL +
                            "/videos/paola-mirai-ar-jewels/demo1.mp4"
                          }
                          type="video/mp4"
                        />
                      </video>
                    </>
                  ),
                },
                support: {
                  title: "augmented reality scene",
                  text: "After writing a lot of custom C# code, I was able to use the coordinates provided by Mediapipe to render a 3D skeleton of the tracked hand in real time.",
                },
              },
            ],
          },
        ],
      },
    ],
    conclusions: "",
  },
  zest: {
    name: "zest",
    text: (
      <>
        <strong>Interaction-focused</strong> streaming platform, designed for{" "}
        <strong>live events</strong>
      </>
    ),
    tags: ["Live events", "Streaming", "Distinctive interaction"],
    image: Zest,
    headline: (
      <>
        Translating <span className="highlight">social dynamics</span> of live
        events into the <span className="highlight">digital space</span>
      </>
    ),
    info: [
      { label: "time frame", text: "January 2020 ― July 2020" },
      { label: "type of project", text: "University group project" },
      {
        label: "I was involved in",
        text: "UX research · UX design · UI design · prototyping",
      },
      {
        label: "Mainly focusing on",
        text: "Interaction design · prototyping",
      },
      { label: "Tools", text: "Figma · Illustrator · After Effects · p5.js" },
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
        content: ["Survey & interviews", "User Insights", "User Personas"],
      },
      {
        title: "define",
        content: ["Concept definition", "Interaction model"],
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
            title: "Survey & interviews",
            headline:
              "Discovering habits, needs, and behavioral patterns related to concerts, for both music fans and artists",
            paragraph: (
              <>
                It is to provide the audience with an interactive and accessible
                experience. We want to make again the live concert a social
                experience that is worth to pay for, even in this period of
                social distancing.
                <h5 className="fact__heading">10 interviewees</h5>
                <ul className="fact__list">
                  <li className="fact__list-item">
                    <div className="arrow arrow--horizontal"></div>
                    <p>
                      5 di sesso <strong>femminile</strong>, 5 di sesso{" "}
                      <strong>maschile</strong>
                    </p>
                  </li>
                  <li className="fact__list-item">
                    <div className="arrow arrow--horizontal"></div>
                    <p>
                      Tra i <strong>25</strong> e i <strong>75</strong> anni
                    </p>
                  </li>
                  <li className="fact__list-item">
                    <div className="arrow arrow--horizontal"></div>
                    <p>
                      Residenti in <strong>diverse regioni</strong> italiane
                    </p>
                  </li>
                  <li className="fact__list-item">
                    <div className="arrow arrow--horizontal"></div>
                    <p>
                      Che ricoprono <strong>diversi ruoli</strong> in
                      organizzazioni non profit: coordinatori, dipendenti,
                      volontari, volontari occasionali
                    </p>
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: "user insights",
            contents: [
              {
                main: {
                  carousel: true,
                  insights: [
                    {
                      mainText: (
                        <>
                          Many nonprofit organizations report a{" "}
                          <strong>lack of expertise</strong> within the sector
                          and a rising need for{" "}
                          <strong>specialized professionals</strong> among
                          volunteers.
                        </>
                      ),
                      bodyText:
                        "A more in-depth explaination of the issue, highlighting some opportunities of intervento. Giusto tre o quattro righe che diano un contesto.",
                      image: "/insights/0.webp",
                      quote: {
                        text: "ciao questa è una citazione.",
                        author: "Michele, 48",
                      },
                    },
                    {
                      mainText: (
                        <>
                          A <strong>major struggle</strong> for many
                          organizations is to <strong>find volunteers</strong>{" "}
                          interested in crucial{" "}
                          <strong>back-office activities</strong>.
                        </>
                      ),
                      bodyText: "ciao ciao",
                      image: "/insights/1.webp",
                      quote: {
                        text: "ciao questa è una citazione.",
                        author: "Michele, 48",
                      },
                    },
                    {
                      mainText: (
                        <>
                          Organizations are increasingly relying on the{" "}
                          <strong>joint employment</strong> of{" "}
                          <strong>professional workers</strong> and{" "}
                          <strong>volunteers</strong>, focusing on the training
                          of the latter.
                        </>
                      ),
                      bodyText: "ciao ciao",
                      image: "/insights/2.webp",
                      quote: {
                        text: "ciao questa è una citazione.",
                        author: "Michele, 48",
                      },
                    },
                    {
                      mainText: (
                        <>
                          The <strong>volunteer modes</strong>, especially among
                          young people, are <strong>varied</strong>, often{" "}
                          <strong>occasional</strong>, and no longer anchored to
                          traditional patterns.
                        </>
                      ),
                      bodyText: "ciao ciao",
                      image: "/insights/3.webp",
                      quote: {
                        text: "ciao questa è una citazione.",
                        author: "Michele, 48",
                      },
                    },
                    {
                      mainText: (
                        <>
                          Most of the <strong>economic resources</strong> are
                          used by institutions to cover their{" "}
                          <strong>operating expenses</strong>, but the main
                          funding options are directed to{" "}
                          <strong>specific projects</strong>.
                        </>
                      ),
                      bodyText: "ciao ciao",
                      image: "/insights/4.webp",
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
              "Recreating the sensation of being part of a crowd through visuals and unique, engaging interactions",
            contents: [],
          },
          { title: "interaction model", contents: [] },
        ],
      },
      {
        title: "Structure",
        sections: [
          { title: "ecosystem map", contents: [] },
          { title: "information architecture", contents: [] },
        ],
      },
      {
        title: "Prototype",
        sections: [
          { title: "wireframe", contents: [] },
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
          { title: "high-fidelity prototype", contents: [] },
        ],
      },
    ],
    conclusions: "",
  },
  "stan-wars": {
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
    headline: (
      <>
        Translating <span className="highlight">social dynamics</span> of live
        events into the <span className="highlight">digital space</span>
      </>
    ),
    info: [],
    overview: {
      headline:
        "Digital concerts made easy, accessible and social experiences worth to pay for",
      paragraph:
        "It is to provide the audience with an interactive and accessible experience. We want to make again the live concert a social experience that is worth to pay for, even in this period of social distancing.",
    },
    highlights: [],
    summary: [],
    chapters: [],
    conclusions: "",
  },
  "play-of-shadows": {
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
};

export default ProjectData;
