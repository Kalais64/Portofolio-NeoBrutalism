import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experienceData = [
  {
    company: 'Losi Studio',
    role: 'Game Level Designer and Developer',
    date: 'April 2026 - Present',
    location: 'Hybrid',
    points: [
      'Designed and built immersive environments within Roblox Studio, focusing on balanced map layouts and player flow.',
      'Developed interactive game mechanics and core systems using Luau to enhance gameplay functionality and performance.',
      'Optimized 3D assets and level geometry to ensure smooth performance across various devices and platforms.',
      'Collaborated on world-building and environmental storytelling to create engaging and aesthetically consistent game worlds.'
    ]
  },
  {
    company: 'Onblox Studio',
    role: 'Builder & Scripter',
    date: 'Jul 2025 - March 2026',
    location: 'Bekasi, Indonesia',
    points: [
      'Founded and lead a Roblox game studio focused on educational and social experiences for Indonesian players and creators.',
      'Designed and launched 5+ Roblox experiences and executed virtual events (Ahquote Hangout & Coldiac Concert) reaching thousands of players.',
      'Currently leading development of "The Wall of Oasis", an RPG survival experience with a collaborative builder team.'
    ]
  },
  {
    company: 'President University Roblox Developer (PURD)',
    role: 'Head of Game Builder Division',
    date: 'Sep 2025 - March 2026',
    location: 'Jababeka Education Park',
    points: [
      'Direct and manage a division of game builders and designers, overseeing project timelines and quality assurance.',
      'Mentor team members through structured training sessions focused on ethical building practices and advanced game design fundamentals.',
      'Coordinate cross-functional projects, successfully improving team productivity and technical skill proficiency.'
    ]
  },
  {
    company: 'PT Jababeka Tbk',
    role: 'Partnership and Developer',
    date: 'Aug 2025 - Feb 2026',
    location: 'Jababeka Education Park',
    points: [
      'Lead a university Roblox developer community division, mentoring student creators in game design and platform best practices.',
      'Organize internal workshops, training sessions, and collaborative projects for new developers.',
      'Coordinate multi-team Roblox projects and ensure alignment with platform safety and moderation standards.'
    ]
  },

  {
    company: 'Shutter Photography',
    role: 'Chairperson',
    date: 'Aug 2025 - June 2026',
    location: 'Jababeka Education Park',
    points: [
      'Strategic Resource Management: Oversaw the operational allocation of 120+ human resources and implemented structured workflows.',
      'Financial Planning: Managed budget forecasting and procurement processes for large-scale events.',
      'Process Optimization: Identified and resolved operational bottlenecks by establishing Standard Operating Procedures (SOPs).'
    ]
  },
  {
    company: 'President University Major Association',
    role: 'Multimedia Design',
    date: 'Sep 2024 - June 2025',
    location: 'Jababeka Education Park',
    points: [
      'Captured and managed all visual documentation, including photos and videos, for various faculty events and programs.',
      'Created marketing design materials such as posters, banners, and social media content to promote events and increase student engagement.',
      'Collaborated with the marketing team to develop visual campaigns and ensured a consistent brand identity across all platforms.',
    ]
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience section container">
      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Experience</h2>
        <span className="dashes">-------</span>
      </motion.div>

      <div className="timeline">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="timeline-header">
              <div className="timeline-title-group">
                <h4 className="timeline-company">{exp.company}</h4>
                <h3 className="timeline-role">{exp.role}</h3>
              </div>
              <div className="timeline-meta">
                <span className="timeline-date">{exp.date}</span>
                <span className="timeline-location">{exp.location}</span>
              </div>
            </div>
            <ul className="timeline-points">
              {exp.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
