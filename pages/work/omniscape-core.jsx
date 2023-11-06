import {
  Container,
  Badge,
  Box,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { Title, WorkImage } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import TechBadge from "../../components/tech-badge";

const stack = ["Go", "Google Cloud Platform", "MongoDB", "Docker", "CapRover"];

const Work = () => {
  return (
    <Layout title="Marketplace">
      <Container>
        <Title>
          OmniscapeXR CORE API <Badge>2023</Badge>
        </Title>

        <P>
          A Golang MonoRepo containing the important CRUD + Ad Hoc Operations of
          the OmniscapeXR Platform.
        </P>
        <br />
        <P>
          Built with the Gin Gonic framework. It interfaces a MongoDB database,
          and Google Cloud Platform services like storage and authentication. It
          manages:
          <UnorderedList>
            <ListItem>Users</ListItem>
            <ListItem>Friends</ListItem>
            <ListItem>Users&apos; inventories</ListItem>
            <ListItem>Users&apos; Game State Machine</ListItem>
            <ListItem>Purchases made to the marketplace</ListItem>
            <ListItem>
              User/Company Item GeoLocation CRUD used by our Augmented and
              Virtual Reality Clients
            </ListItem>
            <ListItem>Marketplace Sellers applications</ListItem>
          </UnorderedList>
        </P>
        <br />
        <P>
          It also features Ad Hoc endpoints like random selection by probability
          and GeoSpatial Queries.
        </P>
        <br />
        <P>
          It&apos;s deployed on Google Cloud Platform Compute Engine, with CapRover
          as the Deployment server management.
        </P>

        <Box my={4}>
          {stack.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </Box>

        <WorkImage src="/images/omnicore.png" />
      </Container>
    </Layout>
  );
};

export default Work;
