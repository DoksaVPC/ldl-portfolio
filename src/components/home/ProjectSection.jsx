import ProjectsList from "./ProjectsList";

function ProjectSection() {
  return (
    <section className="section-projects">
      <div className="container">
        <h2 className="heading-secondary heading-secondary--bold heading-secondary--arrow u_margin-bottom-xxl">
          Featured projects{" "}
          <div className="arrow arrow--inline u_hide-on-tab"></div>
        </h2>
        <ProjectsList />
        {/* <h2 className="heading-secondary heading-secondary--bold heading-secondary--arrow u_margin-bottom-xxl">
          Other projects <div className="arrow arrow--inline"></div>
        </h2> */}
      </div>
    </section>
  );
}

export default ProjectSection;
