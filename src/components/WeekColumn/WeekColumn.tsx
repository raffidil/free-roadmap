import { Card, Grid, Typography } from "@mui/material";
import styles from "./WeekColumn.module.scss";
import CourseCard from "../CourseCard";
import { Week } from "../../types/types";

const pad = (input: number) => {
  let stringInput = input.toString();
  while (stringInput.length < 2) stringInput = "0" + stringInput;
  return stringInput;
};

const WeekColumn: React.FC<{ week: Week }> = ({ week }) => {
  const courses = week.courses;
  return (
    <>
      <Typography className={styles.title} variant="h6">
        Week {pad(week.id || 0)}
      </Typography>
      <Card className={styles.card} elevation={0}>
        <Grid container rowGap="16px">
          {courses?.map((course) => (
            <Grid item key={course.id} xs={12}>
              <CourseCard course={course} />
            </Grid>
          ))}
        </Grid>
      </Card>
    </>
  );
};

export default WeekColumn;
