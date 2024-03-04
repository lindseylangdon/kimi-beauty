import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import PopUpPage from './Pages/PopUpPage';
import ProductPages from './Pages/ProductPages';
import NoPage from './Pages/NoPage';
import About from './Pages/FooterPages/AboutPage';
import MeetTeam from './Pages/FooterPages/MeetTeam';
import Contact from './Pages/FooterPages/Contact';
import FAQPage from './Pages/FooterPages/FAQPage';
import AccessibilityPage from './Pages/FooterPages/AccessibilityPage';
import ReturnsPage from './Pages/FooterPages/RerturnsPage';
import DistributorsPage from './Pages/FooterPages/DistributorsPage';
import PopUpBody from './Components/PopUps/PopUpBody';

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
            <Route path="/best-sellers" element={<ProductPages type="best sellers"/> } />
            <Route path="/shop-all" element={<ProductPages type="shop all"/> } />
            <Route path="/face" element={<ProductPages type="face"/> } />
            <Route path="/eyes" element={<ProductPages type="eyes"/> } />
            <Route path="/lips" element={<ProductPages type="lips"/> } />
            <Route path="/skincare" element={<ProductPages type="skaannnn"/> } />
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