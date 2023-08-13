import { Box, Flex, Grid, Tabs, TabList, TabPanels, Tab, TabPanel, Input, useToast, Text } from "@chakra-ui/react";
import Layout from "../layout";
import ProductCard from "../components/product/Card";
import CommentMessage from "../components/comment/CommentMessage";
import { useContext, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import Loading from "../components/common/Loading";
import useMutate from "../hooks/useMutate";
import axios from "axios";
import { UserContext } from "../context";

export default function VideoDetailPage() {
  const { user } = useContext(UserContext);
  const { id } = useParams()
  const toast = useToast();
  
  const { data: products, loading: productLoading } = useFetch({
    url: `${import.meta.env.VITE_BASE_API_URL}/product/${id}`,
  })

  const { data: video, loading: videoLoading } = useFetch({
    url: `${import.meta.env.VITE_BASE_API_URL}/videos/${id}`,
  })

  const { data: comments, loading: commentLoading } = useFetch({
    url: `${import.meta.env.VITE_BASE_API_URL}/comment/${id}`,
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('jkplay_access_token')
    }
  })

  const { mutate: addComment } = useMutate({ service: axios.post, showErrorMessage: true })

  console.log(comments)

  const [comment, setComment] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    if (user && localStorage.getItem('jkplay_access_token')) {
      await addComment({
        url: `${import.meta.env.VITE_BASE_API_URL}/comment/${id}`,
        payload: {
          comment
        },
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('jkplay_access_token')
        }
      })
    } else {
      toast({
        title: 'Please sign in to the app',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top'
      })
      return
    }

    setComment('');
  }

  return (
    <>
      <Layout>
        <Box paddingTop={'20'} paddingBottom={'9'}>
          <Flex
            justifyContent={'center'}
          >
            {/* Youtube iframe */}
            {videoLoading ? (
              <Loading />
            ) : (
              <iframe style={{width: '100vw'}} height="500" src={video.videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            )}
          </Flex>
          <Box
            marginTop={'5'}
          >
            <Tabs variant={'soft-rounded'} colorScheme='blue'>
              <TabList>
                <Tab color={'white'} backgroundColor={'gray.700'} marginRight={'3'}>Products</Tab>
                <Tab color={'white'} backgroundColor={'gray.700'}>Comment</Tab>
              </TabList>
              
              <TabPanels>
                <TabPanel>
                  {productLoading ? (
                    <Loading />
                  ) : (
                    <Grid
                      templateColumns={'repeat(8, 1fr)'}
                      marginTop={'5'}
                      gap={'6'}
                      rowGap={'6'}
                    >
                      {products.map((product) => (
                        <ProductCard key={product._id} image={product.link} title={product.title} price={product.price} />
                      ))}
                    </Grid>
                  )}
                </TabPanel>
                <TabPanel>
                  <Box>
                    {commentLoading ? (
                      <Box marginBottom={'5'}>
                        <Loading />
                      </Box>
                    ) : (
                      comments && comments.length > 0 ? (
                        <Flex
                          marginBottom={'5'}
                          flexDirection={'column'}
                          gap={'4'}
                        >
                          {comments.map((comment) => (
                            <CommentMessage key={comment._id} username={comment.account.username} comment={comment.comment} />
                          ))}
                        </Flex>
                      ) : (
                        <Flex
                          justifyContent={'center'}
                          marginBottom={'5'}
                        >
                          <Text color={'gray.500'}>Comment is empty</Text>
                        </Flex>
                      )
                    )}
                    <form onSubmit={handleSubmit}>
                      <Input type="text" border={'none'} backgroundColor={'gray.700'} rounded={'3xl'} placeholder="Enter a comment" fontSize={'sm'} value={comment} onChange={(e) => setComment(e.target.value)} />
                    </form>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </Layout>
    </>
  )
}