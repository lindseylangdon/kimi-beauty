import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import PopUpPage from './Pages/PopUpPage';
import ShopAll from './Pages/ShopAll';


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
            <Route path="/best-sellers"/>
            <Route path="/face"/>
            <Route path="/eyes"/>
            <Route path="/lips"/>
            <Route path="/skincare"/>
        </Routes>
    </div>
  );
}

export default App;