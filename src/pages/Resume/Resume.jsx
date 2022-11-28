import styles from './Resume.module.css'

const Resume = () => {
  return (
    <div className={styles.resumeContainer}>
      <div className={styles.link}>
        <a href="/James Hudson ATS Resume - Portfolio.pdf" download>Download Resume</a>
      </div>
      <embed src="james-hudson-resume-portfolio.pdf" width="768px" height="1100px" />
    </div>
  )
}

export default Resume