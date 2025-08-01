"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Award, Star, Target, Medal, Zap } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "Hackathon Winner",
    description: "2nd runner-up in E-cell Hackathon 2025 (Inter college Hackathon)",
    date: "2025",
    category: "Competition",
  },
  {
    icon: Target,
    title: "600+ Problems Solved",
    description: "Solved over 600 problems on LeetCode and Codeforces",
    category: "Competition",
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight mb-4 sm:mb-6">
            Achievements
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-light text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            Recognition and milestones that highlight my commitment to excellence and continuous growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="h-full text-center hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 rounded-2xl">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-4 sm:mb-6 flex justify-center">
                    <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-full">
                      <achievement.icon className="h-6 w-6 sm:h-8 sm:w-8 text-black dark:text-white" />
                    </div>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="space-y-2">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                        {achievement.category}
                      </span>
                      <h3 className="text-lg sm:text-xl font-semibold">{achievement.title}</h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {achievement.description}
                    </p>
                    <p className="text-sm font-medium text-black dark:text-white">{achievement.date}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
