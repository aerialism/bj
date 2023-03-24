import React from 'react';

const DeckInput = ({ numberOfDecks, setNumberOfDecks }) => {
  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (value >= 1 && value <= 8) {
      setNumberOfDecks(value);
    }
  };

  return (
    <div>
      <label htmlFor="numberOfDecks">Number of decks: </label>
      <input
        type="number"
        id="numberOfDecks"
        min="1"
        max="8"
        value={numberOfDecks}
        onChange={handleChange}
      />
    </div>
  );
};

export default DeckInput;
