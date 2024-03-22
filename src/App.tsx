import React, { useEffect, useState, createContext, SetStateAction, Dispatch } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ProductPages from './Pages/ProductPages';
import BestSellers from './Components/Body/BestSellersBody';
import FaceBody from './Components/Body/FaceBody';
import EyesBody from './Components/Body/EyesBody';
import About from './Pages/FooterPages/AboutPage';
import MeetTeam from './Pages/FooterPages/MeetTeam';
import Contact from './Pages/FooterPages/Contact';
import FAQPage from './Pages/FooterPages/FAQPage';
import AccessibilityPage from './Pages/FooterPages/AccessibilityPage';
import ReturnsPage from './Pages/FooterPages/ReturnsPage';
import DistributorsPage from './Pages/FooterPages/DistributorsPage';
import ErrBody from './Components/Body/ErrBody';
import PopUpBody from './Components/PopUps/PopUpBody';
import LipsBody from './Components/Body/LipsBody';
import SkinBody from './Components/Body/SkinBody';
import ViewAll from './Components/Body/ShopAllBody';
import SetsBody from './Components/Body/SetsBody';
import MakeupBody from './Components/Body/MakeupBody';

type DisplayContextType = {
    display: boolean;
    setDisplay: Dispatch<SetStateAction<boolean>>;
}

export const DisplayConst = createContext<DisplayContextType>({
    display: true,
    setDisplay: () => {},
})

function App() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

    const [display, setDisplay] = useState(true);

  return (
	<div className="flex flex-col min-h-screen">
        <DisplayConst.Provider value={{display, setDisplay}}>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route index element={<Home />} />
			<Route path="/locations" element={<ProductPages body={PopUpBody} />} />
            <Route path="/best-sellers" element={<ProductPages body={BestSellers} /> } />
            <Route path="/view-all" element={<ProductPages body={ViewAll} /> } />
            <Route path="/face" element={<ProductPages body={FaceBody} /> } />
            <Route path="/eyes" element={<ProductPages body={EyesBody} /> } />
            <Route path="/lips" element={<ProductPages body={LipsBody} /> } />
            <Route path="/skincare" element={<ProductPages body={SkinBody} /> } /> 
            <Route path="/makeup" element={<ProductPages body={MakeupBody} /> } />
            <Route path="/sets" element={<ProductPages body={SetsBody} /> } />
            <Route path="/about-us" element={<About /> } />
            <Route path="/meet-the-team" element={<MeetTeam /> } />
            <Route path="/contact" element={<Contact /> } />
            <Route path="/faqs" element={<FAQPage /> } />
            <Route path="/accessibility" element={<AccessibilityPage /> } />
            <Route path="/returns-exchanges" element={<ReturnsPage /> } />
            <Route path="/our-distributors" element={<DistributorsPage /> } />
			<Route path="*" element={<ProductPages body={ErrBody} /> } />
		</Routes>
        </DisplayConst.Provider>
	</div>
  );
}

export default App;