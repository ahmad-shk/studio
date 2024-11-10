import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <span>UNLIMITED MOVIES</span>
        <span>|</span>
        <span>ON YOUR FAVOURITE DEVICES</span>
        <span>|</span>
        <span>HD, SUBTITLES, PLAYLISTS</span>
      </div>

      <div className="footer-social">
        <span>CONNECT WITH US</span>
        <div className="social-icons">
    
        </div>
      </div>

      <div className="footer-contact">
        <p>Write to us at support@erosnow.com</p>
      </div>

      <div className="footer-apps">
        <p>Download Eros Now Apps!</p>
        <div className="app-buttons">
          <img src="appstore.png" alt="App Store" /> {/* Replace with actual App Store icon path */}
          <img src="playstore.png" alt="Google Play" /> {/* Replace with actual Google Play icon path */}
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Eros Digital FZE. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Help Center</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
