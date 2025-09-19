import React from 'react';

const About = () => {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
      <div className="my-auto about-content">
        <h1 className="mb-0">
          Shubham
          <span className="text-primary"> Machal</span>
        </h1>
        <div className="subheading mb-5">
          2147 Newhall Street · Santa Clara, CA 95050 · (510) 379-6190 ·
          <a href="mailto:shubham95m@gmail.com"> shubham95m@gmail.com</a>
        </div>
        <p className="about-description">
          MS Computer Science student at Santa Clara University with experience in Machine Learning, 
          Software Development, DevOps and Cloud Security. Skilled in Python, SQL, C++, DevOps. 
          I'm seeking 2025 full-time or internship opportunities to apply my expertise in DevOps, 
          Software Development and AI.
        </p>

        <div className="social-icons-container">
          <a href="https://medium.com/@machal_shubham/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fa fa-medium"></i>
          </a>
          <a href="https://x.com/machal_shubham/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/shubham-machal-18a51112a/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://github.com/shubhammachal" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
