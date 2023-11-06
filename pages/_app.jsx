import "@fontsource/dm-serif-display/400.css";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/700.css';

import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/main";
import theme from "../lib/theme";
import { AnimatePresence } from "framer-motion";

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
};

export default Website;
