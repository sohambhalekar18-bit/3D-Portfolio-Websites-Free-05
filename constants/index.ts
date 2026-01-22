import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

/* ======================================================
   MAIN SKILLS (TOP / BEST POSITION – YOUR IDENTITY)
   ====================================================== */

export const SKILL_DATA = [
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
] as const;

/* ======================================================
   FRONTEND SKILLS
   ====================================================== */

export const FRONTEND_SKILL = [
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
] as const;

/* ======================================================
   BACKEND SKILLS
   ====================================================== */

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
] as const;

/* ======================================================
   TOOLS / PLATFORM SKILLS (LEVEL 2 – EASY & VALID)
   ====================================================== */

export const FULLSTACK_SKILL = [
  {
    skill_name: "Git",
    image: "git.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "GitHub",
    image: "github.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "Vercel",
    image: "vercel.png",
    width: 55,
    height: 55,
  },
] as const;

/* ======================================================
   PROJECTS (KEEP AS IS – YOU CAN EDIT LATER)
   ====================================================== */

export const PROJECTS = [
  {
    title: "Modern Next.js Portfolio",
    description:
      "A modern 3D portfolio built with Next.js and Tailwind CSS.",
    image: "/projects/project-1.png",
    link: "#",
  },
] as const;

/* ======================================================
   FOOTER & SOCIALS
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
] as const;

/* ======================================================
   NAVIGATION
   ====================================================== */

export const NAV_LINKS = [
  { title: "About me", link: "#about-me" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sohambhalekar18-bit",
};
