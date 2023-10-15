import Header from './components/Header'

import './normalize.css'
import mainStyles from './main.module.css'



export default function RootLayout({children}) {
  return (
    <html lang="kr">
      <body>
        <div className={mainStyles.wrapper}>
          <Header/>
          <main className={mainStyles.main}>{children}</main>
        </div>
      </body>
    </html>
  )
}
