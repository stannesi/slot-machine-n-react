import React from "react";
import "../styles/App.css";

interface ReelProps {
  index: number,
  symbolIndex: number;
  spinning: boolean;
}

const SYMBOL_HEIGHT = 150;

const Reel: React.FC<ReelProps> = ({ index, symbolIndex, spinning }) => {
  const positionY = -(symbolIndex * SYMBOL_HEIGHT);
  return (
    <div
      className={'reel roller-' +  index}
      style={{
        backgroundPositionY: spinning ? "0px" : `${positionY + 100}px`,
        transition: spinning ? "background-position-y 1s ease-out" : undefined,
      }}
    ></div>
  );
};

export default Reel;