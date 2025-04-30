import React, { useState } from 'react';
import LetterGrid from './LetterGrid';
import Hangman from './Hangman';
import Popup from './popup';

const GameBoard = ({ secretWords, onReturn }) => {
  const [turn, setTurn] = useState('player1');
  const [guesses, setGuesses] = useState({ player1: [], player2: [] });
  const [mistakes, setMistakes] = useState({ player1: 0, player2: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const maxMistakes = 6;

  const opponent = turn === 'player1' ? 'player2' : 'player1';
  const opponentWord = secretWords[opponent];
  const currentGuesses = guesses[turn];
  const currentMistakes = mistakes[turn];

  const handleGuess = (letter) => {
    if (gameOver || currentGuesses.includes(letter)) return;

    const updatedGuesses = {
      ...guesses,
      [turn]: [...currentGuesses, letter],
    };
    setGuesses(updatedGuesses);

    if (opponentWord.includes(letter)) {
      const allRevealed = opponentWord
        .split('')
        .every((l) => updatedGuesses[turn].includes(l));
      if (allRevealed) {
        setWinner(turn);
        setGameOver(true);
      }
    } else {
      const updatedMistakes = {
        ...mistakes,
        [turn]: currentMistakes + 1,
      };
      setMistakes(updatedMistakes);

      if (updatedMistakes[turn] >= maxMistakes) {
        setWinner(opponent);
        setGameOver(true);
      } else {
        setTurn(opponent);
      }
    }
  };

  const getMaskedWord = (word, guessedLetters) => {
    return word
      .split('')
      .map((l) => (guessedLetters.includes(l) ? l.toUpperCase() : '_'))
      .join(' ');
  };

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div className="game-board">
      <h3>{turn.toUpperCase()}'s Turn <br />Guess {opponent.toUpperCase()}'s Word</h3>

      <div className="players">
        <div className="player">
          <h4>{opponent.toUpperCase()}'s Word</h4>
          <p>{getMaskedWord(opponentWord, guesses[turn])}</p>
          <p>Mistakes: {mistakes[turn]} / {maxMistakes}</p>
          <Hangman mistakes={mistakes[turn]} />
        </div>
      </div>

      {!gameOver && (
        <>
          <LetterGrid onGuess={handleGuess} guessed={guesses[turn]} />
          <button className="return-button" onClick={onReturn}>
            🔙 Return to Word Entry
          </button>
        </>
      )}

      {gameOver && winner && (
        <Popup winner={winner} onRestart={handleRestart} />
      )}
    </div>
  );
};

export default GameBoard;
