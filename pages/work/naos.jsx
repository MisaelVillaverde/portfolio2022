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
    <Layout title="eCommerce APP">
      <Container>
        <Title>
          eCommerce APP - multi-tenant (Customers Side)
          <Badge>2020</Badge>
        </Title>

        <Box mb={4}>
          <Meta>Website</Meta>
          <Link
            href="https://hypernovalabs.com/plataforma-e-commerce/"
            target="_blank"
          >
            https://hypernovalabs.com/plataforma-e-commerce/{" "}
            <ExternalLinkIcon />
          </Link>
        </Box>

        <P>
          Mobile application development in React Native (iOS / Android) with
          web administration portal developed in Angular.
        </P>
        <P>
          The backend was developed by combining C# / Node.js / Python and the
          information is stored in Microsoft SQL Server / MongoDB.
        </P>
        <P>
          The application allows the creation of product catalogs, shopping
          carts, integration with payment gateway, dynamic menu, and options
          management, look and feel parameterization, promotion control, and
          dynamic widgets.
        </P>
        <P>
          The app is used by some important Panamanian companies such as Cochez
          y CIA., Novey, Felipe Motta, La Casa de las Baterias, Panama Pacific
          Warranties, etc. And some international companies such as Adidas.
        </P>

        <Box my={4}>
          {stack.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </Box>

        <WorkImage src="/images/adidas.webp" />
      </Container>
    </Layout>
  );
};

export default Work;
