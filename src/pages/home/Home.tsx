import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

import ProfilePic from '../../assets/IMG_8197.jpeg';

export const Home: React.FC = () => {

  return (
    <div className={styles.home}>

      {/* HERO */}

      <section className={styles.hero}>

        <div className={styles.heroContent}>

          <div className={styles.statusBadge}>
            <span></span>
            OPEN TO JUNIOR DEVELOPER OPPORTUNITIES
          </div>

          <p className={styles.intro}>
            Hi, I'm
          </p>

          <h1>
            SCELO MIKE
            <span> PHOSWA</span>
          </h1>

          <h2>
            Junior Full-Stack Developer
          </h2>

          <p className={styles.heroText}>
            mLab CodeTribe Full-Stack Developer Apprentice
            building modern, responsive and user-focused
            web applications.
          </p>

          <p className={styles.heroDescription}>
            I combine my background in IT support and Systems
            Development with practical software development
            experience to create useful digital solutions.
          </p>

          <div className={styles.heroButtons}>

            <Link
              to="/projects"
              className={styles.primaryButton}
            >
              View My Projects
            </Link>

            <a
              href="/cv/Scelo-Mike-Phoswa-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryButton}
            >
              Download CV
            </a>

          </div>

          <div className={styles.socialLinks}>

            <a
              href="https://github.com/Qhathizwe"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <span>•</span>

            <a
              href="mailto:sphoswa2@gmail.com"
            >
              Email
            </a>

            <span>•</span>

            <Link to="/contact">
              Contact Me
            </Link>

          </div>

        </div>

        <div className={styles.heroVisual}>

          <div className={styles.glow}></div>

          <div className={styles.profileCard}>

            <div className={styles.profileTop}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className={styles.profileImageWrapper}>

              <img
                src={ProfilePic}
                alt="Scelo Mike Phoswa"
              />

            </div>

            <div className={styles.profileInfo}>

              <h3>Scelo Mike Phoswa</h3>

              <p>
                Full-Stack Developer Apprentice
              </p>

              <div className={styles.codeLine}>
                &lt;build /&gt;
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* QUICK STATS */}

      <section className={styles.statsSection}>

        <div className={styles.statsGrid}>

          <div className={styles.statCard}>
            <strong>IT</strong>
            <span>Technical Background</span>
          </div>

          <div className={styles.statCard}>
            <strong>SD</strong>
            <span>Systems Development</span>
          </div>

          <div className={styles.statCard}>
            <strong>mLab</strong>
            <span>CodeTribe Apprentice</span>
          </div>

          <div className={styles.statCard}>
            <strong>WEB</strong>
            <span>Application Development</span>
          </div>

        </div>

      </section>


      {/* WHAT I BUILD */}

      <section className={styles.buildSection}>

        <div className={styles.sectionHeading}>

          <span>WHAT I BUILD</span>

          <h2>
            Turning ideas into
            <span> digital solutions.</span>
          </h2>

          <p>
            My focus is building practical software and web
            applications that solve real problems and provide
            a clean user experience.
          </p>

        </div>

        <div className={styles.buildGrid}>

          <div className={styles.buildCard}>
            <div className={styles.cardIcon}>
              &lt;/&gt;
            </div>

            <h3>Web Applications</h3>

            <p>
              Responsive and interactive applications
              designed for modern browsers and devices.
            </p>

          </div>

          <div className={styles.buildCard}>
            <div className={styles.cardIcon}>
              ⚙
            </div>

            <h3>Full-Stack Solutions</h3>

            <p>
              Applications combining user interfaces,
              application logic and data.
            </p>

          </div>

          <div className={styles.buildCard}>
            <div className={styles.cardIcon}>
              ◉
            </div>

            <h3>Technical Solutions</h3>

            <p>
              Using my IT and systems development background
              to troubleshoot and solve technical problems.
            </p>

          </div>

        </div>

      </section>


      {/* JOURNEY */}

      <section className={styles.journeySection}>

        <div className={styles.sectionHeading}>

          <span>MY JOURNEY</span>

          <h2>
            From IT support to
            <span> software development.</span>
          </h2>

        </div>

        <div className={styles.timeline}>

          <div className={styles.timelineItem}>

            <div className={styles.timelineDot}></div>

            <div>
              <span>2016</span>
              <h3>Higher National Certificate</h3>
              <p>
                Richmond Combined School
              </p>
            </div>

          </div>

          <div className={styles.timelineItem}>

            <div className={styles.timelineDot}></div>

            <div>
              <span>2018</span>
              <h3>Systems Development</h3>
              <p>
                National Certificate – IT Certification Academy
              </p>
            </div>

          </div>

          <div className={styles.timelineItem}>

            <div className={styles.timelineDot}></div>

            <div>
              <span>2019 – 2022</span>
              <h3>IT Technician</h3>
              <p>
                Hardware, software, networking and technical
                troubleshooting experience.
              </p>
            </div>

          </div>

          <div className={styles.timelineItem}>

            <div className={styles.timelineDot}></div>

            <div>
              <span>2024</span>
              <h3>IoT & Technical Development</h3>
              <p>
                Continued developing practical technical
                and programming skills.
              </p>
            </div>

          </div>

          <div className={styles.timelineItem}>

            <div className={styles.timelineDot}></div>

            <div>
              <span>2026 – Present</span>
              <h3>mLab CodeTribe</h3>
              <p>
                Full-Stack Developer Apprentice building
                practical software applications.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className={styles.ctaSection}>

        <div className={styles.ctaCard}>

          <span>LET'S CONNECT</span>

          <h2>
            Ready to build
            <span> something useful?</span>
          </h2>

          <p>
            I'm looking for opportunities where I can contribute,
            learn and grow as a software developer.
          </p>

          <Link
            to="/contact"
            className={styles.primaryButton}
          >
            Get In Touch
          </Link>

        </div>

      </section>

    </div>
  );
};