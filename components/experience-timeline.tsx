"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, Award } from "lucide-react"

const experiences = [

    {
    id: 1,
    title: "Software Engineer Intern",
    company: "Premier Elite National Basketball Team",
    location: "Downey, CA",
    period: "Aug 2025 - Oct 2025",
    description:
      "Developed a full-stack parent portal using React and Node.js for player sign-ups, jersey sizing, and roster management. Enhanced UI responsiveness by optimizing component rendering and state handling in React, and streamlined data flow between frontend forms and backend storage to improve reliability and access.",
    skills: ["React", "Node.js", "JavaScript", "Frontend Development", "Full-Stack Development"],
    type: "work",
  },

  {
    id: 2,
    title: "Information Technology Student Assistant",
    company: "City of Downey",
    location: "Downey, CA",
    period: "Mar 2022 - Present",
    description:
      "Provided technical support and implemented structured troubleshooting procedures that improved issue resolution times by 30%, serving over 250 employees across multiple city departments. Supported technology infrastructure across city parks facilities.",
    skills: ["Technical Support", "System Administration", "Troubleshooting"],
    type: "work",
  },
  {
    id: 3,
    title: "Software Accelerate Apprenticeship",
    company: "IBM",
    location: "Remote",
    period: "Jun 2024 - Jul 2024",
    description:
      "Participated in collaborative full-stack development training using TypeScript/React/Node.js, working with 500+ fellow apprentices. Selected for the prestigious program with a 4.5% acceptance rate among 10,000+ applicants.",
    skills: ["TypeScript", "React", "Node.js", "Agile"],
    type: "work",
  },
  {
    id: 4,
    title: "Software Engineer Intern",
    company: "Ani",
    location: "Remote",
    period: "Jan 2024 - Mar 2024",
    description:
      "Boosted web application performance by 23% through optimizing React/Node.js architecture, handling 1,000+ monthly active users and implementing efficient state management patterns.",
    skills: ["React", "Node.js", "Performance Optimization"],
    type: "work",
  },
  {
    id: 5,
    title: "Coding Coach",
    company: "theCoderSchool",
    location: "Cerritos, CA",
    period: "Sep 2023 - Feb 2024",
    description:
      "Increased student retention by 40% through developing interactive curriculum covering Python, Java, and web development for 30+ weekly students across multiple skill levels and age groups.",
    skills: ["Python", "Java", "Teaching", "Curriculum Development"],
    type: "work",
  },
  {
    id: 6,
    title: "Software Engineer Intern",
    company: "Beads Factory",
    location: "La Palma, CA",
    period: "May 2022 - Sep 2022",
    description:
      "Increased e-commerce conversion by 35% by developing responsive Shopify section templates and optimizing hero slider components for mobile-first design, utilizing React.js and JavaScript.",
    skills: ["React", "JavaScript", "Shopify", "E-commerce"],
    type: "work",
  },
  {
    id: 7,
    title: "Bachelor of Science in Computer Science",
    company: "California State University, Long Beach",
    location: "Long Beach, CA",
    period: "Aug 2022 - May 2026",
    description:
      "Focusing on software engineering and full-stack development. Active member of ACM, GDSC, Chess Club, and MSA. Relevant coursework includes Operating Systems, Data Structures, Algorithms, and Machine Learning.",
    skills: ["Computer Science", "Leadership", "Academic Excellence"],
    type: "education",
  },
  {
    id: 8,
    title: "Edison STEM Scholarship Recipient",
    company: "Edison International",
    location: "California",
    period: "Jun 2024",
    description:
      "Honored to receive the $1,000 Edison Scholars Program - Edison STEM Scholarship for 2024-25, recognizing academic excellence in Computer Science at CSULB.",
    skills: ["Academic Achievement", "STEM Excellence"],
    type: "award",
  },
]

export function ExperienceTimeline() {
  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 transform md:-translate-x-1/2" />

      {/* Timeline items */}
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} gap-8`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 w-7 h-7 rounded-full bg-white dark:bg-slate-900 border-4 border-purple-500 transform -translate-x-1/2 flex items-center justify-center z-10">
              {experience.type === "work" && <Briefcase className="h-3 w-3 text-purple-500" />}
              {experience.type === "education" && <GraduationCap className="h-3 w-3 text-purple-500" />}
              {experience.type === "award" && <Award className="h-3 w-3 text-purple-500" />}
            </div>

            {/* Content */}
            <div className={`md:w-1/2 ml-10 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
              <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-lg font-bold">{experience.title}</h3>
                  <Badge variant="outline" className="sm:ml-auto whitespace-nowrap">
                    {experience.period}
                  </Badge>
                </div>
                <div className="mb-3">
                  <div className="text-purple-600 dark:text-purple-400 font-medium">{experience.company}</div>
                  <div className="text-sm text-muted-foreground">{experience.location}</div>
                </div>
                <p className="text-muted-foreground mb-4">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
