import React from 'react';

const AboutUsPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About Us</h1>
      <p style={styles.paragraph}>
        We are a dedicated team committed to providing the best solutions for our clients.
        Our mission is to innovate and deliver top-notch services that exceed expectations.
      </p>
      <h2 style={styles.subHeader}>Our Values</h2>
      <ul style={styles.list}>
        <li>Integrity</li>
        <li>Excellence</li>
        <li>Teamwork</li>
        <li>Customer Focus</li>
      </ul>
      <h2 style={styles.subHeader}>Our Vision</h2>
      <p style={styles.paragraph}>
        To be the leading provider in our industry, known for our quality and customer service.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: 'auto',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    fontSize: '2.5rem',
    color: '#333',
  },
  subHeader: {
    fontSize: '2rem',
    color: '#555',
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: '1.5',
  },
  list: {
    listStyleType: 'disc' as 'disc', // Type assertion for TypeScript
    paddingLeft: '20px',
  },
};

export default AboutUsPage;
