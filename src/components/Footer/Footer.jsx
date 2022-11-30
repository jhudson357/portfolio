import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <p>© James Hudson 2022</p>
      <a href="/contact">Contact</a>
    </div>
  )
}

export default Footer