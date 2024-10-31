import React from 'react';

const LaxmiAboutUsPage: React.FC = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <header>
        <h1>About Us</h1>
      </header>
      <main>
        <section>
          <h2>Who We Are</h2>
          <p>
            ShopEasy is an innovative online marketplace dedicated to making shopping simple, convenient, and enjoyable.
            Our team is passionate about bringing you the latest trends and high-quality products from around the globe.
          </p>
        </section>
        <section>
          <h2>Our Vision</h2>
          <p>
            We envision a world where everyone has access to the products they love at their fingertips.
            Our goal is to enhance your shopping experience by offering:
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>Curated collections tailored to your interests</li>
              <li>Exclusive member-only deals and promotions</li>
              <li>Personalized recommendations based on your shopping habits</li>
            </ul>
          </p>
        </section>
        <section>
          <h2>Commitment to Quality</h2>
          <p>
            At ShopEasy, we take pride in sourcing products from reputable suppliers, ensuring you receive the best quality every time.
            Your satisfaction is our top priority.
          </p>
        </section>
        <section>
          <h2>Connect With Us</h2>
          <p>
            love to hear from you! For any questions, suggestions, or support, please email us at <a href="mailto:support@shopeasy.com">support@shopeasy.com</a>.
          </p>
        </section>
      </main>
      <footer>
        <p>© 2024 ShopEasy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LaxmiAboutUsPage;
