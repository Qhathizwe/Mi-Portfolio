import React from 'react';
import styles from './About.module.css';

export const About: React.FC = () => {

  return (
    <div className={styles.page}>

      <section className={styles.aboutSection}>

        <div className={styles.heading}>

          <span>ABOUT ME</span>

          <h1>
            From IT support to
            <strong> Full-Stack Development.</strong>
          </h1>

          <p>
            My journey combines technical support,
            systems development and practical software
            development experience.
          </p>

        </div>

        <div className={styles.contentGrid}>

          <div className={styles.storyCard}>

            <h2>My Story</h2>

            <p>
              I am a Junior Full-Stack Developer with a
              background in IT support and Systems Development.
              My experience has given me a strong understanding
              of computers, software, troubleshooting and
              technical problem-solving.
            </p>

            <p>
              I am currently developing my software engineering
              skills through the mLab CodeTribe apprenticeship,
              where I am gaining practical experience building
              software applications and improving my development
              workflow.
            </p>

            <p>
              I enjoy turning ideas into functional applications,
              learning new technologies and solving problems
              through code.
            </p>

          </div>

          <div className={styles.factsCard}>

            <h2>Quick Facts</h2>

            <div className={styles.fact}>
              <span>Location</span>
              <strong>South Africa</strong>
            </div>

            <div className={styles.fact}>
              <span>Career Focus</span>
              <strong>Full-Stack Development</strong>
            </div>

            <div className={styles.fact}>
              <span>Current Programme</span>
              <strong>mLab CodeTribe</strong>
            </div>

            <div className={styles.fact}>
              <span>Background</span>
              <strong>IT & Systems Development</strong>
            </div>

            <div className={styles.fact}>
              <span>Availability</span>
              <strong>Junior Developer Opportunities</strong>
            </div>

          </div>

        </div>

      </section>


      <section className={styles.skillsSection}>

        <div className={styles.sectionHeading}>

          <span>TECHNICAL SKILLS</span>

          <h2>
            Technologies and
            <strong> technical knowledge.</strong>
          </h2>

        </div>

        <div className={styles.skillsGrid}>

          <SkillCard
            title="Frontend"
            skills={[
              'HTML5',
              'CSS3',
              'JavaScript',
              'React',
              'TypeScript',
              'Responsive Design'
            ]}
          />

          <SkillCard
            title="Programming"
            skills={[
              'C#',
              'C++',
              'Arduino',
              'Programming Fundamentals'
            ]}
          />

          <SkillCard
            title="Database"
            skills={[
              'SQL',
              'Database Fundamentals',
              'Data Handling'
            ]}
          />

          <SkillCard
            title="IT & Systems"
            skills={[
              'Hardware Support',
              'Software Support',
              'Troubleshooting',
              'System Configuration',
              'Networking'
            ]}
          />

          <SkillCard
            title="Tools"
            skills={[
              'Git',
              'GitHub',
              'VS Code',
              'Vite'
            ]}
          />

          <SkillCard
            title="Other"
            skills={[
              'IoT',
              'Power BI',
              'Data Visualisation',
              'Technical Problem Solving'
            ]}
          />

        </div>

      </section>

    </div>
  );
};


interface SkillCardProps {
  title: string;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  skills
}) => {

  return (
    <div className={styles.skillCard}>

      <h3>{title}</h3>

      <div className={styles.skillList}>

        {skills.map((skill) => (
          <span key={skill}>
            {skill}
          </span>
        ))}

      </div>

    </div>
  );
};