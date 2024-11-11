import React from 'react';
import './PodcastComponent.css'; // CSS file import karein

const PodcastComponent = () => { 
  return (
    <div className="container">
      <div className="main-content">
        <h2 className="podcast-header">Podcast</h2>
        <div className="main-podcast" style={{ backgroundImage: "url('../../../podcast1.png')" }}>
          <div className="main-podcast-info">
            <div className="date">25 . FEB . 2024</div>
            <div className="title">
              GLIMPSE INTO INNOVATION: MARK ZUCKERBERG SHARES INSIGHTS ON THE FUTURE OF TECH.
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <div className="sidebar-item" style={{ backgroundImage: "url('../../../podcast2.png')" }}>
          <div className="overlay">
            <div className="title">PUBLIC TALK</div>
          </div>
        </div>
        <div className="sidebar-item" style={{ backgroundImage: "url('../../../podcast3.png')" }}>
          <div className="overlay">
            <div className="title">Q&amp;A WITH SHAO</div>
          </div>
        </div>
        <div className="sidebar-item" style={{ backgroundImage: "url('../../../podcast4.png')" }}>
          <div className="overlay">
            <div className="title">POLITICS . BUSINESS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastComponent;
