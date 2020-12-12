import { Box } from '@chakra-ui/react'

function Container({ children }: WithChildren) {
  return (
    <Box w="90vw" maxW={700}>
      {children}
    </Box>
  )
}

export default Container
