import type { NextPage } from 'next'

import Layout from '@/layouts/Layout'
import LeafletPage from '@/pages/Leaflet'

const Leaflet: NextPage = () => {
  return (
    <Layout head={{title: "leafletを試す", description: "leafletを試すためのsandbox"}}>
      <LeafletPage/>
    </Layout>
  )
}

export default Leaflet
