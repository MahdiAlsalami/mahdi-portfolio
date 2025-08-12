"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ProfileImage() {
  return (
    <motion.div
      className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Gradient border wrapper */}
      <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl">
        {/* Circular image with explicit size (no fill) */}
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image
            src="/mini.jpg" // served from /public
            alt="Mahdi Alsalami - Software Engineer"
            width={800}      // large intrinsic size for quality
            height={800}
            priority
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </div>
      </div>
    </motion.div>
  )
}
