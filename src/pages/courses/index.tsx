import useResponsive from "@/hooks/useResponsive";
import {
  Card,
  Chip,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import styles from "./index.module.scss";
import { NextPage } from "next";
import { courses } from "../../data";
import { useColors, useDialog } from "@/hooks";
import { TopLevelDialogNames } from "@/components/TopLevelDialogs";

const CoursesPage: NextPage = () => {
  const { isMobile } = useResponsive();
  const colors = useColors();
  const { openDialog: openCourseDialog } = useDialog(
    TopLevelDialogNames.Course
  );

  const onCardClick = (courseId: string) => {
    openCourseDialog({ course: courseId });
  };

  return (
    <div>
      <Typography variant={isMobile ? "h5" : "h4"}>Courses</Typography>
      <Grid container spacing="24px" className={styles.gridContainer}>
        {courses.map((course) => (
          <Grid
            item
            key={course.id}
            className={styles.gridItem}
            xs={12}
            md={4}
            lg={3}
          >
            <Card
              variant="elevation"
              className={styles.courseItemCard}
              sx={{
                bgcolor: course.color ? colors?.[course.color]?.[800] : "unset",
              }}
              onClick={() => onCardClick(course.id)}
            >
              <Typography color="text.contrast" variant="h6">
                {course.name}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CoursesPage;
