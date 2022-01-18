function ProjectsItem( {name, image, text, tags} ) {
    return (
        <div className="project">
            <div className="flex-column">
                <h4 className="project__name u_show-on-mobile">{name}</h4>
                <div className="project__image-box">
                    <img src={image} alt={name + " project"} className="project__img" />
                </div>
            </div>
            <div className="flex-column">
                <h4 className="project__name u_show-on-desktop">{name}</h4>
                <h3 className="project__description">{text}</h3>
                <ul className="project__tag-list">
                    {
                        tags.map((item, index) => (
                            <li className="project__tag" key={index}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default ProjectsItem
