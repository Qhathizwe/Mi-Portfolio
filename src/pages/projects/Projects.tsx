import React from 'react';
import styles from './Projects.module.css';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  type: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [

  {
    title: 'Shopping List Application',

    description:
      'A practical shopping list application designed to help users organise items, manage lists and interact with a clean user interface.',

    technologies: [
      'React',
      'TypeScript',
      'CSS',
      'Vite'
    ],

    type: 'Web Application'
  },

  {
    title: 'Link Vault',

    description:
      'A web application for organising and managing useful links in one central place, with a focus on usability and clean interface design.',

    technologies: [
      'React',
      'TypeScript',
      'JavaScript',
      'CSS'
    ],

    type: 'Web Application',

    github:
      'https://github.com/Qhathizwe/my-link-vault.git'
  },

  {
    title: 'Personal Developer Portfolio',

    description:
      'A professional developer portfolio showcasing my background, technical skills, projects, education and development journey.',

    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'CSS'
    ],

    type: 'Portfolio'
  }

];

export const Projects: React.FC = () => {

  return (
    <div className={styles.page}>

      <section className={styles.projectsSection}>

        <div className={styles.heading}>

          <span>MY WORK</span>

          <h1>
            Projects that demonstrate
            <strong> my development journey.</strong>
          </h1>

          <p>
            A selection of applications and technical projects
            I have worked on while developing my software
            development skills.
          </p>

        </div>

        <div className={styles.projectGrid}>

          {projects.map((project) => (

            <article
              className={styles.projectCard}
              key={project.title}
            >

              <div className={styles.projectTop}>

                <span className={styles.projectType}>
                  {project.type}
                </span>

                <span className={styles.projectIcon}>
                  &lt;/&gt;
                </span>

              </div>

              <h2>
                {project.title}
              </h2>

              <p>
                {project.description}
              </p>

              <div className={styles.techList}>

                {project.technologies.map(
                  (technology) => (

                    <span key={technology}>
                      {technology}
                    </span>

                  )
                )}

              </div>

              <div className={styles.projectActions}>

                {project.github ? (

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub →
                  </a>

                ) : (

                  <span className={styles.comingSoon}>
                    Project showcase
                  </span>

                )}

              </div>

            </article>

          ))}

        </div>

      </section>

    </div>
  );
};