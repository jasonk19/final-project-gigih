import { Box, Text } from "@chakra-ui/react";

export default function CommentMessage() {
  return (
    <>
      <Box
        padding={'3'}
        backgroundColor={'rgba(45, 55, 72, 0.6)'}
        rounded={'2xl'}
      >
        <Text fontWeight={'semibold'}>@Bob</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam magna lacus, elementum sit amet ipsum non, consectetur ultricies ligula. In id iaculis sem, a eleifend tellus. In at nisl bibendum augue ultricies euismod ac quis.</Text>
      </Box>
    </>
  )
}