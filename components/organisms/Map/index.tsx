import dynamic from 'next/dynamic'
import { memo } from 'react'

// leaflet内でwindowが多用されているので、
// dynamic importの副次的な作用で強制的にcsrにする
const MapWithCSR = memo(
  dynamic(() => import('./Map'), {
    loading: () => <div>Loading💫</div>,
    ssr: false,
  })
)

export default MapWithCSR
