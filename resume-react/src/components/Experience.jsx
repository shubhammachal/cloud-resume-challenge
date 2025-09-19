import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Crossvalidation.AI",
      period: "June 2024 - September 2024",
      responsibilities: [
      "Developed and deployed AI-driven enterprise applications for financial data analysis on cloud infrastructure,integrating monitoring and validation workflows.",
      "Fine-tuned LLaMA3 and OpenAI models with LoRA/QLoRA techniques, applying data preprocessing, normalization, and cleansing for time-series predictions."
      ]
    },
    {
      title: "Software Engineer",
      company: "Capgemini Technologies",
      period: "July 2019 - March 2023",
      responsibilities: [
        "Designed and deployed enterprise-scale cloud applications on AWS and Azure, integrating APIs, authentication services, and secure workflows.",
        "Built and optimized CI/CD pipelines with GitHub Actions and Terraform, enabling automated testing, deployments, and customer delivery with 40% faster release cycles.",
        "Developed full-stack features using Python, Java, and REST APIs, while collaborating with front-end teams for React-based interfaces.",
        "Led technical troubleshooting sessions with customers and internal teams, analyzing logs, identifying gaps, and mitigating system risks.",
        "Mentored junior engineers on coding standards, automation practices, and debugging techniques, improving team productivity.",
        "Enhanced system reliability through SELinux, kernel modules, and monitoring (Prometheus, Grafana), reducing production incidents by 80%."
      
      ]
    },
    {
      title: "Software Development Intern",
      company: "NIT Hamirpur",
      period: "May 2017 - July 2017",
      responsibilities: [
       "Built a full-stack elective allotment system (LAMP stack + JavaScript) for 1,000+ concurrent student users, showcasing scalable system design and SQL query optimization",
       "Documented workflows, error-handling strategies, and conducted demonstrations to faculty and peers, strengthening technical communication skills."
      ]
    }
  ];

  return (
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
      <div className="my-auto">
        <h2 className="mb-5">Experience</h2>

        {experiences.map((exp, index) => (
          <div key={index} className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">{exp.title}</h3>
              <div className="subheading mb-3">{exp.company}</div>
              <ul>
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">{exp.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
