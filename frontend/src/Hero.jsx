import React from 'react';
import profilePic from './assets/ProfilePic.jpg';
import { motion } from 'framer-motion';

function AwardCard({ award }) {
  return (
    <motion.div className="award-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h3>{award.title}</h3>
      <p className="award-date">{award.date}</p>
      <p className="award-issuer">{award.issuer}</p>
      <p className="award-description">{award.description}</p>
    </motion.div>
  );
}

function Hero() {
  const skills = [
    "Web Dev", "AI/ML", "Mobile App", "CAD/Design", "Robotics",
    "Circuits", "Cloud Comp", "Embedded Sys", "Data Eng", "Mechanics",
    "Python", "C++", "Java", "React", "SQL", "Biomedical"
  ];

  const awards = [
    {
      id: 1,
      title: "1st Place, Wealthsimple Challenge",
      date: "Feb 2026",
      issuer: "Issued by Wealthsimple · ElleHacks 2026",
      description: "Created an innovative solution that makes learning about money fun and engaging for young audiences, teaching financial literacy concepts in creative and accessible ways."
    },
    {
      id: 2,
      title: "Most Ethical Solution Distinction",
      date: "Feb 2026",
      issuer: "University of Waterloo · Health Tech Innovation Challenge",
      description: "Awarded for SquatCAM, a computer vision solution that recognizes exercises and counts reps, uses biometric embeddings to identify patients, and integrates live sensor data to monitor vitals. Features a real-time dashboard for clinicians to supervise multiple patients and receive safety alerts."
    },
    {
      id: 3,
      title: "Best Use of Snowflake API",
      date: "Jan 2026",
      issuer: "Issued by Major League Hacking (MLH) · SheHacks+10 Hackathon",
      description: "Won for BrickbyBrick solution developed at Western University's SheHacks+10 Hackathon. BrickbyBrick is a fintech-inspired web application designed to address the housing affordability crisis by fractionalizing home ownership. The platform creates a marketplace where prospective homeowners can list properties for a fraction of their market value, while independent investors provide the remaining capital in exchange for equity shares in the home."
    },
    {
      id: 4,
      title: "Most Innovative Feature Award",
      date: "Nov 2025",
      issuer: "Waterloo Women In Engineering Hackathon · Issued by PointClickCare",
      description: "Recognized for StoryBridge, an AI-driven platform that transforms seniors' voice-recorded memories into engaging, illustrated storybooks, bridging generations and preserving family history."
    },
    {
      id: 5,
      title: "Top 16 Finalist, Velocity AgeTech Innovation Challenge",
      date: "Sep 2025",
      issuer: "Issued by CABHI, NAR, and Velocity",
      description: "Recognized as a Top 16 finalist for designing a real-world solution to shape the future of aging and community care."
    },
    {
      id: 6,
      title: "6th Internationally, Medical Law and Ethics Competition",
      date: "Jun 2025",
      issuer: "Future Health Professionals (HOSA)",
      description: "Placed 3rd in Canada and 6th internationally in the HOSA Medical Law and Ethics competition. Competed against hundreds of students globally, demonstrating mastery of legal terminology, healthcare statutes, and ethical case studies."
    },
    {
      id: 7,
      title: "2x National Runner-Up, Healthcare Administration Competition",
      date: "2024 & 2025",
      issuer: "Future Business Leaders of America (FBLA)",
      description: "Recognized as a 2x Top 20 national finalist in the Healthcare Administration competition. Mastered the foundational pillars of healthcare administration, including HIPAA compliance, medical ethics, and the revenue cycle involving ICD-10/CPT coding and insurance reimbursement. This provided a comprehensive understanding of the legal and financial frameworks that govern clinical operations and patient data management."
    }
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
            <p className="education-detail">President's Scholarship of Distinction (+95% average) | 2025</p>
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
                  <li>Making the iron man helmet!</li>
                  <li>Worked on the closing mechanism of the face shield and CAD modelling of the face and chin</li>
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

      {/* Honours and Awards Section */}
      <section className="hero-section">
        <h2>Honours & Awards</h2>
        <div className="awards-grid">
          {awards.map((award) => (
            <AwardCard key={award.id} award={award} />
          ))}
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