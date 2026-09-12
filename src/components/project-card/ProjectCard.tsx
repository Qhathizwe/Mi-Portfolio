import React from 'react';
import {type Project } from '../../types/Portfolio';
import styles from './ProjectCard.module.css';

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDescription}>{project.description}</p>
      </div>
      <div>
        <div className={styles.tagWrapper}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.sourceBtn}>
          View Source Repository
        </a>
      </div>
    </div>
  );
};
