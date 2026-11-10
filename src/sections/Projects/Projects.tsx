import { useEffect, useMemo, useState } from "react";
import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import { loadProjects, Project } from "../../services/projectService";

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState("");
  const [scope, setScope] = useState("All");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await loadProjects();
        setProjects(data);
      } catch (loadError) {
        console.error("Error loading projects:", loadError);
        setError("Projects could not be loaded.");
      }
    };

    fetchProjects();
  }, []);

  const scopes = useMemo(
    () => ["All", ...new Set(projects.map((project) => project.SCOPE).filter(Boolean))],
    [projects]
  );

  const visibleProjects =
    scope === "All"
      ? projects
      : projects.filter((project) => project.SCOPE === scope);

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <p className="sectionLead">
        Work in simulation, optimization, and software. Open a card to read the
        full story, the tools involved, and any public links.
      </p>
      {scopes.length > 2 && (
        <div className={styles.filters} role="tablist" aria-label="Filter projects">
          {scopes.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={scope === item}
              className={scope === item ? styles.activeFilter : styles.filter}
              onClick={() => setScope(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
      {error && <p className={styles.status}>{error}</p>}
      <div className={`${styles.projectsContainer} projectsContainer`}>
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={project.TITLE}
            srcImg={project.IMAGES}
            title={project.TITLE}
            shortDescription={project.SHORT_DESCRIPTION}
            fullDescription={project.FULL_DESCRIPTION}
            categories={project.CATEGORIES}
            scope={project.SCOPE}
            infoLinks={project.INFO_LINKS}
            githubLink={project.GITHUB_LINK}
            featured={
              visibleProjects.length % 2 === 1 &&
              index === visibleProjects.length - 1
            }
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
