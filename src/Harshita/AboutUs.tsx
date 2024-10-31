import React from 'react';

const HarshitaAboutUs: React.FC = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>About Us</h1>
            <p style={styles.description}>
                Welcome to our app! We are dedicated to providing top-quality service and making a positive impact in our community.
            </p>
            <p style={styles.description}>
                Our team works hard to deliver the best experience for our users. Thank you for choosing us!
            </p>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: '#f8f8f8',
        height: '100vh',
    },
    title: {
        fontSize: '2em',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '20px',
    },
    description: {
        fontSize: '1em',
        color: '#666',
        textAlign: 'center' as 'center',
        maxWidth: '600px',
        marginBottom: '15px',
    },
};

export default HarshitaAboutUs;
