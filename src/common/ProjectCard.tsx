import { useState } from "react";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  title: string;
  shortDescription: string;
  fullDescription: string;
  srcImg: string;
  isFlipped: boolean;
  onCardClick: () => void;
}

function ProjectCard({
  title,
  shortDescription,
  fullDescription,
  srcImg,
  isFlipped,
  onCardClick,
}: ProjectCardProps) {
  return (
    <div
      className={styles.cardContainer}
      onClick={(e) => {
        e.stopPropagation();
        onCardClick();
      }}
    >
      <div className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}>
        {/* Frente */}
        <div className={styles.front}>
          <img className={styles.image} src={srcImg} alt={title} />
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{shortDescription}</p>
        </div>
        {/* Dorso */}
        <div className={styles.back}>
          <p className={styles.fullDescription}>{fullDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
