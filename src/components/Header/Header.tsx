import {
  AppBar,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import styles from "./Header.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CalendarViewWeekIcon from "@mui/icons-material/CalendarViewWeek";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import { useRouter } from "next/router";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsDrawerOpen(open);
    };

  const openRoute = (path: string) => {
    router.push({ pathname: path });
    setIsDrawerOpen(false);
  };
  return (
    <AppBar color="primary" className={styles.root}>
      <Toolbar className={styles.toolbar}>
        <IconButton onClick={toggleDrawer(true)} sx={{ mr: "8px" }}>
          <MenuIcon htmlColor="white" />
        </IconButton>
        <Image src="/icon.svg" height="48px" width="48px" alt="icon" />
        <Typography
          sx={{ ml: "16px", fontWeight: 600 }}
          variant="h5"
          color="text.contrast"
        >
          Free RoadMap
        </Typography>
      </Toolbar>
      <SwipeableDrawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box className={styles.drawerBox}>
          <div className={styles.imageContainer}>
            <Image src="/icon.svg" height="128px" width="128px" alt="icon" />
          </div>
          <Typography className={styles.title} variant="h5">
            Free RoadMap
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => openRoute("weeks")}>
                <ListItemIcon>
                  <CalendarViewWeekIcon />
                </ListItemIcon>
                <ListItemText primary="Week View Schedule" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => openRoute("courses")}>
                <ListItemIcon>
                  <CalendarViewDayIcon />
                </ListItemIcon>
                <ListItemText primary="Courses" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </SwipeableDrawer>
    </AppBar>
  );
};

export default Header;
