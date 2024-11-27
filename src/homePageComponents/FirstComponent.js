import React from 'react';
import Slider from 'react-slick'; // Import Slider from react-slick
import "slick-carousel/slick/slick.css"; // Import slick styles
import "slick-carousel/slick/slick-theme.css"; // Import slick theme styles

// Main News Data
const mainNews = [
  {
    image: '../../../MainNews.png',
    title: 'Protests Breaks Out In California',
    description:
      'Protests broke out in California as thousands took to the streets to oppose recent policy changes, leading to clashes with law enforcement and a state of emergency declared in several cities.',
    category: 'News',
  },
  {
    image: '../../../MainNews.png',
    title: 'Election 2024: Key Issues and Candidates to Watch',
    description:
      'The upcoming elections are shaping up to be one of the most contested in recent history. Here’s what to look out for.',
    category: 'Politics',
  },
  {
    image: '../../../MainNews.png',
    title: 'Economic Outlook for 2024',
    description:
      'Experts weigh in on the economic challenges and opportunities facing the world in the coming year.',
    category: 'Finance',
  },
  {
    image: '../../../MainNews.png',
    title: 'Climate Action Summit 2024',
    description:
      'Global leaders gather to discuss urgent climate policies aimed at reducing greenhouse gas emissions.',
    category: 'Environment',
  },
];

// Slick settings
const slickSettings = {
  dots: false, 
  infinite: true, 
  speed: 1000, 
  slidesToShow: 1, 
  slidesToScroll: 1,
  autoplay: true, 
  autoplaySpeed: 7000, 
};

const FirstComponent = () => {
  return (
    <div>
      {/* Main News Section with React Slick */}
      <div className="h-[100vh] text-white">
        <Slider {...slickSettings}>
          {mainNews.map((news, index) => (
            <div key={index} className="h-[100vh] relative flex items-end justify-start">
              <div className="absolute top-0 w-full h-full">
                <img src={news.image} className="max-h-full min-h-full w-full" alt="Main News" />
              </div>
              <div className="relative z-[4] p-12 mt-80">
                <label className="px-8 py-1 bg-[#FF6A0D] rounded-full">{news.category}</label>
                <h2 className="text-[48px] font-bold">{news.title}</h2>
                <p className="text-[24px] max-w-[800px]">{news.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FirstComponent;
