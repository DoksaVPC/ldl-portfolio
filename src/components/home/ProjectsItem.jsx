import { Link } from "react-router-dom";

function ProjectsItem({ name, image, text, tags, handleHover }) {
  const onOver = (hovering) => {
    handleHover(hovering);
  };

  return (
    <div className="project">
      <div className="flex-column">
        <h4 className="project__name u_show-on-mobile">{name}</h4>
        <Link
          to="/project"
          className="project__image-box"
          onMouseEnter={() => onOver(true)}
          onMouseOut={() => onOver(false)}>
          <img src={image} alt={name + " project"} className="project__img" />
        </Link>
      </div>
      <div className="flex-column">
        <h4 className="project__name u_show-on-desktop">{name}</h4>
        <h3 className="project__description">{text}</h3>
        <ul className="project__tag-list">
          {tags.map((item, index) => (
            <li className="project__tag" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectsItem;
