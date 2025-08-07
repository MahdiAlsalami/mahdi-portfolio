"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  projectUrl: string
  githubUrl?: string
  featured?: boolean
}

export function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
  githubUrl,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-md transition-all duration-300 hover:shadow-xl",
        featured && "ring-2 ring-purple-500/20",
      )}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {featured && (
        <div className="absolute top-3 right-3 z-10">
          <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            Featured
          </Badge>
        </div>
      )}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex gap-2">
            <Link
              href={projectUrl}
              className="bg-white/90 dark:bg-slate-900/90 p-2 rounded-full hover:bg-white dark:hover:bg-slate-900 transition-colors"
              aria-label="View project"
            >
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            {githubUrl && (
              <Link
                href={githubUrl}
                className="bg-white/90 dark:bg-slate-900/90 p-2 rounded-full hover:bg-white dark:hover:bg-slate-900 transition-colors"
                aria-label="View code on GitHub"
              >
                <Github className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
