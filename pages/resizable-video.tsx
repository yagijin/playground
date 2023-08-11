import type { NextPage } from 'next'
import Layout from '@/layouts/Layout'
import { useEffect, useState, useRef } from 'react'
import { Center, Heading, Text } from '@chakra-ui/react'

type props = {}

const ResizableVideo: NextPage<props> = ({}) => {
  const [windowWidth, setWindowWidth] = useState(100)
  const observedElement = useRef(null)

  useEffect(() => {
    setWindowWidth(window.innerWidth * 0.9)
    const resizeObserver = new ResizeObserver(() => {
      setWindowWidth(window.innerWidth * 0.9)
    })
    if (observedElement.current) resizeObserver.observe(observedElement.current)
    return () => {
      resizeObserver.disconnect()
    }
  }, [])
  return (
    <Layout>
      <div
        style={{
          margin: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        <Heading as="h1" size="xl">
          Resizable Video
        </Heading>
        <Text>ブラウザのリサイズに合わせてサイズが変わります。</Text>
        <Center ref={observedElement}>
          <iframe
            width={windowWidth.toFixed()}
            height={((windowWidth * 9) / 16).toFixed()}
            src="https://www.youtube.com/embed/gcgKUcJKxIs"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Center>
      </div>
    </Layout>
  )
}

export default ResizableVideo
