"use client"

import { motion } from "framer-motion"

export function CodeIllustration() {
  return (
    <div className="w-64 h-48 relative">
      <motion.svg
        width="256"
        height="192"
        viewBox="0 0 256 192"
        className="w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Code editor window */}
        <motion.rect
          x="16"
          y="24"
          width="224"
          height="144"
          rx="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />

        {/* Window controls */}
        <motion.circle
          cx="32"
          cy="40"
          r="4"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        />
        <motion.circle
          cx="48"
          cy="40"
          r="4"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        />
        <motion.circle
          cx="64"
          cy="40"
          r="4"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />

        {/* Code lines */}
        <motion.line
          x1="32"
          y1="64"
          x2="120"
          y2="64"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        />
        <motion.line
          x1="32"
          y1="80"
          x2="160"
          y2="80"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
        />
        <motion.line
          x1="32"
          y1="96"
          x2="96"
          y2="96"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.9 }}
        />
        <motion.line
          x1="32"
          y1="112"
          x2="144"
          y2="112"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 2.1 }}
        />

        {/* Cursor */}
        <motion.rect
          x="146"
          y="108"
          width="2"
          height="16"
          fill="currentColor"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
        />

        {/* Brackets */}
        <motion.path
          d="M180 70 L170 80 L180 90"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        />
        <motion.path
          d="M200 70 L210 80 L200 90"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 2.7 }}
        />
      </motion.svg>
    </div>
  )
}
