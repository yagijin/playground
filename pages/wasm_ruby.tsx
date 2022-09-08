import type { NextPage } from 'next'
import Layout from '@/layouts/Layout'
import WasmRubyPage from '@/pages/WasmRuby'

const Home: NextPage = () => {
  return (
    <Layout
      head={{
        title: 'wasm-ruby',
        description: 'WasmRubyで遊ぶ',
      }}
    >
      <WasmRubyPage />
    </Layout>
  )
}

export default Home
