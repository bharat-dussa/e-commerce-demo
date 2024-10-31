import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

const HomePage: React.FC = () => {
  const featuredProducts = [
    { id: '1', name: 'Product 1', price: 29.99 },
    { id: '2', name: 'Product 2', price: 19.99 },
    { id: '3', name: 'Product 3', price: 39.99 },
  ];

  return (
    <div className="home-page">
      <h1>Welcome to Our Store!</h1>
      <p>Check out our featured products below:</p>
      <div className="featured-products">
        <ul>
          {featuredProducts.map(product => (
            <li key={product.id} className="product-item">
              <h2>{product.name}</h2>
              <p>Price: ${product.price.toFixed(2)}</p>
              <Link to={`/product/${product.id}`}>View Details</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
