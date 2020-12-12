import { ChakraProvider } from '@chakra-ui/react'

import { AppProps } from 'next/app'

import { theme } from '~/styles/themes'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
