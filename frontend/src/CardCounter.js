import React, { useState, useEffect } from 'react';
import CountingSystemSelector from './components/CountingSystemSelector';
import DeckInput from './components/DeckInput';
import CountDisplay from './components/CountDisplay';
import CardInput from './components/CardInput';
import ResetButton from './components/ResetButton';
import BetInput from './components/BetInput';
import { getCardValue, getCountingSystemFunction } from './countingSystems';

const CardCounter = () => {
  const [countingSystem, setCountingSystem] = useState(localStorage.getItem('countingSystem') || 'Hi-Lo');
  const [numberOfDecks, setNumberOfDecks] = useState(parseInt(localStorage.getItem('numberOfDecks')) || 1);
  const [runningCount, setRunningCount] = useState(0);
  const [trueCount, setTrueCount] = useState(0);
  const [betSize, setBetSize] = useState(0);
  const [baseUnit, setBaseUnit] = useState(10);

  useEffect(() => {
    localStorage.setItem('countingSystem', countingSystem);
  }, [countingSystem]);

  useEffect(() => {
    localStorage.setItem('numberOfDecks', numberOfDecks);
  }, [numberOfDecks]);

  const handleCardClick = (cardValue) => {
    const card = getCardValue(cardValue);
    const countFunction = getCountingSystemFunction(countingSystem);
    const countValue = countFunction(card);

    const newRunningCount = runningCount + countValue;
    const newTrueCount = Math.round(newRunningCount / numberOfDecks);

    const newBetSize = newTrueCount > 1 ? baseUnit * newTrueCount : baseUnit;

    setRunningCount(newRunningCount);
    setTrueCount(newTrueCount);
    setBetSize(newBetSize);
  };

  const handleReset = () => {
    setRunningCount(0);
    setTrueCount(0);
    setBetSize(0);
  };

  return (
    <div>
      <h2>Card Counter</h2>
      <CountingSystemSelector
        countingSystem={countingSystem}
        setCountingSystem={setCountingSystem}
      />
      <DeckInput numberOfDecks={numberOfDecks} setNumberOfDecks={setNumberOfDecks} />
      <BetInput baseUnit={baseUnit} setBaseUnit={setBaseUnit} />
      <CountDisplay runningCount={runningCount} trueCount={trueCount} betSize={betSize} />
      <CardInput handleCardClick={handleCardClick} />
      <ResetButton handleReset={handleReset} />
    </div>
  );
};

export default CardCounter;
