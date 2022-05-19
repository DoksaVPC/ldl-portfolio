import ProjectsList from "./ProjectsList";

function ProjectSection() {
  return (
    <section className="section-projects">
      <div className="container">
        <h2 className="heading-secondary heading-secondary--bold heading-secondary--arrow u_margin-bottom-xl">
          Selected projects
        </h2>
        <ProjectsList />
      </div>
    </section>
  );
}

export default ProjectSection;
