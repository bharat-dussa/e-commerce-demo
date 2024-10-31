// PaymentPage.tsx
import React, { useState } from 'react';

const PaymentPage = () => {
  // State for payment details
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Example total amount for the order (This would be dynamic in a real application)
  const totalAmount = 100.0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    // Simple validation for empty fields
    if (!cardNumber || !expiryDate || !cvv || !nameOnCard) {
      setError('Please fill in all fields.');
      setIsSubmitting(false);
      return;
    }

    // Simulate payment processing (replace with actual payment logic)
    try {
      console.log('Payment submitted:', { cardNumber, expiryDate, cvv, nameOnCard });
      // Simulate a successful payment response
      setTimeout(() => {
        alert('Payment successful!');
        setIsSubmitting(false);
        // Reset form or redirect the user after payment
      }, 2000);
    } catch (err) {
      console.error('Payment error:', err);
      setError('Payment failed. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: '0 auto', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h1>Payment Information</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name">Name on Card</label>
          <input
            type="text"
            id="name"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div style={{ width: '48%' }}>
            <label htmlFor="expiryDate">Expiry Date (MM/YY)</label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
              placeholder="MM/YY"
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
            />
          </div>
          <div style={{ width: '48%' }}>
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
            />
          </div>
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div style={{ marginBottom: '1rem' }}>
          <h2>Total: ${totalAmount.toFixed(2)}</h2>
        </div>

        <button type="submit" style={{ padding: '0.5rem 1rem', background: '#28a745', color: '#fff', border: 'none', cursor: 'pointer' }} disabled={isSubmitting}>
          {isSubmitting ? 'Processing...' : 'Complete Payment'}
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;