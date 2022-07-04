import NextLink from "next/link";
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  Button,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import { IoLogoInstagram, IoLogoGithub, IoLogoDiscord } from "react-icons/io5";

const Page = () => {
  return (
    <Layout>
      <Container maxW="none">
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={6}
          align="center"
        >
          Hi👋, I&apos;m a full stack developer based in Panama 🇵🇦.
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" fontWeight="900">
              Misael Villaverde
            </Heading>
            <p>Software dev at Transmira Inc. 🧑‍🚀 ( Engineer / Developer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/misael.jpg"
              alt="Misael Villaverde Profile Pic"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>
            Misael is a full stack software engineer that loves to solve real
            life challenging problems with elegant and straightforward
            solutions. He is currently working as a software developer at{" "}
            <Link href="https://www.transmira.com/" target="_blank">
              Transmira
            </Link>{" "}
            where he is a member of the team that is responsible for the
            development of the OmniscapeXR 3D web platforms.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2020</BioYear>
            Enrolled as a Backend Software developer at{" "}
            <Link href="https://www.hypernovalabs.com/" target="_blank">
              Hypernovalabs
            </Link>
            . Worked with SQL Server, C#, Azure, .NET Core, React, NodeJS,
            Python Flask, Golang, Docker, etc.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Full Stack software developer at{" "}
            <Link href="https://www.transmira.com/" target="_blank">
              Transmira
            </Link>
            . Working with NextJS and 3D on the web platforms such as babylon,
            threejs, h3js, and cesium, on top of Google Cloud Services.
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Links
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/misaelvillaverde" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @misaelvillaverde
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/misael_villab/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @misael_villab
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://discord.com/users/882024675968950353"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoDiscord />}
                >
                  @dogmeat
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
