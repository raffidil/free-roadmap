import { useColors } from "@/hooks";
import { Course } from "@/types/types";
import { Chip, Typography } from "@mui/material";
import styles from "./CourseDialog.module.scss";

const Overview: React.FC<{ course?: Course }> = ({ course }) => {
  const colors = useColors();
  return (
    <div className={styles.overview}>
      <Typography
        variant="body2"
        color="text.secondary"
        className={styles.title}
      >
        Description
      </Typography>
      <Typography variant="body1" sx={{ whiteSpace: "pre-wrap" }}>
        {course?.description}
      </Typography>

      <div className={styles.tagContainer}>
        <Typography
          variant="body2"
          color="text.secondary"
          className={styles.title}
        >
          Tags
        </Typography>
        <div className={styles.chipsContainer}>
          {course?.tag?.map((tag, index) => (
            <Chip
              key={tag.label + index}
              label={tag.label}
              sx={{
                bgcolor: colors?.[tag.color]?.[800],
                color: "white",
                m: "4px",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
