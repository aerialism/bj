import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo512.png';
import CardCounter from './CardCounter';
import './App.css';
import './FlashText.css';

function App() {
  const [message, setMessage] = useState('');
  const [page, setPage] = useState('settings');

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handlePageChange = () => {
    setPage(page === 'settings' ? 'counter' : 'settings');
  };

  return (
    <div className="App">
      <header className="App-header">
        {page === 'settings' && (
          <>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="flash-text">We Card Countin'</h1>
            <p><u>{message}:</u></p>
          </>
        )}
        <CardCounter settingsPage={page === 'settings'} />
        <button onClick={handlePageChange}>{page === 'settings' ? 'Start' : 'Back'}</button>
      </header>
    </div>
  );
}

export default App;
