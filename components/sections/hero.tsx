"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react"
import { FloatingElements } from "@/components/floating-elements"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function Hero() {
  const handleGetInTouch = () => {
    window.location.href =
      "mailto:anishisbusy@gmail.com?subject=Let's Work Together&body=Hi Anish,%0D%0A%0D%0AI'd like to discuss a project with you."
  }

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = `${basePath}/Anish_Kumar-Resume.pdf`
    link.download = `${basePath}/Anish_Kumar-Resume.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      <FloatingElements />

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6 sm:space-y-8"
        >
          <div className="space-y-2 sm:space-y-4">
            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tight leading-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Great Code.
            </motion.h1>
            <motion.h2
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tight leading-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              No Nonsense.
            </motion.h2>
          </div>

          <motion.p
            className="text-lg sm:text-xl lg:text-2xl font-light text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Full Stack Developer crafting digital experiences with precision and purpose.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 sm:pt-8 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Button
              onClick={handleDownloadResume}
              size="lg"
              className="w-full sm:w-auto bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-light tracking-wide rounded-full border-0"
            >
              <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Download Resume
            </Button>
            <Button
              onClick={handleGetInTouch}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-light tracking-wide rounded-full transition-all duration-300 bg-transparent"
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6 sm:space-x-8 pt-8 sm:pt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <a
              href="https://github.com/Sarcastic-Soul"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 border border-gray-200 dark:border-gray-800 rounded-full hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/anish-kumar-852397290/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 border border-gray-200 dark:border-gray-800 rounded-full hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="mailto:anishisbusy@gmail.com"
              className="p-2 sm:p-3 border border-gray-200 dark:border-gray-800 rounded-full hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 dark:text-gray-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
