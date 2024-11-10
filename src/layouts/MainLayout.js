import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function MainLayout({ children }) {
  return (
    <div>
      {/* You can add header, sidebar, or other layout elements here */}
      <header>
      <Header/>
      </header>
      
      <main>
        {children}
      </main>
      
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default MainLayout;
