import { Color } from "@/hooks/useColors";
import { Tag } from "../types/types";

const tags: { [key: string]: { label: string; color: Color } } = {
  frontend: {
    label: "Frontend",
    color: "blue",
  },
  backend: {
    label: "Backend",
    color: "red",
  },
  uiux: {
    label: "UI/UX",
    color: "green",
  },
  programming: {
    label: "Programming",
    color: "lightGreen",
  },
};

export default tags;
