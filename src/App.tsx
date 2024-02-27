import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import PopUpPage from './Pages/PopUpPage';
import ShopAll from './Pages/ShopAll';
import BestSellers from './Pages/BestSellers';
import FacePage from './Pages/FacePage';
import EyesPage from './Pages/EyesPage';
import LipsPage from './Pages/LipsPage';
import SkinCarePage from './Pages/SkinCarePage';

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
        </Routes>
    </div>
  );
}

export default App;