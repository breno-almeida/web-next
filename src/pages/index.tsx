import { Heading } from '@chakra-ui/react'

import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Proffy</title>
      </Head>

      <Heading as="h1">Hello World!</Heading>
    </div>
  )
}
