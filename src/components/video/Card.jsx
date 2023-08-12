import { Box, Image } from "@chakra-ui/react";

export default function VideoCard() {
  return (
    <Box
      borderRadius={10}
      overflow={'hidden'}
      width={'fit-content'}
      height={'fit-content'}
      position={'relative'}
      cursor={'pointer'}
    >
      <Image src="https://picsum.photos/200/320" />
    </Box>
  )
}