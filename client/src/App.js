import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/App.css';

// Component Imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Imports
import Home from './pages/Home';
import About from './pages/About';
import Donate from './pages/Donate';
import Explore from './pages/Explore';

function ScrollToHashSection() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');

    if (!hash) return;

    const section = document.getElementById(hash);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location]);

  return null;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <ScrollToHashSection />
        <Routes>
          <Route path="/" element={
            <>
              <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
              <Home />
              <section id="about">
                <About />
              </section>
              <section id="donate">
                <Donate />
              </section>
              <Footer />
            </>
          } />
          <Route path="/explore" element={
            <>
              <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
              <Explore />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;