import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="Piano">
      <Container>
        <Title>
          Piano <Badge>2019</Badge>
        </Title>
        <P>
          A web application that allows users to play music with their computer
          keyboards.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              href="https://amazing-leakey-b0c879.netlify.app/"
              target="_blank"
            >
              https://amazing-leakey-b0c879.netlify.app/ <ExternalLinkIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>html, css, vanilla javascript and tone.js</span>
          </ListItem>
        </List>
        <WorkImage src="/images/piano.jpg" />
      </Container>
    </Layout>
  );
};

export default Work;
