import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SideNav from './components/SideNav';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Awards from './components/Awards';
import Footer from './components/Footer';

function App() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Visitor counter functionality
  const getVisitors = async () => {
    try {
      const response = await fetch('https://fbrof3gjqk.execute-api.us-east-1.amazonaws.com/Prod/get', { 
        method: 'GET' 
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setVisitorCount(data.count);
    } catch (err) {
      console.error('Failed to fetch visitor count:', err);
      setVisitorCount('Error');
    }
  };

  const incrementVisitors = async () => {
    try {
      const response = await fetch('https://fbrof3gjqk.execute-api.us-east-1.amazonaws.com/Prod/put', { 
        method: 'POST' 
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      await getVisitors(); // Refresh the count after increment
    } catch (err) {
      console.error('Failed to increment visitor count:', err);
    }
  };

  // Dark mode toggle
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', !isDarkMode ? 'dark' : 'light');
    localStorage.setItem('darkMode', !isDarkMode);
  };

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize dark mode from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
    document.documentElement.setAttribute('data-theme', savedDarkMode ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    getVisitors();
    incrementVisitors();
  }, []);

  return (
    <div className="App">
      {/* Dark Mode Toggle */}
      <button 
        className="theme-toggle" 
        onClick={toggleDarkMode}
        title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        <i className={`fa ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
      </button>

      {/* Scroll to Top Button */}
      <button 
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        title="Scroll to Top"
      >
        <i className="fa fa-arrow-up"></i>
      </button>

      <SideNav />
      <div className="container-fluid p-0">
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Interests />
        <Awards />
      </div>
      <Footer visitorCount={visitorCount} />
    </div>
  );
}

export default App;