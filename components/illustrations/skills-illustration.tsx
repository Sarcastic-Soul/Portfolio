"use client"

import { motion } from "framer-motion"

export function SkillsIllustration() {
  return (
    <div className="w-56 h-40 relative">
      <motion.svg
        width="224"
        height="160"
        viewBox="0 0 224 160"
        className="w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Central hub */}
        <motion.circle
          cx="112"
          cy="80"
          r="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        {/* Skill nodes */}
        <motion.circle
          cx="112"
          cy="32"
          r="8"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        />
        <motion.circle
          cx="160"
          cy="56"
          r="8"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
        <motion.circle
          cx="160"
          cy="104"
          r="8"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        />
        <motion.circle
          cx="112"
          cy="128"
          r="8"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        />
        <motion.circle
          cx="64"
          cy="104"
          r="8"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        />
        <motion.circle
          cx="64"
          cy="56"
          r="8"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        />

        {/* Connecting lines */}
        <motion.line
          x1="112"
          y1="64"
          x2="112"
          y2="40"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        />
        <motion.line
          x1="128"
          y1="72"
          x2="152"
          y2="64"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 2.4 }}
        />
        <motion.line
          x1="128"
          y1="88"
          x2="152"
          y2="96"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 2.6 }}
        />
        <motion.line
          x1="112"
          y1="96"
          x2="112"
          y2="120"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 2.8 }}
        />
        <motion.line
          x1="96"
          y1="88"
          x2="72"
          y2="96"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 3 }}
        />
        <motion.line
          x1="96"
          y1="72"
          x2="72"
          y2="64"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 3.2 }}
        />

        {/* Animated particles */}
        <motion.circle
          cx="112"
          cy="80"
          r="2"
          fill="currentColor"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </div>
  )
}
