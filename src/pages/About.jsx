import Picture from "../assets/img/picture.webp";
import Footer from "../components/shared/Footer";

function About() {
  return (
    <>
      <div className="about">
        <div className="container container--flex">
          <div className="details__main-content">
            <div className="project__name u_margin-bottom-ml">About me</div>
            <h1 className="heading-secondary u_margin-bottom-m">
              What I love <span className="avoid-wrap">about designing</span>{" "}
              <span className="avoid-wrap">user experiences</span>
            </h1>
            <p className="body-text">
              What I love about UX design is that it involves continuous
              research and discovery, in a process where curiosity is always
              rewarded with unexpected and surprising insights.
            </p>
            <p className="body-text">
              As a designer, my objective is to give shape and structure to
              these insights using my knowledge and expertise, with the ultimate
              goal of generating elegant solutions to people's problems.
            </p>
            <p className="body-text">
              But no one can stand alone, especially in the design field.
              Another thing I love about this discipline is that the best
              projects always come from the interaction of multiple minds in a
              coordinated effort involving multidisciplinary teams.
            </p>
            <p className="body-text">
              This is why I strongly believe in the strength of teamwork, and
              the importance of being able to listen to others with empathy, in
              order to create a new synthesis born from the dialectical exchange
              of ideas and opinions.
            </p>
          </div>
          <div className="details__support-content">
            <div className="about__photo-box">
              <img
                src={Picture}
                alt="A picture of Lorenzo Di Leonardo"
                className="about__photo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
