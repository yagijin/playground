import type { NextPage } from 'next'
import Layout from '@/layouts/Layout'
import TopPage from '@/pages/Top'

const Home: NextPage = () => {
  return (
    <Layout
      head={{
        title: 'top',
        description: 'playgroundのトップページ',
      }}
    >
      <TopPage />
    </Layout>
  )
}

export default Home
