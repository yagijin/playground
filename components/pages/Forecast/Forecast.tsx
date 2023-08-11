import { FC } from 'react'
import Image from 'next/legacy/image'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import ja from 'dayjs/locale/ja'

dayjs.locale(ja)
dayjs.extend(utc)
dayjs.extend(timezone)

type props = {
  forecast?: {
    date: string
    weather: string
    imageUrl: string
  }[]
}

const Forecast: FC<props> = ({ forecast }) => {
  dayjs.locale(ja)
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={3}>静岡の天気予報</th>
        </tr>
        <tr>
          <th colSpan={1}>日付</th>
          <th colSpan={2}>天気</th>
        </tr>
      </thead>
      <tbody>
        {forecast?.map((dayForecast) => {
          return (
            <tr key={dayForecast.date}>
              <td>
                {dayjs(dayForecast.date).tz('Asia/Tokyo').format('MM/DD(dd)')}
              </td>
              <td>{dayForecast.weather}</td>
              <td>
                <Image
                  src={dayForecast.imageUrl}
                  alt={`${dayForecast.weather}の天気アイコン`}
                  width={50}
                  height={50}
                />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Forecast
