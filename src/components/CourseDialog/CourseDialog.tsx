import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { courses } from "../../data";
import styles from "./CourseDialog.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import ChromeReaderModeOutlinedIcon from "@mui/icons-material/ChromeReaderModeOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import useResponsive from "@/hooks/useResponsive";
import Overview from "./Overview";
import Syllabus from "./Syllabus";
import Resources from "./Resources";

const CourseDialog: React.FC<{
  onClose: () => void;
}> = ({ onClose }) => {
  const { query } = useRouter();
  const courseId = query?.course || "";
  const weekNo = query?.weekNo || undefined;
  const resourcesParam = query?.resources || undefined;
  const course = courses.find((item) => item.id === courseId);
  const [tab, setTab] = useState(0);
  const { isMobile } = useResponsive();
  const iconPosition = isMobile ? "top" : "start";

  useEffect(() => {
    if (resourcesParam) setTab(1);
    else if (weekNo) setTab(2);
  }, [weekNo, resourcesParam]);

  return (
    <Dialog
      open
      onClose={onClose}
      PaperProps={{ className: styles.dialogPaper, elevation: 4 }}
      fullScreen={isMobile}
    >
      <DialogTitle>
        <Typography variant="h6">{course?.name}</Typography>
        <IconButton className={styles.closeButton} onClick={() => onClose()}>
          <CloseIcon />
        </IconButton>
        {!isMobile && (
          <Tabs
            value={tab}
            onChange={(e, value) => setTab(value)}
            aria-label="icon position tabs example"
          >
            <Tab
              icon={<DescriptionOutlinedIcon />}
              iconPosition={iconPosition}
              label="Overview"
            />
            <Tab
              icon={<ChromeReaderModeOutlinedIcon />}
              iconPosition={iconPosition}
              label="Resources"
            />
            <Tab
              icon={<DateRangeOutlinedIcon />}
              iconPosition={iconPosition}
              label="Syllabus"
            />
          </Tabs>
        )}
      </DialogTitle>

      <DialogContent>
        {tab === 0 && <Overview course={course} />}
        {tab === 1 && <Resources course={course} />}
        {tab === 2 && <Syllabus course={course} />}
      </DialogContent>
      {isMobile && (
        <Box>
          <BottomNavigation
            showLabels
            value={tab}
            onChange={(e, value) => setTab(value)}
          >
            <BottomNavigationAction
              label="Overview"
              icon={<DescriptionOutlinedIcon />}
            />
            <BottomNavigationAction
              label="Resources"
              icon={<ChromeReaderModeOutlinedIcon />}
            />
            <BottomNavigationAction
              label="Syllabus"
              icon={<DateRangeOutlinedIcon />}
            />
          </BottomNavigation>
        </Box>
      )}
    </Dialog>
  );
};

export default CourseDialog;
