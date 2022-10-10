import { Course } from "../../types/types";
import tags from "../tags";

const fundamentalCourse: Course = {
  id: "fundamental",
  name: "Web Fundamentals",
  tag: [tags.programming],
  color: "red",
  lessons: [
    {
      id: "w1a",
      weekNo: 1,
      name: "Computer hardware",
    },
    {
      id: "w1b",
      weekNo: 1,
      name: "Computer software",
    },
    {
      id: "w2a",
      weekNo: 2,
      name: "Computer networks",
    },
    {
      id: "w2b",
      weekNo: 3,
      name: "How Internet works?",
      resources: [
        {
          id: "1",
          label: "How does the Internet work?",
          url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work",
          type: "link",
        },
        {
          id: "2",
          label: "What are hyperlinks?",
          url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_hyperlinks",
          type: "link",
        },
        {
          id: "3",
          label: "What is a Domain Name?",
          url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_domain_name",
          type: "link",
        },
        {
          id: "4",
          label: "What is a URL?",
          url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL",
          type: "link",
        },
        {
          id: "5",
          label: "HTTP GET Method",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET",
          type: "link",
        },
        {
          id: "6",
          label: "HTTP POST Method",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST",
          type: "link",
        },
        {
          id: "7",
          label: "HTTP response status codes",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",
          type: "link",
        },
      ],
    },
    {
      id: "w6a",
      weekNo: 6,
      name: "What is Web?",
    },
    {
      id: "w7a",
      weekNo: 7,
      name: "What does backend mean?",
    },
    {
      id: "w10a",
      weekNo: 10,
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
      id: "w10b",
      weekNo: 10,
      name: "RESTful API",
    },
    {
      id: "w11a",
      weekNo: 11,
      name: "Linux",
    },
    {
      id: "w11b",
      weekNo: 11,
      name: "Running Linux in a virtual machine",
    },
    {
      id: "w12a",
      weekNo: 12,
      name: "Linux users and groups",
      resources: [
        {
          id: "1",
          label: "How to manage users and groups in Linux",
          url: "https://www.redhat.com/sysadmin/linux-user-group-management",
          type: "link",
        },
      ],
    },
    {
      id: "w12b",
      weekNo: 12,
      name: "Linux permissions",
      resources: [
        {
          id: "1",
          label:
            "How to manage Linux permissions for users, groups, and others",
          url: "https://www.redhat.com/sysadmin/manage-permissions",
          type: "link",
        },
      ],
    },
    {
      id: "w14b",
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
      id: "w14c",
      weekNo: 14,
      name: "Monitor processes",
      resources: [
        {
          id: "1",
          label: "ps(1)",
          url: "https://linux.die.net/man/1/ps",
          type: "link",
        },
        {
          id: "2",
          label: "Linux PS command with examples",
          url: "https://en.linuxteaching.com/article/linux_ps_command_with_examples",
          type: "link",
        },
      ],
    },
    {
      id: "w14d",
      weekNo: 14,
      name: "Terminate a process",
      resources: [
        {
          id: "1",
          label: "kill(1)",
          url: "https://linux.die.net/man/1/kill",
          type: "link",
        },
        {
          id: "2",
          label: "killall(1)",
          url: "https://linux.die.net/man/1/killall",
          type: "link",
        },
      ],
    },
    {
      id: "w14e",
      weekNo: 14,
      name: "Pipes",
      resources: [
        {
          id: "1",
          label: "pipeline in linux/unix with examples",
          url: "https://www.linuxcommands.site/linux-system-commands/pipeline-in-linux-unix-with-examples/",
          type: "link",
        },
        {
          id: "2",
          label: "How Do You Pipe the Output of a Command to a File in Linux",
          url: "https://linuxhint.com/how-do-you-pipe-the-output-of-a-command-to-a-file-in-linux/",
          type: "link",
        },
      ],
    },
    {
      id: "w14f",
      weekNo: 14,
      name: "grep",
      resources: [
        {
          id: "1",
          label: "How To Use grep Command In Linux/UNIX",
          url: "https://phoenixnap.com/kb/grep-command-linux-unix-examples",
          type: "link",
        },
      ],
    },
    {
      id: "w14g",
      weekNo: 14,
      name: "find",
      resources: [
        {
          id: "1",
          label: "How to Use the find Command in Linux",
          url: "https://www.howtogeek.com/771399/how-to-use-the-find-command-in-linux/",
          type: "link",
        },
      ],
    },
    {
      id: "w15a",
      weekNo: 15,
      name: "bash scripts",
      resources: [
        {
          id: "1",
          label: "How to Create and Use Bash Scripts",
          url: "https://www.taniarascia.com/how-to-create-and-use-bash-scripts/",
          type: "link",
        },
      ],
    },
    {
      id: "w15b",
      weekNo: 15,
      name: "Regular Expressions",
      resources: [
        {
          id: "1",
          label: "Linux Regular Expression",
          url: "https://www.educba.com/linux-regular-expression/",
          type: "link",
        },
      ],
    },
    {
      id: "w15c",
      weekNo: 15,
      name: "Environment Variables",
      resources: [
        {
          id: "1",
          label: "How to Set Environment Variables in Linux",
          url: "https://phoenixnap.com/kb/linux-set-environment-variable",
          type: "link",
        },
      ],
    },
    {
      id: "w16c",
      weekNo: 16,
      name: "Introduction to Python",
    },
  ],
};

export default fundamentalCourse;
