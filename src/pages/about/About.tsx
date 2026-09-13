import React from 'react';
import { experienceData } from '../../data/PortfolioData';
import styles from './About.module.css';

export const About: React.FC = () => {

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>About Me</h2>
      <p className={styles.bio}>
        I am a dedicated **Frontend Developer & Full-Stack Apprentice** specializing in React, TypeScript, and database integrations. Transitioning from a solid foundational background in IT support and technical office administration, I write clean, component-driven code to solve practical digital workflows.
      </p>
      
      <h3 className={styles.sectionTitle}>Professional Path</h3>
      <div className={styles.timeline}>
        {experienceData.map((exp, idx) => (
          <div key={idx} className={styles.timelineItem}>
            <div className={styles.timelineMarker} />
            <div className={styles.itemHeader}>
              <h4 className={styles.roleTitle}>{exp.role}</h4>
              <span className={styles.durationBadge}>{exp.duration}</span>
            </div>
            <h5 className={styles.companyName}>{exp.company}</h5>
            <ul className={styles.highlightsList}>
              {exp.highlights.map((item, key) => (
                <li key={key} className={styles.highlightRow}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
