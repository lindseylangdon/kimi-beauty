import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Announcements from './Components/Announcements';

function App() {
  return (
    <div className="App">
        <Announcements />
        <header className="App-header">
            <Header />
        </header>
      <Footer />
    </div>
  );
}

export default App;
