interface ProjectCardProps {
  title: string;
  description: string;
  srcImg: string;
  linkRef: string;
}

function ProjectCard(props: ProjectCardProps) {
  return (
    <a href={props.linkRef} target="_blank">
      <img className="hover" src={props.srcImg} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </a>
  );
}

export default ProjectCard;
