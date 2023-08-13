import { Box } from "@chakra-ui/react";
import Navigation from "../components/common/Navigation";
import PropTypes from 'prop-types';
import useFetch from "../hooks/useFetch";
import { useContext } from "react";
import { UserContext } from "../context";

export default function Layout({children}) {
  const { setUser } = useContext(UserContext)

  const { data: account, error } = useFetch({
    url: `${import.meta.env.VITE_BASE_API_URL}/account/validate`,
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('jkplay_access_token')
    },
    showErrorMessage: localStorage.getItem('jkplay_access_token') ? true : false,
    errorMessage: 'Session expired'
  })

  if (error) {
    setUser(null)
    localStorage.removeItem('jkplay_access_token')
  } else {
    setUser(account)
  }


  return (
    <>
      <Box
        backgroundColor={'gray.800'}
        minHeight={'100vh'}
        color={'white'}
      >
        <Navigation />
        <Box
          paddingInline={'5'}
        >
          {children}
        </Box>
      </Box>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.element
}