import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="Math-Calculator">
      <Container>
        <Title>
          Math Calculator (ft. Fourier Series) <Badge>2021</Badge>
        </Title>
        <P>A calculator that allows users to calculate most of mathematical expressions(trigonometrics, derivative, integral, laplace) and display step by step solutions, it have a fourier series extra feature</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github Repo</Meta>
            <Link
              href="https://github.com/MisaelVillaverde/mongolerias-calculator-pro/tree/fourier-series"
              target="_blank"
            >
              https://github.com/MisaelVillaverde/mongolerias-calculator-pro/{" "}
              <ExternalLinkIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Python Flask, Jupyter Notebooks, Jinja templating, Vanilla
              Javascript, Katexjs, styling with css.
            </span>
          </ListItem>
        </List>
        <WorkImage src="/images/math.png" />
        <WorkImage src="/images/math2.png" />
      </Container>
    </Layout>
  );
};

export default Work;
