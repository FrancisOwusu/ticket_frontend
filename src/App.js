import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageContent from "./components/layout/PageContent";
import Sidebar from "./components/layout/Sidebar";
import NavigationHeader from "./components/layout/NavigationHeader";

function App() {
  return (
    <Router>
      <div className="App" style={styles.container}>
        {/* <header className="App-header">
          <Dashboard />
        </header> */}
        <NavigationHeader />
        <div style={styles.main}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<PageContent />} />
        <Route path="/docs" element={<PageContent />}/>
        </Routes> 
        </div>
      </div>
    </Router>
  );
}
// Main layout styles, easy to adjust in one place
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  main: {
    display: 'flex',
    flex: 1,  // Ensures content takes full height
  },
};
export default App;
