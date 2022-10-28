import { Course } from "../../types/types";
import tags from "../tags";

const fundamentalCourse: Course = {
  id: "fundamental",
  name: "Web Fundamentals",
  tag: [tags.programming],
  color: "orange",
  lessons: [
    
    {
      id: "intro",
      name: "Introduction and acquaintance",
      weekNo: 1,
    },
    {
      id: "hardware",
      weekNo: 2,
      name: "Computer hardware",
      resources: [
        {
          id: "slide1",
          label: "Computer hardware slide",
          description: "please go to website",
          url:"",
          type: "slide",
        },
        {
          id: "video1",
          label: "Computer hardware video",
          description: "please go to website",
          url:"",
          type: "video",
        },
      ],
      exercises: [
        {
          id: "assignment",
          label: "Journal",
          url: "",
          type: "file",
        },
      ],
    },
    {
      id: "hardware-a",
      name: "what is a computer?",
      weekNo: 2,
    },
    {
      id: "hardware-b",
      name: "Input / Output devices of the computer.",
      weekNo: 2,
    },
    {
      id: "hardware-c",
      name: "Part of important component of the computer.",
      weekNo: 2,
    },
    {
      id: "hardware-d",
      name: "Manage & Monitoring process of system.",
      weekNo: 2,
    },
    {
      id: "math",
      name: "Math",
      weekNo: 3,
      resources: [
        {
          id: "video2",
          label: "Math video",
          url: "",
          type: "video",
        },
      ],
    },
    {
      id: "math-a",
      name: "Basic - binary operation.",
      weekNo: 3,
    },
    {
      id: "math-aa",
      name: "Math",
      weekNo: 4,
      resources: [
        {
          id: "video3",
          label: "Math video",
          url: "",
          type: "video",
        },
      ],
      exercises: [
        {
          id: "assignment-a",
          label: "Assignment",
          url: "",
          type: "file",
        },
      ],
    },
    {
      id: "math-a",
      name: "if and or xor not.",
      weekNo: 4,
    },
    {
      id: "network",
      name: "Network",
      weekNo: 5,
      resources: [
        {
          id: "slide2",
          label: "Network slide",
          description: "please go to website",
          url:"",
          type: "slide",
        },
        {
          id: "video4",
          label: "Network video",
          description: "please go to website",
          url:"",
          type: "video",
        },
      ],
      exercises: [
        {
          id: "assignment",
          label: "Journal",
          url: "",
          type: "file",
        },
        {
          id: "assignment-a",
          label: "Discussion forum",
          url: "",
          type: "file",
        },
      ],
    },
    {
      id: "vm",
      name: "Server",
      weekNo: 6,
      resources: [
        {
          id: "slide3",
          label: "Server silde",
          description: "please go to website",
          url:"",
          type: "slide",
        },
        {
          id: "video5",
          label: "server video",
          description: "please go to website",
          url:"",
          type: "video",
        },
      ],
      exercises: [
        {
          id: "assignment",
          label: "Journal",
          url: "",
          type: "file",
        },
        {
          id: "assignment-a",
          label: "Discussion forum",
          url: "",
          type: "file",
        },
      ],
    },
    {
      id: "network-a",
      name: "http/https",
      weekNo: 7,
      resources: [
        {
          id: "slide4",
          label: "Http/Https silde",
          description: "please go to website",
          url:"",
          type: "slide",
        },
        {
          id: "video6",
          label: "Http/Https video",
          description: "please go to website",
          url:"",
          type: "video",
        },
      ],
      exercises: [
        {
          id: "assignment",
          label: "Journal",
          url: "",
          type: "file",
        },
        {
          id: "assignment-a",
          label: "Discussion forum",
          url: "",
          type: "file",
        },
      ],
      
    },
    {
      id: "sw",
      weekNo: 8,
      name: "Backend/Frontend",
      resources: [
        {
          id: "slide5",
          label: "Backend/Frontend silde",
          description: "please go to website",
          url:"",
          type: "slide",
        },
        {
          id: "video6",
          label: "Backend/Frontend video",
          description: "please go to website",
          url:"",
          type: "video",
        },
      ],
      exercises: [
        {
          id: "assignment",
          label: "Journal",
          url: "",
          type: "file",
        },
        {
          id: "assignment-a",
          label: "Discussion forum",
          url: "",
          type: "file",
        },
      ],
    },
    {
      id: "network-c",
      name: "What is API?",
      weekNo: 10,
      resources: [
        {
          id: "slide6",
          label: "What is API? silde",
          description: "please go to website",
          url:"",
          type: "slide",
        },
        {
          id: "video7",
          label: "What is API? video",
          description: "please go to website",
          url:"",
          type: "video",
        },
      ],
      exercises: [
        {
          id: "assignment",
          label: "Journal",
          url: "",
          type: "file",
        },
        {
          id: "assignment-a",
          label: "Discussion forum",
          url: "",
          type: "file",
        },
      ],
    },
    {
      id: "sw-a",
      name: "Operation system",
      weekNo: 11,
      resources: [
        {
          id: "slide7",
          label: "Operation system silde",
          description: "please go to website",
          url:"",
          type: "slide",
        },
        {
          id: "video8",
          label: "Operation system video",
          description: "please go to website",
          url:"",
          type: "video",
        },
      ],
      exercises: [
        {
          id: "assignment",
          label: "Journal",
          url: "",
          type: "file",
        },
        {
          id: "assignment-a",
          label: "Discussion forum",
          url: "",
          type: "file",
        },
      ],
    },
    {
      id: "sw-b",
      name: "Security",
      weekNo: 12,
      resources: [
        {
          id: "slide8",
          label: "Security silde",
          description: "please go to website",
          url:"",
          type: "slide",
        },
        {
          id: "video9",
          label: "Security video",
          description: "please go to website",
          url:"",
          type: "video",
        },
      ],
      exercises: [
        {
          id: "assignment",
          label: "Journal",
          url: "",
          type: "file",
        },
        {
          id: "assignment-a",
          label: "Discussion forum",
          url: "",
          type: "file",
        },
      ],
    },
    {
      id: "vm-a",
      name: "VPS & SSH",
      weekNo: 13,
      resources: [
        {
          id: "slide9",
          label: "VPS & SSH silde",
          description: "please go to website",
          url:"",
          type: "slide",
        },
        {
          id: "video10",
          label: "VPS & SSH video",
          description: "please go to website",
          url:"",
          type: "video",
        },
      ],
      exercises: [
        {
          id: "assignment",
          label: "Journal",
          url: "",
          type: "file",
        },
        {
          id: "assignment-a",
          label: "Discussion forum",
          url: "",
          type: "file",
        },
      ],
    },
    {
      id: "linux",
      name: "Familiarity with Linux commands - 1",
      weekNo: 14,
      resources: [
        {
          id: "slide10",
          label: "Familiarity with Linux commands silde",
          description: "please go to website",
          url:"",
          type: "slide",
        },
        {
          id: "video11",
          label: "Familiarity with Linux commands video",
          description: "please go to website",
          url:"",
          type: "video",
        },
      ],
      exercises: [
        {
          id: "assignment",
          label: "Journal",
          url: "",
          type: "file",
        },
        {
          id: "assignment-a",
          label: "Discussion forum",
          url: "",
          type: "file",
        },
      ],
      
    },
    {
      id: "linux-a",
      name: "Familiarity with Linux commands - 2",
      weekNo: 15,
      resources: [
        {
          id: "slide12",
          label: "Familiarity with Linux commands silde",
          description: "please go to website",
          url:"",
          type: "slide",
        },
        {
          id: "video13",
          label: "Familiarity with Linux commands video",
          description: "please go to website",
          url:"",
          type: "video",
        },
      ],
      exercises: [
        {
          id: "assignment",
          label: "Journal",
          url: "",
          type: "file",
        },
        {
          id: "assignment-a",
          label: "Discussion forum",
          url: "",
          type: "file",
        },
      ],
    },
    {
      id: "linux-b",
      name: "VIM editor",
      weekNo: 16,
      resources: [
        {
          id: "slide12",
          label: "VIM editor silde",
          description: "please go to website",
          url:"",
          type: "slide",
        },
        {
          id: "video13",
          label: "VIM editor video",
          description: "please go to website",
          url:"",
          type: "video",
        },
      ],
      exercises: [
        {
          id: "assignment",
          label: "Journal",
          url: "",
          type: "file",
        },
        {
          id: "assignment-a",
          label: "Discussion forum",
          url: "",
          type: "file",
        },
      ],
    },
    {
      id: "vm-b",
      name: "Nginx",
      weekNo: 17,
      resources: [
        {
          id: "slide13",
          label: "Nginx silde",
          description: "please go to website",
          url:"",
          type: "slide",
        },
        {
          id: "video14",
          label: "Nginx video",
          description: "please go to website",
          url:"",
          type: "video",
        },
      ],
      exercises: [
        {
          id: "assignment",
          label: "Journal",
          url: "",
          type: "file",
        },
        {
          id: "assignment-a",
          label: "Discussion forum",
          url: "",
          type: "file",
        },
      ],
    },
  ],
};

export default fundamentalCourse;
