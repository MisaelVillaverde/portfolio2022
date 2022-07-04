import { Container, Badge, Link, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import TechBadge from "../../components/tech-badge";

const stack = [
  "React.js",
  "React Native",
  "TypeScript",
  "MS SQL Server",
  "Azure",
  "Go",
  "Docker",
  "Node.js",
  "Redis",
  ".NET Core",
  "Python",
  "Pandas",
  "Numpy",
  "Flask",
  "SaaS",
];

const Work = () => {
  return (
    <Layout title="Aludra">
      <Container>
        <Title>
          Aludra - SaaS Assisted Sales (Company Side) <Badge>2020</Badge>
        </Title>

        <Box mb={4}>
          <Meta>Website</Meta>
          <Link href="https://aludra.cloud" target="_blank">
            https://aludra.cloud <ExternalLinkIcon />
          </Link>
        </Box>

        <P>
          An electronic billing SaaS that allows several businesses to organize
          their products, sales, and staff tasks, and to generate, store and get
          electronic invoices.
        </P>
        <P>
          To manage users, sales, promotions, invoices, and other entities we
          used MS SQL Server for the database, .NET Core to create the web
          services that consumed the stored procedures, and to open endpoints
          for the frontend to consume, some other endpoints are on Node.js with
          Express.js. Redis cache is also used for performance.
        </P>
        <P>
          The project ends up being used by some big companies here in Panama
          such as Cochez y CIA., Novey, and Felipe Motta. The backend that I
          worked on ended up affecting international companies too such as
          Adidas, Ralph Lauren, Waldorf Astoria, Bac Credomatic, Banesco,
          Banistmo, etc.
        </P>

        <Box my={4}>
          {stack.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </Box>

        <WorkImage src="/images/cochez.webp" />
      </Container>
    </Layout>
  );
};

export default Work;
