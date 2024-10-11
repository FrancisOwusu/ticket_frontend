import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
// import PageContent from "./components/layout/PageContent";
import Sidebar from "./components/layout/Sidebar";
import NavigationHeader from "./components/layout/NavigationHeader";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
    <Router>
      <div className="app">
        {/* <NavigationHeader /> */}
        <Sidebar />
        <main style={{ marginLeft: "250px" }}>
          <AppRoutes /> {/* Including the main routes */}
        </main>
        <Footer />
      </div>
    </Router>
    </AuthProvider>
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
