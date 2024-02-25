import React, { useEffect } from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Announcements from './Components/Announcements';
import Carousel from './Components/Carousel';

function App() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className="flex flex-col min-h-screen"> {/* Make the App a flex container */}
        <Announcements />
        <Header />
        <Carousel />
        <div className="flex-grow" /> {/* This is a spacer that will grow to take up any free space */}
        <Footer />
    </div>
  );
}

export default App;