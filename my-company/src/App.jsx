import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import the Footer component

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      {/* Wrapper div with background color and minimum height */}
      <div style={{ backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
        {/* Navbar appears on all pages */}
        <Navbar />

        {/* Routes for different pages */}
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <div>
                  <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                  </a>
                  <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                  </a>
                </div>
                <h1>Vite + React</h1>
                <div className="card">
                  <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                  </button>
                  <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                  </p>
                </div>
                <p className="read-the-docs">
                  Click on the Vite and React logos to learn more
                </p>
              </>
            }
          />

          {/* Other Pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer appears on all pages */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;