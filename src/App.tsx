import React, { useState } from "react";
import logo from './logo.svg';

import Player from "./models/Player";

import Reel from "./components/Reel";
import Controls from "./components/Controls";
import Display from "./components/Display";
import "./styles/App.css";

const SYMBOL_COUNT = 7;

const App: React.FC = () => {
  const [player] = useState(new Player(1000));
  // const [balance, setBalance] = useState(1000);
  const [betAmount, setBetAmount] = useState(50);
  const [outcome, setOutcome] = useState("");
  const [reels, setReels] = useState([0, 0, 0]);
  const [spinning, setSpinning] = useState(false);

  const handleSpin = () => {
    if (!player.canAfford(betAmount)) {
      setOutcome("Insufficient balance.");
      return;
    }

    player.deductBalance(betAmount);
    // player.updateBalance(-betAmount);
    
    // Simulate spinning
    setSpinning(true);
    const newReels = reels.map(() => Math.floor(Math.random() * SYMBOL_COUNT));
    
    console.log(newReels);
    
    setTimeout(() => {
      setReels(newReels);
      setSpinning(false);
      calculateWin(newReels);
    }, 1000);
  };

  const calculateWin = (results: number[]) => {
    const isWin = results.every((value) => value === results[0]);

    if (isWin) {
      const winnings = betAmount * 10;
      player.updateBalance(winnings);
      setOutcome(`You won $${winnings}!`);
    } else {
      setOutcome("No win this time.");
    }
  };

  return (
    <div className="game">
      <h2>Simple React Slot Machine</h2>
      <div className="slot-machine">
        <Display balance={player.getBalance()} outcome={outcome} />
        <div className="slot-window">
          <div className="winning-line">
          </div>
          <div className="reel-container">
            <div className="box">
              {reels.map((symbolIndex, index) => (
                <Reel key={index} index={index} symbolIndex={symbolIndex} spinning={spinning} />
              ))}
            </div>
          </div>
        </div>
        <Controls betAmount={betAmount} setBetAmount={setBetAmount} onSpin={handleSpin} />
      </div>
    </div>
  );
};

export default App;
