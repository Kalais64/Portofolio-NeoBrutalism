import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillsList = [
  { name: '3D Design', highlight: true },
  { name: 'Game Design', highlight: true },
  { name: 'UI/UX Design', highlight: true },
  { name: 'LuaU Scripting', highlight: true },
  { name: 'Game Layout Design', highlight: true },
  { name: 'Photo Editing', highlight: true },
  { name: 'ERP System Usage', highlight: false },
  { name: 'ERP Functional Analysis', highlight: false },
  { name: 'Data Flow Analysis', highlight: false },
  { name: 'System Integration', highlight: false },
  { name: 'Technical Requirement', highlight: false },
  { name: 'Communication', highlight: false },
  { name: 'Coordination', highlight: false },
  { name: 'Creativity', highlight: false },
  { name: 'Teamwork', highlight: false },
  { name: 'Adaptability', highlight: false },
  { name: 'Time Management', highlight: false },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 }
};

const Skills = () => {
  return (
    <section id="skills" className="skills section container">
      <motion.div 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Skills</h2>
        <span className="dashes">-------</span>
      </motion.div>
      
      <motion.div 
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skillsList.map((skill, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`skill-badge b-border b-shadow ${skill.highlight ? 'highlight' : ''}`}
          >
            {skill.name}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
