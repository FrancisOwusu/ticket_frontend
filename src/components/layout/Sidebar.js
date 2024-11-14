import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
      
          <li><Link to="Contact">Contact Us</Link></li>
          <li><Link to="users">Users</Link></li>
          <li><Link to="categories">Category</Link></li>
          <li><Link to="login">Login</Link></li>
          <li><Link to="dashboard">Dashboard</Link></li>
     
        </ul>
      </nav>
    </aside>
  );
};

// const styles = {
//   sidebar: {
//     // width: '250px',
//     backgroundColor: '#e9ecef', // Light grey background
//     padding: '20px',
//     // height: '100vh',
//   },
// };

export default Sidebar;