import React from "react"

const LaxmiPaymentPage = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Payment Page</h1>
            <form style={{ maxWidth: '400px', margin: 'auto' }}>
                <label style={{ display: 'block', margin: '10px 0' }}>
                    Name on Card:
                    <input type="text" required style={{ width: '100%', padding: '8px' }} />
                </label>
                <label style={{ display: 'block', margin: '10px 0' }}>
                    Card Number:
                    <input type="text" required style={{ width: '100%', padding: '8px' }} />
                </label>
                <label style={{ display: 'block', margin: '10px 0' }}>
                    Expiry Date (MM/YY):
                    <input type="text" required style={{ width: '100%', padding: '8px' }} />
                </label>
                <label style={{ display: 'block', margin: '10px 0' }}>
                    CVV:
                    <input type="text" required style={{ width: '100%', padding: '8px' }} />
                </label>
                <button type="submit" style={{ padding: '10px 20px', marginTop: '10px' }}>
                    Pay Now
                </button>
            </form>
        </div>
    )
}
export default LaxmiPaymentPage