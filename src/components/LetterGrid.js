// src/components/LetterGrid.js
import React from 'react';

const LetterGrid = ({ onGuess, guessed }) => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <div className="letter-grid">
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => onGuess(letter)}
          disabled={guessed.includes(letter)}
          className={guessed.includes(letter) ? 'used' : ''}
        >
          {letter.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LetterGrid;
