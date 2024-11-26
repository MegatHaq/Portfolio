import { Code, DatabaseZap, LucideProps, TestTube } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type Section = {
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  title: string;
  text: string;
};

export const section: Section[] = [
  {
    Icon: Code,
    title: "Web Development",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    Icon: TestTube,
    title: "Web Testing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    Icon: DatabaseZap,
    title: "Data Analysis",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export type Intro = {
  header: string;
  text: string;
};

export const intro: Intro = {
  header: "My name is Megat Abdul Haq.",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
};

export type NavItem = {
  label: string;
  url: string;
};

export const navItems: NavItem[] = [
  { label: "Home", url: "home" },
  { label: "About", url: "about" },
  { label: "Services", url: "#" },
  { label: "Portfolio", url: "#" },
  { label: "News", url: "#" },
  { label: "Label", url: "#" },
];

export type Card = {
  title: string;
  description: string;
};

export type EducationItem = {
  image: string;
  card: Card;
};

export const educationItem: EducationItem[] = [
  {
    image: "/images/kadir.jpg",
    card: {
      title: "SMKDHAK",
      description: "Located in Kepala Batas , Penang.",
    },
  },
  {
    image: "/images/dengkil.jpeg",
    card: {
      title: "Universiti Teknologi Mara",
      description: "Located in Dengkil.",
    },
  },
  {
    image: "/images/unisza.jpeg",
    card: {
      title: "Unisza Kampus Besut",
      description: "Located in Besut , Tembila.",
    },
  },
];

export type EducationDescription = {
  title: string;
  text: string;
  badge: string[];
  result: string;
};

export const educationDescription: EducationDescription[] = [
  {
    title: "SMK Datuk Haji Abdul Kadir",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.",

    badge: ["High School", "5 Years", "Science Stream"],
    result: "7A SPM",
  },
  {
    title: "Pusat Asasi Dengkil",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.",

    badge: ["Foundation", "1 Year", "Engineering Course"],
    result: "3.7 CGPA",
  },
  {
    title: "Universiti Sultan Zainal Abidin",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.",

    badge: ["Degree", "3 Years", "Software Development"],
    result: "3.83 CGPA",
  },
];

export type SkillItem = {
  title: string;
  description: string;
  content: string;
  skill: string[];
};

export const skillItem: SkillItem[] = [
  {
    title: "Frontend",
    description: "These are the skills I have for frontend.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    skill: ["NextJS", "ReactJS", "TailwindCSS"],
  },
  {
    title: "Backend",
    description: "These are the skills I have for backend.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    skill: ["Flask", "Express", "NodeJS"],
  },
  {
    title: "Database Related",
    description: "These are the skills I have related to Database.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    skill: ["MySQL", "Postgres"],
  },
  {
    title: "Requests",
    description: "These are the skills I used for making requests.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    skill: ["GrapqhQL", "Restful APIs", "Axios"],
  },
];

export type PageAboutItem = {
  trigger: string;
  content: string;
  value: string;
};

export const pageAboutItem: PageAboutItem[] = [
  {
    trigger: "How was this website developed?",
    content: "This website is developed using NextJS,ReactJS and TailwindCSS.",
    value: "index 1",
  },
  {
    trigger: "How was this website deployed?",
    content: "This website is currently being deployed via Vercel.",
    value: "index 2",
  },
  {
    trigger: "Who is the developer of the website?",
    content: "I , Megat Haq am the sole developer of the website.",
    value: "index 3",
  },
];
