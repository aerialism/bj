import React from 'react';

const BetInput = ({ baseUnit, setBaseUnit }) => {
  const handleBaseUnitChange = (event) => {
    setBaseUnit(parseInt(event.target.value) || 0);
  };

  return (
    <div>
      <h3>Initial Bet</h3>
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
