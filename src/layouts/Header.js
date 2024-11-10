import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Logo" /> {/* Replace with your logo path */}
      </div>
      <nav className="nav">
        <Link to="/news">News</Link>
        <Link to="/shows">Shows</Link>
        <Link to="/entertainment">Entertainment</Link>
        <Link to="/concerts">Concerts in USA</Link>
        <Link to="/podcast">Podcast</Link>
        <Link to="/makeup">Makeup Show</Link>
      </nav>
      <div className="menu-icon">
        <button>☰</button>
      </div>
    </header>
  );
}

export default Header;
