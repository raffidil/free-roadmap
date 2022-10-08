import { Container } from "@mui/material";
import Head from "next/head";
import Header from "../Header";
import TopLevelDialogs from "../TopLevelDialogs";
import styles from "./Layout.module.scss";

const Layout: React.FC<{ children?: any }> = ({ children }) => {
  return (
    <Container className={styles.container} maxWidth="lg">
      <Head>
        <title>Free RoadMap</title>
      </Head>
      <Header />
      <TopLevelDialogs />
      {children}
    </Container>
  );
};

export default Layout;
