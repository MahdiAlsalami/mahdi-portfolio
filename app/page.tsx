import { InteractiveTerminal } from "@/components/interactive-terminal"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { ContactForm } from "@/components/contact-form"
import { SkillsBrowser } from "@/components/skills-browser"
import { HeroAnimation } from "@/components/hero-animation"
import { Github, Linkedin, Mail, ExternalLink, ArrowDown } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Interactive Animation */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_100%)]"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  <span className="block">Mahdi Alsalami</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Software Engineer | CS @ CSULB
                  </span>
                </h1>
                
              </div>
              <p className="max-w-[600px] text-gray-400 md:text-xl">
                Rising senior at CSULB with ambitions of becoming a Software Engineer. I enjoy coding, teaching
                others to code, and learning more about it! I'm constantly seeking new challenges and opportunities to
                grow both personally and professionally in the tech industry.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
                  <Link href="#projects">View My Work</Link>
                </Button>
                <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800 bg-transparent">
                  <Link href="#contact">Get In Touch</Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <Link
                  href="https://github.com/MahdiAlsalami"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="https://linkedin.com/in/mahdialsalamics"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link
                  href="mailto:mahdialsalami0@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <HeroAnimation />
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Link href="#about" aria-label="Scroll down">
              <ArrowDown className="h-8 w-8 text-white opacity-70" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/20 px-3 py-1 text-sm text-purple-600 dark:text-purple-400 mb-4">
              About Me
            </div>
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Creating Digital Experiences That Matter
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Get to know the person behind the code.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold mb-2">My Journey</h3>
              <p className="text-muted-foreground">
                I started coding at 18, building simple projects, and over time, developed a passion for solving real-world problems through technology. Now, as a Computer 
                Science student at California State University Long Beach, I focus on building full-stack applications and exploring AI, machine learning, and mainly focusing 
                on backend development.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold mb-2">My Approach</h3>
              <p className="text-muted-foreground">
                I'm committed to learning and growing every day. I am not afraid to take on challenges or put in the effort to get better at what I do. 
                I believe in taking the hard route to develop my skills and deliver the best results. My goal is always to grow, improve, and keep pushing myself to be better.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Beyond Code</h3>
              <p className="text-muted-foreground">
                When I'm not coding, you'll find me hiking, playing video games, or hitting the gym with friends. 
                I believe a well-rounded life leads to more creative problem-solving.
              </p>
            </div>
          </div>
          <div className="mt-16 bg-slate-50 dark:bg-slate-800 p-8 rounded-xl shadow-sm max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Currently...</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">▹</span>
                <span>
                  Studying Computer Science at <strong>California State University Long Beach</strong> (Expected graduation: May 2026)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">▹</span>
                <span>
                  Working on a <strong>varity of projects</strong> to increase my knowledge on Full-Stack development.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">▹</span>
                <span>
                  Learning <strong>C and GoLang</strong> to have better backend knowledge!
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">▹</span>
                <span>
                  Seeking <strong>internship and New-Grad opportunities</strong> in software development.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section with Browser Interface */}
      <section id="skills" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/20 px-3 py-1 text-sm text-purple-600 dark:text-purple-400 mb-4">
              My Skills
            </div>
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Technical Skills</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                
              </p>
            </div>
          </div>
          <div className="mt-16">
            <SkillsBrowser />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/20 px-3 py-1 text-sm text-purple-600 dark:text-purple-400 mb-4">
              My Work
            </div>
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A showcase of my recent work and personal projects.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="AI Image Generator"
              description="An application that uses machine learning to generate unique images based on text prompts."
              tags={["Python", "TensorFlow", "React", "Flask"]}
              imageUrl="/placeholder.svg?height=300&width=500"
              projectUrl="#"
              githubUrl="#"
              featured={true}
            />
            <ProjectCard
              title="E-Commerce Platform"
              description="A full-stack e-commerce platform with user authentication, product catalog, and payment processing."
              tags={["React", "Node.js", "MongoDB", "Stripe"]}
              imageUrl="/placeholder.svg?height=300&width=500"
              projectUrl="#"
              githubUrl="#"
              featured={true}
            />
            <ProjectCard
              title="Task Management App"
              description="A productivity app for managing tasks, projects, and deadlines with team collaboration features."
              tags={["Next.js", "TypeScript", "Prisma", "PostgreSQL"]}
              imageUrl="/placeholder.svg?height=300&width=500"
              projectUrl="#"
              githubUrl="#"
              featured={true}
            />
            <ProjectCard
              title="Weather Dashboard"
              description="A responsive weather application that displays current conditions and forecasts for any location."
              tags={["JavaScript", "API Integration", "CSS3"]}
              imageUrl="/placeholder.svg?height=300&width=500"
              projectUrl="#"
              githubUrl="#"
            />
            <ProjectCard
              title="Social Media Analytics"
              description="A dashboard for tracking and analyzing social media performance across multiple platforms."
              tags={["React", "D3.js", "Express", "OAuth"]}
              imageUrl="/placeholder.svg?height=300&width=500"
              projectUrl="#"
              githubUrl="#"
            />
            <ProjectCard
              title="Portfolio Website"
              description="This very website, designed and built to showcase my skills and projects."
              tags={["Next.js", "Tailwind CSS", "Framer Motion"]}
              imageUrl="/placeholder.svg?height=300&width=500"
              projectUrl="#"
              githubUrl="#"
            />
          </div>
          <div className="flex justify-center mt-12">
            <Button variant="outline" className="group bg-transparent">
              <Link
                href="https://github.com"
                className="flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                View More Projects on GitHub
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/20 px-3 py-1 text-sm text-purple-600 dark:text-purple-400 mb-4">
              My Journey
            </div>
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience & Education</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                My academic journey and professional experience.
              </p>
            </div>
          </div>
          <div className="mt-16">
            <ExperienceTimeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/20 px-3 py-1 text-sm text-purple-600 dark:text-purple-400 mb-4">
              Get In Touch
            </div>
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Let's Work Together</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Have a question or want to work together? Feel free to reach out!
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 mt-16 items-start max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <a
                      href="mailto:mahdialsalami0@example.com"
                      className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      mahdialsalami0@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <Github className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <a
                      href="https://github.com/MahdiAlsalami"
                      className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/MahdiAlsalami
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <Linkedin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <a
                      href="https://www.linkedin.com/in/mahdialsalamics/"
                      className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.linkedin.com/in/mahdialsalamics
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Current Status</h3>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <p>Available for freelance work</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <p>Open to internship opportunities</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <p>Limited availability for part-time roles</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-center text-sm text-muted-foreground md:text-left">
                © {new Date().getFullYear()} Mahdi Alsalami. All rights reserved.
              </p>
              <p className="text-center text-xs text-muted-foreground md:text-left">
                Designed and built by Mahdi Alsalami
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <InteractiveTerminal />
    </main>
  )
}
