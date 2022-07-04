import { Container, Badge, Link, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import TechBadge from "../../components/tech-badge";

const stack = ["HTML", "CSS", "JavaScript"];

const Work = () => {
  return (
    <Layout title="Real-State">
      <Container>
        <Title>
          Real State Website <Badge>2019</Badge>
        </Title>

        <Box my={4}>
          <Meta>Website</Meta>
          <Link href="https://modest-minsky-aa741a.netlify.app" target="_blank">
            https://modest-minsky-aa741a.netlify.app <ExternalLinkIcon />
          </Link>
        </Box>

        <P>Responsive real state website, built with html, css, js.</P>

        <Box my={4}>
          {stack.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </Box>
        <WorkImage src="/images/amazon.jpg" />
      </Container>
    </Layout>
  );
};

export default Work;
