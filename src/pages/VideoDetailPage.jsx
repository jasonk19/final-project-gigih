import { Box, Flex, Grid } from "@chakra-ui/react";
import Layout from "../layout";
import ProductCard from "../components/product/Card";

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
          <Grid
            templateColumns={'repeat(8, 1fr)'}
            marginTop={'5'}
            gap={'6'}
            rowGap={'6'}
          >
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Grid>
        </Box>
      </Layout>
    </>
  )
}