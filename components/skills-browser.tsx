"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Code,
  Database,
  Layout,
  Server,
  Smartphone,
  Terminal,
  RefreshCw,
  X,
  Minimize2,
  Maximize2,
  Globe,
} from "lucide-react"
import { cn } from "@/lib/utils"

const tabs = [
  {
    id: "frontend",
    label: "Frontend",
    icon: <Layout className="h-4 w-4" />,
    color: "from-pink-500 to-purple-500",
    skills: [
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "JavaScript", icon: "📜" },
      { name: "TypeScript", icon: "📘" },
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Tailwind CSS", icon: "🌊" },
      { name: "GraphQL", icon: "⚡" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: <Server className="h-4 w-4" />,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚂" },
      { name: "Python", icon: "🐍" },
      { name: "Django", icon: "🎯" },
      { name: "Flask", icon: "🔥" },
      { name: "Ruby", icon: "💎" },
      { name: "Ruby on Rails", icon: "🛤️" },
      { name: "GoLang", icon: "🐹" },
    ],
  },
  {
    id: "database",
    label: "Database",
    icon: <Database className="h-4 w-4" />,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "SQL", icon: "📊" },
      { name: "Supabase", icon: "🦸" },
      { name: "Cypher", icon: "🕸️" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    icon: <Smartphone className="h-4 w-4" />,
    color: "from-orange-500 to-amber-500",
    skills: [
      { name: "React Native", icon: "📱" },
      { name: "Flutter", icon: "🦋" },
      { name: "iOS Development", icon: "🍎" },
      { name: "Android Development", icon: "🤖" },
      { name: "Mobile UI/UX", icon: "🎨" },
      { name: "Responsive Design", icon: "📐" },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    icon: <Terminal className="h-4 w-4" />,
    color: "from-red-500 to-rose-500",
    skills: [
      { name: "Git", icon: "🔄" },
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "☸️" },
      { name: "Linux", icon: "🐧" },
      { name: "UNIX", icon: "💻" },
    ],
  },
  {
    id: "other",
    label: "Other",
    icon: <Code className="h-4 w-4" />,
    color: "from-violet-500 to-purple-500",
    skills: [
      { name: "Figma", icon: "🖌️" },
      { name: "C#", icon: "🪚" },
      { name: "Java", icon: "☕" },
      { name: "C++", icon: "⚙️" },
      { name: "REST APIs", icon: "🔄" },
      { name: "Agile", icon: "🔄" },
      { name: "Problem Solving", icon: "🧩" },
      { name: "Technical Writing", icon: "📝" },
      { name: "Team Collaboration", icon: "👥" },
    ],
  },
]

export function SkillsBrowser() {
  const [activeTab, setActiveTab] = useState("frontend")
  const [isMinimized, setIsMinimized] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleTabChange = (tabId: string) => {
    setIsLoading(true)
    setTimeout(() => {
      setActiveTab(tabId)
      setIsLoading(false)
    }, 300)
  }

  const activeTabData = tabs.find((tab) => tab.id === activeTab)

  return (
    <div
      className={cn(
        "mx-auto border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-xl transition-all duration-300",
        isMinimized ? "h-12" : isMaximized ? "w-full max-w-full" : "max-w-4xl",
      )}
    >
      {/* Browser Chrome */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
              aria-label={isMinimized ? "Expand" : "Minimize"}
            />
            <button
              className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"
              aria-label="Refresh"
              onClick={() => {
                setIsLoading(true)
                setTimeout(() => setIsLoading(false), 500)
              }}
            />
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
              aria-label={isMaximized ? "Restore" : "Maximize"}
            />
          </div>
          <div className="flex items-center gap-1 ml-4 bg-white dark:bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-600 dark:text-gray-300">
            <Globe className="h-3 w-3" />
            <span>skills.johndoe.dev/{activeTab}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setIsLoading(true)
              setTimeout(() => setIsLoading(false), 500)
            }}
            className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Refresh"
          >
            <RefreshCw className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </button>
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={isMinimized ? "Expand" : "Minimize"}
          >
            {isMinimized ? (
              <Maximize2 className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            ) : (
              <Minimize2 className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            )}
          </button>
          <button
            onClick={() => setIsMaximized(!isMaximized)}
            className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={isMaximized ? "Restore" : "Maximize"}
          >
            {isMaximized ? (
              <Minimize2 className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            ) : (
              <Maximize2 className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            )}
          </button>
          <button
            className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Close"
          >
            <X className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </button>
        </div>
      </div>

      {/* Browser Tabs */}
      {!isMinimized && (
        <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap",
                activeTab === tab.id
                  ? `border-b-2 border-${tab.id === activeTab ? activeTabData?.color.split(" ")[1].replace("to-", "") : "transparent"} text-foreground`
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300 dark:hover:border-gray-600",
              )}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {/* Browser Content */}
      {!isMinimized && (
        <div className="bg-white dark:bg-gray-900 h-[500px] overflow-y-auto p-6">
          {isLoading ? (
            <div className="h-full flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-gray-100"></div>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br",
                      activeTabData?.color,
                    )}
                  >
                    {activeTabData?.icon && <div className="text-white">{activeTabData.icon}</div>}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{activeTabData?.label} Development</h3>
                    <p className="text-muted-foreground">
                      My skills and expertise in {activeTabData?.label.toLowerCase()} technologies
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {activeTabData?.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800"
                    >
                      <span className="text-xl">{skill.icon}</span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      )}
    </div>
  )
}
