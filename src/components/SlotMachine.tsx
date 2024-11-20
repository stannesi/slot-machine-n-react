import React from "react";
import "../styles/App.css";

const SlotMachine: React.FC = () => {
  return (
    
    <div
      className="slotMachine"
      style={{
        // backgroundPositionY: spinning ? "0px" : `${positionY}px`,
        // transition: spinning ? "background-position-y 1s ease-out" : undefined,
      }}
    ></div>
  );
};

export default SlotMachine;