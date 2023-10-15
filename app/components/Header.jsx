'use client'

import Link from 'next/link'
import { useState } from 'react'
import mainStyles from '../main.module.css'
import styles from './Header.module.css'
export default function Header() {
  const [menu, setMenu] = useState(false)

  const onClickMenu = () => {
    setMenu(!menu)
  }

  return (
    <>
      <header className={styles.header}>
        <div className={mainStyles.container}>
          <div className={`${styles.headerInner} ${menu ? styles.menuActive : ''}`}>
            <div className={styles.logo}>
              <span className={styles.logoText}><Link href= "/">Geunsoo page</Link></span>
            </div>
            
            <button onClick={onClickMenu} className={styles.menuBtn}>
                <span className={styles.btnLine}></span>
                <span className={styles.btnLine}></span>
                <span className={styles.btnLine}></span>
            </button>
            <ul className={styles.menu}>
              <li className={styles.menuItem}>
                <Link onClick={onClickMenu} className={styles.menuLink} href={'#about'}>About</Link>
              </li>
              <li className={styles.menuItem}>
                <Link onClick={onClickMenu} className={styles.menuLink} href={'#skill'}>skill</Link>
              </li>
              <li className={styles.menuItem}>
                <Link onClick={onClickMenu} className={styles.menuLink} href={'#team_project'}>Team Project</Link>
              </li>
              <li className={styles.menuItem}>
                <Link onClick={onClickMenu} className={styles.menuLink} href={'#contacts'}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>


      
    </>
  )
}


