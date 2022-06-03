import { useState } from "react";

function ToggleButton({ options, onToggle }) {
  const [selected, setSelected] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  const handleClick = (option) => {
    selected !== option && setSelected(option);
    setIsMoving(true);
    onToggle();
  };

  const handleAnimationEnd = () => {
    setIsMoving(false);
  };

  return (
    <div className="toggle-button">
      <div className="toggle-button__container">
        <div
          className={`toggle-button__toggle ${
            selected === 0
              ? "toggle-button__toggle--first"
              : "toggle-button__toggle--second"
          }`}>
          <div
            className={`toggle-button__toggle-box ${
              isMoving ? "toggle-button__toggle-box--moving" : ""
            }`}
            onAnimationEnd={handleAnimationEnd}>
            {options[selected]}
          </div>
        </div>
        {options.map((option, index) => (
          <button
            className={`toggle-button__option ${
              selected === index
                ? "toggle-button__option--selected"
                : "toggle-button__option--unselected"
            }`}
            onClick={() => {
              handleClick(index);
            }}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ToggleButton;
