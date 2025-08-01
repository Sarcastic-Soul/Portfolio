"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Code, Trophy, Target, Zap, Brain, Award } from "lucide-react"

const profiles = [
  {
    platform: "GitHub",
    username: "@Sarcastic-Soul",
    icon: Github,
    stats: {
      repositories: "30+",
    },
    description: "Open source contributions and personal projects",
    url: "https://github.com/Sarcastic-Soul",
  },
  {
    platform: "LeetCode",
    username: "anish_codes",
    icon: Code,
    stats: {
      solved: "135+",
      rating: "1517",
    },
    description: "Algorithm and data structure problem solving",
    url: "https://leetcode.com/u/Anish_Kumar_/",
  },
  {
    platform: "Codeforces",
    username: "Samurott",
    icon: Trophy,
    stats: {
      rating: "1217",
      rank: "Pupil",
      contests: "30+",
    },
    description: "Competitive programming and contests",
    url: "https://codeforces.com/profile/Samurott",
  },
  {
    platform: "CodeChef",
    username: "anish_cp",
    icon: Target,
    stats: {
      rating: "1575",
      stars: "2★",
    },
    description: "Competitive programming and weekly contests",
    url: "https://www.codechef.com/users/anish_cp",
  },
  {
    platform: "AtCoder",
    username: "Anish_Kumar",
    icon: Brain,
    stats: {
      rating: "473",
      rank: "Bronze",
      contests: "15+",
    },
    description: "Japanese competitive programming platform",
    url: "https://atcoder.jp/users/Anish_Kumar",
  },
]

export function CodingProfiles() {
  return (
    <section id="coding" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight mb-4 sm:mb-6">
            Coding Profiles
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-light text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            My journey across different coding platforms, showcasing problem-solving skills and competitive programming
            achievements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.platform}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 rounded-2xl">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 sm:p-3 bg-gray-100 dark:bg-gray-800 rounded-xl mr-3">
                      <profile.icon className="h-5 w-5 sm:h-6 sm:w-6 text-black dark:text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg">{profile.platform}</h3>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{profile.username}</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                    {profile.description}
                  </p>

                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {Object.entries(profile.stats).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-xs sm:text-sm">
                        <span className="capitalize text-gray-500 dark:text-gray-400">{key}:</span>
                        <span className="font-medium text-black dark:text-white">{value}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full text-xs sm:text-sm"
                    asChild
                  >
                    <a href={profile.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      View Profile
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
