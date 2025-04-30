import React, { useState } from 'react';

const WordInputScreen = ({ onSubmitWords }) => {
  const [player1Word, setPlayer1Word] = useState('');
  const [player2Word, setPlayer2Word] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (player1Word.length < 5 || player2Word.length < 5) {
      setShowError(true);
      return;
    }

    setSubmitted(true);
    setTimeout(() => {
      onSubmitWords({
        player1: player1Word.toLowerCase(),
        player2: player2Word.toLowerCase(),
      });
    }, 1000);
  };

  const handleClosePopup = () => {
    setShowError(false);
  };

  return (
    <div className="input-screen">
      <h2>WordWar</h2>
      <p>ENTER THE SECRET WORDS <br /> <br/><b>DON'T FORGET TO HIDE!</b></p>

      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Player 1 Word"
          value={player1Word}
          onChange={(e) =>
            setPlayer1Word(e.target.value.replace(/[^a-zA-Z]/g, '').toLowerCase())
          }
          required
        />
        <input
          type="password"
          placeholder="Player 2 Word"
          value={player2Word}
          onChange={(e) =>
            setPlayer2Word(e.target.value.replace(/[^a-zA-Z]/g, '').toLowerCase())
          }
          required
        />
        <button type="submit">Start Duel</button>
      </form>

      {submitted && <p className="status">Get ready to battle!</p>}

      {showError && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Both words must be at least 5 letters long!</h3>
            <button onClick={handleClosePopup}>Okay</button>
          </div>
        </div>
      )}

      <div className="game-rules">
        <h3>📝 Game Rules</h3>
        <ul>
          <li>Each player secretly enters a word (minimum 5 letters).</li>
          <li>You take turns guessing letters in your opponent’s word.</li>
          <li>Correct letters are revealed. Incorrect guesses build the hangman.</li>
          <li>First player to guess the full word wins!</li>
          <li>Six wrong guesses and you lose!</li>
        </ul>
      </div>
    </div>
  );
};

export default WordInputScreen;
