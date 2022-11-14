import styles from './Contact.module.css'
import Github from '../../assets/github.png'
import LinkedIn from '../../assets/linkedin.png'

const Contact = () => {
  return (
    <div className={styles.contactContainer}> 
      <div className={styles.contactContent}>
        <div className={styles.contactHeader}>
          <h1>Let's Connect</h1>
          <p>Have a question or proposal? Send me a message!</p>
        </div>
        <a className={styles.emailLink} href="mailto: james.hudson0357@gmail.com">james.hudson0357@gmail.com</a>
        <div className={styles.socials}>
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/jameshudson357/" target="_blank" rel="noopener noreferrer">
              <img className={styles.socialIcon} src={LinkedIn} alt="LinkedIn" />
              </a>
            <a href="https://github.com/jhudson357" target="_blank" rel="noopener noreferrer">
              <img className={styles.socialIcon} src={Github} alt="Github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact