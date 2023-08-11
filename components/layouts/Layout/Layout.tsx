import { FC, ReactNode } from 'react'
import Head from 'next/head'
import styles from './Layout.module.scss'
import { Center } from '@chakra-ui/react'

type props = {
  children: ReactNode
  head?: {
    title: string
    description: string
  }
}

const Layout: FC<props> = ({ children, head }) => {
  return (
    <div className={styles.container}>
      {head && (
        <Head>
          <title>{head.title}</title>
          <meta name="description" content={head.description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      )}
      <main>{children}</main>
      <footer className={styles.footer}>
        <Center h="5rem">footerだよ</Center>
      </footer>
    </div>
  )
}

export default Layout
