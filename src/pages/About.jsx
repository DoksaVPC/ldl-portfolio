import { useNavigate } from "react-router-dom";

import Picture from "../assets/img/picture.webp";
import Footer from "../components/shared/Footer";

function About() {
  const navigate = useNavigate();
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
              research and discovery, in a process where{" "}
              <strong>curiosity is always rewarded</strong> with unexpected and
              surprising insights.
            </p>
            <p className="body-text">
              As a designer, my objective is to{" "}
              <strong>give shape and structure</strong> to these insights using
              my knowledge and expertise, with the ultimate goal of{" "}
              <strong>generating elegant solutions</strong> to people's
              problems.
            </p>
            <p className="body-text">
              <strong>But no one can stand alone</strong>, especially in the
              design field. Another thing I love about this discipline is that
              the best projects always come from the interaction of multiple
              minds in a <strong>coordinated effort</strong> involving{" "}
              <strong>multidisciplinary teams</strong>.
            </p>
            <p className="body-text">
              This is why I strongly believe in{" "}
              <strong>the strength of teamwork</strong>, and the importance of{" "}
              <strong>being able to listen</strong> to others with empathy, in
              order to create a new synthesis born from the dialectical exchange
              of ideas and opinions.
            </p>
          </div>
          <div className="about__support-content">
            <div className="about__photo-box">
              <img
                src={Picture}
                alt="Lorenzo Di Leonardo"
                className="about__photo"
              />
            </div>
            {/* <div className="header__circle header__circle--first"></div>
            <div className="header__circle header__circle--second"></div>
            <div className="header__circle header__circle--third"></div> */}
          </div>
        </div>
        <div className="details__link-container u_margin-top-l">
          <div
            className="details__link"
            onClick={() => {
              navigate(-1);
            }}>
            <div className="arrow arrow--inline arrow--horizontal arrow--horizontal--flipped"></div>{" "}
            Back to projects
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
