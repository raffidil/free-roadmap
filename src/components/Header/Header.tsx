import {
  AppBar,
  Box,
  Button,
  Divider,
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
import GitHubIcon from "@mui/icons-material/GitHub";
import { useRouter } from "next/router";
import Search from "../Search";
import useResponsive from "@/hooks/useResponsive";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();
  const [searchVisibility, setSearchVisibility] = useState(false);
  const { isMobile, isSM } = useResponsive();

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
        {!(searchVisibility && isSM) && (
          <Image src="/icon.svg" height="48px" width="48px" alt="icon" />
        )}

        {!(searchVisibility && isMobile) && (
          <Typography
            sx={{ ml: "16px", fontWeight: 600 }}
            variant="h5"
            color="text.contrast"
          >
            Free RoadMap
          </Typography>
        )}
        <Search
          className={styles.search}
          visible={searchVisibility}
          onFocus={() => setSearchVisibility(true)}
          onBlur={(value) =>
            value?.length ? undefined : setSearchVisibility(false)
          }
        />
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
          <Typography
            className={styles.subtitle}
            variant="subtitle1"
            color="text.secondary"
          >
            A road-map for beginners who want to learn web development from
            scratch
          </Typography>

          <Divider sx={{ mt: "8px", mb: "16px" }} />
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => openRoute("weeks")}>
                <ListItemIcon>
                  <CalendarViewWeekIcon />
                </ListItemIcon>
                <ListItemText primary="Weekly Schedule" />
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
            <Divider sx={{ mt: "16px", mb: "16px" }} />
            <ListItem disablePadding>
              <ListItemButton
                href="https://github.com/raffidil/free-roadmap"
                target="_blank"
              >
                <ListItemIcon>
                  <GitHubIcon />
                </ListItemIcon>
                <ListItemText primary="Github repository" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </SwipeableDrawer>
    </AppBar>
  );
};

export default Header;
