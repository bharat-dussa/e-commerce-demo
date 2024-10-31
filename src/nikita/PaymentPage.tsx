import React, { useState } from 'react';

const PaymentPage: React.FC = () => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real use case, this is where you'd handle the payment with an API call
    console.log('Payment Info:', { name, cardNumber, expiryDate, cvv });
    alert('Payment Submitted');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '1em' }}>
      <h2>Payment Information</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1em' }}>
          <label htmlFor="name">Name on Card</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5em' }}
          />
        </div>
        <div style={{ marginBottom: '1em' }}>
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
            maxLength={16}
            style={{ width: '100%', padding: '0.5em' }}
          />
        </div>
        <div style={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
          <div>
            <label htmlFor="expiryDate">Expiry Date</label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
              placeholder="MM/YY"
              style={{ padding: '0.5em', width: '100%' }}
            />
          </div>
          <div>
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
              maxLength={3}
              style={{ padding: '0.5em', width: '100%' }}
            />
          </div>
        </div>
        <button type="submit" style={{ width: '100%', padding: '1em', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
