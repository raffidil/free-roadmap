import { Course } from "@/types/types";
import { Dialog } from "@mui/material";

const CourseDialog: React.FC<{
  onClose: () => void;
}> = ({ onClose }) => {
  return <Dialog open onClose={onClose}></Dialog>;
};

export default CourseDialog;
