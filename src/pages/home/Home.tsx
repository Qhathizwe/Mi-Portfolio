import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import ProfilePic from '../../assets/IMG_8197.jpeg'

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.heroContainer}>
      <div className={styles.leftCol}>
        <h1 className={styles.heading}>This is my<br />portfolio</h1>
        <p className={styles.subheading}>
          Welcome to my software workspace. Here you will find my current full-stack applications, interface mockups, and script components.
        </p>
        <button onClick={() => navigate('/projects')} className={styles.exploreBtn}>
          Explore Projects
        </button>
      </div>
      <div className={styles.rightCol}>
        <div className={styles.assetFrame}>
          <span className={styles.framePlaceholder}>
            <img src={ProfilePic} alt="my profile picture" />
          </span>
        </div>
      </div>
    </div>
  );
};
