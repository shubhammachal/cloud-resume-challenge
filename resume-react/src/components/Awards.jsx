import React from 'react';

const Awards = () => {
  const awards = [
    "Firewall Essentials: Configuration and Management (EDU-210) - Palo Alto Networks",
    "Crash Course in Python - Coursera",
    "Python for Data Science and AI - Coursera",
    "Supervised Machine Learning: Classification and Regression - Stanford University"
  ];

  return (
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
      <div className="my-auto">
        <h2 className="mb-5">Awards &amp; Certifications</h2>
        <ul className="fa-ul mb-0">
          {awards.map((award, index) => (
            <li key={index}>
              <i className="fa-li fa fa-trophy text-warning"></i>
              {award}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Awards;
