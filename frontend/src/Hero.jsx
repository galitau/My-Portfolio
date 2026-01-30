import React from 'react';
import profilePic from './assets/ProfilePic.jpg';
import { motion } from 'framer-motion';

function Hero() {
  const skills = [
    "Web Dev", "AI/ML", "Mobile App", "CAD/Design", "Robotics",
    "Circuits", "Cloud Comp", "Embedded Sys", "Data Eng", "Mechanics",
    "Python", "C++", "Java", "React", "SQL", "Biomedical"
  ];

  return (
    <div className="hero">
      <div className="hero-content">
        {/* Left Side */}
        <div className="hero-left">
          <motion.div className="hero-text" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1>Galit Tauber</h1>
            <p className="hero-subtitle">Biomedical Engineering Student at UWaterloo</p>
            <p className="hero-description">
              Passionate about the full engineering lifecycle. I move seamlessly 
              from SolidWorks CAD and mechanical design to C++ algorithms and software 
              development to build complete, integrated systems.
            </p>
          </motion.div>
        </div>

        {/* Right Side (Profile) */}
        <div className="hero-right">
          <motion.div className="hero-image" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
            <img src={profilePic} alt="Profile" />
          </motion.div>
        </div>
      </div>

      {/* About Me Section */}
      <section className="hero-section">
        <h2>About Me</h2>
        <p>I'm a Biomedical Engineering student at the University of Waterloo with a passion for bridging the gap between hardware and software. With experience in mechanical design, CAD modeling, and software development, I enjoy tackling complex engineering challenges that require both creative problem-solving and technical expertise.</p>
      </section>

      {/* Education Section */}
      <section className="hero-section">
        <h2>Education</h2>
        <div className="education-items">
          <div className="education-item">
            <h3>Bachelor of Applied Science (BASc), Biomedical Engineering</h3>
            <p className="education-detail">University of Waterloo | 2025 - 2030</p>
            <p className="education-detail">GPA: 4.0</p>
            <p className="education-detail">Design Teams and Clubs:</p>
            <ul className="clubs-list-items">
              <li>
                Biomechatronics Design Team | Enable & Exoskeleton Software Member | Sept 2025 - Present
                <ul className="clubs-sublist">
                  <li>Designed and prototyped affordable assistive devices in partnership with Makers Making Change, leveraging open-source designs and 3D printing to increase accessibility for people with disabilities</li>
                  <li>Developed C++ firmware for the Exoskeleton division to process real-time sensor data and control motor actuation</li>
                  <li>Collaborated with mechanical and electrical teams to ensure software logic aligned with physical hardware constraints and patient safety requirements</li>
                </ul>
              </li>
              <li>
                Electrium Mobility Design Team | Jan 2026 - Present
                <ul className="clubs-sublist">
                  <li>Collaborating with the mechanical division to design, prototype, and assemble key components for an electric bicycle</li>
                </ul>
              </li>
              <li>
                WATbotics Design Team | Jan 2026 - Present
                <ul className="clubs-sublist">
                  <li>Just started, we'll see what I make...</li>
                </ul>
              </li>
              <li>
                Innertube Water Polo Intramurals
              </li>
              <li>
                Karate and Jiu Jitsu Club
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="skills-marquee">
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

export default Hero;