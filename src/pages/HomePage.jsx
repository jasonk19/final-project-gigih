import { Grid } from "@chakra-ui/react";
import Layout from "../layout";
import Card from "../components/video/Card";
import { Link } from "react-router-dom";

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
            <Card />
          </Link>
        </Grid>
      </Layout>
    </>
  )
}