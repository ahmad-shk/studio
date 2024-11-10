// ConcertsInUSAComponent.js
import React from 'react';
import './ConcertsinUSAComponent.css';

function ConcertsinUSAComponent() {
  // Dummy concert data
  const concerts = [
    { id: 1, date: 'THU · JAN 30 · 7:00 PM', artist: 'METALLICA', location: 'Las Vegas, NV · Harrison School for the Arts', imgUrl: '../../../cncrt.png' },
    { id: 2, date: 'THU · JAN 30 · 7:00 PM', artist: 'DRAKE', location: 'Las Vegas, NV · Harrison School for the Arts', imgUrl: '../../../cncrt1.png' },
    { id: 3, date: 'THU · JAN 30 · 7:00 PM', artist: 'METALLICA', location: 'Las Vegas, NV · Harrison School for the Arts', imgUrl: '../../../cncrt2.png' },
    { id: 4, date: 'THU · JAN 30 · 7:00 PM', artist: 'METALLICA', location: 'Las Vegas, NV · Harrison School for the Arts', imgUrl: '../../../cncrt3.png' },
    { id: 5, date: 'TODAY · 7:00 PM', artist: 'PINK PERFORMS ONSTAGE TODAY', location: 'Las Vegas, NV · Harrison School for the Arts', imgUrl: '../../../cncrt4.png', large: true }
  ];

  return (
    <div className="concerts-in-usa">
      <h1>Concerts</h1>
      <a href="#" className="link">in USA</a>
      <div className="concert-grid">
        {concerts.map((concert) => (
          <div
            key={concert.id}
            className={`concert-card ${concert.large ? 'large' : ''}`}
            style={{ backgroundImage: `url(${concert.imgUrl})` }}
          >
            <div className="concert-info">
              <p className="date">{concert.date}</p>
              <h2 className="artist">{concert.artist}</h2>
              <p className="location">{concert.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConcertsinUSAComponent;
