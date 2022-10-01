import { Grid } from "@mui/material";
import { NextPage } from "next";
import WeekColumn from "../../components/WeekColumn";
import styles from "./index.module.scss";
import { courses } from "../../data";
import max from "lodash/max";
import { Course } from "../../types/types";

const Dashboard: NextPage<{
  weeks: {
    weekNo: number;
    courses: (Course | null)[];
  }[];
}> = ({ weeks }) => {
  const weeksPerView = 4;
  const weekMdSize = 12 / weeksPerView;

  return (
    <div className={styles.container}>
      <Grid container spacing="16px" className={styles.gridContainer}>
        {weeks
          .filter((_, index) => index < weeksPerView)
          .map((week, i) => (
            <Grid item md={weekMdSize} className={styles.gridItem} key={i}>
              <WeekColumn courses={week.courses} weekNo={week.weekNo} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export async function getStaticProps() {
  const weekCounts = max(
    courses
      .map((course) => course.lessons?.map((lesson) => lesson.weekNo))
      .flat(2)
  );

  const weeks = Array(weekCounts)
    .fill(null)
    .map((_, index) => {
      const coursesOfThisWeek = courses.map((course) => {
        const lessonsOfThisWeek = course.lessons?.filter(
          (lesson) => lesson.weekNo === index + 1
        );
        if (!lessonsOfThisWeek?.length) return null;
        return { ...course, lessons: lessonsOfThisWeek } as Course;
      });
      return { weekNo: index + 1, courses: coursesOfThisWeek ?? [] };
    });
  return {
    props: { weeks },
  };
}

export default Dashboard;
