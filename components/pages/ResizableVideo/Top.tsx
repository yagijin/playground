import { FC } from 'react'
import Link from 'next/link'

type props = {}

const ResizableVideo: FC<props> = ({}) => {
  return (
    <ul>
      <li>
        <Link href="/forecast">天気予報</Link>
      </li>
      <li>
        <Link href="/leaflet">地図</Link>
      </li>
      <li>
        <Link href="/wasm_ruby">wasm-ruby</Link>
      </li>
    </ul>
  )
}

export default ResizableVideo
