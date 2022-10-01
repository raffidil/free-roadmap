import theme from "../../theme/theme";
import { Course, Lesson, Resource } from "../../types/types";
import tags from "../tags";

const javascriptCourse: Course = {
  id: "javascript",
  name: "Javascript",
  description: "This is a test description for JS class",
  tag: [tags.forntend],
  data: {
    color: theme.palette.common.blue.light,
  },
  lessons: [
    {
      id: "intro",
      name: "Introduction",
      description: "Test description for intro lesson",
      weekNo: 1,
    },
    {
      id: "syntax",
      name: "Syntax",
      description: "Test description for syntax lesson",
      weekNo: 1,
    },
    {
      id: "types",
      name: "Data types",
      description: "Test description for data types lesson",
      weekNo: 1,
    },
    {
      id: "array",
      name: "Arrays",
      description: "Test description for arrays lesson",
      weekNo: 2,
    },
    {
      id: "object",
      name: "Object",
      description: "Test description for object lesson",
      weekNo: 2,
    },
  ],
};

export default javascriptCourse;
