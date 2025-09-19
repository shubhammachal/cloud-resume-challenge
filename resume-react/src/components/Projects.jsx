import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Elective Manager",
      githubUrl: "https://github.com/shubhammachal/Elective-manager-new",
      technologies: "PHP, Apache, MySQL, HTML/CSS, JavaScript",
      description: [
        "Contributed to an open-source project named Elective Manager.",
        "Designed to manage the allocation of elective subjects for undergraduate and postgraduate students.",
        "Facilitates elective assignment based on students' preferences and CGPA rankings.",
        "Integrates department-published elective subjects into a priority-based allocation system."
      ]
    },
    {
      title: "Cloud Resume Challenge",
      githubUrl: "https://github.com/shubhammachal/cloud-resume-challenge",
      technologies: "AWS, DynamoDB, API Gateway, Lambda, CloudFormation, CI/CD, Github Actions",
      description: [
        "Designed and deployed a personal resume website using AWS services, showcasing cloud computing and DevOps expertise.",
        "Configured S3 for static website hosting and optimized performance with CloudFront as a CDN.",
        "Implemented a serverless REST API using AWS Lambda and API Gateway to interact with a DynamoDB table for visitor count tracking.",
        "Automated infrastructure provisioning and deployment using AWS SAM and CloudFormation templates.",
        "Integrated a CI/CD pipeline using GitHub Actions to ensure smooth and consistent deployments.",
        "Secured the website with HTTPS and configured a custom domain using AWS Route 53 and ACM.",
        "Wrote and executed unit tests for Lambda functions and load testing for the API to ensure system reliability.",
        "Documented the project in a comprehensive README.md to demonstrate the workflow and architecture.",
        "Developed skills in AWS services, serverless computing, infrastructure as code, and cloud architecture principles."
      ]
    },
    {
      title: "Object Detection With YOLO",
      githubUrl: "https://github.com/shubhammachal/Object_detection_YOLOv8",
      technologies: "Deep Learning, YOLO, Python, Transfer Learning",
      description: [
        "Trained a YOLOv8 model on a custom dataset to detect objects and determine their class and location (bounding box) from images.",
        "Configured the model to recognize three specific object types:",
        "Car: Including SUVs, vans, pick-up trucks, and other small trucks.",
        "Medium truck: Examples include Amazon or FedEx delivery trucks.",
        "Large truck: Includes 18-wheelers, buses, and cargo trucks.",
        "Retrained the model with custom labels assigned in the training/validation set, focusing on improved accuracy for the specified object types.",
        "Demonstrated proficiency with object detection frameworks and customization of pretrained detection networks like SSD and YOLO."
      ]
    },
    {
      title: "House Price Prediction",
      githubUrl: "https://github.com/shubhammachal/House_Price-_Prediction",
      technologies: "Python, NumPy, Pandas, Regression, Machine Learning, Data Visualization, Data Pre-processing",
      description: [
        "Applied data exploration techniques (scatter plots, heat maps, box plots, histograms, and correlation analysis) to identify relationships between features and the target variable.",
        "Conducted exploratory data analysis (EDA) to detect and remove redundant features with negligible impact on house price prediction to enhance model performance.",
        "Preprocessed the dataset by handling missing values, encoding categorical variables, and normalizing features to prepare data for modeling.",
        "Trained a regression model on a dataset with 79 features to accurately predict house prices based on property attributes.",
        "Demonstrated proficiency in feature engineering, data preprocessing, and predictive modeling techniques to achieve accurate predictions."
      ]
    }
  ];

  return (
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="projects">
      <div className="my-auto">
        <h2 className="mb-5">Projects</h2>

        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              View on GitHub →
            </a>
            
            <div className="project-tech">{project.technologies}</div>
            
            <ul>
              {project.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
