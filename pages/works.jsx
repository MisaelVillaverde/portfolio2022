import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import { WorkGridItem } from "../components/grid-item";
import Section from "../components/section";
import Layout from "../components/layouts/article";

import thumbMath from "../public/images/math.png";
import thumbPiano from "../public/images/piano.jpg";
import thumbAmazon from "../public/images/amazon.jpg";
import thumbTwitter from "../public/images/twitter.jpg";
import thumbWhatsapp from "../public/images/whatsapp.jpg";
import thumbRealState from "../public/images/bienes.jpg";
import thumbCoffee from "../public/images/cafe.jpg";

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Personal Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="math"
              title="Math Calculator (ft. Fourier Series)"
              thumbnail={thumbMath}
            >
              As an engineering student, I&apos;m fascinated by the mathematical concepts and
              the mathematical methods...
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem id="piano" title="Piano" thumbnail={thumbPiano}>
              Piano web app where you can play music with your computer
              keyboard.
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem
              id="amazon"
              title="Amazon Clone"
              thumbnail={thumbAmazon}
            >
              A clone of Amazon.com, built with React and Firebase(auth).
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="twitter"
              title="Twitter Clone"
              thumbnail={thumbTwitter}
            >
              A twitter clone, built with React and Firebase(firestore).
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem
              id="whatsapp"
              title="Whatsapp Clone"
              thumbnail={thumbWhatsapp}
            >
              A clone of Whatsapp, built with React and
              Firebase(firestore/auth).
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Section delay={0.5}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Old Projects
          </Heading>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem
            id="realstate"
            title="Real State Website"
            thumbnail={thumbRealState}
          >
            Responsive real state website, built with html, css, js.
          </WorkGridItem>
        </Section>
        <Section delay={0.7}>
          <WorkGridItem
            id="coffee"
            title="Coffee Shop Website"
            thumbnail={thumbCoffee}
          >
            Responsive coffee shop website, built with html, css, js.
          </WorkGridItem>
        </Section>
      </Container>
    </Layout>
  );
};

export default Works;
