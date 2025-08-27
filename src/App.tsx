import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
//import Vision from './pages/Vision';
import Mission from './pages/Mission';
import Media from './pages/Media';
import Instagram from './pages/Instagram';
import MakingHistory from './pages/MakingHistory';
import Giving from './pages/Giving';

function App() {
  return (
    
    <Router>
      <div className="min-h-screen bg-cream">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/*<Route path="/vision" element={<Vision />} />*/}
            <Route path="/mission" element={<Mission />} />
            <Route path="/media" element={<Media />} />
            <Route path="/instagram" element={<Instagram />} />
            <Route path="/making-history" element={<MakingHistory />} />
            <Route path="/giving" element={<Giving />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;