import {
  Card,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Course } from "../../types/types";
import styles from "./CourseCard.module.scss";

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  return (
    <Card className={styles.root} style={{ backgroundColor: course.color }}>
      <Typography color="text.secondary" className={styles.title}>
        {course.name}
      </Typography>
      <Divider />
      <List>
        {course.lessons.map((lesson) => (
          <ListItem disablePadding key={lesson.id}>
            <ListItemButton>
              <ListItemText primary={lesson.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default CourseCard;
