import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';

// Imports project data
import projectsData from './data/projects.json';

// Components
import Navbar from './Navbar';
import Hero from './Hero';
import Software from './Software';
import Mechanical from './Mechanical';
import MobileHome from './MobileHome';

// Imports images
import catan1 from './assets/CatanSideView.jpg';
import catan2 from './assets/CatanSideView2.jpg';
import catan3 from './assets/Solidworks Assembly Catan.jpeg';
import pubmedImg from './assets/pubmedPhoto.png';
import timeSenseImg from './assets/timeSensePhoto.png';
import puzzleVideo from './assets/Puzzle video~2.mp4';
import openFlower from './assets/Open Flower.jpeg';
import closedFlower from './assets/Closed Flower.jpeg';
import jeepVideo from './assets/JeepVideo.mp4';
import jeepAssembly from './assets/JeepAssemblyImage.png';
import jeepCrossSection from './assets/JeepCrossSection.png';
import jeepExploded from './assets/JeepExplodedView.png';
import jeepExplodedDrawing from './assets/JeepExplodedViewDrawing.png';
import designProcess from './assets/Design Process Flower.jpeg';
import bbbDashboard from './assets/BrickbyBrick Dashboard.png';
import storyBridge from './assets/StoryBridge.png';
import assemblylist from './assets/AssemblyList.png';
import wheeloffortune from './assets/WheelGame.png';


// Connects the JSON text to the import above
const imageMap = {
  'CatanSideView.jpg': catan1,
  'CatanSideView2.jpg': catan2,
  'Solidworks Assembly Catan.jpeg': catan3,
  'pubmedPhoto.png': pubmedImg,
  'timeSensePhoto.png': timeSenseImg,
  'Puzzle video~2.mp4': puzzleVideo,
  'Open Flower.jpeg': openFlower,
  'Closed Flower.jpeg': closedFlower,
  'JeepVideo.mp4': jeepVideo,
  'JeepAssemblyImage.png': jeepAssembly,
  'JeepCrossSection.png': jeepCrossSection,
  'JeepExplodedView.png': jeepExploded,
  'JeepExplodedViewDrawing.png': jeepExplodedDrawing,
  'Design Process Flower.jpeg': designProcess,
  'BrickbyBrick Dashboard.png': bbbDashboard,
  'StoryBridge.png': storyBridge,
  'AssemblyList.png': assemblylist,
  'WheelGame.png': wheeloffortune,
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Takes the simple text data and adds the images to it
  const projects = projectsData.map(project => ({
    ...project, // Keep title, description, category...
    // Look up the real image file using the name
    images: (project.imageNames || []).map(name => imageMap[name] || null)
  }));

  // Renders the current page based on state
  const renderPage = () => {
    // Use mobile layout on mobile devices
    if (isMobile) {
      return <MobileHome projects={projects} />;
    }
    
    // Use desktop layout
    switch(currentPage) {
      case 'home': return <Hero />;
      // Pass the data to the pages
      case 'software': return <Software projects={projects} />;
      case 'mechanical': return <Mechanical projects={projects} />;
      default: return <Hero />;
    }
  };

  return (
    <div className="app">
      {/* Only show navbar on desktop */}
      {!isMobile && <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />}
      <main className="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={isMobile ? 'mobile' : currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;