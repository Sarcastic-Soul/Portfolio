import { Trophy, Target, Code2, Terminal, Cpu, Github, Linkedin, Mail } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
];

export const socialLinks = [
  { icon: Github, href: "https://github.com/Sarcastic-Soul", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/anish-kumar-852397290/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:anishisbusy@gmail.com", label: "Email" },
];

export const projects = [
  {
    title: "MERN ChatApp",
    description:
      "A real-time chat application with Socket.IO, featuring glassmorphism UI and comprehensive messaging features (Featured)",
      image: `${basePath}/projects/mern-chat-app.png`,
    technologies: ["Socket.IO", "React", "Express.js", "MongoDB", "Cloudinary"],
    github: "https://github.com/Sarcastic-Soul/socket-chat",
    demo: "https://socket-chat-nine-tau.vercel.app/",
  },
  {
    title: "Converso - Voice LMS",
    description:
      "A voice-based Learning Management System (LMS) for interactive learning experiences",
    image: `${basePath}/projects/voice-lms.png`,
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Clerk",
      "Google Gemini",
    ],
    github: "https://github.com/Sarcastic-Soul/Voice-LMS",
    demo: "https://voice-lms.vercel.app/",
  },
  {
    title: "ASCII Art Generator",
    description: "A tool for generating ASCII art from images.",
    image: `${basePath}/projects/ascii-art.png`,
    technologies: ["Next.js", "TypeScript", "NeonDB", "Clerk", "Drizzle ORM"],
    github: "https://github.com/Sarcastic-Soul/ascii-art-saas",
    demo: "https://ascii-art-saas.vercel.app/",
  },
  {
    title: "Brutshop - E-commerce Platform",
    description:
      " A Neo-brutalist e-commerce app built with Spring Boot and React",
    image: `${basePath}/projects/springboot-ecommerce.png`,
    technologies: ["Spring Boot", "React", "Supabase", "Cloudinary", "Docker"],
    github: "https://github.com/Sarcastic-Soul/E-commerce-Sprinboot",
    demo: "https://springboot-ecommerce-latest-ctgu.onrender.com/",
  },
  {
    title: "AI PDF Chat App",
    description: "AI chatbot for chatting with large PDFs using RAG.",
    image: `${basePath}/projects/pdf-chat-app.png`,
    technologies: [
      "Deepseek",
      "Qdrant",
      "BullMQ",
      "Next.js",
      "TypeScript",
      "ShadCN",
    ],
    github: "https://github.com/Sarcastic-Soul/AI-PDF-ChatApp",
  },
  {
    title: "MindEase",
    description:
      "A mental health platform offering self-assessment tools, meditation resources, and AI-driven support.",
    image: `${basePath}/projects/mindease.png`,
    technologies: ["Next.js", "MongoDB", "Google Gemini"],
    github: "https://github.com/Sarcastic-Soul/mindease",
    demo: "https://mindease-ruddy.vercel.app/",
  },
];

export const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Java", "Python", "HTML", "CSS", "SQL"],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
      "ShadCN",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Spring Boot",
      "MongoDB",
      "PostgreSQL",
      "Supabase",
      "Firebase",
      "Appwrite",
    ],
  },
  {
    title: "Tools & Cloud",
    skills: [
      "Git",
      "Docker",
      "Kubernetes",
      "Clerk",
      "Cloudinary",
      "React Native",
    ],
  },
];

export const achievements = [
  {
    icon: Trophy,
    title: "Hackathon Winner",
    description:
      "2nd runner-up in E-cell Hackathon 2025 (Inter college Hackathon)",
    category: "Competition",
  },
  {
    icon: Target,
    title: "700+ Problems Solved",
    description: "Solved over 700 problems on various coding platforms.",
    category: "Problem Solving",
  },
];

export const codingProfiles = [
  {
    platform: "LeetCode",
    icon: Code2,
    username: "Sarcastic_Soul",
    stats: {
      "Problems Solved": "350+",
      "Global Rank": "Top 15%",
      "Contest Rating": "1450",
    },
    link: "https://leetcode.com/u/Sarcastic_Soul/",
    color: "text-yellow-600 dark:text-yellow-500",
  },
  {
    platform: "Codeforces",
    icon: Terminal,
    username: "Sarcastic_Soul",
    stats: {
      Rating: "1000+",
      Rank: "Newbie",
      "Problems Solved": "250+",
    },
    link: "https://codeforces.com/profile/Sarcastic_Soul",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    platform: "CodeChef",
    icon: Cpu,
    username: "anish_kumar_1",
    stats: {
      "Star Rating": "2★",
      "Global Rank": "Top 20%",
      "Highest Rating": "1500",
    },
    link: "https://www.codechef.com/users/anish_kumar_1",
    color: "text-orange-600 dark:text-orange-500",
  },
];
