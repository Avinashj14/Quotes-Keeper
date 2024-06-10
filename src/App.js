import React, { useState, useEffect } from 'react';
import QuoteFetcher from './components/QuoteFetcher';
import SavedQuotes from './components/SavedQuotes';
import './App.css';

const App = () => {
  const [savedQuotes, setSavedQuotes] = useState([]);

  useEffect(() => {
    const storedQuotes = localStorage.getItem('savedQuotes');
    if (storedQuotes) {
      setSavedQuotes(JSON.parse(storedQuotes));
    }
  }, []);

  const saveQuote = (quote) => {
    const updatedQuotes = [...savedQuotes, quote];
    setSavedQuotes(updatedQuotes);
    localStorage.setItem('savedQuotes', JSON.stringify(updatedQuotes));
  };

  return (
    <div className="app">
      <h1>Ron Swanson Quotes</h1>
      <QuoteFetcher saveQuote={saveQuote} />
      <SavedQuotes savedQuotes={savedQuotes} />
    </div>
  );
};

export default App;
