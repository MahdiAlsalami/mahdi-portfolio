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
      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-500 to-pink-500 shadow-2xl">
        <Image
          src="/placeholder.jpg"
          alt="Mahdi Alsalami - Software Engineer"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
      </div>
    </motion.div>
  )
}
