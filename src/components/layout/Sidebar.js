import React from 'react';

const Sidebar = () => {
  return (
    <aside style={styles.sidebar}>
      <nav>
        <ul>
          <li><a href="#section1">Section 1</a></li>
          <li><a href="#section2">Section 2</a></li>
          <li><a href="#section3">Section 3</a></li>
        </ul>
      </nav>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: '250px',
    backgroundColor: '#e9ecef', // Light grey background
    padding: '20px',
    height: '100vh',
  },
};

export default Sidebar;