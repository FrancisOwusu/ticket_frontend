import React from 'react';

const TableOfContents = () => {
  return (
    <nav style={styles.toc}>
      <h3>Table of Contents</h3>
      <ul>
        <li><a href="#intro">Introduction</a></li>
        <li><a href="#getting-started">Getting Started</a></li>
        <li><a href="#api">API Reference</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  toc: {
    width: '200px',
    marginRight: '20px',
    listStyleType: 'none',
  },
};

export default TableOfContents;
