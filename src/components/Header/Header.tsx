import { AppBar, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <AppBar color="inherit" className={styles.root}>
      <Toolbar className={styles.toolbar}>
        <Image src="/icon.svg" height="48px" width="48px" alt="icon" />
        <Typography sx={{ ml: "24px" }} variant="h5">
          Free RoadMap
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
