function ProjectDetails({ name, headline, tags, info, highlights }) {
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
      <section className="details__hero"></section>
      <section className="details__overview">
        <div className="container container--flex u_flex-baseline u_margin-bottom-xxl">
          <h3 className="heading-tertiary">Project overview</h3>
          <div className="details__paragraph">
            <h4 className="heading-four u_margin-bottom-m">
              Digital concerts made easy, accessible and social experiences
              worth to pay for
            </h4>
            <p className="body-text">
              It is to provide the audience with an interactive and accessible
              experience. We want to make again the live concert a social
              experience that is worth to pay for, even in this period of social
              distancing.
            </p>
          </div>
        </div>
        <div className="container">
          {highlights.map((item, index) => (
            <div
              className="details__overview-highlight container--flex u_flex-center"
              key={item.title}>
              <div className="details__main-content">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/volunteering/overview/" +
                    index +
                    ".jpg"
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
    </div>
  );
}

export default ProjectDetails;
