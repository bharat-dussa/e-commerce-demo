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
import LaxmanHomePage from "./Laxman/HomePage"
import LaxmanCartPage from "./Laxman/CartPage"
import NarendraPaymentPage from "./Narendra-AboutUs/Narendra-AboutUs"
import NarendraAboutUsPage from "./Narendra-AboutUs/Narendra-AboutUsPage"
import NarendraHomePage from "./Narendra/Homepage"
import NikitaHomePage from "./nikita/HomePage"
import AboutUsPage from './pooja/AboutUsPage'
import PoojaHomePage from './pooja/HomePage'
import HomePage from "./prachi/HomePage"
import SnehaAboutUS from "./sneha/AboutUs"
import SnehaHomePage from "./sneha/HomePage"
import AboutUs from "./vidya/aboutUs";
import ShirishaPaymentPage from"./shirisha/shirisha-PaymentPage"
import NarendraAboutUsPage from "./Narendra-AboutUs/Narendra-AboutUsPage"

import ShirishaHomepage from "./shirisha/Shirisha-HomePage"
import ShirishaCartPage from "./shirisha/shirisha-cartPage";
import HarshitaAboutUs from './Harshita/AboutUs'
import HomePage from "./Harshita/HarshitaHomePage"
import LaxmiAboutUsPage from "./Laxmi/AboutUsPage"
import LaxmiHomePage from "./Laxmi/HomePage"
import NarendraAboutUsPage from "./Narendra-AboutUs/Narendra-AboutUsPage";
import ShirishaAboutUsPage from "./Shirisha/Shirisha-AboutUs;
import LaxmiPaymentPage from "./Laxmi-PaymentPage/PaymentPage"


const MainApp = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/vignesh/home' element={<VigneshHomePage />} /> 
            <Route path='/product/:id' element={<ProductItem />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path="Laxman/homepage" element={<LaxmanHomePage/>}/>
            <Route path='Laaxman/cart' element={<LaxmanCartPage/>}/>
            <Route path='nikita/payment' element={<PaymentPage />} />
            <Route path='pooja/about-us' element={<AboutUsPage/>}/>

            <Route path="nikita/homepage" element={<NikitaHomePage />} />
            <Route path="pooja/homepage" element={<PoojaHomePage />} />
            <Route path="sneha/homepage" element={<SnehaHomePage/>} />
            <Route path="sneha/aboutus" element={<SnehaAboutUS/>} />
            <Route path="keerthana/homepage" element={<KeerthanaHomePage/>} />
            <Route path="narendra/paymentpage" element={<NarendraPaymentPage/>} />
            <Route path="keerthana/paymentpage" element={<KeerthanaPaymentPage/>}/>
            <Route path="vidya/aboutUs" element={<AboutUs/>} />
            <Route path="sneha/homepage" element={<SnehaHomePage/>}/>
            <Route path="narendra/homepage" element={<NarendraHomePage/>}/>
            <Route path="keerthana/aboutusPage" element={<KeerthanaAboutUsPage />}/>
            <Route path="Harshita/aboutusPage" element={<HarshitaAboutUs />}/>       
            <Route path="keerthana/cartPage" element={<KeerthanaCartPage />}/>
            <Route path="keerthana/homepage" element={<KeerthanaHomePage />} />
            <Route path="narendra/paymentpage" element={<NarendraPaymentPage />} />
            <Route path="narendra/aboutuspage" element={<NarendraAboutUsPage/>}/>
            <Route path="shirisha/homepage"element={<ShirishaHomepage/>} />
            <Route path="shirisha/cartPage"element={<ShirishaCartPage/>}/>

            <Route path="shirisha/aboutuspage" element={<ShirishaAboutUsPage/>}/>
            <Route path="Harshita/HomePage" element={<HomePage/>}/>
            <Route path="prachi/HomePage" element={<HomePage/>}/>
            <Route path="Shirisha/paymentPage" element={<ShirishaPaymentPage/>}/>
            <Route path="laxmi/aboutuspage" element={<LaxmiAboutUsPage/>}/>
            <Route path="laxmi/homePage" element={<LaxmiHomePage/>} />
            <Route path="laxmi/paymentpage" element={<LaxmiPaymentPage/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default MainApp;

