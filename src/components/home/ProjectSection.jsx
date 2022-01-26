import ProjectsList from "./ProjectsList";

function ProjectSection() {

    return (
        <section className="section-projects">
            <div className="container">
                <h2 className="heading-secondary u_margin-bottom-xxl">Selected projects</h2>
                <ProjectsList />
            </div>
        </section>
    )
}

export default ProjectSection
