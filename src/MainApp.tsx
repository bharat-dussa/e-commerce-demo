import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import ProductItem from './ProductItem'
import CartPage from './CartPage'

const MainApp = () => {
    
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/product/:id' element={<ProductItem />} />
            <Route path='/cart' element={<CartPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default MainApp