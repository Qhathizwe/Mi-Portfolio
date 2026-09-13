// src/components/footer/Footer.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {

  return (
    <footer className={styles.footer}>

      <div className={styles.container}>

        <div className={styles.brand}>

          <div className={styles.logo}>
            SM
          </div>

          <div>

            <h3>
              Scelo Mike Phoswa
            </h3>

            <p>
              Junior Full-Stack Developer
            </p>

          </div>

        </div>


        <div className={styles.links}>

          <Link to="/">
            Home
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/projects">
            Projects
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>


        <div className={styles.social}>

          <a
            href="https://github.com/Qhathizwe"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a href="mailto:sphoswa2@gmail.com">
            Email
          </a>

        </div>

      </div>


      <div className={styles.bottom}>

        <p>
          © {new Date().getFullYear()}
          {' '}
          Scelo Mike Phoswa. All rights reserved.
        </p>

        <p>
          Built with React + TypeScript
        </p>

      </div>

    </footer>
  );
};

export default Footer;