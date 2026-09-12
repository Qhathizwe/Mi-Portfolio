import React from 'react';
import styles from './Contact.module.css';

export const Contact: React.FC = () => {
  return (
    <div className={styles.layoutContainer}>
      <div>
        <h2 className={styles.title}>Contact Me</h2>
        <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Full Name</label>
            <input type="text" className={styles.field} placeholder="Enter your full name" required />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Email Address</label>
            <input type="email" className={styles.field} placeholder="Please enter your email address" required />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Message</label>
            <textarea rows={5} className={styles.textarea} placeholder="Enter your message here" required />
          </div>
          <button type="submit" className={styles.submitBtn}>Send Message</button>
        </form>
      </div>

      <div className={styles.channelsColumn}>
        <h3 className={styles.channelsTitle}>Reach Me On</h3>
        <a href="https://github.com" target="_blank" rel="noreferrer" className={styles.channelLink}>
          🐱 GitHub Account
        </a>
        <a href="#" className={styles.channelLink}>
          💼 LinkedIn Profile
        </a>
      </div>
    </div>
  );
};
