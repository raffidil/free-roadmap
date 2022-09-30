export type Week = {
  id: number;
  courses?: Array<Course>;
};

export type Course = {
  id: string;
  name: string;
  lessons: Array<Lesson>;
  color?: string;
};

export type Lesson = {
  id: string;
  name: string;
};
