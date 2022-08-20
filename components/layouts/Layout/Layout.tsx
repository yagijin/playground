import { FC, ReactNode } from 'react'
import Head from 'next/head'
import styles from './Layout.module.scss'

type props = {
  children: ReactNode
  head: {
    title: string
    description: string
  }
}

const Layout: FC<props> = ({children, head}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{head.title}</title>
        <meta name="description" content={head.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>headerだよ</header>
      <main>
        {children}
      </main>
      <footer className={styles.footer}>
        footerだよ
      </footer>
    </div>
  )
}

export default Layout
