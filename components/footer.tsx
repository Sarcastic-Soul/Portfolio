"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-gray-100">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-light tracking-tight">ANISH KUMAR</h3>
            <p className="text-gray-600 font-light max-w-md mx-auto">
              Full Stack Developer crafting digital experiences with precision and purpose.
            </p>
          </div>

          <div className="border-t border-gray-100 pt-8">
            <p className="text-sm font-light text-gray-500">
              © {new Date().getFullYear()} Anish Kumar. All rights reserved.
            </p>
            <p className="text-xs font-light text-gray-400 mt-2">
              Designed & Built with React, Next.js, and Framer Motion
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
