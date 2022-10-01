export type Tag = {
  label: string;
  color: string;
};

export type Lesson = {
  id: string;
  name: string;
  description?: string;
  resources?: Array<Resource>;
  exercises?: Array<Resource>;
  weekNo: number;
};

export type Resource = {
  id: string;
  label: string;
  description?: string;
  type: "link" | "file";
  url: string;
  tag?: Array<Tag>;
};

export type Course = {
  id: string;
  name: string;
  description?: string;
  lessons?: Array<Lesson>;
  tag?: Array<Tag>;
  resources?: Array<Resource>;
  data?: { [key: string]: any };
};
