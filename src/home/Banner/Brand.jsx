import React from 'react'
import  './Brand.css'
import zara from '../assets/brand/zara.png'
import prada from '../assets/brand/prada.png'
import versace from '../assets/brand/versace.png'
import gucci from '../assets/brand/gucci.png'
import calvinklein from '../assets/brand/calvinklein.png'

const Brand = () => {
  return (
    <div className='brand'>
        <img src={versace} alt="" />
        <img src={zara} alt="" />
        <img src={gucci} alt="" />
        <img src={prada} alt="" />
        <img src={calvinklein} alt="" />
    </div>
  )
}

export default Brand