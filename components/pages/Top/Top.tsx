import { FC } from 'react'
import Link from 'next/link'
import { Heading } from '@chakra-ui/react'
import { List, ListItem, ListIcon } from '@chakra-ui/react'
import { AiOutlineLink } from 'react-icons/ai'

type props = {}

const Top: FC<props> = ({}) => {
  return (
    <div style={{ margin: '2rem' }}>
      <Heading
        as="h1"
        size="xl"
        noOfLines={1}
        style={{ margin: '0 2rem 2rem 0', borderBottom: '2px dashed #595959' }}
      >
        ページたち
      </Heading>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={AiOutlineLink} color="green.500" />
          <Link href="/forecast">天気予報</Link>
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineLink} color="green.500" />
          <Link href="/wasm_ruby">wasm-ruby</Link>
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineLink} color="green.500" />
          <Link href="/leaflet">地図</Link>
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineLink} color="green.500" />
          <Link href="/resizable-video">リサイズ可能なvideo</Link>
        </ListItem>
      </List>
    </div>
  )
}

export default Top
