import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router } from "react-router-dom";
import PageContent from "./components/layout/PageContent";
import Sidebar from "./components/layout/Sidebar";
import NavigationHeader from "./components/layout/NavigationHeader";
import Routes from "./routes";
function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}
// Main layout styles, easy to adjust in one place
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  main: {
    display: "flex",
    flex: 1, // Ensures content takes full height
  },
};
export default App;
