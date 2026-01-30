import React, { useState } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import './App.css'; // Importing global styles

function Navbar({ currentPage, setCurrentPage }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setMobileOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <button onClick={() => handleNavClick('home')} className="nav-logo">
          Portfolio
        </button>
        
        {/* Mobile Toggle */}
        <button className="nav-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Links */}
        <div className={`nav-menu ${mobileOpen ? 'active' : ''}`}>
          {['home', 'software', 'mechanical'].map((page) => (
            <button 
              key={page}
              onClick={() => handleNavClick(page)} 
              className={`nav-link ${currentPage === page ? 'active' : ''}`}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          ))}
          <a href="https://www.linkedin.com/in/galit-tauber" className="nav-icon-button" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/galitau" className="nav-icon-button" target="_blank" rel="noopener noreferrer">
            <Github size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;