"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function HeroAnimation() {
  return (
    <motion.div
      className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full overflow-hidden border-4 border-purple-500/30 shadow-xl flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Image
        src="/mahdialsalamiheadhsot.jpeg"
        alt="Mahdi Alsalami"
        fill
        className="object-cover"
        priority
      />
    </motion.div>
  )
}
