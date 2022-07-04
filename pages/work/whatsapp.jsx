import { Container, Badge, Link, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import TechBadge from "../../components/tech-badge";

const stack = [
  "React.js",
  "React Context API",
  "React Router",
  "Firebase Auth",
  "Firebase Firestore",
  "Firebase Hosting",
  "CSS",
];

const Work = () => {
  return (
    <Layout title="Whatsapp-Clone">
      <Container>
        <Title>
          Whatsapp-Clone <Badge>2019</Badge>
        </Title>

        <Box my={4}>
          <Meta>Website</Meta>
          <Link href="https://whatsapp-clone-46e57.web.app" target="_blank">
            https://whatsapp-clone-46e57.web.app <ExternalLinkIcon />
          </Link>
        </Box>

        <P>
          A WhatsApp Clone with Google OAuth, React, React-Context API, Database
          and Hosting with Google Firebase.
        </P>

        <Box my={4}>
          {stack.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </Box>
        <WorkImage src="/images/whatsapp.jpg" />
      </Container>
    </Layout>
  );
};

export default Work;
