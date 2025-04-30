import React from 'react';

const LandingPage = ({ onStart }) => {
  const styles = {
    container: {
      height: '80vh', // full fixed height to avoid scroll
      margin: 0,
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#121212',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1e1e1e',
      borderRadius: '12px',
      padding: '2rem',
      width: '95%',
      maxWidth: '600px',
      textAlign: 'center',
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
    },
    title: {
      fontSize: '2rem',
      color: '#00c896',
      marginBottom: '1rem',
    },
    subtitle: {
      fontSize: '1.1rem',
      color: '#ccc',
      marginBottom: '2rem',
    },
    button: {
      fontSize: '1.1rem',
      padding: '0.8rem 2rem',
      backgroundColor: '#00c896',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🔥 WordWar 🔥</h1>
        <p style={styles.subtitle}>
          Two players. One secret word each. Guess or get hanged.
        </p>
        <button style={styles.button} onClick={onStart}>
          Start Game
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
