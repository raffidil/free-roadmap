import { Course } from "../../types/types";
import tags from "../tags";

const databaseCourse: Course = {
  id: "html-css",
  name: "HTML/CSS",
  description: "Basic HTML/CSS",
  tag: [tags.frontend],
  color: "lightGreen",
  lessons: [
    {
      id: "intro",
      name: "Introduction to HTML/CSS",
      weekNo: 1,
    },
    {
      id: "basic-syntax",
      name: "Basic syntax",
      weekNo: 1,
    },
    {
      id: "basic-tags",
      name: "Basic tags",
      weekNo: 2,
    },
    {
      id: "style",
      name: "Style tag",
      weekNo: 3,
    },
  ],
};

export default databaseCourse;
