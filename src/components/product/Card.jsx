import { Box, Image, Text } from "@chakra-ui/react"
import { useState } from "react"

export default function ProductCard() {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <Box
        borderRadius={7}
        overflow={'hidden'}
        width={'fit-content'}
        height={'fit-content'}
        cursor={'pointer'}
        position={'relative'}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Image src="https://picsum.photos/150/200" />
        <Box paddingBottom={'2'} paddingTop={'4'} paddingInline={'2'} position={'absolute'} bottom={'0'} backgroundImage='linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(26, 32, 44, 0.9))' width={'full'} transform={isHover ? 'translateY(0)' : 'translateY(100%)'} transition={'200ms'}>
          <Text fontWeight={'bold'}>Product 1</Text>
          <Text fontWeight={'semibold'} fontSize={'sm'}>Rp10.000</Text>
        </Box>
      </Box>
    </>
  )
}

