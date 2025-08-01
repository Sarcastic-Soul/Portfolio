"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CodeIllustration } from "@/components/illustrations/code-illustration"

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                About Me
              </motion.h2>

              <motion.div
                className="space-y-4 sm:space-y-6 text-base sm:text-lg font-light text-gray-600 dark:text-gray-400 leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p>
                  I'm a dedicated student with over 2 years of experience studying and building web development projects. My journey has been driven by curiosity and a commitment to learning modern technologies.
                </p>
                <p>
                  I focus on writing clean, maintainable code and crafting user experiences that are both intuitive and visually appealing. Each project helps me grow and refine my skills in web development.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-none bg-white dark:bg-gray-900 rounded-2xl">
                <CardContent className="p-6 sm:p-8">
                  <div className="space-y-4">
                    <h3 className="text-xl sm:text-2xl font-light">Philosophy</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                      "Simplicity is the ultimate sophistication. I strive to create solutions that are elegant in their
                      simplicity yet powerful in their execution."
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-2xl">
                  <div className="text-2xl sm:text-3xl font-light mb-2">10+</div>
                  <div className="text-xs sm:text-sm font-light text-gray-600 dark:text-gray-400 tracking-wide">
                    PROJECTS
                  </div>
                </div>
                <div className="text-center p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-2xl">
                  <div className="text-2xl sm:text-3xl font-light mb-2">2+</div>
                  <div className="text-xs sm:text-sm font-light text-gray-600 dark:text-gray-400 tracking-wide">
                    YEARS
                  </div>
                </div>
              </div>

              <div className="flex justify-center pt-6 sm:pt-8">
                <CodeIllustration />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
