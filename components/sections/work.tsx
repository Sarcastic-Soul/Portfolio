"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { ProjectIllustration } from "@/components/illustrations/project-illustration"

const projects = [
  {
    title: "MERN ChatApp",
    description: "A real-time chat application with Socket.IO, featuring glassmorphism UI and comprehensive messaging features (Featured)",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Socket.IO", "React", "Express.js", "MongoDB", "Cloudinary",],
    github: "https://github.com/Sarcastic-Soul/socket-chat",
    demo: "https://socket-chat-nine-tau.vercel.app/",
  },
  {
    title: "Converso - Voice LMS",
    description: "A voice-based Learning Management System (LMS) for interactive learning experiences",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "TypeScript", "Supabase", "Clerk", "Google Gemini"],
    github: "https://github.com/Sarcastic-Soul/Voice-LMS",
    demo: "https://voice-lms.vercel.app/",
  },
  {
    title: "ASCII Art Generator",
    description: "A tool for generating ASCII art from images.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "TypeScript", "NeonDB", "Clerk", "Drizzle ORM"],
    github: "https://github.com/Sarcastic-Soul/ascii-art-saas",
    demo: "https://ascii-art-saas.vercel.app/",
  },
  {
    title: "Brutshop - E-commerce Platform",
    description: " A Neo-brutalist e-commerce app built with Spring Boot and React",
    image: "/projects/springboot-ecommerce.png",
    technologies: ["Spring Boot", "React", "Supabase", "Cloudinary", "Docker"],
    github: "https://github.com/Sarcastic-Soul/E-commerce-Sprinboot",
    demo: "https://springboot-ecommerce-latest-ctgu.onrender.com/",
  },
  {
    title: "AI PDF Chat App",
    description: "AI chatbot for chatting with large PDFs using RAG.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Deepseek", "Qdrant", "BullMQ", "Next.js", "TypeScript", "ShadCN"],
    github: "https://github.com/Sarcastic-Soul/AI-PDF-ChatApp",
  },
  {
    title: "MindEase",
    description: "A mental health platform offering self-assessment tools, meditation resources, and AI-driven support.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "MongoDB", "Google Gemini"],
    github: "https://github.com/Sarcastic-Soul/mindease",
    demo: "https://mindease-ruddy.vercel.app/",
  },
]

export function Work() {
  return (
    <section id="work" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight mb-4 sm:mb-6">
            Selected Work
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-light text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            A curated collection of projects that showcase my approach to solving complex problems.
          </p>
          <div className="flex justify-center mt-8 sm:mt-12">
            <ProjectIllustration />
          </div>
        </motion.div>

        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
            >
              <div className={`space-y-6 sm:space-y-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight">{project.title}</h3>
                  <p className="text-base sm:text-lg font-light text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-light tracking-wide border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black rounded-full font-light tracking-wide bg-transparent"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button
                      size="lg"
                      className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 rounded-full font-light tracking-wide"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <motion.div
                className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-0 shadow-lg overflow-hidden bg-gray-50 dark:bg-gray-900 rounded-2xl">
                  <CardContent className="p-0">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-48 sm:h-64 lg:h-80 object-cover"
                    />
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
