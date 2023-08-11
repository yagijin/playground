import { FC, ReactNode } from 'react'
import Head from 'next/head'
import styles from './Layout.module.scss'
import { Center, IconButton, Text, Divider } from '@chakra-ui/react'
import { AiFillHome, AiOutlineGithub } from 'react-icons/ai'
import Link from 'next/link'

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
      <Divider />
      <footer>
        <Center h="5rem" color="teal" style={{ gap: '1rem' }}>
          <Text>Playground</Text>
          <Link href={'/'}>
            <IconButton
              colorScheme="teal"
              aria-label="back"
              size="lg"
              icon={<AiFillHome />}
            />
          </Link>
          <Link href={'https://github.com/yagijin/playground'}>
            <IconButton
              colorScheme="teal"
              aria-label="back"
              size="lg"
              icon={<AiOutlineGithub />}
            />
          </Link>
        </Center>
      </footer>
    </div>
  )
}

export default Layout
