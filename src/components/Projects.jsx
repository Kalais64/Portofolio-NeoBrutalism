import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'President University Educational Map',
    shortDesc: 'A Roblox educational ecosystem aligning gameplay mechanics with academic objectives.',
    fullDesc: 'Spearheaded a cross-functional team in the full Software Development Life Cycle (SDLC) of the "President University Educational Map". Acted as the primary liaison between technical developers and corporate stakeholders, translating complex technical constraints into clear business updates. Recognized by Roblox USA executives for innovation.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['Roblox', 'Luau', 'Project Management'],
    link: 'https://www.roblox.com/'
  },
  {
    id: 2,
    title: 'Campus Waste Sorting Simulation',
    shortDesc: 'Interactive Roblox game teaching waste segregation, recognized by the University Rector.',
    fullDesc: 'Developed a Campus Waste Sorting Educational Game (Roblox) to teach waste segregation through interactive gameplay. The project received official recognition and appreciation from the Rector for its educational impact and innovation.',
    image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=800&q=80',
    tags: ['Simulation', 'Game Design', 'Education'],
    link: 'https://www.roblox.com/'
  },
  {
    id: 3,
    title: 'Epicor ERP Configuration',
    shortDesc: 'Technical configuration, gap analysis, and query optimization for ERP systems.',
    fullDesc: 'Gained over a year of experience in Epicor ERP, focusing on technical configuration, gap analysis, and query optimization to ensure data integrity and system efficiency. Applied strong logic-based problem solving and database management skills.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['ERP', 'Epicor', 'Data Analysis'],
    link: 'https://www.epicor.com/'
  },
  {
    id: 4,
    title: 'Interactive Modular Framework',
    shortDesc: 'Advanced modular design and logic optimization for rapid game development.',
    fullDesc: 'Established strict development protocols and asset optimization standards (e.g., mesh reduction, memory management) which successfully reduced system latency and minimized technical debt. Conducted workshops on logic optimization and modular design.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    tags: ['Optimization', 'Architecture', 'QA'],
    link: 'https://github.com/'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section id="project" className="projects section container">
      <motion.div 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Selected Projects</h2>
        <span className="dashes">-------</span>
      </motion.div>
      
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <motion.div 
            key={project.id} 
            className="project-preview-card b-border b-shadow"
            onClick={() => setSelectedProject(project)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="project-preview-image b-border">
              <img src={project.image} alt={project.title} />
              <div className="overlay-badge b-border">Click to View</div>
            </div>
            <div className="project-preview-info">
              <h3>{project.title}</h3>
              <p>{project.shortDesc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="project-modal-overlay" 
            onClick={() => setSelectedProject(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="project-modal b-border b-shadow" 
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <motion.button 
                className="close-modal b-border" 
                onClick={() => setSelectedProject(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                X
              </motion.button>
              <div className="modal-image b-border">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              <div className="modal-content">
                <h2>{selectedProject.title}</h2>
                <div className="modal-tags">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="modal-tag b-border">{tag}</span>
                  ))}
                </div>
                <p className="modal-desc">{selectedProject.fullDesc}</p>
                <motion.a 
                  href={selectedProject.link} 
                  target="_blank"
                  rel="noreferrer"
                  className="b-button yellow" 
                  style={{alignSelf: 'flex-start'}}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Visit Project
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
