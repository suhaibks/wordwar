import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import WordInputScreen from './components/WordInputScreen';
import GameBoard from './components/GameBoard';

const App = () => {
  const [stage, setStage] = useState('landing'); // 'landing' | 'input' | 'game'
  const [words, setWords] = useState(null);

  const handleStart = () => setStage('input');
  const handleWordsSubmit = (enteredWords) => {
    setWords(enteredWords);
    setStage('game');
  };

  const resetGame = () => {
    setWords(null);
    setStage('input');
  };

  return (
    <div className="app-container">
      {stage === 'landing' && <LandingPage onStart={handleStart} />}
      {stage === 'input' && <WordInputScreen onSubmitWords={handleWordsSubmit} />}
      {stage === 'game' && <GameBoard secretWords={words} onReturn={resetGame} />}
    </div>
  );
};

export default App;
