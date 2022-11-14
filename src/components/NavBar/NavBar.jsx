import { Link } from "react-router-dom"
import styles from './NavBar.module.css'
import Logo from '../../assets/james-hudson-2.svg'

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <Link to='/' >
        <img 
          src={Logo}
          alt="Text reads: jamesHudson"
          className={styles.logo}
        />
      </Link>

      <ul className={styles.navLinks}>
        <li><Link to='/about' >About</Link></li>
        <li><Link to='/projects' >Projects</Link></li>
        <li><Link to='/resume' >Resume</Link></li>
        <li><Link to='/contact' >Contact</Link></li>
      </ul>

    </nav>

  )
}

export default NavBar