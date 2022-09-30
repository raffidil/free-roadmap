import { Card, Typography } from "@mui/material";
import styles from "./WeekColumn.module.scss";
const WeekColumn: React.FC = () => {
  return (
    <div className={styles.root}>
      <Typography>Week 01</Typography>
      <Card>week card</Card>
    </div>
  );
};

export default WeekColumn;
