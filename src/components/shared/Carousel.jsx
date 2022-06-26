import { useState } from "react";
import ArrowIcon from "../../assets/icons/right-arrow.svg";

function Carousel({ children }) {
  const [page, setPage] = useState(0);

  const changePage = (index) => {
    setPage(index);
  };

  const arrowClick = (direction, e) => {
    e.preventDefault();
    changePage(page + direction);
  };

  return (
    <div className="carousel">
      <div className="carousel__container">
        <div
          className="carousel__slider"
          style={{
            transform: `translateX(-${page * 100}% )`,
          }}
        >
          {children}
        </div>
      </div>
      <div className="carousel__navigation">
        {children.map((item, index) => (
          <div
            className={`carousel__navigation-dot ${
              page === index ? "carousel__navigation-dot--active" : ""
            }`}
            onClick={() => {
              changePage(index);
            }}
          ></div>
        ))}
      </div>
      <button
        className={`button button-round button-round--big carousel__button carousel__button--left ${
          page === 0 ? "button--disabled" : ""
        }`}
        style={{ backgroundImage: `url(${ArrowIcon})` }}
        onClick={(e) => {
          arrowClick(-1, e);
        }}
      ></button>
      <button
        className={`button button-round button-round--big carousel__button carousel__button--right ${
          page >= children.length - 1 ? "button--disabled" : ""
        }`}
        style={{ backgroundImage: `url(${ArrowIcon})` }}
        onClick={(e) => {
          arrowClick(1, e);
        }}
      ></button>
    </div>
  );
}

export default Carousel;
