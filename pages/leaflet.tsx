import type { NextPage } from 'next'
import Error from 'next/error'
import Layout from '@/layouts/Layout'
import LeafletPage from '@/pages/Leaflet'

export async function getServerSideProps() {
  const response = await fetch(
    `${process.env.execEnv}/api/forecast?areaId=220000`
  )
  const data = await response.json()

  if (!response.ok) {
    return {
      props: {
        error: {
          code: 500,
        },
      },
    }
  }

  if (!isForecast(data)) {
    return {
      props: {
        error: {
          code: 500,
          title: 'failed to get weather forecast',
        },
      },
    }
  }

  return {
    props: { data },
  }
}

const isForecast = (data: unknown): data is props['data'] => {
  if (typeof data === 'undefined') return true
  if (!Array.isArray(data)) return false
  for (let i = 0; i < data.length; i++) {
    if (
      typeof data[i]?.date !== 'string' ||
      typeof data[i]?.weather !== 'string' ||
      typeof data[i]?.imageUrl !== 'string'
    ) {
      return false
    }
  }
  return true
}

type props = {
  data?: {
    date: string
    weather: string
    imageUrl: string
  }[]
  error: {
    code: number
    title: string
  }
}

const Leaflet: NextPage<props> = ({ data, error }) => {
  if (error) return <Error statusCode={error.code} title={error.title} />
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
