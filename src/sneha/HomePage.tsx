import React from 'react';

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <header style={{ backgroundColor: '#4CAF50', color: 'white', padding: '20px' }}>
        <h1>Welcome to Our E-commerce Store</h1>
        <p>Discover our latest products and deals.</p>
        <button style={{ padding: '10px 20px', fontSize: '16px', margin: '10px' }}>
          Shop Now
        </button>
      </header>

      <section style={{ marginTop: '20px' }}>
        <h2>Featured Products</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
          <div style={{ padding: '20px', border: '1px solid #ddd', width: '150px' }}>
            <h3>Product 1</h3>
            <p>$19.99</p>
            <button style={{ padding: '5px 10px' }}>Add to Cart</button>
          </div>
          <div style={{ padding: '20px', border: '1px solid #ddd', width: '150px' }}>
            <h3>Product 2</h3>
            <p>$29.99</p>
            <button style={{ padding: '5px 10px' }}>Add to Cart</button>
          </div>
          <div style={{ padding: '20px', border: '1px solid #ddd', width: '150px' }}>
            <h3>Product 3</h3>
            <p>$39.99</p>
            <button style={{ padding: '5px 10px' }}>Add to Cart</button>
          </div>
        </div>
      </section>

      <footer style={{ marginTop: '30px', padding: '10px', backgroundColor: '#f1f1f1' }}>
        <p>© 2023 Our E-commerce Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
