function Card({ projectName, cards }) {
  return (
    <div className="card__container">
      {cards.map((card, index) => (
        <div className="card">
          <img
            src={process.env.PUBLIC_URL + "/images/" + projectName + card.image}
            alt={card.heading}
            className="card__image"
          />
          <h5 className="card__heading">{card.heading}</h5>
          <div className="arrow"></div>
          <p className="card__text">{card.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
