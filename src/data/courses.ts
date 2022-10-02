import { Course } from "../types/types";
import htmlCss from "./courses/html-css";
import javascriptCourse from "./courses/javascript";

const courses: Array<Course> = [{ ...javascriptCourse }, { ...htmlCss }];

export default courses;
