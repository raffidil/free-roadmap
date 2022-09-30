import { Grid } from "@mui/material";
import { NextPage } from "next";
import WeekColumn from "../../components/WeekColumn";
import styles from "./index.module.scss";

const Dashboard: NextPage = () => {
  const weeksPerView = 4;
  const weekMdSize = 12 / weeksPerView;
  const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className={styles.container}>
      <Grid container spacing="16px" className={styles.gridContainer}>
        {weeks
          .filter((_, index) => index < weeksPerView)
          .map((week) => (
            <Grid item md={weekMdSize} className={styles.gridItem} key={week}>
              <WeekColumn weekNumber={week} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
