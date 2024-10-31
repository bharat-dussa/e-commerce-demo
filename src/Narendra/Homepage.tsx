// homepage.tsx
import React from 'react';

// Define the component
const Homepage = () => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <header>
        <h1>Welcome to My Project</h1>
        <p>This is the homepage of my application.</p>
      </header>
      <main>
        <section>
          <h2>Features</h2>
          <ul>
            <li>Easy to use</li>
            <li>Highly customizable</li>
            <li>Open-source</li>
          </ul>
        </section>
        <section>
          <h2>Get Started</h2>
          <p>Check out the documentation to get started.</p>
        </section>
      </main>
      <footer>
        <p>© 2024 My Project. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;