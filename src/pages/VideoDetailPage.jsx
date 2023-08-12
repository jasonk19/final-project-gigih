import { Box, Flex, Grid, Tabs, TabList, TabPanels, Tab, TabPanel, Input } from "@chakra-ui/react";
import Layout from "../layout";
import ProductCard from "../components/product/Card";
import CommentMessage from "../components/comment/CommentMessage";

export default function VideoDetailPage() {
  return (
    <>
      <Layout>
        <Box paddingTop={'20'} paddingBottom={'9'}>
          <Flex
            justifyContent={'center'}
          >
            {/* Youtube iframe */}
            <iframe style={{width: '100vw'}} height="500" src="https://www.youtube.com/embed/UgrAQ2yYkXc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
                  <Grid
                    templateColumns={'repeat(8, 1fr)'}
                    marginTop={'5'}
                    gap={'6'}
                    rowGap={'6'}
                  >
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                  </Grid>
                </TabPanel>
                <TabPanel>
                  <Box>
                    <Flex
                      marginBottom={'5'}
                      flexDirection={'column'}
                      gap={'4'}
                    >
                      <CommentMessage />
                      <CommentMessage />
                      <CommentMessage />
                    </Flex>
                    <Input type="text" border={'none'} backgroundColor={'gray.700'} rounded={'3xl'} placeholder="Enter a comment" fontSize={'sm'} />
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