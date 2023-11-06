import { Container, Badge, Link, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import TechBadge from "../../components/tech-badge";

const stack = ["HTML", "CSS", "JavaScript", "tone.js"];

const Work = () => {
  return (
    <Layout title="Piano">
      <Container>
        <Title>
          Piano <Badge>2020</Badge>
        </Title>

        <Box my={4}>
          <Meta>Website</Meta>
          <Link
            href="https://amazing-leakey-b0c879.netlify.app/"
            target="_blank"
          >
            https://amazing-leakey-b0c879.netlify.app/ <ExternalLinkIcon />
          </Link>
        </Box>

        <P>
          A web application that allows users to play music with their computer
          keyboards.
        </P>

        <Box my={4}>
          {stack.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </Box>
        <WorkImage src="/images/piano.jpg" />
      </Container>
    </Layout>
  );
};

export default Work;
