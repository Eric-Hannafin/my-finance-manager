import React from 'react';
import './App.css';
import Transactions from './components/transactions/Transactions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          My Finance Management App
        </p>
      </header>
      <Transactions />
    </div>
  );
}

export default App;