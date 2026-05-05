import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const servicesData = [
  {
    icon: '01',
    title: 'ERP Configuration',
    description: 'Specializing in Epicor ERP configuration, gap analysis, and query optimization to ensure data integrity and system efficiency.',
    bgColor: '#FFFDF0'
  },
  {
    icon: '02',
    title: 'Roblox Development',
    description: 'Managing end-to-end SDLC for interactive modules, implementing logic optimization, and performance engineering.',
    bgColor: '#FFFDF0'
  },
  {
    icon: '03',
    title: 'System Integration',
    description: 'Translating complex technical constraints into clear business updates and driving efficiency as an ERP Technical Analyst.',
    bgColor: '#FFFDF0'
  }
];

const Services = () => {
  return (
    <section id="services" className="services section container">
      <motion.div 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>What Do I Do?</h2>
        <span className="dashes">-------</span>
      </motion.div>
      
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <motion.div 
            key={index} 
            className="service-card b-border b-shadow" 
            style={{ backgroundColor: service.bgColor }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <div className="service-icon b-border">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
