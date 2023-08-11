import type { NextPage } from 'next'
import Layout from '@/layouts/Layout'
import { useEffect, useState, useRef } from 'react'
import LeafletMap from '@/components/LeafletMap'
import { Heading } from '@chakra-ui/react'

const MapPage: NextPage = () => {
  const [windowWidth, setWindowWidth] = useState(100)
  const observedElement = useRef(null)

  useEffect(() => {
    setWindowWidth(window.innerWidth * 0.9)
    const resizeObserver = new ResizeObserver(() => {
      setWindowWidth(window.innerWidth * 0.9)
      console.log(window.innerWidth)
    })
    if (observedElement.current) resizeObserver.observe(observedElement.current)
    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <Layout
      head={{
        title: 'leafletを試す',
        description: 'leafletを試すためのsandbox',
      }}
    >
      <div
        ref={observedElement}
        style={{
          margin: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <Heading as="h1" size="xl">
          Leaflet Map
        </Heading>
        {/* leafletの都合上topのcssでheightだけ固定してしまているのでそれをと同じ値を使っている */}
        <LeafletMap width={windowWidth.toFixed() + 'px'} height={'700px'} />
      </div>
    </Layout>
  )
}

export default MapPage
