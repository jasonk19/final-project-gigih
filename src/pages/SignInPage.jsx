import { Heading, Flex, Input, Text, InputGroup, Button } from "@chakra-ui/react";
import Layout from "../layout";

export default function SignInPage() {
  return (
    <>
      <Layout>
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          background={'gray.800'}
          color={'white'}
          height={'100vh'}
        >
          <Flex
            border={'2px'}
            paddingBlock={'8'}
            paddingInline={'5'}
            borderRadius={'xl'}
            borderColor={'blue.500'}
            gap={'3'}
            flexDirection={'column'}
          >
            <Heading size={'lg'}>Sign In</Heading>
            <InputGroup display={'flex'} flexDirection={'column'} gap={'2'}>
              <Text>Username</Text>
              <Input type="text" width={'18em'} border={'none'} background={'gray.700'} placeholder="Username" />
            </InputGroup>
            <InputGroup display={'flex'} flexDirection={'column'} gap={'2'}>
              <Text>Password</Text>
              <Input type="password" width={'18em'} border={'none'} background={'gray.700'} placeholder="Password" />
            </InputGroup>
            <Button colorScheme='blue' marginTop={'3'}>Sign In</Button>
          </Flex>
        </Flex>
      </Layout>
    </>
  )
}