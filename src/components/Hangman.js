// src/components/Hangman.js
import React from 'react';

const Hangman = ({ mistakes }) => {
  const parts = [
    <div key="head" className="hangman-part head" />,
    <div key="body" className="hangman-part body" />,
    <div key="left-arm" className="hangman-part left-arm" />,
    <div key="right-arm" className="hangman-part right-arm" />,
    <div key="left-leg" className="hangman-part left-leg" />,
    <div key="right-leg" className="hangman-part right-leg" />
  ];

  return (
    <div className="hangman-container">
      <div className="gallow" />
      <div className="hangman-figure">
        {parts.slice(0, mistakes)}
      </div>
    </div>
  );
};

export default Hangman;
