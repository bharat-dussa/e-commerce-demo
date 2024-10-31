import React from 'react';

const AboutUs: React.FC = () => {
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      color: '#4A4A4A',
    },
    subheading: {
      color: '#7A7A7A',
    },
    paragraph: {
      lineHeight: 1.6,
    },
    list: {
      margin: '10px 0',
      paddingLeft: '20px',
    },
    listItem: {
      marginBottom: '5px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.paragraph}>
        Welcome to our knitting community! We are passionate knitters who love to share our craft and connect with fellow enthusiasts. Our mission is to inspire creativity, provide resources, and foster a supportive environment for all skill levels.
      </p>
      <h2 style={styles.subheading}>Our Story</h2>
      <p style={styles.paragraph}>
        Founded in [Year], our journey began with a simple passion for yarn and creativity. What started as a small group of friends knitting together has grown into a vibrant community of knitters from around the world. We believe in the power of knitting to bring people together, share stories, and create beautiful handmade items.
      </p>
      <h2 style={styles.subheading}>What We Offer</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>Tutorials and Patterns: Discover a variety of free patterns and video tutorials to help you improve your knitting skills.</li>
        <li style={styles.listItem}>Community Events: Join our local and online knitting meetups, workshops, and events.</li>
        <li style={styles.listItem}>Resources: Access tips, tricks, and articles on everything from choosing the right yarn to advanced knitting techniques.</li>
      </ul>
      <h2 style={styles.subheading}>Join Us!</h2>
      <p style={styles.paragraph}>
        Whether you're a beginner or an experienced knitter, we invite you to join our community. Connect with us on social media, share your projects, and let's inspire each other to create something wonderful!
      </p>
    </div>
  );
};

export default AboutUs;
