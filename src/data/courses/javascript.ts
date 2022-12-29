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
  // presentations: [
  //   {
  //     id: "slides",
  //     label: "Slides",
  //     url: "/presentation/js/week2",
  //     type: "slide",
  //     weekNo: 2,
  //   },
  //   {
  //     id: "slides",
  //     label: "Slides",
  //     url: "/presentation/js/week3",
  //     type: "slide",
  //     weekNo: 3,
  //   },
  //   {
  //     id: "slides",
  //     label: "Slides",
  //     url: "/presentation/js/week4",
  //     type: "slide",
  //     weekNo: 4,
  //   },
  //   {
  //     id: "slides",
  //     label: "Slides",
  //     url: "/presentation/js/week5",
  //     type: "slide",
  //     weekNo: 5,
  //   },
  //   {
  //     id: "slides",
  //     label: "Slides",
  //     url: "/presentation/js/week6",
  //     type: "slide",
  //     weekNo: 6,
  //   },
  //   {
  //     id: "slides",
  //     label: "Slides",
  //     url: "/presentation/js/week7",
  //     type: "slide",
  //     weekNo: 7,
  //   },
  //   {
  //     id: "slides",
  //     label: "Slides",
  //     url: "/presentation/js/week10",
  //     type: "slide",
  //     weekNo: 10,
  //   },
  //   {
  //     id: "slides",
  //     label: "Slides",
  //     url: "/presentation/js/week11",
  //     type: "slide",
  //     weekNo: 11,
  //   },
  //   {
  //     id: "slides",
  //     label: "Slides",
  //     url: "/presentation/js/week12",
  //     type: "slide",
  //     weekNo: 12,
  //   },
  //   {
  //     id: "slides",
  //     label: "Slides",
  //     url: "/presentation/js/week13",
  //     type: "slide",
  //     weekNo: 13,
  //   },
  //   {
  //     id: "slides",
  //     label: "Slides",
  //     url: "/presentation/js/week14",
  //     type: "slide",
  //     weekNo: 14,
  //   },
  // ],
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
          label:
            "freecodecamp - Assigning the Value of One Variable to Another",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/assigning-the-value-of-one-variable-to-another",
          type: "link",
        },
        {
          id: "4",
          label:
            "freecodecamp - Initializing Variables with the Assignment Operator",
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
          label:
            "freecodecamp - Explore Differences Between the var and let Keywords",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/explore-differences-between-the-var-and-let-keywords",
          type: "link",
        },
        {
          id: "9",
          label:
            "freecodecamp - Declare a Read-Only Variable with the const Keyword",
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
          label:
            "freecodecamp - Subtract One Number from Another with JavaScript",
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
          label:
            "freecodecamp - Compound Assignment With Augmented Subtraction",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-subtraction",
          type: "link",
        },
        {
          id: "13",
          label:
            "freecodecamp - Compound Assignment With Augmented Multiplication",
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
      description: "Learn to make flowchart and algorithmic thinking.",
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
      id: "script-tag",
      name: "How to Run JS",
      description: "In this section we are going to run a javascript code by including it into HTML file.",
      weekNo: 3,
      resources: [
        {
          id: "res-1",
          label: "Linking the javascript file with HTML file",
          type: "link",
          url: "https://javascript.info/hello-world",
        },
      ],
    },
    {
      id: "code-structure",
      name: "JS Code structure",
      weekNo: 3,
      resources: [
        {
          id: "res-1",
          label: "javascript.info - Code structure",
          type: "link",
          url: "https://javascript.info/structure",
        },
      ],
    },
    {
      id: "communication-with-user",
      name: "Communication with user",
      weekNo: 3,
      resources: [
        {
          id: "res-1",
          label: "javascript.info - Interaction: alert, prompt, confirm",
          type: "link",
          url: "https://javascript.info/alert-prompt-confirm",
        },
      ],
    },
    // {
    //   id: "functions",
    //   name: "Functions",
    //   description: "Syntax, arguments, scope and return value",
    //   weekNo: 3,
    //   resources: [
    //     {
    //       id: "functions",
    //       label: "Functions",
    //       type: "video",
    //       url: "https://www.youtube.com/watch?v=XgKsD6Zwvlc",
    //     },
    //   ],
    // },
    // {
    //   id: "strings",
    //   name: "Strings",
    //   description: "Single and double quotes",
    //   weekNo: 3,
    //   resources: [
    //     {
    //       id: "functions",
    //       label: "Functions",
    //       type: "video",
    //       url: "https://www.youtube.com/watch?v=XgKsD6Zwvlc",
    //     },
    //   ],
    // },
    // {
    //   id: "boolean",
    //   name: "Boolean",
    //   description:
    //     "Boolean and logical comparators and “if” (equal, strict equal, less than, greater than, and, or)",
    //   weekNo: 3,
    //   resources: [
    //     {
    //       id: "boolean",
    //       label: "Boolean logic with if statements",
    //       type: "video",
    //       url: "https://www.youtube.com/watch?v=SxTp8j-fMMY",
    //     },
    //   ],
    // },
    {
      id: "variable",
      name: "Variable",
      weekNo: 4,
      resources: [
        {
          id: "1",
          label: "javascript.info - Variables",
          type: "link",
          url: "https://javascript.info/variables",
        },
      ],
    },
    {
      id: "data-types",
      name: "Data Types",
      weekNo: 4,
      resources: [
        {
          id: "1",
          label: "javascript.info - Data Types",
          type: "link",
          url: "https://javascript.info/types",
        },
      ],
    },
    {
      id: "conditions",
      name: "Conditions",
      description: 'Talking about Comparisons, Conditional branching (if)',
      weekNo: 4,
      resources: [
        {
          id: "1",
          label: "javascript.info - Comparisons",
          type: "link",
          url: "https://javascript.info/comparison",
        },
        {
          id: "2",
          label: "javascript.info - Conditional branching: if, ?",
          type: "link",
          url: "https://javascript.info/ifelse",
        },
      ],
    },
    {
      id: "logical-operational",
      name: "Logical operators",
      weekNo: 4,
      resources: [
        {
          id: "1",
          label: "javascript.info - Logical operators",
          type: "link",
          url: "https://javascript.info/logical-operators",
        },
      ],
    },
    {
      id: "loops",
      name: "Loops (for, while)",
      weekNo: 5,
      resources: [
        {
          id: "1",
          label: "javascript.info - Loops: while and for",
          type: "link",
          url: "https://javascript.info/while-for",
        },
      ],
      exercises: [
        {
          id: "1",
          label: "FreeCodeCamp - Iterate with JavaScript While Loops",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-while-loops",
        },
        {
          id: "2",
          label: "FreeCodeCamp - Iterate with JavaScript For Loops",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-for-loops",
        },
        {
          id: "3",
          label: "FreeCodeCamp - Iterate Odd Numbers With a For Loop",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-odd-numbers-with-a-for-loop",
        },
        {
          id: "4",
          label: "FreeCodeCamp - Count Backwards With a For Loop",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/count-backwards-with-a-for-loop",
        },
        {
          id: "5",
          label: "FreeCodeCamp - Iterate Through an Array with a For Loop",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-through-an-array-with-a-for-loop",
        },
        {
          id: "6",
          label: "FreeCodeCamp - Iterate with JavaScript Do...While Loops",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-do---while-loops",
        },
      ],
    },
    {
      id: "nested-loop",
      name: "Nested loops",
      weekNo: 6,
    },
    {
      id: "arrays",
      name: "Introduction to arrays",
      weekNo: 7,
      resources: [
        {
          id: "1",
          label: "Programming with Mosh -  JavaScript Arrays",
          type: "video",
          url: "https://youtu.be/oigfaZ5ApsM",
        },
        {
          id: "2",
          label: "javascript.info - Arrays",
          type: "link",
          url: "https://javascript.info/array",
        },
      ],
      exercises: [
        {
          id: "1",
          label: "FreeCodeCamp - Store Multiple Values in one Variable using JavaScript Arrays",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/store-multiple-values-in-one-variable-using-javascript-arrays",
        },
        {
          id: "2",
          label: "FreeCodeCamp - Access Array Data with Indexes",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/access-array-data-with-indexes",
        },
        {
          id: "3",
          label: "FreeCodeCamp - Modify Array Data With Indexes",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/modify-array-data-with-indexes",
        },
      ],
    },
    {
      id: "array-method",
      name: "Array methods",
      description: "Pop, push, shift, unshift, length",
      weekNo: 7,
      exercises: [
        {
          id: "1",
          label: "FreeCodeCamp - Manipulate Arrays With push()",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-push",
        },
        {
          id: "2",
          label: "FreeCodeCamp - Manipulate Arrays With pop()",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-pop",
        },
        {
          id: "3",
          label: "FreeCodeCamp - Manipulate Arrays With shift()",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-shift",
        },
        {
          id: "4",
          label: "FreeCodeCamp - Manipulate Arrays With unshift()",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-unshift",
        },
      ]
    },
    {
      id: "function",
      name: "Functions",
      description: "Intro to using functions to organize your code.",
      weekNo: 8,
      resources: [
        {
          id: "2",
          label: "javascript.info - Functions",
          description: "You don't need to read the <Default values> part",
          type: "link",
          url: "https://javascript.info/function-basics",
        },
      ],
      exercises: [
        {
          id: "1",
          label: "FreeCodeCamp - Write Reusable JavaScript with Functions",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/write-reusable-javascript-with-functions",
        },
        {
          id: "2",
          label: "FreeCodeCamp - Passing Values to Functions with Arguments",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/passing-values-to-functions-with-arguments",
        },
        {
          id: "3",
          label: "FreeCodeCamp - Return a Value from a Function with Return",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/return-a-value-from-a-function-with-return",
        },
        {
          id: "4",
          label: "FreeCodeCamp - Global Scope and Functions",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-scope-and-functions",
        },
        {
          id: "5",
          label: "FreeCodeCamp - Local Scope and Functions",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/local-scope-and-functions",
        },
        {
          id: "6",
          label: "FreeCodeCamp - Global vs. Local Scope in Functions",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-vs--local-scope-in-functions",
        },
        {
          id: "7",
          label: "FreeCodeCamp - Understanding Undefined Value returned from a Function",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-undefined-value-returned-from-a-function",
        },
        {
          id: "8",
          label: "FreeCodeCamp - Assignment with a Returned Value",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/assignment-with-a-returned-value",
        },
        {
          id: "9",
          label: "FreeCodeCamp - Stand in Line",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/stand-in-line",
        },
      ]
    },
    {
      id: "object",
      name: "Object",
      description: "Intro to using js objects .",
      weekNo: 9,
      resources: [
        {
          id: "1",
          label: "javascript.info - Objects",
          type: "link",
          url: "https://javascript.info/object",
        },
      ],
      exercises: [
        {
          id: "1",
          label: "FreeCodeCamp - Build JavaScript Objects",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/build-javascript-objects",
        },
        {
          id: "2",
          label: "FreeCodeCamp - Accessing Object Properties with Dot Notation",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-dot-notation",
        },
        {
          id: "3",
          label: "FreeCodeCamp - Accessing Object Properties with Bracket Notation",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-bracket-notation",
        },
        {
          id: "4",
          label: "FreeCodeCamp - Accessing Object Properties with Variables",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-variables",
        },
        {
          id: "5",
          label: "FreeCodeCamp - Updating Object Properties",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/updating-object-properties",
        },
        {
          id: "6",
          label: "FreeCodeCamp - Add New Properties to a JavaScript Object",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/add-new-properties-to-a-javascript-object",
        },
        {
          id: "7",
          label: "FreeCodeCamp - Delete Properties from a JavaScript Object",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/delete-properties-from-a-javascript-object",
        },
        {
          id: "8",
          label: "FreeCodeCamp - Using Objects for Lookups",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/using-objects-for-lookups",
        },
        {
          id: "9",
          label: "FreeCodeCamp - Manipulating Complex Objects",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulating-complex-objects",
        },
        {
          id: "10",
          label: "FreeCodeCamp - Accessing Nested Objects",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/accessing-nested-objects",
        },
        {
          id: "11",
          label: "FreeCodeCamp - Accessing Nested Arrays",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/accessing-nested-arrays",
        },
        {
          id: "12",
          label: "FreeCodeCamp - Record Collection",
          type: "link",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/record-collection",
        },
      ],
    },
    {
      id: "strings",
      name: "Strings",
      weekNo: 12,
      resources: [
        {
          id: "1",
          label: "w3school - JavaScript Strings",
          type: "link",
          url: "https://www.w3schools.com/js/js_strings.asp",
        },
        {
          id: "2",
          label: "w3school - JavaScript String Methods",
          type: "link",
          url: "https://www.w3schools.com/js/js_string_methods.asp",
        },
        {
          id: "3",
          label: "Programming with Mosh - JavaScript String",
          type: "video",
          url: "https://youtu.be/09BwruU4kiY",
        },
      ],
    },
    {
      id: "dom-manipulation",
      name: "DOM Manipulation",
      weekNo: 12,
      resources: [
        {
          id: "1",
          label: "Javascript.info - Browser environment, specs",
          type: "link",
          url: "https://javascript.info/browser-environment",
        },
        {
          id: "2",
          label: "Javascript.info - DOM tree",
          type: "link",
          url: "https://javascript.info/dom-nodes",
        },
        {
          id: "3",
          label: "Javascript.info - Walking the DOM",
          type: "link",
          url: "https://javascript.info/dom-navigation",
        },
      ],
    },
    {
      id: "dom-access-to-elements",
      name: "DOM - Access to elements",
      weekNo: 12,
      resources: [
        {
          id: "1",
          label: "Javascript.info - Searching: getElement*, querySelector*",
          type: "link",
          url: "https://javascript.info/searching-elements-dom",
        },
        {
          id: "2",
          label: "Javascript.info - Modifying the document",
          type: "link",
          url: "https://javascript.info/modifying-document",
        },
      ],
    },
    {
      id: "dom-events",
      name: "DDM - Events",
      weekNo: 12,
      resources: [
        {
          id: "1",
          label: "Javascript.info - Introduction to browser events",
          type: "link",
          url: "https://javascript.info/introduction-browser-events",
        },
        {
          id: "2",
          label: "w3school - click event",
          type: "link",
          url: "https://www.w3schools.com/jsref/event_onclick.asp",
        },
        {
          id: "3",
          label: "w3school - mouse over event",
          type: "link",
          url: "https://www.w3schools.com/jsref/event_onmouseover.asp",
        },
        {
          id: "4",
          label: "w3school - mouse out event",
          type: "link",
          url: "https://www.w3schools.com/jsref/event_onmouseout.asp",
        },
        {
          id: "5",
          label: "w3school - change event",
          type: "link",
          url: "https://www.w3schools.com/jsref/event_onchange.asp",
        },
        {
          id: "6",
          label: "w3school - input event",
          type: "link",
          url: "https://www.w3schools.com/jsref/event_oninput.asp",
        },
        {
          id: "7",
          label: "w3school - key press event",
          type: "link",
          url: "https://www.w3schools.com/jsref/event_onkeydown.asp",
        },
      ],
    },

//     {
//       id: "sort",
//       name: "Sorting algorithms",
//       weekNo: 7,
//     },
//     {
//       id: "object",
//       name: "Objects",
//       weekNo: 7,
//     },
//     {
//       id: "dom",
//       name: "DOM Manipulation",
//       description: "Styles and innerText",
//       weekNo: 10,
//     },
//     {
//       id: "events",
//       name: "Events",
//       description: "onClick and onMouseOver",
//       weekNo: 10,
//     },
//     {
//       id: "math-obj",
//       name: "Math object",
//       weekNo: 10,
//     },
//     {
//       id: "dom-add-class",
//       name: "DOM: Add and remove classes",
//       weekNo: 11,
//     },
//     {
//       id: "dom-input",
//       name: "DOM: Read input values",
//       weekNo: 11,
//     },
//     {
//       id: "date",
//       name: "Date object",
//       weekNo: 11,
//     },
//     {
//       id: "timer",
//       name: "Timers",
//       description: "setTimeout and setInterval",
//       weekNo: 12,
//     },
//     {
//       id: "callback",
//       name: "Callback and anonymous functions",
//       weekNo: 12,
//     },
//     {
//       id: "template-literal",
//       name: "Template literal",
//       weekNo: 12,
//     },
//     {
//       id: "arrow",
//       name: "Arrow functions",
//       weekNo: 12,
//     },
//     {
//       id: "fetch",
//       name: "Fetch API",
//       weekNo: 13,
//     },
//     {
//       id: "promise",
//       name: "Promises",
//       description: "Using then/catch syntax",
//       weekNo: 13,
//     },
//     {
//       id: "fetch-delete",
//       name: "Implement add/delete with API",
//       description: `Catch API errors and display them
// Use forEach
// Use addEventListener
// Use select HTML tag
// `,
//       weekNo: 14,
//     },
//     {
//       id: "attr",
//       name: "Read HTML attributes",
//       weekNo: 14,
//     },
//     {
//       id: "local",
//       name: "LocalStorage",
//       weekNo: 14,
//     },
//     {
//       id: "weather",
//       name: "Fetch from weather API",
//       weekNo: 14,
//     },
  ],
};

export default javascriptCourse;
