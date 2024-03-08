import React, { useEffect } from 'react';
import Footer from "../Components/Footer/Footer";
import Header from '../Components/Header/Header';
import HomeBody from '../Components/Body/HomeBody';

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className="flex flex-col min-h-screen">
        <Header />
        <HomeBody />
        <div className="flex-grow" />
        <Footer />
    </div>
  );
}