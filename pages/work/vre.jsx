import { Container, Badge, Link, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import TechBadge from "../../components/tech-badge";

const stack = ["React.js", "Firebase"];

const Work = () => {
  return (
    <Layout title="VRE">
      <Container>
        <Title>
          OMNISCAPE™ Virtual Real Estate <Badge>2022</Badge>
        </Title>

        <Box mb={4}>
          <Meta>Website</Meta>
          <Link href="https://earth1.omniscape.com/" target="_blank">
            https://earth1.omniscape.com/ <ExternalLinkIcon />
          </Link>
        </Box>

        <P>
          For building cities with OmniscapeXR&apos;s environment NFTs. The idea
          is to purchase world hexes and fill them with whatever you want.
          It&apos;s built with React, using Firebase services such as Firestore,
          Auth, Functions, Storage, and Hosting.
        </P>

        <Box my={4}>
          {stack.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </Box>

        <WorkImage src="/images/vre.png" />
      </Container>
    </Layout>
  );
};

export default Work;
