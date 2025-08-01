"use client"

import { motion } from "framer-motion"
import { SkillsIllustration } from "@/components/illustrations/skills-illustration"

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Java", "Python", "HTML", "CSS", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand", "ShadCN"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Spring Boot", "MongoDB", "PostgreSQL", "Supabase", "Firebase", "Appwrite"],
  },
  {
    title: "Tools & Cloud",
    skills: ["Git", "Docker", "Kubernetes", "Clerk", "Cloudinary", "React Native"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight mb-4 sm:mb-6">
            Skills & Expertise
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-light text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            A comprehensive toolkit refined through years of hands-on experience.
          </p>
          <div className="flex justify-center mt-8 sm:mt-12">
            <SkillsIllustration />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              <h3 className="text-xl sm:text-2xl font-light tracking-tight border-b border-gray-200 dark:border-gray-800 pb-3 sm:pb-4">
                {category.title}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="text-base sm:text-lg font-light text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
