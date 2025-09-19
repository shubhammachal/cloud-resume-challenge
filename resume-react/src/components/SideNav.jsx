import React from 'react';

const SideNav = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a className="navbar-brand" href="#page-top" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
        <span className="d-block d-lg-none">Shubham Machal</span>
        <span className="d-none d-lg-block">
          <img 
            className="img-fluid img-profile rounded-circle mx-auto mb-2" 
            src="/img/profile.jpg" 
            alt="Shubham Machal" 
          />
        </span>
      </a>
      
      <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a 
              className="nav-link" 
              href="#about" 
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a 
              className="nav-link" 
              href="#experience" 
              onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}
            >
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a 
              className="nav-link" 
              href="#education" 
              onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}
            >
              Education
            </a>
          </li>
          <li className="nav-item">
            <a 
              className="nav-link" 
              href="#projects" 
              onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a 
              className="nav-link" 
              href="#skills" 
              onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
            >
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a 
              className="nav-link" 
              href="#interests" 
              onClick={(e) => { e.preventDefault(); scrollToSection('interests'); }}
            >
              Interests
            </a>
          </li>
          <li className="nav-item">
            <a 
              className="nav-link" 
              href="#awards" 
              onClick={(e) => { e.preventDefault(); scrollToSection('awards'); }}
            >
              Awards
            </a>
          </li>
          <li className="nav-item">
            <a 
              className="nav-link" 
              href="https://drive.google.com/file/d/1fxdvTc6TxRKYWE5KsJgrYvxZxsukg1kq/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideNav;
