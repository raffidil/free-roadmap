import { useColors, useDialog } from "@/hooks";
import {
  Card,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Course } from "../../types/types";
import styles from "./CourseCard.module.scss";
import LaunchIcon from "@mui/icons-material/Launch";
import { TopLevelDialogNames } from "../TopLevelDialogs";

const CourseCard: React.FC<{ course: Course; weekNo?: number }> = ({
  course,
  weekNo,
}) => {
  const { openDialog: openCourseDialog } = useDialog(
    TopLevelDialogNames.Course
  );
  const colors = useColors();
  return (
    <Card
      className={styles.root}
      style={{
        backgroundColor: course.color ? colors?.[course.color]?.[50] : "unset",
      }}
    >
      <List>
        <ListItem
          disablePadding
          style={{
            backgroundColor: course.color
              ? colors?.[course.color]?.[900]
              : "unset",
          }}
        >
          <ListItemButton
            onClick={() => openCourseDialog({ course: course.id, weekNo })}
          >
            <ListItemText
              primary={course.name}
              primaryTypographyProps={{ color: "white" }}
            />
            <LaunchIcon htmlColor="white" />
          </ListItemButton>
        </ListItem>
        <Divider className={styles.divider} />
        {course.lessons?.map((lesson) => (
          <ListItem key={lesson.id} className={styles.listItem}>
            <ListItemText primary={lesson.name} />
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default CourseCard;
