import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../common/SearchBar";

const NavigationHeader = () => {
  return (
    <header style={styles.header}>
      {/* <input type="text" placeholder="Search..." style={styles.searchBar} /> */}
      <SearchBar placeholder="Search Docs..." />
      <Link to="/docs" style={styles.link}>
        Docs
      </Link>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#f4f4f4",
  },
  searchBar: {
    padding: "5px",
    width: "200px",
  },
  link: {
    textDecoration: "none",
    color: "blue",
  },
};

export default NavigationHeader;
