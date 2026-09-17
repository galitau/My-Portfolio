import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import CourseTimeline from './CourseTimeline';


function Mechanical({ projects }) {
  // Filter projects for mechanical category
  const mechanicalProjects = projects.filter(project => 
    project.category === "mechanical" || project.category === "both"
  );

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Mechanical Engineering</h1>
        <p>Designing solutions for physical challenges</p>
        {/*<a href="/mechanical-resume.pdf" className="resume-button" target="_blank" rel="noopener noreferrer">Download Resume</a>*/}
      </div>

      <section className="coursework-section">
        <h2>Relevant Coursework</h2>
        <CourseTimeline />
      </section>

      <section className="projects-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {mechanicalProjects.map(project => (
            <ProjectCard key={project.id} project={project} variant="slider" />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Mechanical;