import React from "react";
import "./Projects.css";

const Projects = () => {
    const projects = [
     {
        name: "Personal Portfolio Website",
        description: "A website to test different layouts, to test and showcase my skills, projects, and experiences.",
        tech: "React, HTML, CSS, React Router",
        link: "https://github.com/FernandesLaura0/Projects"
        
     },
     {
        name: "Technical project-Python and Java",
        description: "Coding of random games I used to practice"
     }
    ];
    return (
        <div className="projects-container">
            <div className="projects-content">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h2><strong>{project.name}</strong></h2>
                        <p>{project.description}</p>
                        <p className="tech"><em>{project.tech}</em></p>
                        {project.link && (
                            <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-link"
                            >
                                View on GitHub
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;