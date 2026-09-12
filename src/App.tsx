// src/App.tsx
import {  Routes, Route } from 'react-router-dom';
import './App.css';

// 1. Structural Global Layout Elements
import { Navbar } from './components/nav-bar/NavBar';
import { Footer } from './components/footer/Footer';

// 2. Individual Page Views
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Projects } from './pages/projects/Projects';
import { Contact } from './pages/contact/Contact';

function App() {
  return (

      <div className="app-container">
       
        <Navbar />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
       
        <Footer />
      </div>
  );
}

export default App;
