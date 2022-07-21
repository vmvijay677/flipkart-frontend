import React, { useState } from "react";
import "./ButtonGroup.css";

const GroupedButton = (props) => {
  const [counter, setCounter] = useState(1);

  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
  };

  const handleDecrement = () => {
    setCounter((counter) => counter - 1);
  };

  props.func(counter, setCounter);

  return (
    <div className="button-component">
      <button
        className="styled-button"
        onClick={() => handleDecrement()}
        disabled={counter === 1}
      >
        -
      </button>
      <p className="counter">{counter}</p>
      <button className="styled-button" onClick={() => handleIncrement()}>
        +
      </button>
    </div>
  );
};

export default GroupedButton;
