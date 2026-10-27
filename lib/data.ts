import { EnvelopeSimpleIcon } from "@phosphor-icons/react/ssr";
import { Github, Linkedin } from "@/components/icons";


export const SITE_URL = "https://anish-k.vercel.app";
export const EMAIL = "anishisbusy@gmail.com";

export const navItems = [
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export const RESUME_LINK = "https://drive.google.com/file/d/1C5Lt3JL2GDQHJha5d4Pp3h1uKCnQkfv2/view";

export const socialLinks = [
  { icon: Github, href: "https://github.com/Sarcastic-Soul", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/anish-kumar-852397290/",
    label: "LinkedIn",
  },
  { icon: EnvelopeSimpleIcon, href: `mailto:${EMAIL}`, label: "Email" },
];

export const experiences = [
  {
    company: "Samsung PRISM R&D Institute",
    role: "R&D Intern",
    location: "Bangalore, Karnataka (Remote)",
    period: "October 2025 – August 2026",
    certificate: "https://drive.google.com/file/d/1K1s2R5DibTPhC9Yc4dGwsNVBW6LCKZhW/view",
    certificateImage: "/certs/prism-internship.webp",
    bullets: [
      "Built Guide Weave, an AI tool that turns product manuals into step-by-step visual guides, using a multimodal RAG pipeline with ChromaDB to pull matching text and images from the manuals.",
      "Ran the LLM locally so no data left the machine, and wrote benchmarks to raise retrieval accuracy and cut response time.",
    ],
    tech: ["Multimodal RAG", "ChromaDB", "Local LLM", "Python", "Benchmarking"],
  },
  {
    company: "Aparsoft Private Limited",
    role: "Software Engineering Intern",
    location: "Bangalore, Karnataka (Remote)",
    period: "June 2026 – August 2026",
    certificate: "https://drive.google.com/file/d/1mFYXIqGJotL_iXloaLr13juR-zpmkH85/view",
    certificateImage: "/certs/aparsoft-internship.webp",
    bullets: [
      "12-week internship in full-stack and agentic AI work on an educational AI chatbot platform (Django REST Framework, Next.js, LangChain/LangGraph).",
      "Found and fixed bugs in the Next.js frontend of a RAG system backed by PostgreSQL (pgvector) and Redis.",
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
      "Contributed to activity-frames (the engine behind Nocta), which turns local screen activity into structured frames that AI agents can read.",
      "Worked on the Python and Model Context Protocol (MCP) code that compiles sessions, so agents can replay a workflow and build context without spending tokens.",
    ],
    tech: ["Python", "MCP", "SQLite", "React", "TypeScript", "GitHub"],
  },
];

export type ProjectCategory = "Systems" | "AI" | "Full Stack" | "Mobile";

export type TerminalLine = {
  // cmd: typed at the prompt, out: plain output, ok: success, dim: comment
  kind?: "cmd" | "out" | "ok" | "dim";
  text: string;
};

export type ProjectPreview =
  | { kind: "browser"; src: string; url: string; alt: string }
  | { kind: "phone"; srcs: { src: string; alt: string }[] }
  | { kind: "terminal"; title: string; lines: TerminalLine[] };

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  tagline: string;
  description: string;
  highlights: string[];
  technologies: string[];
  github: string;
  demo?: string;
  demoNote?: string;
  download?: { label: string; href: string };
  video?: string;
  featured?: boolean;
  preview: ProjectPreview;
};

export const projects: Project[] = [
  {
    slug: "radish",
    title: "Radish",
    category: "Systems",
    year: "2026",
    tagline: "A Redis-compatible server written from scratch in Java.",
    description:
      "Speaks RESP2 and RESP3, so redis-cli and normal Redis client libraries connect to it unchanged. A single Java NIO event loop serves every client, and a background thread handles AOF writes so the hot path never waits on disk.",
    highlights: [
      "~175K GET/s and ~144K SET/s on redis-benchmark (50 clients, AOF on)",
      "Leader–replica replication, AOF and RDB persistence, pub/sub, transactions",
      "No third-party dependencies, only the JDK",
    ],
    technologies: ["Java", "Java NIO", "RESP Protocol", "TCP Sockets", "AOF Persistence", "Docker"],
    github: "https://github.com/Sarcastic-Soul/Radish",
    featured: true,
    preview: {
      kind: "browser",
      src: `/previews/radish-dashboard.webp`,
      url: "localhost:6380 / radish dashboard",
      alt: "Radish web dashboard listing the keys stored on a running server",
    },
  },
  {
    slug: "codemon",
    title: "Codemon",
    category: "AI",
    year: "2026",
    tagline: "A coding agent that runs in your terminal.",
    description:
      "Bring your own API key from about 185 providers. Codemon streams answers, shows every file edit as a diff before it touches disk, and asks before running anything risky. It ships as one binary built with Bun, so there is no Node or npm to install.",
    highlights: [
      "Permission gate sorts every tool call into read, write, bash or network",
      "Sessions saved in SQLite: resume one, or roll back all of its file changes",
      "MCP servers, sub-agents, plan mode, and a headless mode for CI",
    ],
    technologies: ["TypeScript", "Bun", "Ink", "Vercel AI SDK", "SQLite", "MCP"],
    github: "https://github.com/Sarcastic-Soul/codemon",
    download: {
      label: "Get the binary",
      href: "https://github.com/Sarcastic-Soul/codemon/releases/latest",
    },
    featured: true,
    preview: {
      kind: "browser",
      src: `/previews/codemon-session.webp`,
      url: "codemon / terminal",
      alt: "Codemon in the terminal showing a diff of server.py and asking permission before running a bash command",
    },
  },
  {
    slug: "url-shortener",
    title: "TrimURL",
    category: "Systems",
    year: "2026",
    tagline: "A link shortener built to keep serving under heavy load.",
    description:
      "A redirect reads Caffeine, then Valkey, then PostgreSQL, and pushes the click onto a Valkey stream, so no database write sits on the response path. A consumer group writes the clicks in batches. Runs on Kubernetes, with Helm charts for three environments.",
    highlights: [
      "Autoscales from 3 to 15 backend pods",
      "Load-tested with k6 up to 4,000 concurrent users",
      "Rate limits per user, password-locked links, click limits, hashed-IP analytics",
      "Prometheus, Grafana and Loki for metrics and logs",
    ],
    technologies: ["Spring Boot", "React", "PostgreSQL", "Valkey", "Kubernetes", "Helm", "Grafana", "K6"],
    github: "https://github.com/Sarcastic-Soul/springboot-url-shortner",
    featured: true,
    preview: {
      kind: "browser",
      src: `/previews/url-shortener-grafana.webp`,
      url: "grafana / JVM (Micrometer)",
      alt: "Grafana dashboard showing JVM memory and HTTP latency for the URL shortener backend",
    },
  },
  {
    slug: "cropdoc",
    title: "CropDoc",
    category: "Mobile",
    year: "2026",
    tagline: "Point the phone at a leaf, get a diagnosis. No internet needed.",
    description:
      "An Android app for farmers working where there is no data connection. An on-device MobileNetV2 model names the disease, then the app suggests a targeted treatment and works out the dose, so farmers spray less and spray the right thing.",
    highlights: [
      "38 conditions across 14 crops, fully offline",
      "Offline AI assistant (SmolLM2 on llama.cpp) with voice in and out",
      "11 languages, including Hindi, Bengali and Urdu",
      "Built at NextStep Hacks 2026",
    ],
    technologies: ["React Native", "Expo", "TypeScript", "TensorFlow Lite", "llama.cpp", "SQLite"],
    github: "https://github.com/Sarcastic-Soul/CropDoc",
    download: {
      label: "Download APK",
      href: "https://github.com/Sarcastic-Soul/CropDoc/releases/latest",
    },
    video: "https://github.com/Sarcastic-Soul/CropDoc/releases/download/v1.0.0/CropDoc-demo.mp4",
    featured: true,
    preview: {
      kind: "phone",
      srcs: [
        { src: `/previews/cropdoc-diagnosis.webp`, alt: "CropDoc diagnosis: tomato mosaic virus at 99% confidence" },
        { src: `/previews/cropdoc-home.webp`, alt: "CropDoc home screen with camera, upload and batch scan buttons" },
        { src: `/previews/cropdoc-ask.webp`, alt: "CropDoc offline assistant answering a question" },
      ],
    },
  },
  {
    slug: "support-agent",
    title: "Agentic Support Desk",
    category: "AI",
    year: "2026",
    tagline: "An AI support agent that knows when to hand off to a human.",
    description:
      "Reads a customer's message from web chat, WhatsApp, email or a voice note, checks real order and payment data, and drafts a reply. A verify step checks the draft before it is sent. When confidence is low it escalates, with a summary and timeline ready for the human agent.",
    highlights: [
      "One LangGraph state machine behind four channels",
      "Hybrid retrieval: pgvector plus full-text search in PostgreSQL",
      "Checkpointed: a human can hand a ticket back and the AI picks up where it stopped",
      "Runs on a laptop with local embeddings, no paid services needed",
    ],
    technologies: ["Python", "FastAPI", "LangGraph", "PostgreSQL (pgvector)", "Redis", "React"],
    github: "https://github.com/Sarcastic-Soul/agentic-customer-support-ticket-system",
    featured: true,
    preview: {
      kind: "browser",
      src: `/previews/support-desk-reasoning.webp`,
      url: "support desk / ticket TCK-0007",
      alt: "Support desk console showing the AI run for a ticket: payments and logistics agents, and a conflict between them settled by a rule",
    },
  },
  {
    slug: "foolscap",
    title: "Foolscap",
    category: "Systems",
    year: "2026",
    tagline: "A Linux PDF toolkit: one Rust core, a CLI and a GTK4 app.",
    description:
      "Merge, split, compress and OCR PDFs from the command line or a desktop app. All PDF logic lives in one core crate that never prints or exits, so the CLI and the GUI call exactly the same functions.",
    highlights: [
      "Rendering (MuPDF), Office conversion and OCR (Tesseract) behind optional Cargo features",
      "Debian and Flatpak packaging",
    ],
    technologies: ["Rust", "GTK4", "MuPDF", "Tesseract"],
    github: "https://github.com/Sarcastic-Soul/Foolscap",
    preview: {
      kind: "terminal",
      title: "foolscap",
      lines: [
        { kind: "cmd", text: "foolscap merge a.pdf b.pdf -o out.pdf" },
        { kind: "cmd", text: "foolscap split report.pdf --pages 1-3,7 -o out/" },
        { kind: "cmd", text: "foolscap compress scan.pdf --level screen -o small.pdf" },
        { kind: "cmd", text: "foolscap ocr scan.pdf -o searchable.pdf" },
        { kind: "cmd", text: "foolscap-gui report.pdf" },
      ],
    },
  },
  {
    slug: "brutshop",
    title: "BrutShop",
    category: "Full Stack",
    year: "2025",
    tagline: "A neo-brutalist store with real payments.",
    description:
      "Full-stack shop with role-based access for buyers and admins, Razorpay checkout and live wishlist notifications. Shipped as one container with CI/CD to Docker Hub.",
    highlights: [
      "JWT auth with role-based access",
      "Redis caching keeps responses under 200ms",
      "Cloudinary for product media",
    ],
    technologies: ["Spring Boot", "React", "PostgreSQL", "Redis", "Cloudinary", "Docker", "Razorpay"],
    github: "https://github.com/Sarcastic-Soul/E-commerce-Sprinboot",
    demo: "https://springboot-ecommerce-latest-ctgu.onrender.com/",
    demoNote: "Free-tier host, first load can take ~30s",
    preview: {
      kind: "browser",
      src: `/previews/brutshop.webp`,
      url: "brutshop / products",
      alt: "BrutShop product grid in a neo-brutalist style",
    },
  },
  {
    slug: "chatapp",
    title: "ChatApp",
    category: "Full Stack",
    year: "2025",
    tagline: "Real-time chat with voice and video calls.",
    description:
      "Private and group chat over Socket.IO, with WebRTC calls, media sharing, reactions and Gemini smart replies. Messages are cached in IndexedDB, so a return visit loads from disk first.",
    highlights: [
      "AES-256 message encryption and profanity filtering",
      "IndexedDB stale-while-revalidate cache: 45% faster loads",
    ],
    technologies: ["React", "Express.js", "MongoDB", "Socket.IO", "WebRTC", "Zustand", "IndexedDB"],
    github: "https://github.com/Sarcastic-Soul/ChatApp",
    demo: "https://socket-chat-nine-tau.vercel.app/",
    preview: {
      kind: "browser",
      src: `/previews/chatapp.webp`,
      url: "socket-chat-nine-tau.vercel.app",
      alt: "ChatApp group chat with an image message and reactions",
    },
  },
  {
    slug: "syllabai",
    title: "SyllabAI",
    category: "AI",
    year: "2025",
    tagline: "Turns a topic or a PDF into a full course.",
    description:
      "Generates structured courses, quizzes, cheat sheets and flashcards with Gemini, using Next.js Server Actions and PostgreSQL. Tracks progress, streaks and accuracy per topic.",
    highlights: [],
    technologies: ["Next.js", "PostgreSQL (Neon)", "Drizzle ORM", "Clerk", "Gemini AI"],
    github: "https://github.com/Sarcastic-Soul/SyllabAI",
    demo: "https://syllab-ai-sarcastic-soul.vercel.app/",
    preview: {
      kind: "browser",
      src: `/previews/syllabai.webp`,
      url: "syllab-ai-sarcastic-soul.vercel.app",
      alt: "SyllabAI dashboard with course progress cards",
    },
  },
  {
    slug: "guide-weave",
    title: "Guide Weave",
    category: "AI",
    year: "2025",
    tagline: "Visual how-to guides generated from product manuals.",
    description:
      "Built during the Samsung PRISM R&D internship. A multimodal RAG pipeline pulls both text and images from manuals out of ChromaDB, and a locally hosted LLM writes the guide. Custom benchmarks tuned retrieval accuracy and latency.",
    highlights: [],
    technologies: ["Python", "Multimodal RAG", "ChromaDB", "Local LLM"],
    github: "https://github.com/LakraAnshul/Samsung_Prism",
    preview: {
      kind: "terminal",
      title: "guide weave pipeline",
      lines: [
        { text: 'query     "how do I reset the router?"' },
        { text: "retrieve  manual text    → ChromaDB" },
        { text: "retrieve  manual images  → ChromaDB" },
        { text: "generate  local LLM" },
        { kind: "ok", text: "guide     step-by-step, with figures" },
      ],
    },
  },
];

export const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "TypeScript", "JavaScript", "Python", "SQL", "Rust"],
  },
  {
    title: "Backend",
    skills: [
      "Spring Boot",
      "Spring Security",
      "JPA/Hibernate",
      "Node.js",
      "Bun",
      "Express.js",
      "FastAPI",
      "Django REST",
      "Kafka",
      "RabbitMQ",
    ],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Zustand", "Socket.IO", "WebRTC"],
  },
  {
    title: "AI",
    skills: ["LangChain/LangGraph", "RAG", "pgvector", "ChromaDB", "MCP", "Vercel AI SDK"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "Redis", "MongoDB", "SQLite", "Drizzle ORM"],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      "Docker",
      "Kubernetes",
      "Helm",
      "AWS",
      "GCP",
      "Terraform",
      "Ansible",
      "GitHub Actions",
      "Nginx",
      "Linux",
    ],
  },
  {
    title: "Testing & Observability",
    skills: ["JUnit/Mockito", "Vitest", "k6", "Postman", "Prometheus", "Grafana", "Loki"],
  },
];

export const hackathonWins = [
  { prize: "Winner, AI + Cybersecurity Track", event: "ForgeHacks 2026" },
  { prize: "Best Use of Tiger Data", event: "Hacktoberfest x DEV 2026, Week 1" },
  { prize: "Best Use of Backboard", event: "Hacktoberfest x DEV 2026, Week 2" },
  { prize: "1st place", event: "E-Cell inter-college hackathon" },
];

export const achievements = [
  {
    metric: "600+",
    title: "DSA problems solved",
    description: "Across LeetCode and Codeforces, with a Codeforces peak rating above 1300.",
  },
  {
    metric: "200+",
    title: "Coding Club core member",
    description: "Ran a 3-day coding fest with 13 events and over 200 active participants.",
  },
];

export const codingProfiles = [
  { label: "LeetCode", href: "https://leetcode.com/u/Anish_Kumar_/" },
  { label: "Codeforces", href: "https://codeforces.com/profile/Sarcastic-Soul" },
];

export const certifications = [
  {
    title: "Oracle Data Platform 2025 Certified Foundations Associate",
    issuer: "Oracle",
    badgeImage: "/certs/oracle-badge.webp",
    verifyUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=5C0E219F2193E91F3B5F545705B067F53C473829CE03CA826F8762A832A2410A",
  },
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman, March 2025",
    badgeImage: "/certs/postman-badge.webp",
    verifyUrl: "https://badgecheck.io?url=https%3A%2F%2Fapi.badgr.io%2Fpublic%2Fassertions%2FLHO5EhdSTIaKZLaIcLUU9Q%3Fidentity__email%3Danishisbusy%2540gmail.com&identity__email=anishisbusy@gmail.com",
  },
];
