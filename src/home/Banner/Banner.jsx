import React from 'react'
import './Banner.css'
import Vector from '../assets/Vector.png'
import Heroimage from '../assets/Heroimage.png'
const Banner = () => {
  return (
    <div  className="banner">
        <div className="banner-left">
            <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button href="#" className="btn">Shop Now</button>
            <div className="statistics">
                <div className="statistic">
                    <h2>200+</h2>
                    <span>International Brands</span>
                </div>
                <div className="statistic">
                    <h2>2,000+</h2>
                    <span>High-Quality Products</span>
                </div>
                <div className="statistic">
                    <h2>30,000+</h2>
                    <span>Happy Customers</span>
                </div>
            </div>
        </div>
        <div className="banner-right">
            <img src={Vector} alt="Vector" className='Vector1'/>
            <img src={Heroimage} className='Heroimage' alt="Heroimage" />
            <img src={Vector} alt="Vector" className='Vector2' />
        </div>
        
    </div>
  )
}

export default Banner