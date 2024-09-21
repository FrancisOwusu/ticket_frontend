import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageContent from "./components/layout/PageContent";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header">
          <Dashboard />
        </header> */}
        <Sidebar />
        <Routes>
          <Route path="/" element={<PageContent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
