import { Button, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}
        paddingBlock={'3'}
        paddingInline={'5'}
        position={'fixed'}
        width={'100%'}
        zIndex={'50'}
        background={'gray.800'}
      >
        <Link to='/'>
          <Heading
            size={'lg'}
            as={'h1'}
            cursor={'pointer'}
          >
          JK.Play
          </Heading>
        </Link>
        <Link to='/signin'>
          <Button>Sign In</Button>
        </Link>
      </Flex>
    </>
  )
}