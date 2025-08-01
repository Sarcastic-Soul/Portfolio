"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Send, Github, Linkedin, Mail, MapPin } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "anishisbusy@gmail.com",
    href: "mailto:anishisbusy@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Raipur, India",
    href: "https://maps.app.goo.gl/9FKfEt7zfFmEifER9",
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Sarcastic-Soul",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anish-kumar-852397290/",
  },
]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleGetInTouch = () => {
    window.location.href =
      "mailto:anishisbusy@gmail.com?subject=Let's Work Together&body=Hi Anish,%0D%0A%0D%0AI'd like to discuss a project with you."
  }

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight mb-4 sm:mb-6">
            Let's Work Together
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-light text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your vision to life.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 sm:space-y-12"
          >
            <div className="space-y-6 sm:space-y-8">
              <h3 className="text-2xl sm:text-3xl font-light tracking-tight">Get In Touch</h3>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center space-x-4">
                    <div className="p-2 sm:p-3 border border-gray-200 dark:border-gray-800 rounded-full">
                      <info.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div>
                      <p className="font-light text-gray-500 dark:text-gray-400 text-xs sm:text-sm tracking-wide">
                        {info.label}
                      </p>
                      <a
                        href={info.href}
                        className="text-base sm:text-lg font-light hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h4 className="text-lg sm:text-xl font-light tracking-tight">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 sm:p-4 border border-gray-200 dark:border-gray-800 rounded-full hover:bg-white dark:hover:bg-gray-900 transition-colors"
                  >
                    <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-none bg-white dark:bg-gray-900 rounded-2xl">
              <CardContent className="p-6 sm:p-8 lg:p-12">
                <div className="space-y-6 sm:space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <label className="text-xs sm:text-sm font-light text-gray-600 dark:text-gray-400 tracking-wide">
                        Name
                      </label>
                      <Input
                        name="name"
                        required
                        className="border-0 border-b border-gray-200 dark:border-gray-800 rounded-none px-0 py-3 sm:py-4 font-light focus:border-black dark:focus:border-white transition-colors bg-transparent text-sm sm:text-base"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs sm:text-sm font-light text-gray-600 dark:text-gray-400 tracking-wide">
                        Email
                      </label>
                      <Input
                        name="email"
                        type="email"
                        required
                        className="border-0 border-b border-gray-200 dark:border-gray-800 rounded-none px-0 py-3 sm:py-4 font-light focus:border-black dark:focus:border-white transition-colors bg-transparent text-sm sm:text-base"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-light text-gray-600 dark:text-gray-400 tracking-wide">
                      Subject
                    </label>
                    <Input
                      name="subject"
                      required
                      className="border-0 border-b border-gray-200 dark:border-gray-800 rounded-none px-0 py-3 sm:py-4 font-light focus:border-black dark:focus:border-white transition-colors bg-transparent text-sm sm:text-base"
                      placeholder="Project inquiry"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-light text-gray-600 dark:text-gray-400 tracking-wide">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      required
                      rows={6}
                      className="border-0 border-b border-gray-200 dark:border-gray-800 rounded-none px-0 py-3 sm:py-4 font-light focus:border-black dark:focus:border-white transition-colors resize-none bg-transparent text-sm sm:text-base"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <Button
                    type="button"
                    onClick={handleGetInTouch}
                    size="lg"
                    className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 rounded-full font-light tracking-wide py-4 sm:py-6 text-sm sm:text-base"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
