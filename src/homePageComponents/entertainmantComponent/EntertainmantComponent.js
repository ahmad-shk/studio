import React from 'react';
import './EntertainmantComponent.css';

const shows = [
  {
    title: "Robot Future",
    description: "Unrelenting sci-fi saga. Searches for missing new technology, only to open a Pandora's box of the evil alien threat.",
    image: "../../../Ent1.png"
  },
  {
    title: "Doctor Strange",
    description: "Original Series",
    image: "../../../Ent2.png"
  },
  {
    title: "Illusion",
    description: "Original Series",
    image: "../../../Ent3.png"
  },
  {
    title: "Broken Bridge",
    description: "Original Series",
    image: "../../../Ent4.png"
  },
  {
    title: "DC Movie",
    description: "Original Series",
    image: "../../../Ent5.png"
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
