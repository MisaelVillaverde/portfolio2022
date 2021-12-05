import Head from "next/head";
import Navbar from "../navbar";
import NoSsr from "../no-ssr";
import { Box, Container } from "@chakra-ui/react";
import VoxelCharacter from "../voxel-character";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Misael Villaverde</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <VoxelCharacter />
        </NoSsr>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
