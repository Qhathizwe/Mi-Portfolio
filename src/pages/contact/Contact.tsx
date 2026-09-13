import React from 'react';
import styles from './Contact.module.css';

export const Contact: React.FC = () => {

  return (
    <div className={styles.page}>

      <section className={styles.contactSection}>

        <div className={styles.heading}>

          <span>GET IN TOUCH</span>

          <h1>
            Let's build something
            <strong> useful.</strong>
          </h1>

          <p>
            I'm currently looking for junior developer
            opportunities where I can contribute, learn
            and continue growing as a software developer.
          </p>

        </div>

        <div className={styles.contactGrid}>

          <div className={styles.infoCard}>

            <h2>Contact Information</h2>

            <p>
              The easiest way to reach me is through email
              or GitHub.
            </p>

            <div className={styles.contactItem}>

              <span>Email</span>

              <a href="mailto:sphoswa2@gmail.com">
                sphoswa2@gmail.com
              </a>

            </div>

            <div className={styles.contactItem}>

              <span>Phone</span>

              <a href="tel:0699342225">
                069 934 2225
              </a>

            </div>

            <div className={styles.contactItem}>

              <span>GitHub</span>

              <a
                href="https://github.com/Qhathizwe"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Qhathizwe
              </a>

            </div>

          </div>


          <div className={styles.messageCard}>

            <h2>Send Me A Message</h2>

            <form
              onSubmit={(event) => {
                event.preventDefault();

                window.location.href =
                  'mailto:sphoswa2@gmail.com';
              }}
            >

              <div className={styles.inputGroup}>

                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />

              </div>

              <div className={styles.inputGroup}>

                <label htmlFor="email">
                  Your Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />

              </div>

              <div className={styles.inputGroup}>

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell me about your opportunity..."
                  required
                />

              </div>

              <button type="submit">
                Open Email →
              </button>

            </form>

          </div>

        </div>

      </section>

    </div>
  );
};