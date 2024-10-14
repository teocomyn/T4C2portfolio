import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ArtGallery from './pages/ArtGallery';
import MusicStudio from './pages/MusicStudio';
import DigitalWorkshop from './pages/DigitalWorkshop';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import About from './pages/About';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/art" element={<ArtGallery />} />
            <Route path="/music" element={<MusicStudio />} />
            <Route path="/digital" element={<DigitalWorkshop />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Newsletter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;