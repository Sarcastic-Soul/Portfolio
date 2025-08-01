"use client"

import { motion } from "framer-motion"

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-16 sm:top-20 left-4 sm:left-10 w-3 h-3 sm:w-4 sm:h-4 border border-black dark:border-white"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-32 sm:top-40 right-8 sm:right-20 w-4 h-4 sm:w-6 sm:h-6 rounded-full border border-black dark:border-white"
        animate={{
          y: [0, 30, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute bottom-32 sm:bottom-40 left-8 sm:left-20 w-2 h-2 sm:w-3 sm:h-3 bg-black dark:bg-white"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute bottom-48 sm:bottom-60 right-4 sm:right-10 w-6 h-0.5 sm:w-8 sm:h-1 bg-black dark:bg-white"
        animate={{
          y: [0, 25, 0],
          rotate: [0, 45, 90],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Additional floating shapes */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-2 h-2 sm:w-3 sm:h-3 border-2 border-black dark:border-white transform rotate-45"
        animate={{
          y: [0, -12, 0],
          rotate: [45, 225, 405],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      <motion.div
        className="absolute top-3/4 right-1/3 w-1 h-6 sm:w-1 sm:h-8 bg-black dark:bg-white"
        animate={{
          y: [0, -18, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 11,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-8 sm:left-16 w-4 h-4 sm:w-5 sm:h-5 border border-black dark:border-white rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2.5,
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-8 sm:right-16 w-3 h-3 sm:w-4 sm:h-4 bg-black dark:bg-white transform rotate-45"
        animate={{
          y: [0, 20, 0],
          rotate: [45, 135, 225],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Animated lines */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-12 sm:w-20 h-px bg-gradient-to-r from-transparent via-black dark:via-white to-transparent"
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-10 sm:w-16 h-px bg-gradient-to-l from-transparent via-black dark:via-white to-transparent"
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-2/3 left-1/2 w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-black dark:via-white to-transparent transform -rotate-45"
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 3,
        }}
      />
    </div>
  )
}
