"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Code, Database, Layout, Smartphone, Terminal } from "lucide-react"

export function PhoneFrame() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -300])

  const skills = [
    {
      icon: <Layout className="h-6 w-6" />,
      name: "Frontend Development",
      description: "Creating responsive, user-friendly interfaces",
    },
    {
      icon: <Database className="h-6 w-6" />,
      name: "Backend Development",
      description: "Building robust server-side applications",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      name: "Mobile Development",
      description: "Crafting native and cross-platform apps",
    },
    {
      icon: <Code className="h-6 w-6" />,
      name: "Web Technologies",
      description: "Mastering modern frameworks and libraries",
    },
    {
      icon: <Terminal className="h-6 w-6" />,
      name: "DevOps",
      description: "Streamlining deployment and infrastructure",
    },
  ]

  return (
    <div ref={ref} className="relative h-[600px] w-[300px] mx-auto">
      <div className="absolute inset-0 rounded-[3rem] border-8 border-gray-800 bg-gray-800 shadow-xl overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-6 bg-gray-800 z-10">
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 h-1 w-16 bg-gray-700 rounded-full"></div>
        </div>
        <div className="absolute inset-y-0 right-0 w-2 bg-gray-800 z-10"></div>
        <div className="absolute inset-y-0 left-0 w-2 bg-gray-800 z-10"></div>
        <div className="absolute inset-x-0 bottom-0 h-6 bg-gray-800 z-10"></div>

        <div className="absolute inset-2 rounded-[2.5rem] overflow-hidden bg-white dark:bg-gray-900">
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute inset-x-0 top-0 min-h-full pt-6 pb-24 px-6 flex flex-col gap-8"
              style={{ y }}
            >
              {skills.map((skill, index) => (
                <div key={index} className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl shadow-sm">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 bg-white dark:bg-slate-700 rounded-lg shadow-sm">{skill.icon}</div>
                    <h3 className="font-bold text-lg">{skill.name}</h3>
                  </div>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
