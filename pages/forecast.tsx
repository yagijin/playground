import type { NextPage } from 'next'
import Error from 'next/error'
import Layout from '@/layouts/Layout'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import ja from 'dayjs/locale/ja'
import Image from 'next/legacy/image'
import Link from 'next/link'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
  Text,
} from '@chakra-ui/react'

dayjs.locale(ja)
dayjs.extend(utc)
dayjs.extend(timezone)

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

const Forecast: NextPage<props> = ({ data, error }) => {
  dayjs.locale(ja)
  if (error) return <Error statusCode={error.code} title={error.title} />

  return (
    <Layout
      head={{
        title: 'forecast',
        description: '天気予報',
      }}
    >
      <div
        style={{
          margin: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <Heading as="h1" size="xl">
          天気予報
        </Heading>
        <Text>
          静岡県の天気を気象庁のAPIから取得して表示しています。取得にはNext.jsのAPI
          Routesを使用しているので別のページでも簡単に参照することができます。
        </Text>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>
              出典：
              <Link href="https://www.data.jma.go.jp/developer/index.html">
                気象庁
              </Link>
            </TableCaption>
            <Thead>
              <Tr>
                <Th>日付</Th>
                <Th>天気</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((dayForecast) => {
                return (
                  <Tr key={dayForecast.date}>
                    <Td>
                      {dayjs(dayForecast.date)
                        .tz('Asia/Tokyo')
                        .format('MM/DD(dd)')}
                    </Td>
                    <Td>{dayForecast.weather}</Td>
                    <Td>
                      <Image
                        src={dayForecast.imageUrl}
                        alt={`${dayForecast.weather}の天気アイコン`}
                        width={50}
                        height={50}
                      />
                    </Td>
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </Layout>
  )
}

export default Forecast
