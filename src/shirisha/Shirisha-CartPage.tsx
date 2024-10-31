import React from 'react';

const CartPage: React.FC = () => {
  const cartItems = [
    { id: 1, name: 'Website Builder Plan', quantity: 1, price: 29.99 },
    { id: 2, name: 'Custom Domain', quantity: 1, price: 14.99 },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} (x{item.quantity}) - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
      <h2>Total: ${total.toFixed(2)}</h2>
      <button>Checkout</button>
    </div>
  );
};

export default CartPage;
