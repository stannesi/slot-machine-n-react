import React from "react";
import "../styles/App.css";

interface ReelProps {
  symbolIndex: number;
  spinning: boolean;
}

const SYMBOL_HEIGHT = 100;

const Reel: React.FC<ReelProps> = ({ symbolIndex, spinning }) => {
  const positionY = -(symbolIndex * SYMBOL_HEIGHT);

  return (
    <div
      className="reel"
      style={{
        backgroundPositionY: spinning ? "0px" : `${positionY}px`,
        transition: spinning ? "background-position-y 1s ease-out" : undefined,
      }}
    ></div>
  );
};

export default Reel;