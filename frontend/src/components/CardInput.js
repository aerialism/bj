import React from 'react';
import '../styles/CardInput.css';

const CardInput = ({ handleCardClick }) => {
  const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  return (
    <div>
      <h3>Enter cards:</h3>
      {cardValues.map((value) => (
        <button
          key={value}
          className="card-button"
          onClick={() => handleCardClick(value)}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default CardInput;
