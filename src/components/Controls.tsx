import React from "react";

interface ControlsProps {
  betAmount: number;
  setBetAmount: (amount: number) => void;
  onSpin: () => void;
}

const Controls: React.FC<ControlsProps> = ({ betAmount, setBetAmount, onSpin }) => {
  return (
    <div className="controls">
      <label htmlFor="betAmount">Bet Amount:</label>
      <input
        type="number"
        id="betAmount"
        value={betAmount}
        min="10"
        max="500"
        onChange={(e) => setBetAmount(Number(e.target.value))}
      />
      <button onClick={onSpin}>Spin</button>
    </div>
  );
};

export default Controls;