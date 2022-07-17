import prosIcon from "../../assets/icons/pros.svg";
import consIcon from "../../assets/icons/cons.svg";

function Benchmark({ projectName, index, title, mainText, pros, cons }) {
  return (
    <div className="insight carousel__item">
      <div className="insight__container">
        <div className="insight__main-container">
          <div className="insight__main-content">
            <h5 className="insight__heading">{title}</h5>
            <p className="benchmark__main-text">{mainText}</p>
            <div className="benchmark__heading">
              <div
                className="benchmark__heading-icon"
                style={{ backgroundImage: "url(" + prosIcon + ")" }}
              />
              pros
            </div>
            <ul className="benchmark__list">
              {pros.map((item, index) => (
                <li className="benchmark__list-item" key={item}>
                  {item}
                </li>
              ))}
            </ul>
            <div className="benchmark__heading">
              <div
                className="benchmark__heading-icon"
                style={{ backgroundImage: "url(" + consIcon + ")" }}
              />
              cons
            </div>
            <ul className="benchmark__list">
              {cons.map((item, index) => (
                <li className="benchmark__list-item" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="insight__secondary-container">
          <div
            className="insight__secondary-content"
            style={{
              backgroundImage:
                "url(" +
                process.env.PUBLIC_URL +
                "/images/" +
                projectName +
                "/benchmark/" +
                index +
                ".webp)",
            }}></div>
        </div>
      </div>
    </div>
  );
}

export default Benchmark;
