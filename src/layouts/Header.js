import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const menuButton = (
    <svg width="35" height="17" viewBox="0 0 35 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="35" height="6" rx="3" fill="url(#paint0_linear_60_174)"/>
      <rect y="11" width="35" height="6" rx="3" fill="url(#paint1_linear_60_174)"/>
      <defs>
        <linearGradient id="paint0_linear_60_174" x1="0" y1="3" x2="35" y2="3" gradientUnits="userSpaceOnUse">
          <stop offset="0.406676" stopColor="#0052CD"/>
          <stop offset="1" stopColor="#40C6B7"/>
        </linearGradient>
        <linearGradient id="paint1_linear_60_174" x1="0" y1="14" x2="35" y2="14" gradientUnits="userSpaceOnUse">
          <stop offset="0.381" stopColor="#0052CD"/>
          <stop offset="1" stopColor="#40C6B7"/>
        </linearGradient>
      </defs>
    </svg>
  );


  return (
    <header className="header py-6 px-8 flex justify-between items-center text-white bg-[#00000087] fixed top-0 z-[5] w-full">
      <div className="logo bg-white">
        <img src="../../../logo.png" alt="Logo" />
      </div>
      <nav className="nav flex gap-8">
        <Link to="/news">News</Link>
        <Link to="/shows">Shows</Link>
        <Link to="/entertainment">Entertainment</Link>
        <Link to="/concerts">Concerts in USA</Link>
        <Link to="/podcast">Podcast</Link>
        <Link to="/makeup">Makeup Show</Link>
      </nav>
      <div className="menu-icon">
        <button>
         {menuButton}
        </button>
      </div>
    </header>
  );
}

export default Header;
