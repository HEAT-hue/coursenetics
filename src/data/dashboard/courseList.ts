// jshint esversion:6
import webImage from "../../assets/dashboard/coursepreview.jpg";
import tutorImg from "../../assets/dashboard/tutorImg.png"
import dbAdmin from "../../assets/dashboard/dbAdmin.jpg";
import cyberImg from "../../assets/dashboard/cyber.jpg";
import hardwareImg from "../../assets/dashboard/hardware.jpg";
import circuitImg from "../../assets/dashboard/circuit.jpg";
import devOPs from "../../assets/dashboard/devOps.jpg";
import robotImg from "../../assets/dashboard/devOps.jpg";

export type courseDataType = {
    id: string
    imagePreview: string
    title: string
    description: string
    descriptionPreview: string
    weeksDuration: number
    price: number
    level: string
    aboutCourse: string
    packages: string[]
    tutorName: string
    tutorImage: string
    courseDuration: { topic: string, duration: string }[]
}

export const courseDataList: courseDataType[] = [
    {
        id: "cs16133",
        imagePreview: robotImg,
        title: "Robotics",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimi .",
        descriptionPreview: "Learn the fundamnetals of robotics to be a robotics engineer!",
        weeksDuration: 6,
        price: 45,
        level: "Beginner",
        aboutCourse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        packages: ["File management", "HTML", "CSS", "Javascript", "Quiz", "Assesment", "Examination", "Project"],
        tutorName: "Fortunate Faayo",
        tutorImage: tutorImg,
        courseDuration: [{ topic: "Basic of HTML and CSS", duration: "12hrs 24mins" }, { topic: "Advanced HTML", duration: "1hrs 56mins" }, { topic: "Introduction to CSS", duration: "0hrs 96mins" }, { topic: "Intermediate CSS and frameworks", duration: "12hrs 24mins" }, { topic: "Advanced CSS", duration: "3hrs 03mins" }, { topic: "Introduction to Javascript", duration: "9hrs 32mins" }]
    },
    {
        id: "cs19890",
        imagePreview: webImage,
        title: "Web Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimi .",
        descriptionPreview: "Learn to be a fullstack developer",
        weeksDuration: 6,
        price: 45,
        level: "Beginner",
        aboutCourse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        packages: ["File management", "HTML", "CSS", "Javascript", "Quiz", "Assesment", "Examination", "Project"],
        tutorName: "Fortunate Faayo",
        tutorImage: tutorImg,
        courseDuration: [{ topic: "Basic of HTML and CSS", duration: "12hrs 24mins" }, { topic: "Advanced HTML", duration: "1hrs 56mins" }, { topic: "Introduction to CSS", duration: "0hrs 96mins" }, { topic: "Intermediate CSS and frameworks", duration: "12hrs 24mins" }, { topic: "Advanced CSS", duration: "3hrs 03mins" }, { topic: "Introduction to Javascript", duration: "9hrs 32mins" }]
    },
    {
        id: "cs6253",
        imagePreview: dbAdmin,
        title: "Database Admministration",
        descriptionPreview: "Maintain, secure your databases with this course",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimi .",
        weeksDuration: 6,
        price: 45,
        level: "Beginner",
        aboutCourse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        packages: ["File management", "HTML", "CSS", "Javascript", "Quiz", "Assesment", "Examination", "Project"],
        tutorName: "Fortunate Faayo",
        tutorImage: tutorImg,
        courseDuration: [{ topic: "Basic of HTML and CSS", duration: "12hrs 24mins" }, { topic: "Advanced HTML", duration: "1hrs 56mins" }, { topic: "Introduction to CSS", duration: "0hrs 96mins" }, { topic: "Intermediate CSS and frameworks", duration: "12hrs 24mins" }, { topic: "Advanced CSS", duration: "3hrs 03mins" }, { topic: "Introduction to Javascript", duration: "9hrs 32mins" }]
    },
    {
        id: "cs9761",
        imagePreview: cyberImg,
        title: "Ethical Hacking",
        descriptionPreview: "Start with the basics of ethical hacking",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimi .",
        weeksDuration: 6,
        price: 45,
        level: "Beginner",
        aboutCourse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        packages: ["File management", "HTML", "CSS", "Javascript", "Quiz", "Assesment", "Examination", "Project"],
        tutorName: "Fortunate Faayo",
        tutorImage: tutorImg,
        courseDuration: [{ topic: "Basic of HTML and CSS", duration: "12hrs 24mins" }, { topic: "Advanced HTML", duration: "1hrs 56mins" }, { topic: "Introduction to CSS", duration: "0hrs 96mins" }, { topic: "Intermediate CSS and frameworks", duration: "12hrs 24mins" }, { topic: "Advanced CSS", duration: "3hrs 03mins" }, { topic: "Introduction to Javascript", duration: "9hrs 32mins" }]
    },
    {
        id: "cs3181",
        imagePreview: hardwareImg,
        title: "Computer Hardware Troubleshooting",
        descriptionPreview: "Troubleshoot and repair different computer hardware parts",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimi .",
        weeksDuration: 6,
        price: 45,
        level: "Beginner",
        aboutCourse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        packages: ["File management", "HTML", "CSS", "Javascript", "Quiz", "Assesment", "Examination", "Project"],
        tutorName: "Fortunate Faayo",
        tutorImage: tutorImg,
        courseDuration: [{ topic: "Basic of HTML and CSS", duration: "12hrs 24mins" }, { topic: "Advanced HTML", duration: "1hrs 56mins" }, { topic: "Introduction to CSS", duration: "0hrs 96mins" }, { topic: "Intermediate CSS and frameworks", duration: "12hrs 24mins" }, { topic: "Advanced CSS", duration: "3hrs 03mins" }, { topic: "Introduction to Javascript", duration: "9hrs 32mins" }]
    },
    {
        id: "cs31896",
        imagePreview: circuitImg,
        title: "Circuit Assembly",
        descriptionPreview: "Build and assemble circuits with their prototypes",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimi .",
        weeksDuration: 6,
        price: 45,
        level: "Beginner",
        aboutCourse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        packages: ["File management", "HTML", "CSS", "Javascript", "Quiz", "Assesment", "Examination", "Project"],
        tutorName: "Fortunate Faayo",
        tutorImage: tutorImg,
        courseDuration: [{ topic: "Basic of HTML and CSS", duration: "12hrs 24mins" }, { topic: "Advanced HTML", duration: "1hrs 56mins" }, { topic: "Introduction to CSS", duration: "0hrs 96mins" }, { topic: "Intermediate CSS and frameworks", duration: "12hrs 24mins" }, { topic: "Advanced CSS", duration: "3hrs 03mins" }, { topic: "Introduction to Javascript", duration: "9hrs 32mins" }]
    },
]