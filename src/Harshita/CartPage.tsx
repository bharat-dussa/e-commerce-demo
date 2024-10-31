import React from 'react';

type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

const Cart: React.FC = () => {
    
    const cartItems: CartItem[] = [
        { id: 1, name: "Item A", price: 10, quantity: 2 },
        { id: 2, name: "Item B", price: 15, quantity: 1 },
        { id: 3, name: "Item C", price: 8, quantity: 3 },
    ];

    
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Your Cart</h1>

            <div style={styles.cartItems}>
                {cartItems.map(item => (
                    <div key={item.id} style={styles.cartItem}>
                        <span>{item.name}</span>
                        <span>Quantity: {item.quantity}</span>
                        <span>Price: ${item.price * item.quantity}</span>
                    </div>
                ))}
            </div>

            <div style={styles.total}>
                <strong>Total: ${totalPrice}</strong>
            </div>

            <button style={styles.checkoutButton}>Proceed to Checkout</button>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        fontFamily: 'Arial, sans-serif',
    },
    title: {
        fontSize: '2em',
        marginBottom: '20px',
    },
    cartItems: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        width: '80%',
        maxWidth: '600px',
        marginBottom: '20px',
    },
    cartItem: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        borderBottom: '1px solid #ccc',
    },
    total: {
        fontSize: '1.2em',
        marginBottom: '20px',
    },
    checkoutButton: {
        padding: '10px 20px',
        fontSize: '1em',
        color: 'white',
        backgroundColor: '#28a745',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default Cart;