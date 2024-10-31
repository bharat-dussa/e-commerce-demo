import React from 'react';

const AboutUsPage: React.FC = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>About Us</h1>
      <p>
        Welcome to ABC, where our passion for gaming drives us to create 
        immersive experiences that captivate players around the world. We are dedicated to developing 
        innovative games that push the boundaries of creativity and technology.
      </p>

      <section style={{ marginTop: '30px' }}>
        <h2>Our Mission</h2>
        <p>
          To deliver unforgettable gaming experiences that inspire and engage players, 
          fostering a community of gamers who share our love for adventure and exploration.
        </p>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Our Values</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>Innovation and Creativity</li>
          <li>Player-Centric Design</li>
          <li>Community Engagement</li>
          <li>Quality and Excellence</li>
          <li>Integrity and Respect</li>
        </ul>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>Our Story</h2>
        <p>
          Founded in 2023 by a group of passionate gamers, [Your Gaming Company Name] started 
          as a dream to create games that resonate with players. We have since developed a range 
          of popular titles that have captured the hearts of gamers everywhere.
        </p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>Meet Our Team</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <div style={{ padding: '20px', border: '1px solid #ddd', width: '150px' }}>
            <h3>Alice Johnson</h3>
            <p>CEO & Game Designer</p>
          </div>
          <div style={{ padding: '20px', border: '1px solid #ddd', width: '150px' }}>
            <h3>Bob Smith</h3>
            <p>Lead Programmer</p>
          </div>
          <div style={{ padding: '20px', border: '1px solid #ddd', width: '150px' }}>
            <h3>Charlie Brown</h3>
            <p>Community Manager</p>
          </div>
        </div>
      </section>
      
      <footer style={{ marginTop: '30px', padding: '10px', backgroundColor: '#f1f1f1' }}>
        <p>© 2023 ABC. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUsPage;