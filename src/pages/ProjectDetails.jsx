import Hero from "../components/details/Hero";
import Carousel from "../components/shared/Carousel";
import Wireframe from "../components/details/Wireframe";

function ProjectDetails({
  name,
  headline,
  tags,
  info,
  overview,
  highlights,
  summary,
  chapters,
}) {
  return (
    <div className="details">
      <div className="container">
        <section className="details__section-intro">
          <div className="details__intro-text">
            <div className="project__name u_margin-bottom-ml">{name}</div>
            <h1 className="heading-secondary">{headline}</h1>
            <ul className="project__tag-list">
              {tags.map((item, index) => (
                <li className="project__tag" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="single-column"></div>
          <div className="details__intro-summary">
            <ul className="details__intro-summary__content">
              {info.map((item) => (
                <li className="details__intro-summary__item" key={item.label}>
                  <div className="details__intro-summary__label">
                    {item.label}
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      <Hero name={name} />
      <section className="details__section u_margin-top-xxl u_separator-bottom">
        <div className="container container--flex u_flex-baseline u_margin-bottom-xxl">
          <h3 className="heading-tertiary">Project overview</h3>
          <div className="details__paragraph">
            <h4 className="heading-four u_margin-bottom-m">
              {overview.headline}
            </h4>
            <p className="body-text">{overview.paragraph}</p>
          </div>
        </div>
        <div className="container">
          {highlights.map((item, index) => (
            <div
              className="details__overview-highlight container--flex u_flex-center"
              key={item.title}>
              <div className="details__main-content details__main-content--image">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/volunteering/overview/" +
                    index +
                    ".webp"
                  }
                  alt={"overview" + index}
                />
              </div>
              <div className="details__support-content">
                <h5 className="heading-five">{item.title}</h5>
                <p className="body-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="details__section">
        <div className="container container--flex u_flex-baseline">
          <h3 className="heading-tertiary">Process summary</h3>
        </div>
        <ul className="container container--flex u_flex-baseline u_margin-top-l details__summary-container">
          {summary.map((item, index) => (
            <li className="details__summary-box" key={"process step " + index}>
              <div className="details__summary-title-box">
                <div className="details__summary-number">0{index + 1}.</div>
                <div className="details__summary-title">{item.title}</div>
              </div>
              <ul className="details__summary-content-list">
                {item.content.map((contentItem, index) => (
                  <li
                    className="details__summary-content-item"
                    key={item.title + index}>
                    {contentItem}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
      {chapters.map((chapter, index) => (
        <section>
          <div className="details__chapter-heading">
            <div className="container">
              <p className="heading-secondary--number">0{index + 1}</p>
              <h2 className="heading-secondary">{chapter.title}</h2>
            </div>
          </div>
          {chapter.sections.map((section, index) => (
            <div
              className={`container ${
                index !== chapter.sections.length - 1
                  ? "u_separator-bottom"
                  : ""
              }`}>
              <div
                className={`container--flex u_flex-baseline ${
                  section.headline
                    ? "u_margin-bottom-xxl"
                    : "u_margin-bottom-xl"
                }`}>
                <h3 className="heading-tertiary">{section.title}</h3>
                {section.headline && (
                  <div className="details__paragraph">
                    <h4 className="heading-four u_margin-bottom-m">
                      {section.headline}
                    </h4>
                    {section.paragraph && (
                      <p className="body-text">{section.paragraph}</p>
                    )}
                  </div>
                )}
              </div>
              {section.contents.map((content, index) => (
                <div
                  className={`container--flex u_flex-center ${
                    index !== section.contents.length - 1 && "u_margin-bottom-l"
                  }`}
                  key={content.title}>
                  {content.main.carousel ? (
                    <div className="details__main-content">
                      <Carousel>
                        {content.main.images.map((image, index) => (
                          <img
                            className="carousel__item"
                            src={
                              process.env.PUBLIC_URL + "/images/" + name + image
                            }
                            alt={"overview" + index}
                          />
                        ))}
                      </Carousel>
                    </div>
                  ) : content.main.wireframe ? (
                    <div className="details__main-content">
                      <Wireframe
                        projectName={name}
                        screens={content.main.screens}
                      />
                    </div>
                  ) : (
                    <div className="details__main-content details__main-content--image">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/" +
                          name +
                          content.main.image
                        }
                        alt={"overview" + index}
                      />
                    </div>
                  )}

                  {content.support && (
                    <div className="details__support-content">
                      <h5 className="heading-five">{content.support.title}</h5>
                      <p className="body-text">{content.support.text}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}

export default ProjectDetails;
