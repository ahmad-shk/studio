import React from 'react';

// Main component
const FirstComponent = () => {
  // Data for the main news and thumbnail articles
  const mainNews = {
    image: '../../../MainNews.png',
    title: 'Protests Breaks Out In California',
    description: 'Protests broke out in California as thousands took to the streets to oppose recent policy changes, leading to clashes with law enforcement and a state of emergency declared in several cities.',
    category: 'News',
  };

  const thumbnailArticles = [
    {
      image: '../../../subnews1.jpeg',
      title: 'Protests Breaks Out In California',
    },
    {
      image: '../../../subnews2.jpeg',
      title: 'Election 2024: Key Issues and Candidates to Watch',
    },
    {
      image: '../../../subnews3.jpeg',
      title: 'Opinion: What This Election Means for Democracy',
    },
    {
      image: '../../../subnews4.jpeg',
      title: 'New Legislation Sparks Debate Among Lawmakers',
    },
  ];

  return (
    <div style={styles.container}>
      {/* Main News Section */}
      <div style={{ ...styles.mainNews, backgroundImage: `url(${mainNews.image})` }}>
        <div style={styles.overlay}></div>
        <div style={styles.mainNewsContent}>
          <span style={styles.category}>{mainNews.category}</span>
          <h2 style={styles.mainTitle}>{mainNews.title}</h2>
          <p style={styles.description}>{mainNews.description}</p>
        </div>
      </div>

      {/* Thumbnail Section */}
      <div style={styles.thumbnailSection}>
        {thumbnailArticles.map((article, index) => (
          <Thumbnail key={index} image={article.image} title={article.title} />
        ))}
      </div>
    </div>
  );
};

// Thumbnail component
const Thumbnail = ({ image, title }) => (
  <div style={{ ...styles.thumbnail, backgroundImage: `url(${image})` }}>
    <div style={styles.overlay}></div>
    <div style={styles.thumbnailContent}>
      <h3 style={styles.thumbnailTitle}>{title}</h3>
    </div>
  </div>
);

// CSS-in-JS styles
const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    color: 'white',
    padding: '16px',
  },
  mainNews: {
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '8px',
    overflow: 'hidden',
    padding: '24px',
    height: '400px',
  },
  overlay: {
    position: 'absolute',
    inset: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  mainNewsContent: {
    position: 'relative',
    zIndex: 1,
  },
  category: {
    backgroundColor: 'orange',
    padding: '4px 8px',
    borderRadius: '4px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  mainTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    margin: '16px 0',
  },
  description: {
    fontSize: '18px',
    maxWidth: '600px',
  },
  thumbnailSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
    marginTop: '24px',
  },
  thumbnail: {
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '8px',
    overflow: 'hidden',
    height: '150px',
  },
  thumbnailContent: {
    position: 'relative',
    zIndex: 1,
    padding: '8px',
  },
  thumbnailTitle: {
    fontSize: '14px',
    fontWeight: 'bold',
  },
};

export default FirstComponent;
