import React, { useState, useEffect } from 'react';
import QuoteCard from './QuoteCard';

const QuoteFetcher = ({ saveQuote }) => {
  const [quote, setQuote] = useState('');

  const fetchQuote = () => {
    fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(response => response.json())
      .then(data => {
        setQuote(data[0]);
      })
      .catch(error => {
        console.error('Error fetching the quote', error);
      });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <QuoteCard quote={quote} fetchQuote={fetchQuote} saveQuote={() => saveQuote(quote)} />
  );
};

export default QuoteFetcher;
