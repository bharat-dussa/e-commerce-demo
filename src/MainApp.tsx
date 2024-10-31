import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import CartPage from './CartPage'
import PaymentPage from './nikita/PaymentPage'
import ProductItem from './ProductItem'

import VigneshHomePage from "./home/HomePage"
import KeerthanaPaymentPage from "./Keerthana-PaymentPage/PaymentPage"
import KeerthanaAboutUsPage from "./Keerthana/aboutUS"
import KeerthanaCartPage from "./Keerthana/CartPage"
import KeerthanaHomePage from "./Keerthana/HomePage"
import NarendraPaymentPage from "./Narendra-AboutUs/Narendra-AboutUs"
import NarendraHomePage from "./Narendra/Homepage"
import NikitaHomePage from "./nikita/HomePage"
import AboutUsPage from './pooja/AboutUsPage'
import PoojaHomePage from './pooja/HomePage'
import SnehaHomePage from "./sneha/HomePage"
import AboutUs from "./vidya/aboutUs"
import NarendraAboutUsPage from "./Narendra-AboutUs/Narendra-AboutUsPage"
import HomePage from "./Harshita/HarshitaHomePage"

const MainApp = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/vignesh/home' element={<VigneshHomePage />} /> 
            <Route path='/product/:id' element={<ProductItem />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='nikita/payment' element={<PaymentPage />} />
            <Route path='pooja/about-us' element={<AboutUsPage/>}/>

            <Route path="nikita/homepage" element={<NikitaHomePage />} />
            <Route path="pooja/homepage" element={<PoojaHomePage />} />
            <Route path="sneha/homepage" element={<SnehaHomePage/>} />
            <Route path="keerthana/homepage" element={<KeerthanaHomePage/>} />
            <Route path="narendra/paymentpage" element={<NarendraPaymentPage/>} />
            <Route path="keerthana/paymentpage" element={<KeerthanaPaymentPage/>}/>
            <Route path="vidya/aboutUs" element={<AboutUs/>} />
            <Route path="sneha/homepage" element={<SnehaHomePage/>}/>
            <Route path="narendra/homepage" element={<NarendraHomePage/>}/>
            <Route path="keerthana/aboutusPage" element={<KeerthanaAboutUsPage />}/>

            <Route path="keerthana/cartPage" element={<KeerthanaCartPage />}/>
            <Route path="keerthana/homepage" element={<KeerthanaHomePage />} />
            <Route path="narendra/paymentpage" element={<NarendraPaymentPage />} />
            <Route path="narendra/aboutuspage" element={<NarendraAboutUsPage/>}/>
            <Route path="Harshita/HomePage" element={<HomePage/>}/>

        </Routes>
    </BrowserRouter>
  );
};

export default MainApp;

