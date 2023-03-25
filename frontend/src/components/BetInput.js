import React from 'react';

const BetInput = ({ baseUnit, setBaseUnit }) => {
  const handleBaseUnitChange = (event) => {
    setBaseUnit(parseInt(event.target.value) || 0);
  };

  return (
    <div>
      <p>Initial Bet:</p>
      <input
        type="number"
        min="1"
        value={baseUnit}
        onChange={handleBaseUnitChange}
      />
    </div>
  );
};

export default BetInput;