import { Heading, Flex, Input, Text, InputGroup, Button } from "@chakra-ui/react";
import Layout from "../layout";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useMutate from "../hooks/useMutate";
import axios from "axios";
import AccountProtector from "../components/protector/AccountProtector";

export default function SignInPage() {
  const navigate = useNavigate();

  const { mutate: SignIn, clear, loading, error } = useMutate({ service: axios.post, showSuccessMessage: true, successMessage: 'Sign in successful' })

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await SignIn({
      url: `${import.meta.env.VITE_BASE_API_URL}/account/login`,
      payload: {
        username, password
      }
    })

    if (response) {
      localStorage.setItem('jkplay_access_token', response.token)
      navigate('/')
    }
  }

  return (
    <>
      <AccountProtector>
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
                    <Input type="text" width={'18em'} border={'none'} background={'gray.700'} placeholder="Username" value={username} onChange={(e) => {
                      clear()
                      setUsername(e.target.value)
                    }} isInvalid={error !== undefined}/>
                  </InputGroup>
                  <InputGroup display={'flex'} flexDirection={'column'} gap={'2'}>
                    <Text>Password</Text>
                    <Input type="password" width={'18em'} border={'none'} background={'gray.700'} placeholder="Password" value={password} onChange={(e) => {
                      clear()
                      setPassword(e.target.value)
                    }} isInvalid={error !== undefined}/>
                  </InputGroup>
                  {error && (
                    <Text color={'red.400'}>{error.message}</Text>
                  )}
                  <Button colorScheme='blue' marginTop={'3'} type="submit" isLoading={loading} loadingText={'Submitting'}>Sign In</Button>
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
      </AccountProtector>
    </>
  )
}