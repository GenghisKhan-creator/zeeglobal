import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Industrial from './pages/Industrial';
import Logistics from './pages/Logistics';
import Lifestyle from './pages/Lifestyle';
import Investors from './pages/Investors';
import Terms from './pages/Terms';
import CustomCursor from './components/common/CustomCursor';
import Loader from './components/common/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <div className="bg-neutral-100 min-h-screen">
        {loading && <Loader onComplete={() => setLoading(false)} />}

        <CustomCursor />

        <div className={`main-container transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
          <Navbar />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/industrial" element={<Industrial />} />
              <Route path="/logistics" element={<Logistics />} />
              <Route path="/lifestyle" element={<Lifestyle />} />
              <Route path="/investors" element={<Investors />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;