import { Box, Image } from "@chakra-ui/react";
import PropTypes from 'prop-types';

export default function VideoCard({ thumbnail }) {
  return (
    <Box
      borderRadius={10}
      overflow={'hidden'}
      width={'fit-content'}
      height={'fit-content'}
      position={'relative'}
      cursor={'pointer'}
    >
      <Image src={thumbnail} />
    </Box>
  )
}

VideoCard.propTypes = {
  thumbnail: PropTypes.string.isRequired
}