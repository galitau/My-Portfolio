import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import profilePic from './assets/ProfilePic.jpg';

function MobileHome({ projects }) {
  const [projectFilter, setProjectFilter] = useState('all');

  const skills = [
    "Web Dev", "AI/ML", "Mobile App", "CAD/Design", "Robotics",
    "Circuits", "Cloud Comp", "Embedded Sys", "Data Eng", "Mechanics",
    "Python", "C++", "Java", "React", "SQL", "Biomedical"
  ];

  const softwareCourses = [
    "Data Structures & Algorithms", "Digital Computation",
    "Calculus 1", "Calculus 2", "Matrices and Linear Systems",
  ];

  const mechanicalCourses = [
    "Physics 1: Statics", "Introduction to Biomedical Design", "Communications in Biomedical Engineering - Visualization", 
    "Human Factors in the Design of Biomedical and Health Systems", "Calculus 1", "Calculus 2", "Matrices and Linear Systems",
    "Chemistry Principles"
  ];

  // Filter projects based on selected filter
  const getFilteredProjects = () => {
    switch(projectFilter) {
      case 'software':
        return projects.filter(project => project.category === "software" || project.category === "both");
      case 'mechanical':
        return projects.filter(project => project.category === "mechanical" || project.category === "both");
      default:
        return projects;
    }
  };

  const filteredProjects = getFilteredProjects();

  return (
    <div className="mobile-home">
      {/* Hero Section */}
      <section className="mobile-hero">
        <div className="mobile-hero-content">
          <motion.div className="mobile-hero-text" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1>Galit Tauber</h1>
            <p className="mobile-hero-subtitle">Biomedical Engineering Student at UWaterloo</p>
            <p className="mobile-hero-description">
              Passionate about the full engineering lifecycle. I move seamlessly 
              from SolidWorks CAD and mechanical design to C++ algorithms and software 
              development to build complete, integrated systems.
            </p>
          </motion.div>
          <motion.div className="mobile-hero-image" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
            <img src={profilePic} alt="Profile" />
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="mobile-section">
        <h2>About Me</h2>
        <p>I'm a Biomedical Engineering student at the University of Waterloo with a passion for bridging the gap between hardware and software. With experience in mechanical design, CAD modeling, and software development, I enjoy tackling complex engineering challenges that require both creative problem-solving and technical expertise.</p>
      </section>

      {/* Projects Section with Filters */}
      <section className="mobile-section">
        <h2>Projects</h2>
        
        {/* Filter Buttons */}
        <div className="mobile-filter-buttons">
          <button 
            className={`filter-btn ${projectFilter === 'all' ? 'active' : ''}`}
            onClick={() => setProjectFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${projectFilter === 'software' ? 'active' : ''}`}
            onClick={() => setProjectFilter('software')}
          >
            Software
          </button>
          <button 
            className={`filter-btn ${projectFilter === 'mechanical' ? 'active' : ''}`}
            onClick={() => setProjectFilter('mechanical')}
          >
            Mechanical
          </button>
        </div>

        {/* Projects Grid */}
        <div className="mobile-projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                variant={project.category === 'mechanical' ? "slider" : "flip"} 
              />
            ))
          ) : (
            <p>No projects found for this filter.</p>
          )}
        </div>
      </section>

      {/* Education Section */}
      <section className="mobile-section">
        <h2>Education</h2>
        <div className="mobile-education-item">
          <h3>Bachelor of Applied Science (BASc), Biomedical Engineering</h3>
          <p className="mobile-education-detail">University of Waterloo | 2025 - 2030</p>
          <p className="mobile-education-detail">GPA: 4.0</p>
          <p className="mobile-education-detail">Design Teams and Clubs:</p>
          <ul className="mobile-clubs-list">
            <li>
              <strong>Biomechatronics Design Team</strong> | Enable & Exoskeleton Software Member | Sept 2025 - Present
              <ul className="mobile-clubs-sublist">
                <li>Designed and prototyped affordable assistive devices in partnership with Makers Making Change, leveraging open-source designs and 3D printing to increase accessibility for people with disabilities</li>
                <li>Developed C++ firmware for the Exoskeleton division to process real-time sensor data and control motor actuation</li>
                <li>Collaborated with mechanical and electrical teams to ensure software logic aligned with physical hardware constraints and patient safety requirements</li>
              </ul>
            </li>
            <li>
              <strong>Electrium Mobility Design Team</strong> | Jan 2026 - Present
              <ul className="mobile-clubs-sublist">
                <li>Collaborating with the mechanical division to design, prototype, and assemble key components for an electric bicycle</li>
              </ul>
            </li>
            <li>
              <strong>WATbotics Design Team</strong> | Jan 2026 - Present
              <ul className="mobile-clubs-sublist">
                <li>Just started, we'll see what I make...</li>
              </ul>
            </li>
            <li>
              <strong>Innertube Water Polo Intramurals</strong>
            </li>
            <li>
              <strong>Karate and Jiu Jitsu Club</strong>
            </li>
          </ul>
        </div>
      </section>

      {/* Coursework Section */}
      <section className="mobile-section">
        <h2>Relevant Coursework</h2>
        
        <h3>Software Engineering</h3>
        <div className="mobile-coursework-grid">
          {softwareCourses.map((course, i) => (
            <div key={i} className="mobile-course-item">{course}</div>
          ))}
        </div>

        <h3>Mechanical Engineering</h3>
        <div className="mobile-coursework-grid">
          {mechanicalCourses.map((course, i) => (
            <div key={i} className="mobile-course-item">{course}</div>
          ))}
        </div>
      </section>

      {/* Skills Marquee */}
      <div className="mobile-skills-marquee">
        <div className="marquee-track">
          <motion.div className="marquee-content" animate={{ x: [0, -1600] }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
            {[...skills, ...skills, ...skills].map((skill, i) => (
              <span key={i} className="skill-tag">{skill}</span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default MobileHome;
