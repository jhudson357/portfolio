import styles from './About.module.css'
import { technologies } from '../../data/technologies'

const About = () => {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.topHalf}>
        <div className={styles.about}>
          <div className={styles.header}>
            <h1>About</h1>
          </div>
          <div className={styles.paragraph}>
            <p>
              I'm a Software Engineer with a passion for finding elegant and unique digital-solutions for everyday problems. My background in email marketing and graphic design helps me think strategically through creativity and detail, while my disciplined work ethic, adaptability, and passion for excellence push me to achieve my goals. I am eager to work both individually and in teams to learn and create exciting new products through code.
            </p>
          </div>
          <a href="/projects">
            <button className={styles.button}>
                See My Work
            </button>
          </a>
        </div>
        <div className={styles.technologies}>
          <h2>Technologies</h2>
          <ul>
            {technologies.map(technology => 
              <li key={technology}>
                {technology}
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className={styles.bottomHalf}></div>
    </section>
  )
}

export default About