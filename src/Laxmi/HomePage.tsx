import React from 'react';

const LaxmiHomepage: React.FC = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <header>
        <h1>Welcome to ShopEasy</h1>
        <p>Your one-stop shop for all your needs!</p>
      </header>
      <main>
        <section>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Wide range of products</li>
            <li>Affordable prices</li>
            <li>Fast shipping</li>
          </ul>
        </section>
        <section>
          <h2>Get Started</h2>
          <p>Browse our latest collections and enjoy exclusive discounts!</p>
        </section>
      </main>
      <footer>
        <p>© 2024 ShopEasy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LaxmiHomepage;
