"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Coding", href: "#coding" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/Sarcastic-Soul", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/anish-kumar-852397290/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:anishisbusy@gmail.com", label: "Email" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Get all sections
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      // Find current section
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200/20 dark:border-gray-800/20 shadow-lg shadow-black/5 dark:shadow-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-bold tracking-tight">
              ANISH KUMAR
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`text-sm font-medium tracking-wide transition-colors duration-300 relative group ${
                    activeSection === item.href.substring(1)
                      ? "text-black dark:text-white"
                      : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-black dark:bg-white transition-all duration-300 ${
                      activeSection === item.href.substring(1) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </motion.button>
              ))}
              <ThemeToggle />
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-full">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white dark:bg-black md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`text-3xl font-light tracking-wide transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "text-black dark:text-white"
                      : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex space-x-6 mt-12"
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-gray-200 dark:border-gray-800 rounded-full hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
