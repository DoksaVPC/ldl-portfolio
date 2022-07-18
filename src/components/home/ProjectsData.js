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
  projectsList: ["actitude", "paola-mirai-ar-jewels", "zest"],

  actitude: {
    name: "actitude",
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
      { label: "type of project", text: "Thesis project (solo)" },
      {
        label: "My role",
        text: "UX research · UX design · UI design · prototyping",
      },
      { label: "Tools", text: "Figma · Illustrator · React · CSS" },
    ],
    overview: {
      headline:
        "A master's thesis project about user centered design, digital transformation and nonprofit organizations",
      paragraph: [
        "Actitude is an online service I designed as part of my master's thesis that discussed digital transformation within the italian Third Sector.",
        "the objective of this thesis path was to analyze and understand the various aspects of the ecosystem in which Third Sector institutions are embedded, in order to propose, following a user-centered design process, a digital service concept that would meet the needs of the multiple parties involved.",
      ],
    },
    highlights: [
      {
        title: "volunteering",
        text: "Find volunteer opportunities that align with the user's inclinations and talents.",
      },
      {
        title: "fundraising",
        text: "Fund organizations committed to the causes that are closest to the user's ideals.",
      },
      {
        title: "personalization",
        text: "Receive personalized notifications and suggestions based on the user's profile.",
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
            paragraph: [
              "The central pivot and starting point of the project was to carry out an in-depth user research by conducting several interviews. ",
              "I decided to use a research tool that prefers qualitative depth of data over statistical sample size, in order to explore the various pain points that exist in multiple aspects of the field.",
              <>
                <h5 className="fact__heading">10 interviewees</h5>
                <ul className="fact__list">
                  <li className="fact__list-item">
                    <div className="arrow arrow--horizontal"></div>
                    <p>
                      5 <strong>females</strong>, 5 <strong>males</strong>
                    </p>
                  </li>
                  <li className="fact__list-item">
                    <div className="arrow arrow--horizontal"></div>
                    <p>
                      between <strong>25</strong> and <strong>75</strong> years
                      old
                    </p>
                  </li>
                  <li className="fact__list-item">
                    <div className="arrow arrow--horizontal"></div>
                    <p>
                      Residents of <strong>different</strong> Italian{" "}
                      <strong>regions</strong>
                    </p>
                  </li>
                  <li className="fact__list-item">
                    <div className="arrow arrow--horizontal"></div>
                    <p>
                      Who have a <strong>variety of roles</strong> in nonprofit
                      organizations: coordinators, employees, volunteers,
                      occasional volunteers
                    </p>
                  </li>
                </ul>
              </>,
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
                      mainText: (
                        <>
                          Many nonprofit organizations report a{" "}
                          <strong>lack of expertise</strong> within the sector
                          and a rising need for{" "}
                          <strong>specialized professionals</strong> among
                          volunteers.
                        </>
                      ),
                      bodyText: "",
                      image: "/insights/0.webp",
                      quote: {
                        text: "The obvious bottleneck that we have in the volunteer world is a problem of low expertise.",
                        author: "Marco",
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
                      bodyText: "",
                      image: "/insights/1.webp",
                      quote: {
                        text: "We are much more unlikely to find people who want to come and volunteer to deal with secretarial services, or communication, or fundraising.",
                        author: "Magda",
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
                      bodyText: "",
                      image: "/insights/2.webp",
                      quote: {
                        text: "In the near future, we will halve the number of volunteers in order to focus more on training and establish team-leader figures to help others work.",
                        author: "Michele",
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
                      bodyText: "",
                      image: "/insights/3.webp",
                      quote: {
                        text: "Most of the young volunteers are more attached to a cause than to a name. We need to learn to embrace this trend, and change the way volunteers are managed.",
                        author: "Marco",
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
                      bodyText: "",
                      image: "/insights/4.webp",
                      quote: {
                        text: "they always want innovative projects, but on the other hand I need fundings to cover the expenses of what I do on a daily basis",
                        author: "Michele",
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
                    "/personas/0.webp",
                    "/personas/1.webp",
                    "/personas/2.webp",
                    "/personas/3.webp",
                    "/personas/4.webp",
                    "/personas/5.webp",
                  ],
                },
                support: {
                  title: "two coordinators, four volunteers",
                  text: "I built 6 personas based on behavioural patterns, needs and motivations of the coordinators and volunteers I interviewed.",
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
            paragraph: [
              "Starting from the insights obtained during the user research, I defined the main objectives and key features of a service that could address the users' needs that were revealed.",
            ],
            contents: [
              {
                main: {
                  customContent: (
                    <Card
                      projectName={"actitude"}
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
                  text: "The platform features three volunteering options with varying degrees of commitment: recurring, project or event.",
                },
              },
              {
                main: {
                  image: "/concept/2.png",
                },
                support: {
                  title: "two fundraising types",
                  text: "The users can choose to fund specific projects or to help organizations cover their monthly expenses.",
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
            paragraph: [
              "The service ecosystem is divided into two levels: the internal level contains the main actors (nonprofit organizations, volunteers, and donors) and the macro features they have access to within the platform.",
              "In the external level are those actors that play a secondary role or act as enablers for the main services offered, such as the network of supporters' contacts, with whom they can share the platform's content, or the Unique National Registry of the Third Sector (RUNTS), which is responsible for verifying and monitoring organizations.",
            ],
            contents: [
              {
                main: {
                  image: "/ecosystem.webp",
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
            paragraph: [
              "It is to provide the audience with an interactive and accessible experience. We want to make again the live concert a social experience that is worth to pay for, even in this period of social distancing.",
            ],

            contents: [
              {
                main: {
                  customContent: (
                    <>
                      <Video source="/actitude/0" />
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
                      <Video source={"/actitude/1"} />
                    </>
                  ),
                },
                support: {
                  title: "search",
                  text: "Apply research filters to find the opportunities, campaigns and organizations that are most suitable for you.",
                },
              },
              {
                main: {
                  customContent: (
                    <>
                      <Video source="/actitude/2" />
                    </>
                  ),
                },
                support: {
                  title: "favourites",
                  text: "Save your favourite elements to review them later or receive notifications related to them.",
                },
              },
              {
                main: {
                  customContent: (
                    <>
                      <Video source="/actitude/3" />
                    </>
                  ),
                },
                support: {
                  above: true,
                  title: "profile management and preferences",
                  text: "Manage your personal information and preferences to receive personalized suggestions and notifications based on them.",
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
        label: "My role",
        text: "UX design · UI design · prototyping · development",
      },
      { label: "Tools", text: "Figma · Illustrator · Blender · Unity3D · C#" },
    ],
    overview: {
      headline:
        "An innovative digital experience for a tech-inspired jewelry design studio",
      paragraph: [
        "When I was looking for a curricular internship experience, the owner of a jewelry design studio contacted me to design and develop an innovative digital product that would support her business.",
        "The final outcome was an app that allowed users to visualize 3D models of the jewels and try them using augmented reality.",
        "The project went on for some more months after the end of the internship program as a contract freelance work and culminated with the shipping of a working demo of the app on the stores.",
      ],
    },
    highlights: [
      {
        title: "3d views of jewels",
        text: "The users can view 3D models of the Paola Mirai jewels and apreciate their materials.",
      },
      {
        title: "browse collections",
        text: "Explore the available products by browsing the collections.",
      },
      {
        title: "try jewels on with AR",
        text: "Try the jewels on through a realistic, markerless augmented reality experience.",
      },
    ],
    summary: [
      {
        title: "research",
        content: ["Competitor analysis", "Technological research"],
      },
      {
        title: "define",
        content: ["Concept definition"],
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
            paragraph: [
              "Right after the client brief, the project started with a research on similar existing products and an in-depth analysis of both the aspect related to the user experience provided and the technologies employed.",
            ],
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
            paragraph: [
              "We wanted to explore the possibility to display virtual content on the user's hand without having to rely on markers and other elements that could complicate the experience and making it cumbersome.",
              "To achieve this goal, I made a research about the available machine learning solutions that could track the user hand from images.",
            ],
            contents: [
              {
                main: {
                  image: "/tech/0.webp",
                },
                support: {
                  title: "tracking the user's hand",
                  text: "I decided to use Mediapipe: an open source project made by Google that offers cross-platform, customizable machine learning solutions.",
                },
              },
              {
                main: {
                  image: "/tech/1.webp",
                },
                support: {
                  title: "visualizing virtual content",
                  text: "I integrated Mediapipe into Unity, a 3D engine used mainly in the field of video games, with which I had previous experience.",
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
              "Defining the main goals and features of the product, based on the client's creative direction",
            paragraph: [
              "after listening to the client's vision for its products and the artistic direction behind the brand communication, we defined together the main objectives of the project I was in charge of and how it fits into the business strategy.",
            ],
            contents: [
              {
                main: {
                  customContent: (
                    <Card
                      projectName={"paola-mirai-ar-jewels"}
                      cards={[
                        {
                          heading: (
                            <>
                              highlighting <br /> the unique materials <br /> of
                              paola mirai jewelry
                            </>
                          ),
                          text: "Use 3d models to convey the modernity of the brand and show a faithful reproduction of the unique, self-made materials employed.",
                          image: "/concept/icon0.svg",
                        },
                        {
                          heading: (
                            <>
                              Discovering <br /> the different <br /> jewels
                              collections
                            </>
                          ),
                          text: "Highlight the uniqueness and creativity behind each collection of jewels.",
                          image: "/concept/icon1.svg",
                        },
                        {
                          heading: (
                            <>
                              Experiencing <br /> an innovative way <br /> of
                              trying on products
                            </>
                          ),
                          text: "Leveraging augmented reality to show how the materials interact with the customer's skin and provide a futuristic experience.",
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
            paragraph: [
              "The final outcome of the project was a demo that allows users to try the main features of the product, related to the visualization of the 3D models of the jewels and the augmented reality functionalities",
            ],
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
                  text: "In the main screen users can view some of the Paola Mirai jewels and select one to try on through AR.",
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
                  text: "The user's hand is tracked to display virtual jewels on top of it in a realistic and convincing way.",
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
    tags: ["Live events", "Streaming", "Unconventional interaction"],
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
        label: "My role",
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
        "Digital concerts made interactive and engaging social experiences that are worth to pay for",
      paragraph: [
        "Zest is a university project that I've developed together with my team during the Interaction Design course at Politecnico di Milano. The main theme of the course was to design a service that would help people cope with the effects of the first major quarantine caused by the COVID pandemic",
        "My team decided to focus on the music industry, which was economically devastated due to the restrictions and subsequent cancellations of the main source of income for artists: live events.",
        "Our design challenge was to rethink the live concert in a digital format and make it a valuable enough experience to be a source of revenue for artists during a time of social distancing.",
      ],
    },
    highlights: [
      {
        title: "explore",
        text: "Find live streaming events from your favourite artist and purchase tickets.",
      },
      {
        title: "share",
        text: "Share the events to your frends in order to join them together.",
      },
      {
        title: "interact",
        text: "Engage and have fun with other people in a highly interactive digital event.",
      },
    ],
    summary: [
      {
        title: "research",
        content: ["Survey & interviews", "User Personas"],
      },
      {
        title: "define",
        content: ["Concept definition", "Interaction model"],
      },
      {
        title: "structure",
        content: ["Information architecture"],
      },
      {
        title: "prototype",
        content: ["Wireframe", "High-fidelity prototype", "Demo"],
      },
    ],
    chapters: [
      {
        title: "Research",
        sections: [
          {
            title: "Survey & interviews",
            headline:
              "Discovering habits, needs, and behavioural patterns related to concerts, for both music fans and artists",
            paragraph: [
              "The first step in order to design the best possible online concert experience, was to learn more about what really makes live concerts feel special for music fans and artists.",
              "First of all, we subitted a survey to a broad audience in order to gather their opinions about the existing live streaming platforms. The general level of satisfaction about this kind of services was very low, mainly due to a lack of deep interaction between the artists and the audience.",
              "Later on, we interviewed artists and music fans to listen to their personal stories and opinions about past concert experiences. This allowed us to gather several insights that guided the design process in the following steps.",
            ],
          },
          {
            title: "user personas",
            contents: [
              {
                main: {
                  carousel: true,
                  images: [
                    "/personas/0.webp",
                    "/personas/1.webp",
                    "/personas/2.webp",
                    "/personas/3.webp",
                    "/personas/4.webp",
                  ],
                },
                support: {
                  title: "three music fans, two artists",
                  text: "We built personas based on the behavioural patterns we identified among the music fans and the artists we interviewed.",
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
            paragraph: [
              "It soon became clear that one of the main goals of this project was to make the audience a major player during the performance. We wanted to make the users able to experience and feel the crowd attending the event.",
              "Inspired by the imagery of a real concert, we decided to visualize each spectator on the screen in the form of a point of light.",
            ],
            contents: [
              {
                main: { image: "/concept/0.webp" },
                support: {
                  title: "A crowd of lights",
                  text: "the appearance and animations of these avatars will reflect each user's interactions in real time. The final result is a living, vibrant-looking crowd.",
                },
              },
            ],
          },
          {
            title: "interaction model",
            headline:
              "Leveraging the user's own smartphone as a controller with motion capabilities",
            paragraph: [
              "my team decided to take an unconventional approach to the service's interaction model, building the user experience on the joint use of two devices.",
              "A computer, tablet or smart TV will serve as the screen, while a smartphone will be utilized to control the user's digital avatar in real time, taking advantage of the device's touch screen, but also of its motion sensors.",
              "I was personally responsible for designing in detail the modes of interaction and the way in which these are represented on the screen during the experience",
            ],
            contents: [
              {
                main: {
                  customContent: (
                    <>
                      <video className="details__video" loop muted autoPlay>
                        <source
                          src={
                            process.env.PUBLIC_URL +
                            "/videos/zest/interaction0.mp4"
                          }
                          type="video/mp4"
                        />
                      </video>
                    </>
                  ),
                },
                support: {
                  title: "clapping",
                  text: "a single shake of the smartphone will result in a single clap that can be used to follow the beat of the music",
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
                            "/videos/zest/interaction1.mp4"
                          }
                          type="video/mp4"
                        />
                      </video>
                    </>
                  ),
                },
                support: {
                  title: "cheering",
                  text: "an extended shake of the smartphone will turn into cheering, which will increase in intensity based on the duration of the interaction.",
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
                            "/videos/zest/interaction2.mp4"
                          }
                          type="video/mp4"
                        />
                      </video>
                    </>
                  ),
                },
                support: {
                  title: "expressing emotions",
                  text: "The users will be able to select emojis from their smartphone's screen in order to express their emotions.",
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
            title: "information architecture",
            contents: [{ main: { image: "/information_architecture.png" } }],
          },
        ],
      },
      {
        title: "Prototype",
        sections: [
          {
            title: "wireframe",
            headline:
              "Making a Figma prototype for the event discovery and ticket purchasing sections of the service",
            paragraph: [
              "After defining the structure of the service and its creative direction with my team, I was directly responsible for creating a low-fidelity prototype first, and a high-fidelity prototype later on.",
            ],
            contents: [
              {
                main: {
                  wireframe: true,
                },
              },
            ],
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
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FADAfia1BuguRn7NThfKEi5%2FZest%3Fpage-id%3D0%253A1%26node-id%3D1%253A2%26viewport%3D853%252C-1953%252C1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A2"
                        allowfullscreen></iframe>
                    </>
                  ),
                },
              },
            ],
          },
          {
            title: "demo",
            headline:
              "Showing the interaction at work: what a Zest concert would look like",
            paragraph: [
              "At last, I made a mockup video in After Effects, showing the most important aspect of the experience we designed: the concert streaming.",
              "In this demo, it can be clearly seen our vision on what an engaging streaming concert should look like.",
              "To better enjoy the video, I recommend watching it with the volume on.",
            ],
            contents: [
              {
                main: {
                  customContent: (
                    <>
                      <video className="details__video" controls>
                        <source
                          src={process.env.PUBLIC_URL + "/videos/zest/demo.mp4"}
                          type="video/mp4"
                        />
                      </video>
                    </>
                  ),
                },
              },
            ],
          },
        ],
      },
    ],
    conclusions: "",
  },
};

export default ProjectData;
