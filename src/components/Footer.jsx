import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const PixelCat = ({ mainColor, eyeColor }) => {
  const sprite = [
    " BMMB  BMMB     ",
    " BMMMBBMMMB   BB",
    "BMMMMMMMMMMB  BM",
    "BMWWMMMMWWMB  BM",
    "BMWBBMMWBBMB BMB",
    "BMMMMBBMMMMBBBMB",
    "BMMMMPPMMMMBBMB ",
    " BMMMMMMMMB BB  ",
    " BMBBBBBBMBB    ",
    " BMB   BMB      ",
    " BBB   BBB      "
  ];
  
  const colors = {
    'B': '#000000',
    'M': mainColor,
    'W': '#FFFFFF',
    'P': '#FF90E8',
    ' ': 'transparent'
  };

  return (
    <svg width="64" height="44" viewBox="0 0 16 11" className="pixel-cat">
      {sprite.map((row, y) => 
        row.split('').map((char, x) => (
          char !== ' ' ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={colors[char] || eyeColor} /> : null
        ))
      )}
    </svg>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="footer section">
      <div className="container">
        <motion.div 
          className="cta-box b-border b-shadow"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <h2>Have a project or want to<br/>work with me?</h2>
          <p>Please contact me by clicking the button below or reach out via social media</p>
          
          <motion.a 
            href="mailto:emailmu@example.com" 
            className="b-button yellow main-contact-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Email Me
          </motion.a>

          <div className="social-buttons">
            <motion.a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="b-button social-btn wa" whileHover={{ scale: 1.1, rotate: -3 }} whileTap={{ scale: 0.9 }}>
              WhatsApp
            </motion.a>
            <motion.a href="https://instagram.com/username_ig" target="_blank" rel="noreferrer" className="b-button social-btn ig" whileHover={{ scale: 1.1, rotate: 3 }} whileTap={{ scale: 0.9 }}>
              Instagram
            </motion.a>
            <motion.a href="https://tiktok.com/@username_tiktok" target="_blank" rel="noreferrer" className="b-button social-btn tiktok" whileHover={{ scale: 1.1, rotate: -3 }} whileTap={{ scale: 0.9 }}>
              TikTok
            </motion.a>
            <motion.a href="https://facebook.com/username_fb" target="_blank" rel="noreferrer" className="b-button social-btn fb" whileHover={{ scale: 1.1, rotate: 3 }} whileTap={{ scale: 0.9 }}>
              Facebook
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      <div className="cat-track">
        <motion.div
          className="walking-cat"
          animate={{
            x: ['-40vw', '40vw', '40vw', '-40vw', '-40vw'],
            scaleX: [1, 1, -1, -1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, times: [0, 0.48, 0.5, 0.98, 1], ease: "linear" }}
          style={{ left: '10%' }}
        >
          <PixelCat mainColor="#FFFFFF" eyeColor="#A3C9FF" />
        </motion.div>
        
        <motion.div
          className="walking-cat"
          animate={{
            x: ['-30vw', '50vw', '50vw', '-30vw', '-30vw'],
            scaleX: [1, 1, -1, -1, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, times: [0, 0.48, 0.5, 0.98, 1], ease: "linear", delay: 2 }}
          style={{ left: '30%' }}
        >
          <PixelCat mainColor="#FFB347" eyeColor="#000000" />
        </motion.div>
        
        <motion.div
          className="walking-cat"
          animate={{
            x: ['-50vw', '30vw', '30vw', '-50vw', '-50vw'],
            scaleX: [1, 1, -1, -1, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, times: [0, 0.48, 0.5, 0.98, 1], ease: "linear", delay: 1 }}
          style={{ left: '50%' }}
        >
          <PixelCat mainColor="#333333" eyeColor="#FFD500" />
        </motion.div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>&copy; 2026 President University Student. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
