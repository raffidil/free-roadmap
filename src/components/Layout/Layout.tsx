import { Container } from "@mui/material";
import Header from "../Header";
import styles from "./Layout.module.scss";

const Layout: React.FC<{ children?: any }> = ({ children }) => {
  return (
    <Container fixed className={styles.container}>
      <Header />
      {children}
    </Container>
  );
};

export default Layout;
