"use client"

import { motion } from "framer-motion"

export function ProjectIllustration() {
  return (
    <div className="w-48 h-32 relative">
      <motion.svg
        width="192"
        height="128"
        viewBox="0 0 192 128"
        className="w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Laptop screen */}
        <motion.rect
          x="32"
          y="16"
          width="128"
          height="80"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* Laptop base */}
        <motion.ellipse
          cx="96"
          cy="104"
          rx="64"
          ry="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Screen content - grid layout */}
        <motion.rect
          x="40"
          y="24"
          width="48"
          height="32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />
        <motion.rect
          x="96"
          y="24"
          width="48"
          height="32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.7 }}
        />
        <motion.rect
          x="40"
          y="64"
          width="104"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.9 }}
        />

        {/* Floating elements */}
        <motion.circle
          cx="16"
          cy="32"
          r="3"
          fill="currentColor"
          animate={{
            y: [0, -8, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.rect
          x="172"
          y="48"
          width="6"
          height="6"
          fill="currentColor"
          animate={{
            rotate: [0, 180, 360],
            y: [0, 12, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.svg>
    </div>
  )
}
