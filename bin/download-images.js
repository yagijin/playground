import { writeFileSync } from 'fs'
import { setTimeout } from 'timers/promises'

const targetURLs = []

targetURLs.map(async (url) => {
  await setTimeout(1000)
  const response = await fetch(url)
  writeFileSync(`${url}.png`, response, 'binary')
})
