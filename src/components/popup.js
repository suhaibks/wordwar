// src/components/Popup.js
import React from 'react';

const Popup = ({ winner, onRestart }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>{winner.toUpperCase()} Wins!</h2>
        <button onClick={onRestart}>Play Again</button>
      </div>
    </div>
  );
};

export default Popup;
