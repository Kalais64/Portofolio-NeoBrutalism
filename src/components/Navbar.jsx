import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, x: '-50%' }}
      animate={{ y: 0, x: '-50%' }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text b-border b-shadow" style={{ padding: '0.25rem 0.75rem', backgroundColor: 'var(--accent-yellow)', display: 'inline-block' }}>PORTO</span>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#project">Project</a>
          <a href="#about">About Me</a>
        </nav>
        <motion.a
          href="#about"
          className="b-button yellow nav-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Hire Me
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Navbar;
