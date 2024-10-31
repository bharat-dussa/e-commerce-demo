// HomePage.tsx
// import React from 'react';
import React from "react";

const HomePage = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Welcome to the Homepage</h1>
        <p>Your one-stop solution for news, weather, and entertainment!</p>
      </header>
      
      <section style={styles.section}>
        <h2>Features</h2>
        <ul>
          <li>Latest News Updates</li>
          <li>Personalized Movie Recommendations</li>
          <li>Weather Forecast</li>
          <li>Customizable Widgets</li>
        </ul>
      </section>
      <footer style={styles.footer}>
        <p>&copy; 2024 DataSphere. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center' as const,
    margin: '0 auto',
    padding: '2rem',
    maxWidth: '800px',
  },
  header: {
    backgroundColor: '#f8f8f8',
    padding: '1.5rem',
    borderRadius: '8px',
    marginBottom: '2rem',
  },
  section: {
    backgroundColor: '#e0e0e0',
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '2rem',
  },
  footer: {
    fontSize: '0.9rem',
    color: '#666',
  },
};

export default HomePage;
