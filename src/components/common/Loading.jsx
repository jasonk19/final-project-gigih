import { Flex, Spinner, Text } from "@chakra-ui/react"

export default function Loading() {
  return (
    <>
      <Flex
        justifyContent={'center'}
        alignItems={'center'}
        height={'100vh'}
        width={'full'}
        flexDirection={'column'}
        gap={'2'}
      >
        <Spinner />
        <Text>Loading...</Text>
      </Flex>
    </>
  )
}