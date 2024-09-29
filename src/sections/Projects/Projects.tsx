import React, { useEffect, useState } from "react";
import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import { loadProjects, Project } from "../../services/projectService";

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await loadProjects();
        setProjects(data);
      } catch (error) {
        console.error("Error loading projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            srcImg={project.IMAGES} // Si el campo IMAGES contiene una URL o ruta de imagen
            linkRef={project.GITHUB_LINK}
            title={project.TITLE}
            description={project.SHORT_DESCRIPTION}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
