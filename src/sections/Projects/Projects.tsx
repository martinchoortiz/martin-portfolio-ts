import styles from "./ProjectsStyles.module.css";
import anylogic_icon from "../../assets/anylogic logo.png";
import cplex_icon from "../../assets/cplex logo.png";
import python_icon from "../../assets/python logo.png";
import java_icon from "../../assets/java logo.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          srcImg={anylogic_icon}
          linkRef="https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets"
          title="Simulation APP"
          description="Some anylogic model"
        />
        <ProjectCard
          srcImg={cplex_icon}
          linkRef="https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets"
          title="Optimization APP"
          description="Example optimizer model"
        />
        <ProjectCard
          srcImg={python_icon}
          linkRef="https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets"
          title="Python application"
          description="Some project using python"
        />
        <ProjectCard
          srcImg={java_icon}
          linkRef="https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets"
          title="Java application"
          description="Some of my java apps"
        />
      </div>
    </section>
  );
}

export default Projects;
