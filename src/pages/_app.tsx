import "../theme/global.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import theme from "../theme/theme";
import MuiComponentsConfig from "../theme/MuiComponentsConfig";
import { createTheme, ThemeProvider } from "@mui/material";

const muiTheme = createTheme({
  ...theme,
  components: MuiComponentsConfig,
} as any);

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={muiTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
