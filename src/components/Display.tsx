import React from "react";

interface DisplayProps {
  balance: number;
  outcome: string;
}

const Display: React.FC<DisplayProps> = ({ balance, outcome }) => {
  return (
    <div className="display">
      <div id="balanceDisplay">Balance: ${balance}</div>
      <div id="outcomeDisplay">{outcome}</div>
    </div>
  );
};

export default Display;