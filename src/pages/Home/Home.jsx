import styles from './Home.module.css'
import Profile from '../../assets/james-profile-pic.jpeg'

const Home = () => {
  return (
    <section className={styles.homeContainer}>
      <div className={styles.text}>
        <h1>Software <br/>Engineer.</h1>
        <p>I'm a Software Engineer with a passion for finding elegant and unique digital-solutions for everyday problems. My background in email marketing and graphic design helps me think strategically through creativity and detail, while my disciplined work ethic, adaptability, and passion for excellence push me to achieve my goals. I am eager to work both individually and in teams to learn and create exciting new products through code.</p>
      </div>
      <div className={styles.profile}>
        <img src={Profile} alt="James Hudson" />
      </div> 
    </section>
  )
}

export default Home