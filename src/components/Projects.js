import React from "react";

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
        description: "The link below will go to the "
     }
    ];
    return (
        <div>
            <div>
                {projects.map((project, index) => (
                    <div key={index}>
                        <h2><strong>{project.name}</strong></h2>
                        <p>{project.description}</p>
                        <p><em>{project.tech}</em></p>
                        {project.link && (
                            <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
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