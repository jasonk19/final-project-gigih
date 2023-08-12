import { Heading, Flex, Input, Text, InputGroup, Button } from "@chakra-ui/react";
import Layout from "../layout";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignInPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    console.log(username);
    console.log(password);
  }

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
          <form onSubmit={handleSubmit}>
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
                  <Input type="text" width={'18em'} border={'none'} background={'gray.700'} placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </InputGroup>
                <InputGroup display={'flex'} flexDirection={'column'} gap={'2'}>
                  <Text>Password</Text>
                  <Input type="password" width={'18em'} border={'none'} background={'gray.700'} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </InputGroup>
                <Button colorScheme='blue' marginTop={'3'} type="submit">Sign In</Button>
                <Text>
                  {`Don't have an account? `}
                  <Link to='/signup'>
                    <Text as='span' color={'blue.400'} cursor={'pointer'}>Sign Up</Text>
                  </Link>
                </Text>
            </Flex>
          </form>
        </Flex>
      </Layout>
    </>
  )
}