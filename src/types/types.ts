import { Color } from "@/hooks/useColors";

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
  type: "link" | "file" | "video";
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
  color?: Color;
  data?: { [key: string]: any };
};
