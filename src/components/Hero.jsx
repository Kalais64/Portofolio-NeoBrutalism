import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero container">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="hero-greeting">Hi There!</h2>
        <h1 className="hero-name">I'm an <span className="highlight-yellow">IS Student</span></h1>
        <div className="hero-role-wrapper">
          <hr className="role-line" />
          <p className="hero-role">ERP Tech Analyst | Roblox Dev</p>
        </div>
        <p style={{marginBottom: "2rem", maxWidth: "550px", fontSize: "1.1rem"}}>
          Technical-minded Information Systems student (GPA 3.93) specializing in ERP system architecture and data integrity. Experienced in Epicor ERP and advanced Roblox game logic optimization.
        </p>
        
        <div className="hero-buttons">
          <motion.a 
            href="#" 
            className="b-button yellow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
          <motion.a 
            href="#project" 
            className="b-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
        </div>
      </motion.div>
      
      <motion.div 
        className="hero-image-wrapper"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="profile-container b-border b-shadow">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80" alt="Profile" className="profile-img" />
        </div>
        <motion.div 
          className="decoration shape-rect b-border b-shadow"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="decoration shape-circle b-border b-shadow"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
