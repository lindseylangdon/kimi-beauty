import React, { useEffect } from 'react';
import Footer from "../Components/Footer/Footer";
import Header from '../Components/Header/Header';
import HomeBody from '../Components/Body/HomeBody';

export default function Home() {
    // const [data, setData] = useState (null);

    // React.useEffect(() => {
    //     fetch("/api")
    //         .then((res) => res.json())
    //         .then((data) => setData(data.message));
    // }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className="flex flex-col min-h-screen">
        {/* <p>{!data ? "Loading..." : data}</p> */}
        <Header />
        <HomeBody />
        <div className="flex-grow" />
        <Footer />
    </div>
  );
}