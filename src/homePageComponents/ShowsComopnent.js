import React from 'react';
import Slider from 'react-slick'; // Import Slider from react-slick
import "slick-carousel/slick/slick.css"; // Import slick styles
import "slick-carousel/slick/slick-theme.css"; // Import slick theme styles

function ShowsComponent() {
  
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 7000,
  };

  const showThumbnails = [
    { image: '../../../show1.png' },
    { image: '../../../show2.png' },
    { image: '../../../show3.png' },
    { image: '../../../show4.png' },
    { image: '../../../show1.png' },
    { image: '../../../show2.png' },
    { image: '../../../show3.png' },
  ];

  return (
    <div className="p-4 pt-6">
      <h3 className="text-[34px] font-bold">Shows</h3>
      <Slider {...slickSettings}>
        {showThumbnails.map((element, index) => (
          <div key={index} className="relative">
            <img
              src={element.image}
              alt={`Show ${index + 1}`}
              className="min-w-[255px] h-[220px] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ShowsComponent;
