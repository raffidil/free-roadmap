import { useDialog } from "@/hooks";
import {
  Card,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Course } from "../../types/types";
import CourseDialog from "../CourseDialog";
import styles from "./CourseCard.module.scss";

const CourseCard: React.FC<{ course: Course; weekNo?: number }> = ({
  course,
  weekNo,
}) => {
  const {
    openDialog: openCourseDialog,
    isOpen: isCourseDialogOpen,
    onClose: onDialogClose,
  } = useDialog("course");
  return (
    <Card className={styles.root}>
      <List>
        <ListItem
          disablePadding
          style={{ backgroundColor: course?.data?.color }}
        >
          <ListItemButton>
            <ListItemText primary={course.name} />
          </ListItemButton>
        </ListItem>
        <Divider />
        {course.lessons?.map((lesson) => (
          <ListItem key={lesson.id} className={styles.listItem}>
            <ListItemText
              primary={lesson.name}
              primaryTypographyProps={{ color: "text.secondary" }}
            />
          </ListItem>
        ))}
      </List>
      {isCourseDialogOpen && (
        <CourseDialog onClose={onDialogClose} course={course} weekNo={weekNo} />
      )}
    </Card>
  );
};

export default CourseCard;
