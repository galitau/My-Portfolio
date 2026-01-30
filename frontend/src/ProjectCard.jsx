import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

function ProjectCard({ project, variant = 'flip' }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gets the current file 
  const currentFile = (project.images && project.images[currentIndex]) || "";
  
  // Checks if it is a video
  const isVideo = typeof currentFile === 'string' && currentFile.endsWith('.mp4');

  // --- SLIDER LOGIC ---
  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => prev === project.images.length - 1 ? 0 : prev + 1);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => prev === 0 ? project.images.length - 1 : prev - 1);
  };

  // --- FLIP VARIANT (Software) ---
  if (variant === 'flip') {
    return (
      <motion.div className="project-card-container" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className={`project-card flip ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
          {/* Front */}
          <div className="card-front">
            <div className="card-image">
              {/* Safety check for images */}
              <img src={project.images && project.images[0] ? project.images[0] : ""} alt={project.title} />
            </div>
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="card-tags">
                {project.tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
              </div>
              <div className="flip-hint">Click card to view code ↻</div>
            </div>
          </div>
          {/* Back */}
          <div className="card-back">
            <div className="card-back-content">
              <h3>{project.title}</h3>
              <div className="card-actions">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-button" onClick={(e) => e.stopPropagation()}>
                  <Github size={20} /> View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // --- SLIDER VARIANT (Mechanical) ---
  return (
    <motion.div className="project-card slider" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="card-slider-container">
        <div className="card-image-slider">
          {/* If it's a video, show the player. If it's an image, show the image. */}
          {isVideo ? (
            <video 
              src={currentFile} 
              controls 
              muted 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <img src={currentFile} alt={project.title} />
          )}
          <motion.img 
            key={currentIndex}
            src={project.images[currentIndex]} 
            alt={project.title}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}
          />
          
          {/* CONTROLS: Only show if there is more than 1 image */}
          {project.images.length > 1 && (
            <>
              {/* Arrows */}
              <button className="slider-btn prev" onClick={prevImage}><ChevronLeft size={24} /></button>
              <button className="slider-btn next" onClick={nextImage}><ChevronRight size={24} /></button>
              
              {/* DOTS (The missing part!) */}
              <div className="slider-dots">
                {project.images.map((_, index) => (
                  <span 
                    key={index} 
                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(index);
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        
        <div className="card-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="card-tags">
            {project.tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;