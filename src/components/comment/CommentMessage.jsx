import { Box, Text } from "@chakra-ui/react";
import PropTypes from 'prop-types';

export default function CommentMessage({ username, comment }) {
  return (
    <>
      <Box
        padding={'3'}
        backgroundColor={'rgba(45, 55, 72, 0.6)'}
        rounded={'2xl'}
      >
        <Text fontWeight={'semibold'}>@{username}</Text>
        <Text>{comment}</Text>
      </Box>
    </>
  )
}

CommentMessage.propTypes = {
  username: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired
}