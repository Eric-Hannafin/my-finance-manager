import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider, useAuth } from "./components/auth/AuthContext";
import Login from "./components/login/Login";
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
  const { isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return <Login />;
  }

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <header className="App-header">
        <nav className="App-nav">
          <Link to="/transactions">Transactions</Link>
          <Link to="/accounts">Accounts</Link>
          <Link to="/budgets">Budgets</Link>
          <Link to="/categories">Categories</Link>
          <button onClick={handleLogout}>Sign out</button>
        </nav>
      </header>
      <h1 className="App-title">My Personal Finance Dashboard</h1>
      <Routes>
        <Route path="/" element={<CurrentSaving />} />
      </Routes>
    </>
  );
};

export default App;
