import { Container } from "@mui/material";
import Header from "../Header";
import TopLevelDialogs from "../TopLevelDialogs";
import styles from "./Layout.module.scss";

const Layout: React.FC<{ children?: any }> = ({ children }) => {
  return (
    <Container className={styles.container} maxWidth="lg">
      <Header />
      <TopLevelDialogs />
      {children}
    </Container>
  );
};

export default Layout;
