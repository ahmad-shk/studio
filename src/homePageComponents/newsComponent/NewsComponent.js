import React from 'react';
import './NewsComponent.css';

const featuredArticle = {
  title: "Rising Stars: New Faces to Watch in Hollywood",
  description: "Rising stars in Hollywood, the new faces to watch, are generating buzz with their fresh talent and captivating performances, poised to make significant strides in shaping the future of cinema and entertainment.",
  image: "../../../news5big.png",
  label: "NEWS"
};

const sideArticles = [
  {
    title: "Celebrity Style: Fashion Trends from the Red Carpet",
    author: "TAYLOR BONE",
    date: "TODAY",
    image: "../../../new1.png"
  },
  {
    title: "Celebrity Style: Fashion Trends from the Red Carpet",
    author: "TAYLOR BONE",
    date: "YESTERDAY",
    image: "../../../news2.png"
  },
  {
    title: "Streaming Wars: Which Platform Has the Best Content?",
    author: "TAYLOR BONE",
    date: "YESTERDAY",
    image: "../../../news3.png"
  },
  {
    title: "Streaming Wars: Which Platform Has the Best Content?",
    author: "TAYLOR BONE",
    date: "2 DAYS AGO",
    image: "../../../news4.png"
  }
];

function NewsComponent() {
  return (
    <section className="news-section">
      <h2>News</h2>
      <div className="news-content">
         {/* Sidebar Articles */}
         <div className="sidebar">
          {sideArticles.map((article, index) => (
            <div key={index} className="sidebar-article">
              <img src={article.image} alt={article.title} />
              <div className="sidebar-content">
                <h4>{article.title}</h4>
                <p>{article.author} - {article.date}</p>
              </div>
            </div>
          ))}
          <p className="see-more">See more</p>
        </div>
        
        {/* Featured Article */}
        <div className="featured-article">
          <img src={featuredArticle.image} alt={featuredArticle.title} />
          <div className="featured-content">
            <span className="label">{featuredArticle.label}</span>
            <h3>{featuredArticle.title}</h3>
            <p>{featuredArticle.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsComponent;
