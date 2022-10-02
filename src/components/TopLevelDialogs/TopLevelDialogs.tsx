import { useRouter } from "next/router";
import { useDialog } from "@/hooks";
import CourseDialog from "../CourseDialog";

export enum TopLevelDialogNames {
  Course = "course",
}

const TopLevelDialogs: React.FC<{}> = () => {
  const { query } = useRouter();
  const { onClose } = useDialog();

  switch (query.dialog as TopLevelDialogNames) {
    case TopLevelDialogNames.Course:
      return <CourseDialog onClose={() => onClose({ course: undefined })} />;

    default:
      return null;
  }
};

export default TopLevelDialogs;
