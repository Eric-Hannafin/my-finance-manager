import React from 'react';
import './App.css';
import Transactions from './components/transactions/Transactions';
import Current_savings from './components/dashboard/current_savings/Current_savings';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
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
        <h1 className="App-title">Dashboard</h1>
        <Current_savings />
        <Routes>
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;