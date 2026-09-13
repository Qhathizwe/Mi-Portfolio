import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

export const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>

      <div className={styles.navContainer}>

        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>SM</span>
          <span className={styles.logoText}>
            Scelo<span>Mike</span>
          </span>
        </Link>

        <div className={styles.navLinks}>

          <Link to="/" className={styles.link}>
            Home
          </Link>

          <Link to="/about" className={styles.link}>
            About
          </Link>

          <Link to="/projects" className={styles.link}>
            Projects
          </Link>

          <Link to="/contact" className={styles.link}>
            Contact
          </Link>

          <a
            href="/cv/Scelo-Mike-Phoswa-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeBtn}
          >
            Download CV
          </a>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;