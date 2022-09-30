import { Container } from "@mui/material";
import Header from "../Header";

const Layout: React.FC<{ children?: any }> = ({ children }) => {
  return (
    <Container fixed>
      <Header />

      {children}
    </Container>
  );
};

export default Layout;
