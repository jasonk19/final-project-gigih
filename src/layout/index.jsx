import { Box } from "@chakra-ui/react";
import Navigation from "../components/common/Navigation";
import PropTypes from 'prop-types';

export default function Layout({children}) {
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