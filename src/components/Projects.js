import React, { useState } from "react";
import "./Projects.css";
import figma1 from "../components/Screenshots/figma1.png";
import figma2 from "../components/Screenshots/figma2.png";
import figma3 from "../components/Screenshots/figma3.png";
import figma4 from "../components/Screenshots/figma4.png";
import figma5 from "../components/Screenshots/figma5.png";
import figma6 from "../components/Screenshots/figma6.png";

const Projects = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const projects = [
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
        description: "Link to my projects on Figma envolving software design",
        link: "https://www.figma.com/files/team/1350981228662349295/all-projects?fuid=1350981224470866735",
        linkLabel: "View on Figma",
        images: [figma5, figma4, figma6, figma3, figma1, figma2 ]
     }
    ];

    return (
        <div className="projects-container">
            <div className="projects-content">
                {projects.map((project, index) => (
                    <div key={index} className="projects-card" onClick={() => setActiveIndex(activeIndex == index ? null:index)}>
                        
                        <h2><strong>{project.name}</strong></h2>
                        <p>{project.description}</p>
                        <p className="tech"><em>{project.tech}</em></p>
                        {project.link && (
                            <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-link"
                            onClick={(e) => e.stopPropagation()} // prevent card toggle when clicking on the link
                            >
                                {project.link.includes("figma.com") ? "View on Figma" : "View on GitHub"}
                            </a>
                        )}

                        {project.images && activeIndex == index && (
                            <div className="project-images">
                                {project.images.map((img, i) => (
                                    <img
                                    key = {i}
                                    src = {img}
                                    alt = {`${project.name} screenshot ${i + 1}`}
                                    />
                                ))}
                            </div>
                        )}

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;