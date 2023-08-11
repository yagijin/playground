// page配下でleafletのコンポーネントを読み込むとレンダリングの関係上、windowが用意される前に参照しようとしてwindow is not definedとなるので切り出したコンポーネントから呼び出すこと
import { FC } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

type props = {
  width: string
  height: string
}

const LeafletMap: FC<props> = ({ width, height }) => {
  return (
    <div
      style={{
        height: height,
        width: width,
      }}
    >
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
    </div>
  )
}
export default LeafletMap
