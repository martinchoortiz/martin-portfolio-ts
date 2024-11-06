import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  title: string;
  description: string;
  srcImg: string;
  linkRef: string;
}

function ProjectCard(props: ProjectCardProps) {
  return (
    <a href={props.linkRef} target="_blank">
      <img className={styles.hover} src={props.srcImg} alt={props.title} />
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.description}> {props.description}</p>
    </a>
  );
}

export default ProjectCard;
