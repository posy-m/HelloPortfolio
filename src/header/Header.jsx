import React from 'react'
import Email from './Email'
import styles from './header.module.css'
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <nav className={styles.headerBox}>
      <section className={styles.headerContent}>
        <ul>
          <li> <a href="https://github.com/posy-m" target="_blank">Github </a></li>
          <li><a href="https://gangsangdogirl.tistory.com/" target="_blank">Blog</a></li>
          <li><Email /></li>
        </ul>
      </section>
      <section className={styles.headerContent}>
        <ul>
          <li><Link to='about' smooth={true} duration={500} >About</Link></li>
          <li><Link to='stack' smooth={true} duration={500} >Skill</Link></li>
          <li><Link to='portfolio' smooth={true} duration={500} >Project</Link></li>
        </ul>
      </section>

    </nav>
  )
}

export default Header
