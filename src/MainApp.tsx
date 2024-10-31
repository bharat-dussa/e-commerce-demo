
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import CartPage from "./CartPage";
import VigneshHomePage from "./home/HomePage";
import KeerthanaAboutUsPage from "./Keerthana/aboutUS";
import KeerthanaCartPage from "./Keerthana/CartPage";
import KeerthanaHomePage from "./Keerthana/HomePage";
import NarendraPaymentPage from "./Narendra-AboutUs/Narendra-AboutUs";
import NarendraHomePage from "./Narendra/Homepage";
import NikitaHomePage from "./nikita/HomePage";
import AboutUsPage from './pooja/AboutUsPage';
import PoojaHomePage from './pooja/HomePage';
import ProductItem from "./ProductItem";
import SnehaHomePage from "./sneha/HomePage";
import AboutUs from "./vidya/aboutUs";

const MainApp = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/vignesh/home' element={<VigneshHomePage />} /> 
            <Route path='/product/:id' element={<ProductItem />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='pooja/about-us' element={<AboutUsPage/>}/>

            <Route path="nikita/homepage" element={<NikitaHomePage />} />
            <Route path="pooja/homepage" element={<PoojaHomePage />} />
            <Route path="vidya/aboutUs" element={<AboutUs/>} />
            <Route path="sneha/homepage" element={<SnehaHomePage/>}/>
            <Route path="narendra/homepage" element={<NarendraHomePage/>}/>
            <Route path="keerthana/aboutusPage" element={<KeerthanaAboutUsPage />}/>

            <Route path="keerthana/cartPage" element={<KeerthanaCartPage />}/>
            <Route path="keerthana/homepage" element={<KeerthanaHomePage />} />
            <Route path="narendra/paymentpage" element={<NarendraPaymentPage />} />
        </Routes>
    </BrowserRouter>
  );
};

export default MainApp;

