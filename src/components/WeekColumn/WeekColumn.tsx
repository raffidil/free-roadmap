import { Card, Typography } from "@mui/material";
import styles from "./WeekColumn.module.scss";

const pad = (input: number) => {
  let stringInput = input.toString();
  while (stringInput.length < 2) stringInput = "0" + stringInput;
  return stringInput;
};

const WeekColumn: React.FC<{ weekNumber?: number }> = ({ weekNumber }) => {
  return (
    <>
      <Typography className={styles.title} variant="h6">
        Week {pad(weekNumber || 0)}
      </Typography>
      <Card className={styles.card} elevation={0}>
        week card
      </Card>
    </>
  );
};

export default WeekColumn;
