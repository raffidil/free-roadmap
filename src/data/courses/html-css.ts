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
      label: "Slides 1",
      url: "https://js-presentations.vercel.app/presentation/basic-frontend/week6",
      type: "slide",
      weekNo: 6,
    },
    {
      id: "slides",
      label: "Slides 2",
      url: "https://js-presentations.vercel.app/presentation/basic-frontend/week6/extra.html",
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
    {
      id: "slides",
      label: "Slides",
      url: "https://js-presentations.vercel.app/presentation/basic-frontend/week8",
      type: "slide",
      weekNo: 8,
    },
    {
      id: "slides",
      label: "Slides",
      url: "https://js-presentations.vercel.app/presentation/basic-frontend/week10",
      type: "slide",
      weekNo: 10,
    },
    {
      id: "slides",
      label: "Slides",
      url: "https://js-presentations.vercel.app/presentation/basic-frontend/week11",
      type: "slide",
      weekNo: 11,
    },
    {
      id: "slides",
      label: "Slides",
      url: "https://js-presentations.vercel.app/presentation/basic-frontend/week12",
      type: "slide",
      weekNo: 12,
    },
    {
      id: "slides",
      label: "Slides",
      url: "https://js-presentations.vercel.app/presentation/basic-frontend/week14",
      type: "slide",
      weekNo: 14,
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
      weekNo: 6,
    },
    {
      id: "art",
      name: "Article and hr element",
      weekNo: 6,
    },
    {
      id: "nested",
      name: "Nested selector",
      weekNo: 6,
    },
    {
      id: "image-css",
      name: "background-image",
      weekNo: 6,
    },
    {
      id: "padding",
      name: "padding, max-width, font-family, font-style and font-size",
      weekNo: 6,
    },
    {
      id: "comment",
      name: "CSS comment",
      weekNo: 6,
    },
    {
      id: "pseudo",
      name: "Pseudo classes",
      weekNo: 6,
    },
    {
      id: "hex",
      name: "HEX colors",
      weekNo: 7,
      exercises: [
        {
          id: "free7",
          label: "Cafe menu project: steps 1 to the end.",
          url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-basic-css-by-building-a-cafe-menu/",
          type: "link",
        },
        {
          id: "free7-2",
          label: "Learn HTML Forms by Building a Registration Form",
          url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-forms-by-building-a-registration-form",
          type: "link",
        },
        {
          id: "free7-3",
          label: "Assignment 2",
          url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/build-a-survey-form-project/build-a-survey-form",
          type: "link",
        },
      ],
    },
    {
      id: "units",
      name: "vh, v2 and rem units",
      weekNo: 7,
    },
    {
      id: "file",
      name: "Input file type",
      weekNo: 7,
    },
    {
      id: "select",
      name: "Select element",
      weekNo: 7,
    },
    {
      id: "textarea",
      name: "Text Area element",
      weekNo: 7,
    },
    {
      id: "atr-selector",
      name: "CSS attribute selector",
      weekNo: 7,
    },
    {
      id: "box",
      name: "CSS Box model",
      weekNo: 8,
      exercises: [
        {
          id: "free7",
          label: "About box model",
          url: "https://www.w3schools.com/css/css_boxmodel.asp",
          type: "link",
        },
      ],
    },
    {
      id: "css-short",
      name: "CSS shorthands",
      weekNo: 8,
    },
    {
      id: "css-short",
      name: "border-radius",
      weekNo: 8,
    },
    {
      id: "css-short",
      name: "box-shadow",
      weekNo: 8,
    },
    {
      id: "css-short",
      name: "overflow",
      weekNo: 8,
    },
    {
      id: "flex",
      name: "Flex",
      weekNo: 10,
      exercises: [
        {
          id: "free7",
          label:
            "Introduction to the Learn CSS Flexbox by Building a Photo Gallery Project",
          url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-css-flexbox-by-building-a-photo-gallery/",
          type: "link",
        },
        {
          id: "frog",
          label: "Flexbox Froggy",
          url: "https://flexboxfroggy.com/",
          type: "link",
        },
      ],
    },
    {
      id: "flex",
      name: "Font Awesome",
      weekNo: 11,
      exercises: [
        {
          id: "frog",
          label:
            "Introduction to the Learn Intermediate CSS by Building a Picasso Painting Project",
          url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-intermediate-css-by-building-a-picasso-painting/",
          type: "link",
        },
      ],
    },
    {
      id: "position",
      name: "Position: absolute",
      weekNo: 11,
    },
    {
      id: "zindex",
      name: "z-index",
      weekNo: 11,
    },
    {
      id: "media",
      name: "Media Query",
      weekNo: 12,
      exercises: [
        {
          id: "1",
          label: "Learn CSS Media Query In 7 Minutes",
          url: "https://www.youtube.com/watch?v=yU7jJ3NbPdA",
          type: "link",
        },
        {
          id: "2",
          label:
            "Media Query CSS Example – Max and Min Screen Width for Mobile Responsive Design",
          url: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/",
          type: "link",
        },
        {
          id: "free5",
          label: "Assignment 3",
          url: "https://js-presentations.vercel.app/presentation/basic-frontend/week12/assignment.html",
          type: "link",
        },
      ],
    },
    {
      id: "table",
      name: "Table",
      weekNo: 14,
      exercises: [
        {
          id: "1",
          label: "W3S: HTML Tables",
          url: "https://www.w3schools.com/html/html_tables.asp",
          type: "link",
        },
        {
          id: "2",
          label: "FCC: HTML Tables – Table Tutorial with Example Code",
          url: "https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/",
          type: "link",
        },
      ],
    },
    {
      id: "animation",
      name: "Animation",
      weekNo: 14,
      exercises: [
        {
          id: "1",
          label:
            "Introduction to the Learn CSS Animation by Building a Ferris Wheel Project",
          url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-css-animation-by-building-a-ferris-wheel/",
          type: "link",
        },
      ],
    },
    {
      id: "Transition",
      name: "Transition",
      weekNo: 14,
      exercises: [
        {
          id: "1",
          label: "Transitions",
          url: "https://www.w3schools.com/css/css3_transitions.asp",
          type: "link",
        },
      ],
    },
  ],
};

export default databaseCourse;
