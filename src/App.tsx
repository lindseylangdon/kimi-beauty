import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import PopUpPage from './Pages/PopUpPage';
import ShopAll from './Pages/ShopAll';
import BestSellers from './Pages/BestSellers';
import FacePage from './Pages/FacePage';
import EyesPage from './Pages/EyesPage';
import LipsPage from './Pages/LipsPage';
import SkinCarePage from './Pages/SkinCarePage';
import NoPage from './Pages/NoPage';
import About from './Pages/FooterPages/AboutPage';
import MeetTeam from './Pages/FooterPages/MeetTeam';
import Contact from './Pages/FooterPages/Contact';
import FAQPage from './Pages/FooterPages/FAQPage';
import AccessibilityPage from './Pages/FooterPages/AccessibilityPage';
import ReturnsPage from './Pages/FooterPages/RerturnsPage';
import DistributorsPage from './Pages/FooterPages/DistributorsPage';

function App() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

  return (
	<div className="flex flex-col min-h-screen">
		<Routes>
			<Route path="/" element={<Home />} />
			<Route index element={<Home />} />
			<Route path="/pop-ups" element={<PopUpPage />} />
			<Route path="/shop-all" element={<ShopAll />} />
			<Route path="/best-sellers" element={<BestSellers />} />
			<Route path="/face" element={<FacePage /> }/>
			<Route path="/eyes" element={<EyesPage /> }/>
			<Route path="/lips" element={<LipsPage /> } />
			<Route path="/skincare" element={<SkinCarePage /> } />
            <Route path="/about-us" element={<About /> } />
            <Route path="/meet-the-team" element={<MeetTeam /> } />
            <Route path="/contact" element={<Contact /> } />
            <Route path="/faqs" element={<FAQPage /> } />
            <Route path="/accessibility" element={<AccessibilityPage /> } />
            <Route path="/returns-exchanges" element={<ReturnsPage /> } />
            <Route path="/our-distributors" element={<DistributorsPage /> } />
			<Route path="*" element={<NoPage /> } />
		</Routes>
	</div>
  );
}

export default App;