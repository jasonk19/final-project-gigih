import { Button, Flex, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context";
import Profile from "../user/Profile";

export default function Navigation() {
  const { user } = useContext(UserContext);

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
        {user && localStorage.getItem('jkplay_access_token') ? (
          <Profile />
        ) : (
          <Link to='/signin'>
            <Button>Sign In</Button>
          </Link>
        )}
      </Flex>
    </>
  )
}