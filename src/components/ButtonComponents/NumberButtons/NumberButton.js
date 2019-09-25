import React from 'react';

const NumberButton = props => {
  return (
    <button
      className="number-button"
      value={props.number}
      onClick={props.onClick}
    >
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.number}
    </button>
  );
};

export default NumberButton;
