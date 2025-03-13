import React, { useEffect, useState } from "react";
import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import { loadProjects, Project } from "../../services/projectService";

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

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

  const handleCardClick = (index: number) => {
    setFlippedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      id="projects"
      className={styles.container}
      onClick={() => setFlippedIndex(null)}
      tabIndex={-1}
    >
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            srcImg={project.IMAGES}
            linkRef={project.GITHUB_LINK}
            title={project.TITLE}
            shortDescription={project.SHORT_DESCRIPTION}
            fullDescription={project.FULL_DESCRIPTION}
            isFlipped={flippedIndex === index}
            onCardClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
