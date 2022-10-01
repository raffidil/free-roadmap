import theme from "../../theme/theme";
import { Course, Lesson, Resource } from "../../types/types";
import tags from "../tags";

const databaseCourse: Course = {
  id: "database",
  name: "Database",
  description: "This is a test description for Database class",
  tag: [tags.backend],
  data: {
    color: theme.palette.common.green.light,
  },
  lessons: [
    {
      id: "intro",
      name: "Introduction",
      description: "Test description for intro lesson",
      weekNo: 1,
    },
    {
      id: "basic-syntax",
      name: "Basic syntax",
      description: "Test description for syntax lesson",
      weekNo: 1,
    },
    {
      id: "sql-intro",
      name: "SQL intro",
      description: "Test description for sql lesson",
      weekNo: 2,
    },
    {
      id: "select",
      name: "Select",
      description: "Test description for select lesson",
      weekNo: 3,
    },
  ],
};

export default databaseCourse;
