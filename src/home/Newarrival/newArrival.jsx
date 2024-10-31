
import React from 'react';
import './newarrival.css';
import { IoStar, IoStarHalf } from 'react-icons/io5';
import product1 from '../assets/newarrival/product1.png';
import product2 from '../assets/newarrival/product2.png';
import product3 from '../assets/newarrival/product3.png';
import product4 from '../assets/newarrival/product4.png';

// Example products data array
const products = [
  {
    id: 1,
    image: product1,
    name: 'T-SHIRT WITH TAPE DETAILS',
    rating: 4.5,
    price: 120,
    realPrice: null, // No real price (for no discount)
    discount: null,
  },
  {
    id: 2,
    image: product2,
    name: 'SKINNY FIT JEANS',
    rating: 3.5,
    price: 240,
    realPrice: 260, // Original price before discount
    discount: '-20%',
  },
  {
    id: 3,
    image: product3,
    name: 'CHECKERED SHIRT',
    rating: 4.5,
    price: 180,
    realPrice: null,
    discount: null,
  },
  {
    id: 4,
    image: product4,
    name: 'SLEEVE STRIPED T-SHIRT',
    rating: 4.5,
    price: 130,
    realPrice: 160,
    discount: '-20%',
  },
];

const NewArrival = () => {
  const getStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <IoStar key={index} color='#FFC633' />
        ))}
        {halfStar && <IoStarHalf color='#FFC633' />}
      </>
    );
  };

  return (
    <div className='newarrival'>
      <h1 className='title'>NEW ARRIVALS</h1>
      <div className="category">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <div className="rating">
              {getStars(product.rating)} <span className='rating_no'>{product.rating}/5</span>
            </div>
            <div className="price">
              ${product.price}
              {product.realPrice && (
                <>
                  <span className='realprice'>${product.realPrice}</span>
                  <span className='off'>{product.discount}</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="viewall">
        <button>View All</button>
      </div>
    </div>
  );
};

export default NewArrival;