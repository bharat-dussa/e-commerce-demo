import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import './navbar.css'
const Navbar = () => {
    return (
        <div className="navconatiner">
            <div className='navbar'>
                <div className="Logo">
                    <h1>SHOP.CO</h1>
                </div>
                <div className="navpages">
                    <ul>
                        <li><a href="/">Shop</a> < FaAngleDown className='downarrowicon' /></li>
                        <li><a href="/about">On Sale</a></li>
                        <li><a href="/contact">New Arrivals</a></li>
                        <li><a href="/contact">Brands</a></li>
                    </ul>
                </div>
                <div className="inputfield">
                    <IoSearch className='searchicon' />
                    <input type="text" placeholder="Search fro products..." />
                </div>
                <div className="navitems">
                    <FiShoppingCart  className='items'/>
                    <FaRegUserCircle   className='items'/>
                </div>
            </div>
        </div>
    )
}

export default Navbar