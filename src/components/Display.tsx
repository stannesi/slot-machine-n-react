import React from "react";
import { formatCurrency } from "./../utils/helpers";

interface DisplayProps {
  balance: number;
  outcome: string;
}

const Display: React.FC<DisplayProps> = ({ balance, outcome }) => {
  return (
    <div className="display">
      <div id="balanceDisplay">Balance: {formatCurrency(balance)}</div>
      <div id="outcomeDisplay">{outcome}</div>
    </div>
  );
};

export default Display;