import { Icon } from "@iconify/react";

// Map technology names to Iconify icon identifiers
const iconMap: Record<string, string> = {
  // Languages
  Java: "logos:java",
  JavaScript: "logos:javascript",
  TypeScript: "logos:typescript-icon",
  Python: "logos:python",
  HTML: "logos:html-5",
  CSS: "logos:css-3",
  SQL: "logos:postgresql",
  MySQL: "logos:mysql",

  // Frameworks & Backend
  "Spring Boot": "simple-icons:springboot",
  "Spring Boot 3": "simple-icons:springboot",
  SpringBoot: "simple-icons:springboot",
  "Spring Security": "devicon:spring",
  "JPA/Hibernate": "logos:hibernate",
  "Node.js": "logos:nodejs-icon",
  "Express.js": "skill-icons:expressjs-dark",
  Express: "skill-icons:expressjs-dark",
  "REST APIs": "logos:api",
  "Django REST": "logos:django-icon",
  "LangChain/LangGraph": "simple-icons:langchain",
  LangChain: "simple-icons:langchain",
  LangGraph: "simple-icons:langchain",

  // Frontend
  React: "logos:react",
  "React JS": "logos:react",
  "Next.js": "logos:nextjs-icon",
  "Next.js 16": "logos:nextjs-icon",
  "Tailwind CSS": "logos:tailwindcss-icon",
  Tailwind: "logos:tailwindcss-icon",
  "Shadcn/UI": "simple-icons:shadcnui",
  Shadcn: "simple-icons:shadcnui",
  Zustand: "devicon:zustand",
  WebRTC: "logos:webrtc",
  "Socket.IO": "logos:socket-io",

  // Databases & AI
  MongoDB: "logos:mongodb-icon",
  "PostgreSQL (pgvector)": "logos:postgresql",
  PostgreSQL: "logos:postgresql",
  "PostgreSQL (Neon)": "logos:neon-icon",
  NeonDB: "logos:neon-icon",
  Neon: "logos:neon-icon",
  Redis: "logos:redis",
  ChromaDB: "logos:chroma",
  Chroma: "logos:chroma",
  "Multimodal RAG": "logos:google-gemini",
  "Drizzle ORM": "simple-icons:drizzle",
  "Gemini AI": "logos:google-gemini",
  "Google Gemini": "logos:google-gemini",
  Clerk: "logos:clerk",
  "Local LLM": "logos:python",
  "Benchmarking Pipelines": "logos:python",

  // Messaging & Queues
  Kafka: "logos:kafka-icon",
  RabbitMQ: "logos:rabbitmq-icon",

  // DevOps & Cloud
  AWS: "logos:aws",
  K6: "devicon:k6",
  Helm: "logos:helm",
  Ansible: "devicon:ansible",
  Loki: "selfhst:loki",
  Prometheus: "logos:prometheus",
  Grafana: "logos:grafana",
  Terraform: "logos:terraform-icon",
  Jenkins: "logos:jenkins",
  Datadog: "logos:datadog",
  Docker: "logos:docker-icon",
  Kubernetes: "logos:kubernetes",
  GCP: "logos:google-cloud",
  Nginx: "logos:nginx",
  Vercel: "logos:vercel-icon",
  Ubuntu: "logos:ubuntu",
  Linux: "logos:tux",

  // Tools & Testing
  Vitest: "logos:vitest",
  Postman: "logos:postman-icon",
  Supabase: "logos:supabase-icon",
  JWT: "logos:jwt-icon",
  "JUnit/Mockito": "devicon:junit",
  JUnit: "devicon:junit",
  Mockito: "devicon:junit",
  Maven: "logos:maven",
  Git: "logos:git-icon",
  GitHub: "simple-icons:github",
  Github: "simple-icons:github",
  Razorpay: "simple-icons:razorpay",
  Cloudinary: "logos:cloudinary",
  IndexedDB: "logos:javascript",
  "RESP Protocol": "logos:redis",
  "ConcurrentHashMap": "logos:java",
  "TCP Sockets": "logos:java",
  "AOF Persistence": "logos:redis",
  // Coding Platforms
  LeetCode: "devicon:leetcode",
  Codeforces: "simple-icons:codeforces",
  CodeChef: "simple-icons:codechef",
};

export function TechIcon({ name, className = "w-5 h-5 inline-block" }: { name: string; className?: string }) {
  const iconName = iconMap[name];
  if (!iconName) {
    return null;
  }
  return <Icon icon={iconName} className={className} />;
}
