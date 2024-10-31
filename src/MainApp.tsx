import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import ProductItem from './ProductItem'
import CartPage from './CartPage'
import HomePage from './home/HomePage'

const MainApp = () => {
    
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/vignesh/home' element={<HomePage />} />
            <Route path='/product/:id' element={<ProductItem />} />
            <Route path='/cart' element={<CartPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default MainApp