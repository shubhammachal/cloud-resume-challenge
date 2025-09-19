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
          Santa Clara Bay Area CA 95050 · (510) 379-6190 ·
          <a href="mailto:shubham95m@gmail.com"> shubham95m@gmail.com</a>
        </div>
        <p className="about-description">
        I am a software developer and recent Master of Science in Computer Science graduate from Santa Clara University. I bring four years of professional software engineering experience, with a focus on building scalable, reliable, and secure applications. My work spans backend systems, cloud infrastructure, and modern development practices. I specialize in leveraging technologies such as AWS, Kubernetes, Docker, and Python to design and deploy efficient solutions. My academic and professional background combines strong fundamentals in computer science with hands-on expertise in distributed systems, cloud platforms, and DevOps practices.
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
