import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ProductPages from './Pages/ProductPages';
import BestSellers from './Components/Body/BestSellersBody';
import ShopAll from './Components/Body/ShopAllBody';
import FaceBody from './Components/Body/FaceBody';
import EyesBody from './Components/Body/EyesBody';
import About from './Pages/FooterPages/AboutPage';
import MeetTeam from './Pages/FooterPages/MeetTeam';
import Contact from './Pages/FooterPages/Contact';
import FAQPage from './Pages/FooterPages/FAQPage';
import AccessibilityPage from './Pages/FooterPages/AccessibilityPage';
import ReturnsPage from './Pages/FooterPages/RerturnsPage';
import DistributorsPage from './Pages/FooterPages/DistributorsPage';
import ErrBody from './Components/Body/ErrBody';
import PopUpBody from './Components/PopUps/PopUpBody';
import LipsBody from './Components/Body/LipsBody';
import SkinBody from './Components/Body/SkinBody';

function App() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

  return (
	<div className="flex flex-col min-h-screen">
		<Routes>
			<Route path="/" element={<Home />} />
			<Route index element={<Home />} />
			<Route path="/pop-ups" element={<ProductPages body={PopUpBody} />} />
            <Route path="/best-sellers" element={<ProductPages body={BestSellers} /> } />
            <Route path="/shop-all" element={<ProductPages body={ShopAll} /> } />
            <Route path="/face" element={<ProductPages body={FaceBody} /> } />
            <Route path="/eyes" element={<ProductPages body={EyesBody} /> } />
            <Route path="/lips" element={<ProductPages body={LipsBody} /> } />
            <Route path="/skincare" element={<ProductPages body={SkinBody} /> } /> 
            <Route path="/about-us" element={<About /> } />
            <Route path="/meet-the-team" element={<MeetTeam /> } />
            <Route path="/contact" element={<Contact /> } />
            <Route path="/faqs" element={<FAQPage /> } />
            <Route path="/accessibility" element={<AccessibilityPage /> } />
            <Route path="/returns-exchanges" element={<ReturnsPage /> } />
            <Route path="/our-distributors" element={<DistributorsPage /> } />
			<Route path="*" element={<ProductPages body={ErrBody} /> } />
		</Routes>
	</div>
  );
}

export default App;