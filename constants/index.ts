import { FaYoutube } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

/* ======================================================
   SKILLS SECTION (BEST POSITIONED – NO REPEAT)
   Layout: Row 1 (6) | Row 2 (5) | Row 3 (3)
====================================================== */

export const SKILL_DATA = {
  row1: [
    { skill_name: "React", image: "react.png", width: 80, height: 80 },
    { skill_name: "Next.js", image: "next.png", width: 80, height: 80 },
    { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
    { skill_name: "HTML", image: "html.png", width: 80, height: 80 },
    { skill_name: "CSS", image: "css.png", width: 80, height: 80 },
    { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80 },
  ],

  row2: [
    { skill_name: "Node.js", image: "node.png", width: 80, height: 80 },
    { skill_name: "Express.js", image: "express.png", width: 80, height: 80 },
    { skill_name: "MongoDB", image: "mongodb.png", width: 50, height: 50 },
    { skill_name: "Firebase", image: "firebase.png", width: 55, height: 55 },
    { skill_name: "GitHub", image: "github.png", width: 70, height: 70 },
  ],

  row3: [
    { skill_name: "Git", image: "git.png", width: 70, height: 70 },
    { skill_name: "Figma", image: "figma.png", width: 50, height: 50 },
    { skill_name: "Vercel", image: "vercel.png", width: 70, height: 70 },
  ],
};

/* ======================================================
   PROJECTS (FIRST & BEST – SLIDER READY)
====================================================== */

export const PROJECTS = [
  {
    title: "AI Trip Planner",
    description:
      "AI-powered trip planning application with Firebase authentication, smart destination recommendations, and itinerary generation.",
    image: "/projects/trip-planner.png",
    link: "#",
  },
  {
    title: "Smart Resume Builder",
    description:
      "Internship-focused resume builder with Firebase authentication, admin dashboard, and dynamic resume templates.",
    image: "/projects/resume-builder.png",
    link: "#",
  },
  {
    title: "3D Portfolio Website",
    description:
      "A modern space-themed 3D portfolio built using Next.js, animations, and responsive design.",
    image: "/projects/portfolio.png",
    link: "#",
  },
] as const;

/* ======================================================
   SOCIAL ICONS (USED IN NAVBAR)
====================================================== */

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/sohambhalekar18-bit",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com",
  },
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com",
  },
] as const;

/* ======================================================
   FOOTER DATA (BOTTOM SECTIONS)
====================================================== */

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/sohambhalekar18-bit",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "About Me",
        icon: null,
        link: "#about-me",
      },
      {
        name: "Contact",
        icon: null,
        link: "mailto:sohambhalekar@gmail.com",
      },
    ],
  },
] as const;

/* ======================================================
   NAVBAR LINKS
====================================================== */

export const NAV_LINKS = [
  { title: "About me", link: "#about-me" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
] as const;

/* ======================================================
   EXTRA LINKS
====================================================== */

export const LINKS = {
  sourceCode: "https://github.com/sohambhalekar18-bit",
};
