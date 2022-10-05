import "../theme/global.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import theme from "../theme/theme";
import MuiComponentsConfig from "../theme/MuiComponentsConfig";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { createTheme, ThemeProvider } from "@mui/material";
import Head from "next/head";

const muiTheme = createTheme({
  ...theme,
  components: MuiComponentsConfig,
} as any);

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={muiTheme}>
      <Head>
        <link rel="shortcut icon" href="favicon.svg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
