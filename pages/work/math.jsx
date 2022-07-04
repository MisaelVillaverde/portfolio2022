import { Container, Badge, Link, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import TechBadge from "../../components/tech-badge";

const stack = [
  "Python Flask",
  "Jupyter Notebooks",
  "Jinja templating",
  "JavaScript",
  "Katexjs",
  "CSS",
];

const Work = () => {
  return (
    <Layout title="Math-Calculator">
      <Container>
        <Title>
          Math Calculator (ft. Fourier Series) <Badge>2021</Badge>
        </Title>

        <Box my={4}>
          <Meta>Github Repo</Meta>
          <Link
            href="https://github.com/misaelvillaverde/mongolerias-calculator-pro/tree/fourier-series"
            target="_blank"
          >
            https://github.com/misaelvillaverde/mongolerias-calculator-pro
            <ExternalLinkIcon />
          </Link>
        </Box>

        <P>
          A calculator that allows users to calculate most of mathematical
          expressions(trigonometrics, derivative, integral, laplace) and display
          step by step solutions, it have a fourier series extra feature
        </P>

        <Box my={4}>
          {stack.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </Box>

        <WorkImage src="/images/math.png" />
        <WorkImage src="/images/math2.png" />
      </Container>
    </Layout>
  );
};

export default Work;
