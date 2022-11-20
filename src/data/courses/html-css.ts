import { Course } from "../../types/types";
import tags from "../tags";

const databaseCourse: Course = {
  id: "html-css",
  name: "HTML/CSS",
  description: "Basic HTML/CSS",
  tag: [tags.frontend],
  color: "lightGreen",
  presentations: [
    {
      id: "slides",
      label: "Slides",
      url: "https://js-presentations.vercel.app/presentation/basic-frontend/week1",
      type: "slide",
      weekNo: 1,
    },
    {
      id: "slides",
      label: "Slides",
      url: "https://js-presentations.vercel.app/presentation/basic-frontend/week2",
      type: "slide",
      weekNo: 2,
    },
    {
      id: "slides",
      label: "Slides",
      url: "https://js-presentations.vercel.app/presentation/basic-frontend/week3",
      type: "slide",
      weekNo: 3,
    },
    {
      id: "slides",
      label: "Slides",
      url: "https://js-presentations.vercel.app/presentation/basic-frontend/week4",
      type: "slide",
      weekNo: 4,
    },
    {
      id: "slides",
      label: "Slides",
      url: "https://js-presentations.vercel.app/presentation/basic-frontend/week5",
      type: "slide",
      weekNo: 5,
    },
    {
      id: "slides",
      label: "Slides",
      url: "https://js-presentations.vercel.app/presentation/basic-frontend/week6",
      type: "slide",
      weekNo: 6,
    },
    {
      id: "slides",
      label: "Slides",
      url: "https://js-presentations.vercel.app/presentation/basic-frontend/week7",
      type: "slide",
      weekNo: 7,
    },
  ],
  lessons: [
    {
      id: "intro",
      name: "History of Internet and Web",
      weekNo: 1,
    },
    {
      id: "what",
      name: "What is HTML, CSS and JS?",
      weekNo: 1,
    },
    {
      id: "evolve",
      name: "How does the Web evolve?",
      weekNo: 1,
    },
    {
      id: "basic-syntax",
      name: "Basic syntax",
      description: "Basic HTML tags: h1, h1, p, comment, main and nesting.",
      weekNo: 2,
      exercises: [
        {
          id: "free1",
          label: "Cat photo app project: steps 1 to 6",
          url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-html-by-building-a-cat-photo-app",
          type: "link",
        },
      ],
    },
    {
      id: "basic-tags-i",
      name: "Image",
      description: "img self closing tag and attributes",
      weekNo: 2,
      exercises: [
        {
          id: "free2",
          label: "Cat photo app project: steps 1 to 20",
          url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-html-by-building-a-cat-photo-app",
          type: "link",
        },
      ],
    },
    {
      id: "basic-tags-a",
      name: "Anchor",
      weekNo: 2,
    },
    {
      id: "basic-tags-s",
      name: "Section",
      weekNo: 2,
    },
    {
      id: "tags2",
      name: "Lists",
      description: "li, ol",
      weekNo: 3,
      exercises: [
        {
          id: "free3",
          label: "Cat photo app project: steps 20 to 34",
          url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-html-by-building-a-cat-photo-app/step-20",
          type: "link",
        },
      ],
    },
    {
      id: "tags2-fig",
      name: "Figure",
      weekNo: 3,
    },
    {
      id: "forms",
      name: "Forms",
      description:
        "Form, input, button, radio buttons, labels, input value and name, fieldset",
      weekNo: 4,
      exercises: [
        {
          id: "free4",
          label: "Cat photo app project: steps 35 to 51",
          url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-html-by-building-a-cat-photo-app/step-35",
          type: "link",
        },
      ],
    },
    {
      id: "forms-e",
      name: "Inline and block-level",
      weekNo: 4,
    },
    {
      id: "forms2",
      name: "Checkbox",
      description: "Checkbox, checked attributes",
      weekNo: 5,
      exercises: [
        {
          id: "free5",
          label: "Cat photo app project: steps 52 to the end.",
          url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-html-by-building-a-cat-photo-app/step-52",
          type: "link",
        },
      ],
    },
    {
      id: "forms-a",
      name: "Footer",
      weekNo: 5,
    },
    {
      id: "forms-b",
      name: "Body and head",
      description: "Footer, body, head, title, doctype, meta",
      weekNo: 5,
      exercises: [
        {
          id: "free5",
          label: "Assignment 1",
          url: "https://js-presentations.vercel.app/presentation/basic-frontend/week5/assignment.html",
          type: "link",
        },
      ],
    },
    {
      id: "forms-b",
      name: "Style tag",
      weekNo: 6,
      exercises: [
        {
          id: "free5",
          label: "Cafe menu project: steps 1 to the 30.",
          url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-basic-css-by-building-a-cafe-menu/",
          type: "link",
        },
      ],
    },
    {
      id: "style-syntax",
      name: "Basic CSS syntax",
      weekNo: 6,
    },
    {
      id: "center",
      name: "margin-left and margin-right",
      weekNo: 6,
    },
    {
      id: "text-align",
      name: "Multiple selectors",
      weekNo: 6,
    },
    {
      id: "text",
      name: "text-align",
      weekNo: 6,
    },
    {
      id: "color",
      name: "background-color",
      weekNo: 6,
    },
    {
      id: "width",
      name: "width",
      weekNo: 6,
    },
    {
      id: "css-file",
      name: "Separate CSS file from HTML",
      weekNo: 6,
    },
    {
      id: "class",
      name: "CSS class",
      weekNo: 7,
    },
    {
      id: "art",
      name: "Article and hr element",
      weekNo: 7,
    },
    {
      id: "nested",
      name: "Nested selector",
      weekNo: 7,
    },
    {
      id: "image-css",
      name: "background-image",
      weekNo: 7,
    },
    {
      id: "padding",
      name: "padding, max-width, font-family, font-style and font-size",
      weekNo: 7,
    },
    {
      id: "comment",
      name: "CSS comment",
      weekNo: 7,
    },
    {
      id: "pseudo",
      name: "Pseudo classes",
      weekNo: 7,
    },
  ],
};

export default databaseCourse;
