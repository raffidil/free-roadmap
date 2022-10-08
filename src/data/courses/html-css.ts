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
      name: "Introduction",
      description: "History of Web (HTML/CSS/JS)",
      weekNo: 1,
      resources: [
        {
          id: "web-intro",
          label: "History of Web",
          url: "https://web-intro-present.vercel.app/",
          type: "link",
        },
      ],
    },
    {
      id: "basic-syntax",
      name: "Basic syntax",
      description: "Basic HTML tags: h1, h1, p, comment, main and nesting.",
      weekNo: 1,
      resources: [
        {
          id: "free1",
          label: "Cat photo app project: steps 1 to 6",
          url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-html-by-building-a-cat-photo-app",
          type: "link",
        },
      ],
    },
    {
      id: "basic-tags",
      name: "More tags",
      description:
        "More tags: img self closing tag, attributes, anchor tag, section tag.",
      weekNo: 2,
      resources: [
        {
          id: "free2",
          label: "Cat photo app project: steps 1 to 20",
          url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-html-by-building-a-cat-photo-app",
          type: "link",
        },
      ],
    },
    {
      id: "tags2",
      name: "Even more tags",
      description: "li, ol, figure, em and strong tag",
      weekNo: 3,
      resources: [
        {
          id: "free3",
          label: "Cat photo app project: steps 20 to 34",
          url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-html-by-building-a-cat-photo-app/step-20",
          type: "link",
        },
      ],
    },
    {
      id: "forms",
      name: "Forms",
      description:
        "Form, input, button, radio buttons, labels, input value and name, fieldset, inline and block-level elements",
      weekNo: 4,
      resources: [
        {
          id: "free4",
          label: "Cat photo app project: steps 35 to 51",
          url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-html-by-building-a-cat-photo-app/step-35",
          type: "link",
        },
      ],
    },
    {
      id: "forms2",
      name: "More on forms",
      description:
        "Checkbox, checked attributes, footer, body, head, title, doctype, meta",
      weekNo: 5,
      resources: [
        {
          id: "free5",
          label: "Cat photo app project: steps 52 to the end.",
          url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-html-by-building-a-cat-photo-app/step-52",
          type: "link",
        },
      ],
    },
  ],
};

export default databaseCourse;
