import React from 'react';

const NumberButton = ({ number, numClick }) => {
  return (
    <button className="number-button" value={number} onClick={numClick}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {number}
    </button>
  );
};

export default NumberButton;
