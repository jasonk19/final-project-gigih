import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import Layout from "../layout";
import { Link } from "react-router-dom";
import VideoCard from "../components/video/Card";
import useFetch from "../hooks/useFetch";
import Loading from "../components/common/Loading";

export default function HomePage() {
  const { data: videoThumbnails, loading } = useFetch({
    url: `${import.meta.env.VITE_BASE_API_URL}/videos`
  })

  return (
    <>
      <Layout>
        {loading ? (
          <Box
            paddingTop={'20'}
          >
            <Loading />
          </Box>
        ) : (
          videoThumbnails && videoThumbnails.length > 0 ? (
            <Grid
              paddingTop={'20'}
              paddingBottom={'9'}
              templateColumns={'repeat(6, 1fr)'}
              gap={'6'}
              rowGap={'9'}
            >
              {videoThumbnails.map((videoThumbnail) => (
                <Link to={`/video/${videoThumbnail._id}`} key={videoThumbnail._id}>
                  <VideoCard thumbnail={videoThumbnail.url} />
                </Link>
              ))}
            </Grid>
          ) : (
            <Flex
              paddingTop={'20'}
              justifyContent={'center'}
            >
              <Text color={'gray.500'}>Video is currently Empty</Text>
            </Flex>
          )
        )}
      </Layout>
    </>
  )
}