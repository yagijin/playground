import { FC } from 'react'
import Link from 'next/link'

type props = {}

const Top: FC<props> = ({}) => {
  return (
    <ul>
      <li>
        <Link href="/leaflet">Leaflet</Link>
      </li>
    </ul>
  )
}

export default Top
