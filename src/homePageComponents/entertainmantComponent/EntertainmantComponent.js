import React from 'react';
import './EntertainmantComponent.css';

const shows = [
  {
    title: "Robot Future",
    description: "Unrelenting sci-fi saga. Searches for missing new technology, only to open a Pandora's box of the evil alien threat.",
    image: "path/to/robot-future.jpg"
  },
  {
    title: "Doctor Strange",
    description: "Original Series",
    image: "path/to/doctor-strange.jpg"
  },
  {
    title: "Illusion",
    description: "Original Series",
    image: "path/to/illusion.jpg"
  },
  {
    title: "Broken Bridge",
    description: "Original Series",
    image: "path/to/broken-bridge.jpg"
  },
  {
    title: "DC Movie",
    description: "Original Series",
    image: "path/to/dc-movie.jpg"
  }
];

function EntertainmantComponent() {
  return (
    <section className="entertainment-section">
      <h2>Entertainment</h2>
      <div className="entertainment-container">
        {shows.map((show, index) => (
          <div key={index} className="entertainment-item">
            <img src={show.image} alt={show.title} />
            <div className="overlay">
              <p className="series-type">{show.description}</p>
              <h3 className="show-title">{show.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EntertainmantComponent;
