import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header py-6 px-8 flex justify-between items-center text-white bg-[#00000087] fixed top-0 z-[5] w-full">
      <div className="logo">
        <img src="../../../logo.png" alt="Logo" />
      </div>
      <nav className="nav text-[#C7C7C7] flex gap-12 hover:[&>*]:text-[white] max-[1200px]:hidden">
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/shows">Shows</Link>
        <Link to="/entertainment">Entertainment</Link>
        <Link to="/concertsinusa">Concerts in USA</Link>
        <Link to="/podcast">Podcast</Link>
        {/* <Link to="/makeup">Makeup Show</Link> */}
      </nav>
      <div className="menu-icon">
      <img src="../../../menuB.png" alt="Logo" />
      </div>
    </header>
  );
}

export default Header;
