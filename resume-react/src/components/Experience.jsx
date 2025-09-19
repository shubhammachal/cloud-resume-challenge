import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "Crossvalidation.AI",
      period: "June 2024 - September 2024",
      responsibilities: [
        "Developed an AI financial agent to enhance investment strategies by automating data collection and processing.",
        "Built data pipelines to extract, transform, and load data from various sources using SQL.",
        "Fine-tuned LLaMA3 and OpenAI models using live news feeds, ensuring accuracy in predicting market changes through model testing."
      ]
    },
    {
      title: "Cloud Engineer",
      company: "Capgemini Technologies",
      period: "July 2019 - March 2023",
      responsibilities: [
        "Built customer trust by enhancing cloud security and optimizing AWS/Azure infrastructure.",
        "Reduced security incidents by 50% for Asahi Beverages on cloud platforms, enhancing client satisfaction.",
        "Delivered tailored security solutions to clients, ensuring seamless protection of sensitive data and significantly enhancing the customer experience with robust security practices.",
        "Improved efficiency in deployments by automating Azure infrastructure setup using Terraform, reducing errors by 40% and boosting network performance by 25%, ensuring faster and more reliable service delivery to clients.",
        "Optimized network infrastructure by designing and refining virtual networks, subnets, IP addresses, and interfaces, enabling clients to achieve superior private and public network route performance for smoother business operations."
      ]
    },
    {
      title: "Software Development Intern",
      company: "NIT Hamirpur",
      period: "May 2017 - July 2017",
      responsibilities: [
        "Built customer trust by enhancing cloud security and optimizing AWS/Azure infrastructure.",
        "Reduced security incidents by 50% for Asahi Beverages on cloud platforms, enhancing client satisfaction.",
        "Delivered tailored security solutions to clients, ensuring seamless protection of sensitive data and significantly enhancing the customer experience with robust security practices.",
        "Improved efficiency in deployments by automating Azure infrastructure setup using Terraform, reducing errors by 40% and boosting network performance by 25%, ensuring faster and more reliable service delivery to clients.",
        "Optimized network infrastructure by designing and refining virtual networks, subnets, IP addresses, and interfaces, enabling clients to achieve superior private and public network route performance for smoother business operations."
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
