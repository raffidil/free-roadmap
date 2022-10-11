import { Course } from "../../types/types";
import tags from "../tags";

const fundamentalCourse: Course = {
  id: "fundamental",
  name: "Web Fundamentals",
  tag: [tags.programming],
  color: "orange",
  lessons: [
    {
      id: "w1a",
      weekNo: 1,
      name: "Introduction and acquaintance",
      
    },
    {
      id: "w1b",
      weekNo: 1,
      name: "Computer hardware",
      resources: [
        {
          id: "1",
          label: "System Information",
          url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work",
          type: "link",
        },
      ],
    },
    {
      id: "w2a",
      weekNo: 2,
      name: "Computer networks",
      resources: [
        {
          id: "1",
          label: "what is IP?",
          url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work",
          type: "link",
        },
      ],
    },
    {
      id: "w2b",
      weekNo: 3,
      name: "VM",
      resources: [
        {
          id: "1",
          label: "what is server?",
          url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work",
          type: "link",
        },
      ],
    },
    {
      id: "w4a",
      weekNo: 4,
      name: "Computer software",
      resources: [
        {
          id: "1",
          label: "What does backend mean",
          url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work",
          type: "link",
        },
        {
          id: "2",
          label: "What does frontend mean",
          url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work",
          type: "link",
        },
      ],
    },
    {
      id: "w5a",
      weekNo: 5,
      name: "Computer network",
      resources: [
        {
          id: "1",
          label: "what is API?",
          url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work",
          type: "link",
        },
      ],
    },
    {
      id: "w6a",
      weekNo: 6,
      name: "What is API?",
      resources: [
        {
          id: "1",
          label: "What is API",
          url: "https://www.ibm.com/cloud/learn/api",
          type: "link",
        },
      ],
    },
    {
      id: "w7b",
      weekNo: 7,
      name: "Computer software",
      resources: [
        {
          id: "1",
          label: "Security",
          url: "https://www.ibm.com/cloud/learn/api",
          type: "link",
        },
      ],
    },
    {
      id: "w10a",
      weekNo: 10,
      name: "Computer software",
      resources: [
        {
          id: "1",
          label: "OS",
          url: "https://www.ibm.com/cloud/learn/api",
          type: "link",
        },
      ],
    },
    {
      id: "w13a",
      weekNo: 13,
      name: "VM",
      resources: [
        {
          id: "1",
          label:
            "VPS",
          url: "https://www.redhat.com/sysadmin/manage-permissions",
          type: "link",
        },
        {
          id: "2",
          label:
            "SSH",
          url: "https://www.redhat.com/sysadmin/manage-permissions",
          type: "link",
        },
      ],
    },
    {
      id: "w14a",
      weekNo: 14,
      name: "Install packages using apt",
      resources: [
        {
          id: "1",
          label:
            "How to Use Apt-Get to Install Programs in Ubuntu from the Command Line",
          url: "https://www.howtogeek.com/63997/how-to-install-programs-in-ubuntu-in-the-command-line/",
          type: "link",
        },
      ],
    },
    {
      id: "w15a",
      weekNo: 15,
      name: "Linux",
      resources: [
        {
          id: "1",
          label: "Commands(1)",
          url: "https://linux.die.net/man/1/ps",
          type: "link",
        },
      ],
    },
    {
      id: "16a",
      weekNo: 16,
      name: "Linux",
      resources: [
        {
          id: "1",
          label: "Commands(2)",
          url: "https://linux.die.net/man/1/kill",
          type: "link",
        },
      ],
    },
    {
      id: "w17a",
      weekNo: 17,
      name: "Linux",
      resources: [
        {
          id: "1",
          label: "VIM",
          url: "https://www.linuxcommands.site/linux-system-commands/pipeline-in-linux-unix-with-examples/",
          type: "link",
        },
      ],
    },
  ],
};

export default fundamentalCourse;
