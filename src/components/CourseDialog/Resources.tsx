import { Course } from "@/types/types";
import { Divider, Typography } from "@mui/material";
import styles from "./CourseDialog.module.scss";
import ResourcesList from "../ResourcesList";

const Resources: React.FC<{ course?: Course }> = ({ course }) => {
  const lessonsWithResource = course?.lessons?.filter(
    (lesson) => lesson.resources?.length
  );

  return (
    <div className={styles.resources}>
      {Boolean(course?.resources?.length) && (
        <>
          <Typography
            color="text.secondary"
            className={styles.lessonTitle}
            variant="body1"
          >
            Course General Resources
          </Typography>
          <ResourcesList resources={course?.resources || []} />

          <Divider className={styles.divider} />
        </>
      )}
      {lessonsWithResource?.map((lesson) => (
        <div key={lesson.id}>
          <Typography
            color="text.secondary"
            className={styles.lessonTitle}
            variant="body1"
          >
            {lesson.name}
          </Typography>
          <ResourcesList resources={lesson?.resources || []} />
        </div>
      ))}
    </div>
  );
};

export default Resources;
