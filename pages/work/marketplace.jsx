import { Container, Badge, Link, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import TechBadge from "../../components/tech-badge";

const stack = [
  "Next.js",
  "Typescript",
  "Go",
  "MongoDB",
  "Firebase",
  "Blockchain",
  "Material UI",
  "Docker",
  "GitHub",
];

const Work = () => {
  return (
    <Layout title="Marketplace">
      <Container>
        <Title>
          OMNISCAPE™ Virtual Goods Marketplace <Badge>2022</Badge>
        </Title>

        <Box mb={4}>
          <Meta>Website</Meta>
          <Link href="https://marketplace.omniscape.com/" target="_blank">
            https://marketplace.omniscape.com/ <ExternalLinkIcon />
          </Link>
        </Box>

        <P>
          A metaverse marketplace to buy and sell 3D NFTs and Virtual Goods on
          the blockchain.
        </P>
        <P>
          It&apos;s built on top of the BSV blockchain, with Next.js
          (TypeScript), Material UI 5, Payment with Stripe, Firebase OAuth, Data
          fetching and caching with SWR(vercel team), and MongoDB queries on the
          Next API pages (Node.js with Typescript).
        </P>

        <Box my={4}>
          {stack.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </Box>

        <WorkImage src="/images/marketplace.png" />
      </Container>
    </Layout>
  );
};

export default Work;
