import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

function Software({ projects }) {
  const softwareCourses = [
    "Data Structures & Algorithms", "Digital Computation",
    "Calculus 1", "Calculus 2", "Matrices and Linear Systems",
  ];

  // Filter projects for software category
  const softwareProjects = projects.filter(project => 
    project.category === "software" || project.category === "both"
  );

  return (
    <div className="page-container page-container">
      <div className="page-header">
        <h1>Software Engineering</h1>
        <p>Building intelligent systems through code</p>
        {/*<a href="/software-resume.pdf" className="resume-button" target="_blank" rel="noopener noreferrer">Download Resume</a>*/}
      </div>

      {/* Coursework */}
      <section className="coursework-section">
        <h2>Relevant Coursework</h2>
        <div className="coursework-grid">
          {softwareCourses.map((course, i) => (
            <div key={i} className="course-item">{course}</div>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {softwareProjects.length > 0 ? (
            softwareProjects.map(project => (
              <ProjectCard key={project.id} project={project} variant="flip" />
            ))
          ) : (
            <p>No software projects found. Check your database tags!</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Software;