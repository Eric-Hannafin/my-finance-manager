import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider, useAuth } from "./components/login/AuthContext";
import Login from "./components/login/Login";
import Transaction from "./components/transactions/Transaction";
import CurrentSaving from "./components/dashboard/currentSaving/CurrentSaving";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <AuthContent />
        </div>
      </Router>
    </AuthProvider>
  );
};

const AuthContent: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated && (
        <>
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
        </>
      )}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/transactions" element={<Transaction />} />
        {/* Other routes */}
      </Routes>
      {isAuthenticated && <CurrentSaving />}
    </>
  );
};

export default App;
