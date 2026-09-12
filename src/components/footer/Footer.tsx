import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.gridWrapper}>
        <div className={styles.brandColumn}>
          <h3 className={styles.brandTitle}>Scelo Phoswa</h3>
          <p className={styles.brandText}>
            Building elegant frontend components and secure full-stack software applications.
          </p>
        </div>

        <div className={styles.linksColumn}>
          <h4 className={styles.sectionHeader}>QUICK LINKS</h4>
          <div className={styles.linkList}>
            <Link to="/" className={styles.footerLink}>Home</Link>
            <Link to="/about" className={styles.footerLink}>About Path</Link>
            <Link to="/projects" className={styles.footerLink}>Applications</Link>
            <Link to="/contact" className={styles.footerLink}>Contact Info</Link>
          </div>
        </div>

        <div className={styles.linksColumn}>
          <h4 className={styles.sectionHeader}>CHANNELS</h4>
          <div className={styles.linkList}>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.footerLink}
            >
              🐱 GitHub Profile
            </a>
            <a href="#" className={styles.footerLink}>
              💼 LinkedIn Profile
            </a>
          </div>
        </div>
      </div>

      <div className={styles.copyrightBar}>
        &copy; {new Date().getFullYear()} Scelo Mike Phoswa. All rights reserved.
      </div>
    </footer>
  );
};
