import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import ProductItem from "./ProductItem";
import CartPage from "./CartPage";
import NikitaHomePage from "./nikita/HomePage";
// import HomePage from './home/HomePage'
import PoojaHomePage from './pooja/HomePage';
import SnehaHomePage from "./sneha/HomePage"
import KeerthanaCartPage from "./Keerthana/CartPage"
import NarendraPaymentPage from "./Narendra-AboutUs/Narendra-AboutUs";
import KeerthanaHomePage from "./Keerthana/HomePage"

const MainApp = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            {/* <Route path='/vignesh/home' element={<HomePage />} /> */}
            <Route path='/product/:id' element={<ProductItem />} />
            <Route path='/cart' element={<CartPage />} />

            <Route path="nikita/homepage" element={<NikitaHomePage />} />
            <Route path="pooja/homepage" element={<PoojaHomePage />} />
            <Route path="sneha/homepage" element={<SnehaHomePage/>}/>
            <Route path="keerthana/cartPage" element={<KeerthanaCartPage/>}/>
            <Route path="keerthana/homepage" element={<KeerthanaHomePage/>} />
            <Route path="narendra/paymentpage" element={<NarendraPaymentPage/>} />
        </Routes>
    </BrowserRouter>
  );
};

export default MainApp;

