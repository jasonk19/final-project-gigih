import { IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AiOutlineUser } from 'react-icons/ai'
import { TbLogout } from 'react-icons/tb'
import { UserContext } from "../../context";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserContext)

  function handleLogout() {
    localStorage.removeItem('jkplay_access_token')
    setUser(null)
    navigate('/signin')
  }

  return (
    <Menu
    >
      <MenuButton 
        as={IconButton}
        aria-label='Profile'
        icon={<AiOutlineUser />}
        fontSize={'20px'}
        variant={'outline'}
        borderColor={'gray.700'}
        borderWidth={'2'}
        color={'white'}
        _hover={{
          backgroundColor: 'gray.700'
        }}
        _active={{
          backgroundColor: 'gray.700'
        }}
      />
      <MenuList
        backgroundColor={'gray.700'}
        border={'none'}
      >
        <MenuItem
          backgroundColor={'gray.700'}
          _hover={'none'}
          cursor={'default'}
          closeOnSelect={false}
        >
          <Text>@{user.username}</Text>
        </MenuItem>
        <MenuItem 
          icon={<TbLogout />} 
          color={'red.400'} 
          backgroundColor={'gray.700'}
          transitionDuration={'150ms'}
          _hover={{
            backgroundColor: 'gray.600'
          }}
          onClick={handleLogout}
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  )
}