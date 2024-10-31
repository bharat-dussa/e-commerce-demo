import React from 'react'
import './homepage.css'
import Navbar from './navbar/Navbar.jsx'
import Banner from './Banner/Banner.jsx'
import Brand from './Banner/Brand.jsx'
import NewArrival from './Newarrival/newArrival.jsx'
import Topseller from './topseller/Topseller.jsx'
// import DressStyle from './DressStyle/DressStyle.jsx'
// import { IoClose } from "react-icons/io5";
const VigneshHomePage = () => {
  return (
    <div>
      <main className='container'>
      <div className="coupon">
        <p>Sign up and get 20% off to your first order. <a className='couponsignup' href='signup'>Sign Up Now</a> </p>
        {/* < IoClose /> */}
      </div>
      <Navbar/>
      <Banner/>
      <Brand/>
      <NewArrival/>
      <Topseller/>
      {/* <DressStyle/> */}
      </main>
    </div>
  )
}

export default VigneshHomePage