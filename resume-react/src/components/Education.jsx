import React from 'react';

const Education = () => {
  const education = [
    {
      institution: "Santa Clara University",
      degree: "Master of Science",
      field: "Computer Science",
      gpa: "3.50",
      period: "September 2023 - March 2025"
    },
    {
      institution: "NIT Hamirpur",
      degree: "Dual Degree in Computer Science (B.Tech. + M.Tech.)",
      field: "Computer Science",
      gpa: "3.28",
      period: "August 2014 - May 2019"
    }
  ];

  return (
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
      <div className="my-auto">
        <h2 className="mb-5">Education</h2>

        {education.map((edu, index) => (
          <div key={index} className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">{edu.institution}</h3>
              <div className="subheading mb-3">{edu.degree}</div>
              <div>{edu.field}</div>
              <p>GPA: {edu.gpa}</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">{edu.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
