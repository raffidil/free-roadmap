import { Course } from "../../types/types";
import tags from "../tags";

const javascriptCourse: Course = {
  id: "javascript",
  name: "Javascript",
  description: "Basic Javascript",
  tag: [tags.frontend, tags.programming],
  color: "blue",
  resources: [
    {
      id: "freecodecamp",
      label: "FreeCodeCamp",
      type: "link",
      description: "Great roadmap with good explanations and exercises",
      url: "https://www.freecodecamp.org/learn",
    },
    {
      id: "javascript_info",
      label: "javascript.info",
      type: "link",
      description: "Deep and perfect explanations with good categorization",
      url: "https://javascript.info",
    },
    {
      id: "mdn",
      label: "MDN",
      type: "link",
      description: "Deep documents and perfect examples",
      url: "https://developer.mozilla.org",
    },
    {
      id: "roadmap_sh",
      label: "Roadmap.sh",
      type: "link",
      description: "Great visual roadmap with resources",
      url: "https://roadmap.sh/javascript",
    },
    {
      id: "codecademy",
      label: "CodeCademy",
      type: "link",
      url: "https://www.codecademy.com/",
    },
    {
      id: "learnjavascript",
      label: "Learn Javascript",
      type: "link",
      description: "Detailed roadmap and categorization",
      url: "https://learnjavascript.today/",
    },
  ],
  presentations: [
    {
      id: "slides",
      label: "Slides",
      url: "/presentation/js/week2",
      type: "slide",
      weekNo: 2,
    },
    {
      id: "slides",
      label: "Slides",
      url: "/presentation/js/week3",
      type: "slide",
      weekNo: 3,
    },
    {
      id: "slides",
      label: "Slides",
      url: "/presentation/js/week4",
      type: "slide",
      weekNo: 4,
    },
    {
      id: "slides",
      label: "Slides",
      url: "/presentation/js/week5",
      type: "slide",
      weekNo: 5,
    },
    {
      id: "slides",
      label: "Slides",
      url: "/presentation/js/week6",
      type: "slide",
      weekNo: 6,
    },
    {
      id: "slides",
      label: "Slides",
      url: "/presentation/js/week7",
      type: "slide",
      weekNo: 7,
    },
    {
      id: "slides",
      label: "Slides",
      url: "/presentation/js/week10",
      type: "slide",
      weekNo: 10,
    },
    {
      id: "slides",
      label: "Slides",
      url: "/presentation/js/week11",
      type: "slide",
      weekNo: 11,
    },
    {
      id: "slides",
      label: "Slides",
      url: "/presentation/js/week12",
      type: "slide",
      weekNo: 12,
    },
    {
      id: "slides",
      label: "Slides",
      url: "/presentation/js/week13",
      type: "slide",
      weekNo: 13,
    },
    {
      id: "slides",
      label: "Slides",
      url: "/presentation/js/week14",
      type: "slide",
      weekNo: 14,
    },
  ],
  lessons: [
    {
      id: "languages",
      name: "Programming languages",
      description: "Learn a bit about programming languages and Javascript",
      weekNo: 2,
      resources: [
        {
          id: "1",
          label: "Codecademy - What Is a Programming Language?",
          url: "https://www.codecademy.com/resources/blog/programming-languages/",
          type: "link",
        },
        {
          id: "2",
          label: "Codecademy - What Is a Programming Language?",
          url: "https://youtu.be/EGQh5SZctaE",
          type: "video",
        },
        {
          id: "3",
          label: "Codecademy - What Is JavaScript Used For?",
          url: "https://www.codecademy.com/resources/blog/what-is-javascript-used-for/",
          type: "link",
        },
      ],
    },
    {
      id: "devtool",
      name: "Developer tools",
      description: "Using Chrome/Firefox developer tool Javascript console",
      weekNo: 2,
    },
    {
      id: "variables",
      name: "Variables",
      description:
        "Variables and concepts of keyword, assignment, declaration, environment, being undefined, case sensitivity and camel case",
      weekNo: 2,
      
      resources: [
        {
          id: "1",
          label: "freecodecamp - Declare JavaScript Variables",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/declare-javascript-variables",
          type: "link",
        },
        {
          id: "2",
          label: "freecodecamp - Storing Values with the Assignment Operator",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator",
          type: "link",
        },
        {
          id: "3",
          label: "freecodecamp - Assigning the Value of One Variable to Another",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/assigning-the-value-of-one-variable-to-another",
          type: "link",
        },
        {
          id: "4",
          label: "freecodecamp - Initializing Variables with the Assignment Operator",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/initializing-variables-with-the-assignment-operator",
          type: "link",
        },
        {
          id: "5",
          label: "freecodecamp - Declare String Variables",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/declare-string-variables",
          type: "link",
        },
        {
          id: "6",
          label: "freecodecamp - Understanding Uninitialized Variables",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-uninitialized-variables",
          type: "link",
        },
        {
          id: "7",
          label: "freecodecamp - Understanding Case Sensitivity in Variables",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-case-sensitivity-in-variables",
          type: "link",
        },
        {
          id: "8",
          label: "freecodecamp - Explore Differences Between the var and let Keywords",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/explore-differences-between-the-var-and-let-keywords",
          type: "link",
        },
        {
          id: "9",
          label: "freecodecamp - Declare a Read-Only Variable with the const Keyword",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/declare-a-read-only-variable-with-the-const-keyword",
          type: "link",
        },
        {
          id: "10",
          label: "w3schools - JavaScript Variables (Optional)",
          url: "https://www.w3schools.com/js/js_variables.asp",
          type: "link",
        },
       
      ],
    },
    {
      id: "math",
      name: "Numbers and math",
      description:
        "Numbers and math (add, subtract, multiply, divide, remainder) and concept of statement",
      weekNo: 2,
      resources: [
        {
          id: "1",
          label: "freecodecamp - Add Two Numbers with JavaScript",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/add-two-numbers-with-javascript",
          type: "link",
        },
        {
          id: "2",
          label: "freecodecamp - Subtract One Number from Another with JavaScript",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/subtract-one-number-from-another-with-javascript",
          type: "link",
        },
        {
          id: "3",
          label: "freecodecamp - Multiply Two Numbers with JavaScript",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/multiply-two-numbers-with-javascript",
          type: "link",
        },
        {
          id: "4",
          label: "freecodecamp - Divide One Number by Another with JavaScript",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/divide-one-number-by-another-with-javascript",
          type: "link",
        },
        {
          id: "5",
          label: "freecodecamp - Increment a Number with JavaScript",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/increment-a-number-with-javascript",
          type: "link",
        },
        {
          id: "6",
          label: "freecodecamp - Decrement a Number with JavaScript",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/decrement-a-number-with-javascript",
          type: "link",
        },
        {
          id: "7",
          label: "freecodecamp - Create Decimal Numbers with JavaScript",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/create-decimal-numbers-with-javascript",
          type: "link",
        },
        {
          id: "8",
          label: "freecodecamp - Multiply Two Decimals with JavaScript",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/multiply-two-decimals-with-javascript",
          type: "link",
        },
        {
          id: "9",
          label: "freecodecamp - Divide One Decimal by Another with JavaScript",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/divide-one-decimal-by-another-with-javascript",
          type: "link",
        },
        {
          id: "10",
          label: "freecodecamp - Finding a Remainder in JavaScript",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/finding-a-remainder-in-javascript",
          type: "link",
        },
        {
          id: "11",
          label: "freecodecamp - Compound Assignment With Augmented Addition",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-addition",
          type: "link",
        },
        {
          id: "12",
          label: "freecodecamp - Compound Assignment With Augmented Subtraction",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-subtraction",
          type: "link",
        },
        {
          id: "13",
          label: "freecodecamp - Compound Assignment With Augmented Multiplication",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-multiplication",
          type: "link",
        },
        {
          id: "14",
          label: "freecodecamp - Compound Assignment With Augmented Division",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-division",
          type: "link",
        },
      ],
    },

    {
      id: "vs-code",
      name: "Writing Javascript files in VS Code",
      weekNo: 2,
      resources: [
        {
          id: "flowchart",
          label: "Download vs code",
          type: "link",
          url: "https://code.visualstudio.com/download",
        },
      ],
    },
    {
      id: "flowchart",
      name: "Flowchart",
      weekNo: 3,
      resources: [
        {
          id: "flowchart",
          label: "Tutorials Point - Flowchart Elements",
          type: "link",
          url: "https://www.tutorialspoint.com/programming_methodologies/programming_methodologies_flowchart_elements.htm",
        },
        {
          id: "flowchart-2",
          label: "Smart Draw - Common Flowchart Symbols (Optional)",
          type: "link",
          url: "https://www.smartdraw.com/flowchart/flowchart-symbols.htm",
        },
        {
          id: "flowchart-3",
          label: "Introduction to Creating Flowcharts",
          type: "video",
          url: "https://www.youtube.com/watch?v=SWRDqTx8d4k",
        },
        {
          id: "flowchart-4",
          label: "Technokids - How to Make a Flowchart for Programming Easy to Understand",
          type: "link",
          url: "https://www.technokids.com/blog/programming/how-to-make-a-flowchart-for-programming-easy-to-understand/",
        },
        {
          id: "flowchart-5",
          label: "Zellwk - How to think like a programmer",
          type: "link",
          url: "https://zellwk.com/blog/think-like-a-programmer/",
        },
        {
          id: "miro",
          label: "Miro - Flowchart making tool",
          type: "link",
          url: "https://miro.com/",
        },
      ],
    },
    {
      id: "functions",
      name: "Functions",
      description: "Syntax, arguments, scope and return value",
      weekNo: 3,
      resources: [
        {
          id: "functions",
          label: "Functions",
          type: "video",
          url: "https://www.youtube.com/watch?v=XgKsD6Zwvlc",
        },
      ],
    },
    {
      id: "comments",
      name: "Comments",
      weekNo: 3,
    },
    {
      id: "strings",
      name: "Strings",
      description: "Single and double quotes",
      weekNo: 3,
    },
    {
      id: "boolean",
      name: "Boolean",
      description:
        "Boolean and logical comparators and “if” (equal, strict equal, less than, greater than, and, or)",
      weekNo: 3,
      resources: [
        {
          id: "boolean",
          label: "Boolean logic with if statements",
          type: "video",
          url: "https://www.youtube.com/watch?v=SxTp8j-fMMY",
        },
      ],
    },
    {
      id: "comments",
      name: "Comments",
      weekNo: 3,
    },
    {
      id: "script-tag",
      name: "Script HTML tag",
      weekNo: 3,
    },
    {
      id: "script-src",
      name: "Script tag src attribute",
      weekNo: 4,
    },
    {
      id: "console",
      name: "console.log",
      weekNo: 4,
    },
    {
      id: "concat",
      name: "Working with strings",
      description:
        'Concatenating strings, string length, bracket notation, "includes" function',
      weekNo: 4,
    },
    {
      id: "more-functions",
      name: "More functions examples",
      weekNo: 4,
    },
    {
      id: "more-flowchart",
      name: "More flowcharts examples",
      weekNo: 4,
    },
    {
      id: "more-and-or",
      name: "More and/or examples",
      weekNo: 4,
    },
    {
      id: "loops",
      name: "Loops (for, while)",
      weekNo: 5,
    },
    {
      id: "arrays",
      name: "Introduction to arrays",
      weekNo: 5,
    },
    {
      id: "nested-arrays",
      name: "Nested arrays",
      weekNo: 6,
    },
    {
      id: "array-method",
      name: "Array methods",
      description: "Pop, push, shift, unshift, splice",
      weekNo: 6,
    },
    {
      id: "nested-loop",
      name: "Nested loops",
      weekNo: 6,
    },
    {
      id: "sort",
      name: "Sorting algorithms",
      weekNo: 7,
    },
    {
      id: "object",
      name: "Objects",
      weekNo: 7,
    },
    {
      id: "dom",
      name: "DOM Manipulation",
      description: "Styles and innerText",
      weekNo: 10,
    },
    {
      id: "events",
      name: "Events",
      description: "onClick and onMouseOver",
      weekNo: 10,
    },
    {
      id: "math-obj",
      name: "Math object",
      weekNo: 10,
    },
    {
      id: "dom-add-class",
      name: "DOM: Add and remove classes",
      weekNo: 11,
    },
    {
      id: "dom-input",
      name: "DOM: Read input values",
      weekNo: 11,
    },
    {
      id: "date",
      name: "Date object",
      weekNo: 11,
    },
    {
      id: "timer",
      name: "Timers",
      description: "setTimeout and setInterval",
      weekNo: 12,
    },
    {
      id: "callback",
      name: "Callback and anonymous functions",
      weekNo: 12,
    },
    {
      id: "template-literal",
      name: "Template literal",
      weekNo: 12,
    },
    {
      id: "arrow",
      name: "Arrow functions",
      weekNo: 12,
    },
    {
      id: "fetch",
      name: "Fetch API",
      weekNo: 13,
    },
    {
      id: "promise",
      name: "Promises",
      description: "Using then/catch syntax",
      weekNo: 13,
    },
    {
      id: "fetch-delete",
      name: "Implement add/delete with API",
      description: `Catch API errors and display them
Use forEach
Use addEventListener
Use select HTML tag
`,
      weekNo: 14,
    },
    {
      id: "attr",
      name: "Read HTML attributes",
      weekNo: 14,
    },
    {
      id: "local",
      name: "LocalStorage",
      weekNo: 14,
    },
    {
      id: "weather",
      name: "Fetch from weather API",
      weekNo: 14,
    },
  ],
};

export default javascriptCourse;
