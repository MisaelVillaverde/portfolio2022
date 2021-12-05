import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="Amazon-Clone">
      <Container>
        <Title>
          Amazon-Clone <Badge>2019</Badge>
        </Title>
        <P>
          A mock Amazon website that allows users to add items to their cart,
          view their cart, and checkout.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://clone-54946.web.app/" target="_blank">
              https://clone-54946.web.app <ExternalLinkIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Reactjs, Firebase Auth, Firebase Firestore, Stripe, styling with
              plain css
            </span>
          </ListItem>
        </List>
        <WorkImage src="/images/amazon.jpg" />
      </Container>
    </Layout>
  );
};

export default Work;
