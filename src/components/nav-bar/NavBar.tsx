import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

export const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>Phoswa-The-Great</Link>
      <div className={styles.navLinks}>
        <Link to="/" className={styles.link}>HOME</Link>
        <Link to="/about" className={styles.link}>ABOUT</Link>
        <Link to="/projects" className={styles.link}>PROJECTS</Link>
        <Link to="/contact" className={styles.contactBtn}>CONTACT</Link>
      </div>
    </nav>
  );
};

export default Navbar;