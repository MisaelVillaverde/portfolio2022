import { Container, Badge, Link, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import TechBadge from "../../components/tech-badge";

const stack = ["HTML", "CSS"];

const Work = () => {
  return (
    <Layout title="Real-State">
      <Container>
        <Title>
          Coffee Shop Website <Badge>2019</Badge>
        </Title>

        <Box my={4}>
          <Meta>Website</Meta>
          <Link
            href="https://naughty-wozniak-26b457.netlify.app"
            target="_blank"
          >
            https://naughty-wozniak-26b457.netlify.app <ExternalLinkIcon />
          </Link>
        </Box>

        <P>Responsive Coffee Shop website, built with html, css</P>

        <Box my={4}>
          {stack.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </Box>
        <WorkImage src="/images/cafe.jpg" />
      </Container>
    </Layout>
  );
};

export default Work;
