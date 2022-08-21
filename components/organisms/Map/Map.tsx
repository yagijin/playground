import { FC } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import styles from './Map.module.scss'

type props = {}

const Map: FC<props> = ({}) => {
  return (
    <MapContainer
      center={[34.956073, 138.409245]}
      zoom={17}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  )
}

export default Map
