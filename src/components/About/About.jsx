import styles from "./About.module.css";
import about from "../../assets/about/about.jpg";
import coursor from "../../assets/about/cursorIcon.png";
import server from "../../assets/about/serverIcon.png";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={about}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={coursor} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I&apos;m a New frontend developer with 0 experience in building
                responsive and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={server} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have no experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={coursor} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have no designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
