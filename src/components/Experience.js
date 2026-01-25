import React from "react";
import "./Experience.css";

const Experience = () => {
    const experience = [
     {
        name: "Janox Stainless Steel",
        description: "My first job was as an aprentice in this company. I got to work in all different sectors (Administrative, Logistic, Sales, and Inventory) learning how each of them connect with each other."
        
     },
     {
        name: "BC Investiments",
        description: "My first co-op! From September of 2024 to April of 2025 I worked with the Service Desk team at BCI. There I was able to learn many different skills, with the main one being quick problem-solving abilities."
        
     }
    ];
    return (
        <div className="experience-container">
            <div className="experience-content">
                {experience.map((experience, index) => (
                    <div key={index} className="experience-card">
                        <h2><strong>{experience.name}</strong></h2>
                        <p>{experience.description}</p>
                        <p className="tech"><em>{experience.tech}</em></p>
                        {experience.link && (
                            <a
                            href={experience.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-link"
                            >
                                {experience.link.includes("figma.com") ? "View on Figma" : "View on GitHub"}
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;