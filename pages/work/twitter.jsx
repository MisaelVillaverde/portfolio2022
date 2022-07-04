import { Container, Badge, Link, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import TechBadge from "../../components/tech-badge";

const stack = [
  "React.js",
  "React Context API",
  "Firebase Hosting",
  "Firebase Firestore",
  "CSS",
];

const Work = () => {
  return (
    <Layout title="Twitter-Clone">
      <Container>
        <Title>
          Twitter-Clone <Badge>2019</Badge>
        </Title>

        <Box my={4}>
          <Meta>Website</Meta>
          <Link href="https://twitter-clone-58e2b.web.app" target="_blank">
            https://twitter-clone-58e2b.web.app <ExternalLinkIcon />
          </Link>
        </Box>

        <P>
          A Twitter Clone with React, React-Context API, Hosting with Google
          Firebase.
        </P>

        <Box my={4}>
          {stack.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </Box>
        <WorkImage src="/images/twitter.jpg" />
      </Container>
    </Layout>
  );
};

export default Work;
