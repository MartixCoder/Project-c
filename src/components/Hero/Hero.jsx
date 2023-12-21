import styles from './Hero.module.css';
import hero from '../../assets/hero/heroImage.png';
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Amina Khatun</h1>
        <p className={styles.description}>
          I&apos;m a New developer with 0 years of experience using HTML and
          CSS. Reach out if you&apos;d like to learn more!
        </p>
        <a href="#" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={hero} alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}

export default Hero;