import React from 'react';

const CountDisplay = ({ runningCount, trueCount, betSize }) => {
  return (
    <div>
      <p>Running count: {runningCount}</p>
      <p>True count: {trueCount}</p>
      <p>Recommended bet size: {betSize}</p>
    </div>
  );
};

export default CountDisplay;
