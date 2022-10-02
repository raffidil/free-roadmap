import { Course } from "@/types/types";
import { Dialog } from "@mui/material";

const CourseDialog: React.FC<{
  course: Course;
  weekNo?: number;
  onClose: () => void;
}> = ({ course, weekNo, onClose }) => {
  return <Dialog open onClose={onClose}></Dialog>;
};

export default CourseDialog;
