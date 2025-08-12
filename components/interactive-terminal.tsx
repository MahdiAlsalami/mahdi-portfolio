"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Terminal, X, Minus, Square } from 'lucide-react'

interface Command {
  input: string
  output: string[]
  timestamp: string
}

const COMMANDS = {
  help: [
    "Available commands:",
    "",
    "  about          - Learn about Mahdi",
    "  skills         - View technical skills",
    "  experience     - Show work experience",
    "  projects       - List featured projects",
    "  education      - Academic background",
    "  contact        - Get contact information",
    "  git status     - Check current status",
    "  git log        - View recent achievements",
    "  whoami         - Display current user info",
    "  clear          - Clear terminal",
    "",
    "Type any command to get started!",
  ],
  about: [
    "Mahdi Alsalami - Software Engineer",
    "",
    "Hey! I'm a rising senior at CSULB studying Computer Science.",
    "I'm passionate about full-stack development and love teaching",
    "others to code. Currently seeking internship opportunities",
    "and always excited to work on challenging projects!",
    "",
    "Fun fact: I've created content with 2M+ views! 🚀",
  ],
  skills: [
    "Technical Skills:",
    "",
    "Languages:",
    "  • Python, JavaScript/TypeScript, Java, C++",
    "  • HTML/CSS, SQL, C#, GraphQL, Ruby, GoLang",
    "",
    "Frameworks & Libraries:",
    "  • React, Next.js, Node.js, Express.js",
    "  • Django, Flask, Tailwind CSS, Ruby on Rails",
    "",
    "Tools & Technologies:",
    "  • Git, Docker, Kubernetes, MongoDB, PostgreSQL",
    "  • Supabase, Figma, Linux/UNIX",
  ],
  experience: [
    "Work Experience:",
    "",
    "🏢 Software Engineer Intern @ Ani (Jan 2024 - Mar 2024)",
    "   • Boosted web app performance by 23%",
    "   • Enhanced user engagement by 45%",
    "",
    "👨‍🏫 Code Coach @ theCoderSchool (Sep 2023 - Feb 2024)",
    "   • Increased student retention by 40%",
    "   • Taught Python, Java, and web development",
    "",
    "💻 IT Student Assistant @ City of Downey (Apr 2022 - Present)",
    "   • Support 250+ employees with technical issues",
    "   • Improved resolution times by 30%",
  ],
  projects: [
    "Featured Projects:",
    "",
    "🔍 SafetySnap - AI-Powered OSHA Violation Detection",
    "   Tech: TypeScript, Next.js, Gemini AI, Supabase",
    "   • 99% accuracy for OSHA compliance detection",
    "",
    "📱 techwithmahdi - Content Creation Platform",
    "   • 2M+ views across platforms",
    "   • 1250+ followers and growing Discord community",
    "",
    "🌐 IBM Accelerate Program",
    "   Tech: JavaScript, React, Node.js",
    "   • 4.5% acceptance rate from 10,000+ applicants",
  ],
  education: [
    "Education:",
    "",
    "🎓 California State University, Long Beach",
    "   Bachelor of Science in Computer Science",
    "   Expected Graduation: May 2026",
    "",
    "📚 Relevant Coursework:",
    "   • Data Structures & Algorithms",
    "   • Operating Systems, Databases",
    "   • Machine Learning, Computer Architecture",
    "",
    "🏆 Awards:",
    "   • Edison STEM Scholarship ($1,000) - 2024",
  ],
  contact: [
    "Contact Information:",
    "",
    "📧 Email: mahdialsalami0@gmail.com",
    "🔗 LinkedIn: linkedin.com/in/mahdialsalamics",
    "💻 GitHub: github.com/MahdiAlsalami",
    "",
    "📍 Location: Los Angeles, California",
    "🎯 Status: Open to internship opportunities!",
    "",
    "Feel free to reach out for collaborations or opportunities!",
  ],
  "git status": [
    "On branch main",
    "Your branch is up to date with 'origin/main'.",
    "",
    "Changes to be committed:",
    '  (use "git reset HEAD <file>..." to unstage)',
    "",
    "        modified:   skills/full-stack-development.js",
    "        new file:   projects/safetysnap.tsx",
    "        modified:   experience/software-engineering.md",
    "",
    "Untracked files:",
    '  (use "git add <file>..." to include in what will be committed)',
    "",
    "        internship-applications/",
    "        new-project-ideas.md",
  ],
  "git log": [
    "commit a1b2c3d (HEAD -> main, origin/main)",
    "Author: Mahdi Alsalami <mahdialsalami0@gmail.com>",
    "Date:   Mon Dec 16 2024",
    "",
    "    feat: Complete SafetySnap AI project with 99% accuracy",
    "",
    "commit e4f5g6h",
    "Author: Mahdi Alsalami <mahdialsalami0@gmail.com>",
    "Date:   Sun Dec 15 2024",
    "",
    "    achievement: Reach 2M+ views on tech content",
    "",
    "commit i7j8k9l",
    "Author: Mahdi Alsalami <mahdialsalami0@gmail.com>",
    "Date:   Fri Dec 13 2024",
    "",
    "    update: Graduate from IBM Accelerate Program",
  ],
  whoami: [
    "mahdi@portfolio:~$ whoami",
    "",
    "User: Mahdi Alsalami",
    "Role: Software Engineer | CS Student @ CSULB",
    "Level: Rising Senior",
    "Specialization: Full-Stack Development",
    "Passion: Teaching & Learning",
    "Mission: Building impactful software solutions",
    "",
    "Current Status: Seeking internship opportunities 🚀",
  ],
}

export function InteractiveTerminal() {
  const [isOpen, setIsOpen] = useState(false)
  const [commands, setCommands] = useState<Command[]>([])
  const [currentInput, setCurrentInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [commands])

  const executeCommand = (input: string) => {
    const command = input.toLowerCase().trim()
    const timestamp = new Date().toLocaleTimeString()

    let output: string[] = []

    if (command === "clear") {
      setCommands([])
      return
    }

    if (COMMANDS[command as keyof typeof COMMANDS]) {
      output = COMMANDS[command as keyof typeof COMMANDS]
    } else if (command === "") {
      output = []
    } else {
      output = [`Command '${command}' not found.`, "Type 'help' to see available commands."]
    }

    const newCommand: Command = {
      input,
      output,
      timestamp,
    }

    setCommands((prev) => [...prev, newCommand])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentInput.trim()) {
      executeCommand(currentInput)
      setCurrentInput("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Tab") {
      e.preventDefault()
      // Simple tab completion for common commands
      const availableCommands = Object.keys(COMMANDS)
      const matches = availableCommands.filter((cmd) => cmd.startsWith(currentInput.toLowerCase()))
      if (matches.length === 1) {
        setCurrentInput(matches[0])
      }
    }
  }

  return (
    <>
      {/* Floating Terminal Button */}
      <div className="fixed bottom-6 right-6 z-50 group">
        {/* Tooltip */}
        <div className="relative">
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-slate-800 text-green-400 text-sm rounded-lg shadow-lg border border-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Interactive Terminal - Ask me anything!
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
          </div>

          {/* Pulsing ring animation */}
          <div className="absolute inset-0 rounded-full bg-green-400/20 animate-ping"></div>

          {/* Main button */}
          <Button
            onClick={() => setIsOpen(true)}
            className="relative bg-slate-900 hover:bg-slate-800 text-green-400 border border-green-400/20 shadow-lg shadow-green-400/10 rounded-full w-14 h-14 p-0 transition-all duration-200 hover:scale-110 hover:shadow-green-400/20"
            aria-label="Open Interactive Terminal"
          >
            <Terminal className="h-6 w-6" />
          </Button>

          {/* Small text label */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-slate-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Try me!
          </div>
        </div>
      </div>

      {/* Terminal Window */}
      {isOpen && (
        <div className="fixed inset-4 md:inset-8 lg:inset-16 z-50 bg-slate-900 rounded-lg shadow-2xl border border-slate-700 flex flex-col max-h-[80vh]">
          {/* Terminal Header */}
          <div className="flex items-center justify-between bg-slate-800 px-4 py-2 rounded-t-lg border-b border-slate-700">
            <div className="flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-slate-300 text-sm ml-4">mahdi@portfolio:~</span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white hover:bg-slate-700 p-1 h-6 w-6"
              >
                <Minus className="h-3 w-3" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white hover:bg-slate-700 p-1 h-6 w-6"
              >
                <Square className="h-3 w-3" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-red-400 hover:bg-slate-700 p-1 h-6 w-6"
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          </div>

          {/* Terminal Content */}
          <div ref={terminalRef} className="flex-1 p-4 overflow-y-auto bg-slate-900 text-green-400 font-mono text-sm">
            {/* Welcome Message */}
            {commands.length === 0 && (
              <div className="mb-4">
                <div className="text-green-400">Welcome to Mahdi's Interactive Terminal!</div>
                <div className="text-slate-400">Type 'help' to see available commands.</div>
                <div className="text-slate-400">Press Tab for command completion.</div>
                <br />
              </div>
            )}

            {/* Command History */}
            {commands.map((cmd, index) => (
              <div key={index} className="mb-2">
                <div className="flex items-center">
                  <span className="text-purple-400">mahdi@portfolio</span>
                  <span className="text-slate-400">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-slate-400">$ </span>
                  <span className="text-white">{cmd.input}</span>
                </div>
                {cmd.output.map((line, lineIndex) => (
                  <div key={lineIndex} className="text-green-400 whitespace-pre-wrap">
                    {line}
                  </div>
                ))}
              </div>
            ))}

            {/* Current Input */}
            <form onSubmit={handleSubmit} className="flex items-center">
              <span className="text-purple-400">mahdi@portfolio</span>
              <span className="text-slate-400">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-slate-400">$ </span>
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-white outline-none ml-1"
                placeholder="Type a command..."
                autoComplete="off"
              />
            </form>
          </div>
        </div>
      )}
    </>
  )
}