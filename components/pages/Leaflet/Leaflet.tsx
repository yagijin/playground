import { FC } from 'react'
import Forecast from '@/organisms/Forecast'
import Map from '@/organisms/Map'
import styles from './Leaflet.module.scss'

type props = {
  forecast?: {
    date: string
    weather: string
    imageUrl: string
  }[]
}

const Leaflet: FC<props> = ({ forecast }) => {
  return (
    <div>
      {forecast && <Forecast forecast={forecast} />}
      <Map />
    </div>
  )
}

export default Leaflet
