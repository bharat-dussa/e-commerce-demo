// import React from 'react'
// import './newarrival.css'
// import { IoStar, IoStarHalf } from 'react-icons/io5'
// import product1 from '../assets/newarrival/product1.png'
// import product2 from '../assets/newarrival/product2.png'
// import product3 from '../assets/newarrival/product3.png'
// import product4 from '../assets/newarrival/product4.png'
// const newArrival = () => {
//     return (
//         <div className='newarrival'>
//             <h1 className='title'>NEW ARRIVALS</h1>
//             <div className="category">
//                 <div className="product1 product">
//                     <img src={product1} alt="" />
//                     <h4>T-SHIRT WITH TAPE DETAILS</h4>
//                     <div className="rating"> <IoStar color='#FFC633' /><IoStar color='#FFC633' /><IoStar color='#FFC633' /><IoStar color='#FFC633' /><IoStarHalf color='#FFC633' /> <span className='rating_no'>4.5/5</span></div>
//                     <div className="price">$120</div>
//                 </div>
//                 <div className="product2 product">
//                     <img src={product2} alt="" />
//                     <h4>SKINNY FIT JEANS</h4>
//                     <div className="rating"> <IoStar color='#FFC633' /><IoStar color='#FFC633' /><IoStar color='#FFC633' /><IoStarHalf color='#FFC633' /> <span className='rating_no'>3.5/5</span></div>
//                     <div className="price">$240 <span className='realprice'>$260</span> <span className='off'>-20%</span></div>
//                 </div>
//                 <div className="product3 product">
//                     <img src={product3} alt="" />
//                     <h4>CHECKERED SHIRT</h4>
//                     <div className="rating"> <IoStar color='#FFC633' /><IoStar color='#FFC633' /><IoStar color='#FFC633' /><IoStar color='#FFC633' /><IoStarHalf color='#FFC633' /> <span className='rating_no'>4.5/5</span></div>
//                     <div className="price">$180</div>
//                 </div>
//                 <div className="product4 product">
//                     <img src={product4} alt="" />
//                     <h4>SLEEVE STRIPED T-SHIRT</h4>
//                     <div className="rating"> <IoStar color='#FFC633' /><IoStar color='#FFC633' /><IoStar color='#FFC633' /><IoStar color='#FFC633' /><IoStarHalf color='#FFC633' /> <span className='rating_no'>4.5/5</span></div>
//                     <div className="price">$130 <span className='realprice'>$160</span> <span className='off'>-20%</span></div>
//                 </div>
//             </div>
//             <div className="viewall">
//                 <button >View All</button>
//             </div>
//         </div>
//     )
// }

// export default newArrival
import React from 'react';
import './topseller.css';
import { IoStar, IoStarHalf } from 'react-icons/io5';
import product1 from '../assets/topseller/product1.png';
import product2 from '../assets/topseller/product2.png';
import product3 from '../assets/topseller/product3.png';
import product4 from '../assets/topseller/product4.png';

// Example products data array
const products = [
  {
    id: 1,
    image: product1,
    name: 'VERTICAL STRIPED SHIRT',
    rating: 5.0,
    price: 212,
    realPrice: 232, // No real price (for no discount)
    discount: "-20%",
  },
  {
    id: 2,
    image: product2,
    name: 'COURAGE GRAPHIC T-SHIRT',
    rating: 4,
    price: 145,
    realPrice: null, // Original price before discount
    discount: null,
  },
  {
    id: 3,
    image: product3,
    name: 'LOOSE FIT BERMUDA SHORTS',
    rating: 3,
    price: 80,
    realPrice: null,
    discount: null,
  },
  {
    id: 4,
    image: product4,
    name: 'FADED SKINNY JEANS',
    rating: 4.5,
    price: 130,
    realPrice: null,
    discount: null,
  },
];

const Topseller = () => {
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
    <div className='topseller'>
      <h1 className='toptitle'>TOP SELLING</h1>
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

export default Topseller;
