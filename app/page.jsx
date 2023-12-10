// app/page.jsx
import Link from 'next/link'
import TopText from './components/TopText'
import mainStyles from './main.module.css'
import styles from './page.module.css'
import Header from './components/Header.jsx'

export default function Home() {

  // const props = [
  // //   { href: '#about', label: 'About' },
  // //   { href: '#projects', label: 'Projects' },
  // //   { href: '#Tech_stack', label: 'Tech_stack' },
  // //   { href: '#contacts', label: 'Contacts' },
  // // ];
  return (
    <>

      <section className={styles.top}>
        <div className={mainStyles.container}>
          <div className={styles.topInner}>
            {/* <Header links={links}/> */}
            <TopText />
            {/* <p className={styles.subTitle}>안녕하세요. 중부대학교 정보보호학전공 김근수입니다.</p> */}
          </div>
        </div>

      </section>

      <section id='about' className={styles.about}>
        <div className={mainStyles.container}>
          <h2 className={styles.title}>About</h2>
          <p className={styles.line}></p>
          <div className={styles.aboutInner}>
            <div className={styles.aboutLeft}>
              <h3 className={styles.subtitle}>
                Profile
              </h3>
              <p className={styles.text}>
                <li>김근수</li>
                <li>2001.01.30</li>
                <li>010-5543-6164</li>
                <li>ESFP</li>
              </p>
              <br></br>
              <h3 className={styles.subtitle}>
                HOBBY
              </h3>
              <p className={styles.text}>
                <li>게임</li>
                <li>스포츠</li>
                <li>노래 듣기</li>
              </p>
              <br></br>
              <h3 className={styles.subtitle}>
                INTERESTS
              </h3>
              <p className={styles.text}>
                <li>포렌식</li>
                <li>웹 개발</li>
              </p>
              <br></br>

            </div>
          </div>
        </div>
      </section>



      <section id='activity' className={styles.Tech_stack}>
        <div className={mainStyles.container}>
          <h2 className={styles.title}>ACTIVITY</h2>
          <p className={styles.line}></p>

          <div className={styles.activity}>
            <p>clerk2</p>
            <a className={styles.contact} href='https://clerk2-rho.vercel.app/' rel="noreferrer">
              <li className={styles.contactLink}>https://clerk2-rho.vercel.app/</li>
            </a>
          </div>

          <br></br> <br></br>

          <div className={styles.activity}>
            <p>축구선수 명단 페이지</p>
            <a className={styles.contact} href='https://github.com/rrvv01/web-study/' rel="noreferrer">
                <li className={styles.contactLink}>https://github.com/rrvv01/web-study/</li>
            </a>
        </div>

        <br></br> <br></br>

        <div className={styles.activity}>
            <p>파이썬 스터디</p>
            <a className={styles.contact} href='https://github.com/rrvv01/python-study/' rel="noreferrer">
                <li className={styles.contactLink}>https://github.com/rrvv01/python-study/</li>
            </a>
        </div>

        <br></br> <br></br>

        <div className={styles.activity}>
            <p>JavaScript 공부</p>
            <a className={styles.contact} href='https://velog.io/@rrvv01' rel="noreferrer">
                <li className={styles.contactLink}>https://velog.io/@rrvv01</li>
            </a>
        </div>

        <br></br> <br></br>

        <div className={styles.activity}>
            <p>쇼핑몰 사이트</p>
            <a className={styles.contact} href='https://dapara-theta.vercel.app/' rel="noreferrer">
                <li className={styles.contactLink}>https://dapara-theta.vercel.app/</li>
            </a>
        </div>

        <br></br> <br></br>

        <div className={styles.activity}>
            <p>Mongodb-crud</p>
            <a className={styles.contact} href='https://github.com/rrvv01/mongodb-crud' rel="noreferrer">
                <li className={styles.contactLink}>https://github.com/rrvv01/mongodb-crud</li>
            </a>
        </div>

        

        </div>
      </section >


      <section id='team_project' className={styles.projects}>
        <div className={mainStyles.container}>
          <h2 className={styles.title}>TEAM Project</h2>
          <p className={styles.line}></p>
          <div className={styles.projectsInner}>
            <div className={styles.grid}>
              <div className={styles.gridItem}>
                <div className={styles.gridItemInner}>
                  <img src="./main/links/team.jpg" />

                  <img src="./main/links/wbs.jpg" />



                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      <section id='contacts' className={styles.contacts}>
        <div className={mainStyles.container}>
          <h2 className={styles.title}>contacts</h2>
          <p className={styles.line}></p>
          <div className={styles.contactsInner}>
            <div className={styles.textSection}>
              <p className={styles.text}>

              </p>

            </div>
            <ul className={styles.contactsList}>

              <li>
                <Link className={styles.contact} href='https://github.com/rrvv01' rel="noreferrer">
                  <img className={styles.linkIcon} src="./main/contact/github.png" alt="" />
                  {/* <span className={styles.contactLink}>https://github.com/rrvv01</span> */}
                </Link>
              </li>
              <li>
                <Link className={styles.contact} href='https://www.instagram.com/rrvv_o/' rel="noreferrer">
                  <img className={styles.linkIcon} src="./main/contact/instagram.png" alt="" />
                  {/* <span className={styles.contactLink}>https://www.instagram.com/rrvv_o/</span> */}
                </Link>
              </li>
              <li>
                <Link className={styles.contact} href='https://www.rlaaudrb1104@gmail.com' rel="noreferrer">
                  <img className={styles.linkIcon} src="./main/contact/gmail.png" alt="" />
                  {/* <span className={styles.contactLink}>guksuukim57@gmail.com</span> */}
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </section>

    </>
  )
}
