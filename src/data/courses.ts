import { Course } from "../types/types";
import databaseCourse from "./courses/database";
import javascriptCourse from "./courses/javascript";

const courses: Array<Course> = [{ ...javascriptCourse }, { ...databaseCourse }];

export default courses;
