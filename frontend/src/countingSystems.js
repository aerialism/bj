const hiLo = (card) => {
    if (card >= 2 && card <= 6) return 1;
    if (card >= 7 && card <= 9) return 0;
    return -1;
  };
  
  const hiOpt1 = (card) => {
    if (card === 3 || card === 4 || card === 6) return 1;
    if (card === 2 || card === 7 || card === 8 || card === 9) return 0;
    return -1;
  };
  
  // ... Implement other counting systems here
  
  const getCardValue = (card) => {
    if (['J', 'Q', 'K'].includes(card)) return 10;
    if (card === 'A') return 11;
    return parseInt(card, 10);
  };
  
  const getCountingSystemFunction = (countingSystem) => {
    switch (countingSystem) {
      case 'Hi-Lo':
        return hiLo;
      case 'Hi-Opt I':
        return hiOpt1;
      // ... Add other counting systems here
      default:
        return hiLo;
    }
  };
  
  export { getCardValue, getCountingSystemFunction };
  