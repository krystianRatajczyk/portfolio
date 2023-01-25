import github from "../assets/icons/github.png";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import react_image from "../assets/images/react.png";
import html from "../assets/images/html.png";
import JavaScript from "../assets/images/javascript.png";
import Cpp from "../assets/images/cpp.png";
import python from "../assets/images/python.png";
import project from "../assets/images/2.png";
import css from "../assets/images/css.png";
import tailwind from "../assets/images/tailwind.png";
import nextjs from "../assets/images/nextjs.png";
import mars from "../assets/images/3.png";

export const skills = [
  { id: 1, title: "CSS", image: css, color: "", level: "intermediate" },
  { id: 2, title: "HTML", image: html, color: "", level: "intermediate" },
  {
    id: 3,
    title: "JavaScript",
    image: JavaScript,
    color: "",
    level: "intermediate",
  },
  {
    id: 4,
    title: "React",
    image: react_image,
    color: "",
    level: "intermediate",
  },
  {
    id: 5,
    title: "Tailwind",
    image: tailwind,
    color: "",
    level: "intermediate",
  },
  { id: 6, title: "Next", image: nextjs, color: "", level: "intermediate" },
  { id: 7, title: "Github", image: github, color: "", level: "intermediate" },
  { id: 8, title: "Python", image: python, color: "", level: "intermediate" },
  { id: 9, title: "C++", image: Cpp, color: "", level: "intermediate" },
];

export const projects = [
  { id: 1, title: "Project 1", image: mars, githublink: "", previewlink: "" },
  { id: 2, title: "Project 2", image: "", githublink: "", previewlink: "" },
  {
    id: 3,
    title: "Project 3",
    image: project,
    githublink: "",
    previewlink: "",
  },
  { id: 4, title: "Project 4", image: "", githublink: "", previewlink: "" },
  { id: 5, title: "Project 5", image: mars, githublink: "", previewlink: "" },
  { id: 6, title: "Project 6", image: "", githublink: "", previewlink: "" },
];

export const aboutContent = {
  Skills: "This is my skills ...",
  Experience: "This is my experience...",
  ExperienceDescription:
    "This is my experience description...Esse cillum cillum dolor consequat",
};

export const navLinks = [
  {
    id: 0,
    name: "Home",
  },
  {
    id: 1,
    name: "Skills",
  },
  {
    id: 2,
    name: "Projects",
  },
  {
    id: 3,
    name: "Let's Talk",
    scrollId: "contact",
  },
];

export const skillsLinks = [
  { id: 0, name: "Skills" },
  { id: 1, name: "Experience" },
  { id: 2, name: "Education" },
];

export const socialMedia = [
  { id: 0, href: "https://github.com/krystianRatajczyk", img: github },
  {
    id: 1,
    href: "https://www.facebook.com/krystian.ratajczyk.12/",
    img: facebook,
  },
  {
    id: 2,
    href: "https://www.instagram.com/krystian_ratajczyk/",
    img: instagram,
  },
];
