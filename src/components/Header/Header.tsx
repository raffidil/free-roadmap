import { AppBar, Toolbar } from "@mui/material";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <AppBar color="inherit" className={styles.root}>
      <Toolbar className={styles.toolbar}></Toolbar>
    </AppBar>
  );
};

export default Header;
