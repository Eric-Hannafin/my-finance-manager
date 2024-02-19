import React from 'react';
import './App.css';
import Login from './components/login/Login'
import Transaction from './components/transactions/Transaction';
import CurrentSaving from './components/dashboard/currentSaving/CurrentSaving';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Login />
      <div className="App">
        <header className="App-header">
          <nav className="App-nav">
            <Link to="/transactions">Transactions</Link>
            <Link to="/accounts">Accounts</Link>
            <Link to="/budgets">Budgets</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/reports">Reports</Link>
          </nav>
        </header>
        <h1 className="App-title">My Personal Finance Dashboard</h1>
        <CurrentSaving />
        <Routes>
          <Route path="/transactions" element={<Transaction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;