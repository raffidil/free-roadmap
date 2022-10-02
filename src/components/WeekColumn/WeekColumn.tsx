import { Card, Grid, Typography } from "@mui/material";
import styles from "./WeekColumn.module.scss";
import CourseCard from "../CourseCard";
import { Course } from "../../types/types";

const pad = (input: number) => {
  let stringInput = input.toString();
  while (stringInput.length < 2) stringInput = "0" + stringInput;
  return stringInput;
};

const WeekColumn: React.FC<{
  courses: Array<Course | null>;
  weekNo: number;
}> = ({ courses, weekNo }) => {
  return (
    <div className={styles.container}>
      <Typography className={styles.title} variant="h6">
        Week {pad(weekNo || 0)}
      </Typography>
      <Card className={styles.card} elevation={0}>
        <Grid container rowGap="16px">
          {courses?.map((course) =>
            course ? (
              <Grid item key={course.id} xs={12}>
                <CourseCard course={course} weekNo={weekNo} />
              </Grid>
            ) : null
          )}
        </Grid>
      </Card>
    </div>
  );
};

export default WeekColumn;
