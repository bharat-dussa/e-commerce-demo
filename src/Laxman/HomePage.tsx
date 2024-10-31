// src/HomePage.tsx

import React from 'react';

const HomePage: React.FC = () => {
    return (
        <div className="homepage">
            <header className="header">
                <h1>Welcome to HomePage of My Website</h1>
                <nav className="navbar">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <div style={{margin:"20px"}}>
                <button>shop</button>
            </div>

            <p>&copy; 2024 My Website. All rights reserved.</p>
        </div>
    );
};

export default HomePage;
