import React from 'react';

const CountingSystemSelector = ({ countingSystem, setCountingSystem }) => {
  const handleChange = (event) => {
    setCountingSystem(event.target.value);
  };

  return (
    <div>
      <label htmlFor="countingSystem">Select a counting system: </label>
      <select id="countingSystem" value={countingSystem} onChange={handleChange}>
        <option value="Hi-Lo">Hi-Lo</option>
        <option value="Hi-Opt I">Hi-Opt I</option>
        <option value="Hi-Opt II">Hi-Opt II</option>
        {/* Add the remaining counting systems as options */}
      </select>
    </div>
  );
};

export default CountingSystemSelector;
