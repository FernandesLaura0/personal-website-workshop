import React from "react";
import "./Experience.css";

const Experience = () => {
    const experience = [
     {
        name: "Personal Portfolio Website",
        description: "A website to test different layouts, to test and showcase my skills, projects, and experiences.",
        tech: "React, HTML, CSS, React Router",
        link: "https://github.com/FernandesLaura0/Projects",
        linkLabel: "View on GitHub"
        
     },
     {
        name: "Technical project-Python and Java",
        description: "Coding of random games I used to practice"
        
     },
     {
        name: "Figma projects",
        description: "Link to my projects on Figma envolving software desing",
        link: "https://www.figma.com/files/team/1350981228662349295/all-projects?fuid=1350981224470866735",
        linkLabel: "View on Figma"
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