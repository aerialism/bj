import React from 'react';
import '../styles/CardInput.css';

const CardInput = ({ handleCardClick }) => {
  const cardValues = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

  const getCardImage = (value) => {
    return `/cards/${value}.png`;
  };

  const cards = cardValues.map((value) => ({
    value,
    image: getCardImage(value),
  }));

  const rows = [
    cards.slice(0, 4),
    cards.slice(4, 9),
    cards.slice(9)
  ];

  return (
    <div>
      <p><u>Cards dealt:</u></p>
      <div className="card-grid">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="card-row">
            {row.map((card) => (
              <img
                key={card.value}
                src={card.image}
                alt={card.value}
                className="card-button"
                onClick={() => handleCardClick(card.value)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardInput;