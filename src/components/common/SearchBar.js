import React from "react";
const SearchBar = ({ placeholder }) => {
  return (
    <input type="text" placeholder={placeholder} style={styles.searchBar} />
  );
};

const styles = {
  searchBar: {
    padding: "5px",
    width: "250px",
  },
};

export default SearchBar;
