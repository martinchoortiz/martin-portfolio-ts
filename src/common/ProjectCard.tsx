import { useState } from "react";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  title: string;
  shortDescription: string;
  fullDescription: string;
  srcImg: string;
  categories: string;
  scope: string;
  infoLinks: string;
  githubLink: string;
  featured?: boolean;
}

const splitList = (value: string, separator: RegExp) =>
  value
    .split(separator)
    .map((item) => item.trim())
    .filter(Boolean);

function ProjectCard({
  title,
  shortDescription,
  fullDescription,
  srcImg,
  categories,
  scope,
  infoLinks,
  githubLink,
  featured = false,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const tags = splitList(categories, /[;,]/);
  const links = splitList(infoLinks, /[\n;]/);
  const paragraphs = fullDescription
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <article className={`${styles.card} ${featured ? styles.featured : ""}`}>
      <div className={styles.media}>
        {srcImg ? (
          <img src={encodeURI(srcImg)} alt="" />
        ) : (
          <div className={styles.placeholder} aria-hidden="true" />
        )}
      </div>
      <div className={styles.body}>
        <div className={styles.meta}>
          {scope && <span className={styles.scope}>{scope}</span>}
        </div>
        <h3>{title}</h3>
        {shortDescription && <p className={styles.short}>{shortDescription}</p>}
        {tags.length > 0 && (
          <ul className={styles.tags}>
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
        {(paragraphs.length > 0 || links.length > 0 || githubLink) && (
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? "Hide details" : "View details"}
          </button>
        )}
        {isOpen && (
          <div className={styles.details}>
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {(links.length > 0 || githubLink) && (
              <div className={styles.links}>
                {links.map((link) => (
                  <a key={link} href={link} target="_blank" rel="noreferrer">
                    More information
                  </a>
                ))}
                {githubLink && (
                  <a href={githubLink} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
