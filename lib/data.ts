import { Trophy, Target, Code2, Terminal, Cpu, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const navItems = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
];

export const RESUME_LINK = "https://drive.google.com/file/d/1C5Lt3JL2GDQHJha5d4Pp3h1uKCnQkfv2/view";

export const socialLinks = [
  { icon: Github, href: "https://github.com/Sarcastic-Soul", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/anish-kumar-852397290/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:anishisbusy@gmail.com", label: "Email" },
];

export const experiences = [
  {
    company: "Samsung PRISM R&D Institute",
    role: "R&D Intern",
    location: "Bangalore, Karnataka",
    period: "November 2025 – Present",
    bullets: [
      "Architected 'Guide Weave,' an AI-powered visual guide generator using a Multimodal RAG pipeline and ChromaDB to retrieve contextual text and extracted manual images.",
      "Integrated a locally deployed LLM for secure generation and engineered custom benchmarking pipelines to optimize retrieval accuracy and minimize inference latency.",
    ],
    tech: ["Multimodal RAG", "ChromaDB", "Local LLM", "Python", "Benchmarking"],
  },
  {
    company: "Aparsoft Private Limited",
    role: "Software Engineering Intern",
    location: "Bangalore, Karnataka (Remote)",
    period: "June 2026 – Present",
    bullets: [
      "Contributing to an educational full-stack AI chatbot platform (Django REST Framework, Next.js, LangChain/LangGraph).",
      "Debugging and resolving issues in the Next.js frontend within a RAG-based architecture using PostgreSQL (pgvector) and Redis.",
    ],
    tech: ["Next.js", "Django REST", "LangChain", "PostgreSQL (pgvector)", "Redis"],
  },
];

export const openSourceContributions = [
  {
    project: "Activity Frames",
    repo: "nossa-y/activity-frames",
    role: "Open Source Contributor",
    location: "GitHub (Remote)",
    period: "2026",
    link: "https://github.com/nossa-y/activity-frames/",
    bullets: [
      "Contributed open-source code enhancements to 'activity-frames' (powering Nocta), compiling local screen activity into structured frames for AI agents.",
      "Worked with Python, Model Context Protocol (MCP), and session compilation logic to enable zero-token workflow replay and agent context generation.",
    ],
    tech: ["Python", "MCP", "SQLite", "React", "TypeScript", "GitHub"],
  },
];

export const projects = [
  {
    title: "MERN ChatApp",
    category: "Full Stack",
    description:
      "A real-time chat platform with WebRTC video/voice calls, private/group messaging, media sharing, reactions, AI smart replies, and IndexedDB SWR caching (45% faster load).",
    image: "https://image.thum.io/get/width/800/https://socket-chat-nine-tau.vercel.app/",
    technologies: ["React", "Express.js", "MongoDB", "Socket.IO", "WebRTC", "Zustand", "IndexedDB"],
    github: "https://github.com/Sarcastic-Soul/socket-chat",
    demo: "https://socket-chat-nine-tau.vercel.app/",
  },
  {
    title: "SyllabAI",
    category: "AI / RAG",
    description:
      "An AI-powered course generator converting topics/PDFs into structured learning courses using Google Gemini API and Next.js Server Actions with PostgreSQL.",
    image: "https://image.thum.io/get/width/800/https://syllab-ai-sarcastic-soul.vercel.app/",
    technologies: ["Next.js 16", "PostgreSQL (Neon)", "Drizzle ORM", "Clerk", "Gemini AI"],
    github: "https://github.com/Sarcastic-Soul/SyllabAI",
    demo: "https://syllab-ai-sarcastic-soul.vercel.app/",
  },
  {
    title: "Radish - In-Memory Database",
    category: "Systems & Backend",
    description:
      "A Redis-compatible in-memory database built from scratch in Java using an event-driven I/O model (Java NIO Selector), custom RESP parser (~165K req/sec), and AOF persistence.",
    image: "https://image.thum.io/get/width/800/https://github.com/Sarcastic-Soul/Radish",
    technologies: ["Java", "Java NIO", "RESP Protocol", "ConcurrentHashMap", "TCP Sockets", "AOF Persistence"],
    github: "https://github.com/Sarcastic-Soul/Radish",
  },
  {
    title: "URL Shortener - Industry-Grade Platform",
    category: "Systems & Backend",
    description:
      "Full-stack URL shortening platform with Nginx load balancing (3 backend instances), MaxMind GeoIP2 analytics, Redis rate limiting, and Prometheus/Grafana observability.",
    image: "https://image.thum.io/get/width/800/https://github.com/Sarcastic-Soul/springboot-url-shortner",
    technologies: ["Spring Boot 3", "React", "PostgreSQL", "Redis", "Docker", "Nginx", "Prometheus", "Grafana"],
    github: "https://github.com/Sarcastic-Soul/springboot-url-shortner",
  },
  {
    title: "BrutShop - E-commerce Platform",
    category: "Full Stack",
    description:
      "Neo-brutalist e-commerce platform with JWT-based RBAC, Razorpay payments, Redis caching (<200ms responses), Cloudinary media, and automated CI/CD pipelines.",
    image: "https://image.thum.io/get/width/800/https://springboot-ecommerce-latest-ctgu.onrender.com/",
    technologies: ["Spring Boot 3", "React", "PostgreSQL", "Redis", "Cloudinary", "Docker", "Razorpay"],
    github: "https://github.com/Sarcastic-Soul/E-commerce-Sprinboot",
    demo: "https://springboot-ecommerce-latest-ctgu.onrender.com/",
  },
  {
    title: "Guide Weave (Samsung PRISM R&D)",
    category: "AI / RAG",
    description:
      "AI-powered visual guide generator using a Multimodal RAG pipeline and ChromaDB with locally deployed LLMs and custom benchmarking pipelines.",
    image: "https://image.thum.io/get/width/800/https://github.com/LakraAnshul/Samsung_Prism",
    technologies: ["Multimodal RAG", "ChromaDB", "Local LLM", "Python", "Benchmarking Pipelines"],
    github: "https://github.com/LakraAnshul/Samsung_Prism",
  },
];

export const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript", "TypeScript", "Python", "HTML", "CSS", "SQL", "MySQL"],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/UI",
      "Zustand",
      "WebRTC",
      "Socket.IO",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Spring Boot",
      "Spring Security",
      "JPA/Hibernate",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Django REST",
      "LangChain/LangGraph",
      "Kafka",
      "RabbitMQ",
    ],
  },
  {
    title: "Databases",
    skills: [
      "MongoDB",
      "PostgreSQL (pgvector)",
      "Redis",
      "Supabase",
      "ChromaDB",
      "Multimodal RAG",
      "Drizzle ORM",
      "NeonDB",
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "GCP",
      "Terraform",
      "Helm",
      "Ansible",
      "Jenkins",
      "Nginx",
      "Vercel",
      "Ubuntu",
      "Linux",
    ],
  },
  {
    title: "Testing & Observability",
    skills: [
      "Postman",
      "Vitest",
      "JUnit/Mockito",
      "Prometheus",
      "Grafana",
      "Loki",
      "Datadog",
      "K6",
    ],
  },
  {
    title: "Tools",
    skills: ["Git", "Maven", "JWT", "Razorpay", "Cloudinary"],
  },
];

export const achievements = [
  {
    icon: Trophy,
    title: "600+ DSA Problems Solved",
    description: "Solved 600+ data structures and algorithms problems on LeetCode & Codeforces (1300+ rating).",
    category: "Problem Solving",
  },
  {
    icon: Target,
    title: "Hackathon Winner",
    description: "Won E-Cell Hackathon (inter-college), building competitive full-stack solutions under tight time constraints.",
    category: "Competition",
  },
  {
    icon: Code2,
    title: "Coding Club Core Member",
    description: "Organized a 3-day coding fest featuring 13 events with over 200+ active participants.",
    category: "Leadership & POR",
  },
];

export const certifications = [
  {
    icon: Trophy,
    title: "Oracle Data Platform 2025 Certified Foundations Associate",
    description: "Official certification validating foundational knowledge of core Oracle Data Management services, databases, and cloud data solutions.",
    category: "Oracle Certified",
    badgeImage: "https://brm-workforce.oracle.com/pdf/certview/images/OCI25DCFAV2.png",
    verifyUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=5C0E219F2193E91F3B5F545705B067F53C473829CE03CA826F8762A832A2410A",
  },
  {
    icon: Trophy,
    title: "Postman API Fundamentals Student Expert",
    description: "Awarded Mar 7, 2025. Certification verifying expertise in API development, testing, and documentation with Postman.",
    category: "Certification",
    badgeImage: "https://api.badgr.io/public/assertions/LHO5EhdSTIaKZLaIcLUU9Q/image",
    verifyUrl: "https://badgecheck.io?url=https%3A%2F%2Fapi.badgr.io%2Fpublic%2Fassertions%2FLHO5EhdSTIaKZLaIcLUU9Q%3Fidentity__email%3Danishisbusy%2540gmail.com&identity__email=anishisbusy@gmail.com",
  },
  {
    icon: Trophy,
    title: "Holopin Badges",
    description: "Verified developer badges and open-source contributions on Holopin.",
    category: "Open Source",
    badgeImage: "https://holopin.me/sarcasticsoul",
    verifyUrl: "https://holopin.io/@sarcasticsoul",
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
      "Contest Rating": "1450+",
    },
    link: "https://leetcode.com/u/Sarcastic_Soul/",
    color: "text-yellow-600 dark:text-yellow-500",
  },
  {
    platform: "Codeforces",
    icon: Terminal,
    username: "Sarcastic_Soul",
    stats: {
      Rating: "1300+",
      Rank: "Pupil / Contestant",
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
