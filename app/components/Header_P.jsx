
'use client'

import Link from 'next/link'
import { useState } from 'react'
import mainStyles from '../main.module.css'
import styles from './Header.module.css'
export default function Header() {
  const [menu, setMenu] = useState(false)


  const onClickMenu_P = () => {
    setMenu(!menu)
  }

  return (
    <>
    <header className={styles.header}>
        <div className={mainStyles.container}>
          <div className={`${styles.headerInner} ${menu ? styles.menuActive : ''}`}>
            <div className={styles.logo}>
              <span className={styles.logoText}><Link href= "https://portfolio-bice-omega-36.vercel.app/">Portfolio</Link></span>
            </div>
            
            <button onClick={onClickMenu_P} className={styles.menuBtn}>
                <span className={styles.btnLine}></span>
                <span className={styles.btnLine}></span>
                <span className={styles.btnLine}></span>
            </button>
            <ul className={styles.menu}>
              <li className={styles.menuItem}>
                <Link onClick={onClickMenu_P} className={styles.menuLink} href={'#introduce'}>Introduce</Link>
              </li>
              <li className={styles.menuItem}>
                <Link onClick={onClickMenu_P} className={styles.menuLink} href={'#mission'}>Mission</Link>
              </li>
              <li className={styles.menuItem}>
                <Link onClick={onClickMenu_P} className={styles.menuLink} href={'#vision'}>Vision</Link>
              </li>
              <li className={styles.menuItem}>
                <Link onClick={onClickMenu_P} className={styles.menuLink} href={'#Tech_stack'}>stack</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
    )
  }