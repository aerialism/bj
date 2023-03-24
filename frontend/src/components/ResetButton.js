import React from 'react';

const ResetButton = ({ handleReset }) => {
  return (
    <button onClick={handleReset}>Reset Count</button>
  );
};

export default ResetButton;
