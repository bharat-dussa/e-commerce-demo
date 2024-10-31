import React from 'react';

const PaymentPage:React.FC= () => {
  return (
    <div>
      <h1>Payment</h1>
      <form>
        <label>
          Card Number:
          <input type="text" />
        </label>
        <br />
        <label>
          Expiration Date:
          <input type="text" />
        </label>
        <br />
        <label>
          CVV:
          <input type="text" />
        </label>
        <br />
        <label>
          Amount:
          <input type="text" placeholder="Amount in INR" />
        </label>
        <br />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentPage;
