// src/HomePage.tsx
import React from 'react';
import './HomePage.module.css';

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

const featuredProducts: Product[] = [
  { id: 1, name: 'Product 1', price: '$29.99', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: '$39.99', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: '$49.99', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Product 4', price: '$59.99', image: 'https://via.placeholder.com/150' },
];

const HomePage: React.FC = () => {
  return (
    <div className="homepage-container">
      {/* Header Section */}
      <header className="header">
        <h1>ShopMate</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Deals</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h2>Discover the Latest Products</h2>
          <p>Find top deals on all your favorite items.</p>
          <button className="cta-button">Shop Now</button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-cards">
          <div className="category-card">Electronics</div>
          <div className="category-card">Fashion</div>
          <div className="category-card">Home & Garden</div>
          <div className="category-card">Toys</div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} ShopMate. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
