import { Grid } from "@chakra-ui/react";
import Layout from "../layout";
import { Link } from "react-router-dom";
import VideoCard from "../components/video/Card";

export default function HomePage() {
  return (
    <>
      <Layout>
        <Grid
          paddingTop={'20'}
          paddingBottom={'9'}
          templateColumns={'repeat(6, 1fr)'}
          gap={'6'}
          rowGap={'9'}
        >
          <Link to='/detail'>
            <VideoCard />
          </Link>
        </Grid>
      </Layout>
    </>
  )
}