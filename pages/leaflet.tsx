import type { NextPage } from 'next'
import Layout from '@/layouts/Layout'
import LeafletPage from '@/pages/Leaflet'

export async function getServerSideProps() {
  const response = await fetch(
    `${process.env.execEnv}/api/forecast?areaId=220000`
  )
  const data = await response.json()
  return {
    props: { data },
  }
}

type props = {
  data: any
}

const Leaflet: NextPage<props> = ({ data }) => {
  return (
    <Layout
      head={{
        title: 'leafletを試す',
        description: 'leafletを試すためのsandbox',
      }}
    >
      <LeafletPage forecast={data} />
    </Layout>
  )
}

export default Leaflet
