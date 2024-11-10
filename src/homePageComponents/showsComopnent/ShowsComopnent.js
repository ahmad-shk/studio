import React from 'react';
import './ShowsComopnent.css';

function ShowsComopnent() {
  return (
    <section className="shows-section">
      <h2>Shows</h2>
      <div className="shows-container">
        <img src="path/to/show1.jpg" alt="Show 1" />
        <img src="path/to/show2.jpg" alt="Show 2" />
        <img src="path/to/show3.jpg" alt="Gotham" />
        <img src="path/to/show4.jpg" alt="Arrow" />
        <img src="path/to/show5.jpg" alt="Show 5" />
        {/* Add more show images as needed */}
      </div>
    </section>
  );
}

export default ShowsComopnent;
