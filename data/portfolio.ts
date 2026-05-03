export const profile = {
  name: "Mahdi Alsalami",
  email: "mahdialsalami0@gmail.com",
  domain: "mahdialsalami.dev",
  resume: "/Mahdi-Alsalami-Resume.pdf",
  github: "https://github.com/MahdiAlsalami",
  linkedin: "https://www.linkedin.com/in/mahdialsalamics",
  x: "https://x.com/midtechbro"
} as const;

export const navItems = [
  { label: "about", href: "/" },
  { label: "experiences", href: "/experiences" },
  { label: "projects", href: "/projects" },
  { label: "blogs", href: "/blogs" },
  { label: "contact", href: `mailto:${profile.email}` }
] as const;

export const socialLinks = [
  { label: "GitHub", href: profile.github, kind: "github" },
  { label: "LinkedIn", href: profile.linkedin, kind: "linkedin" },
  { label: "Resume", href: profile.resume, kind: "resume" },
  { label: "X", href: profile.x, kind: "x" }
] as const;

type ExperienceItem = {
  title: string;
  organization: string;
  organizationUrl?: string;
  period: string;
  description?: string;
};

type LeadershipItem = {
  title: string;
  organization: string;
  period?: string;
};

export const aboutContent = {
  greeting: "Hello, مرحباً",
  paragraphs: [
    "I recently obtained my Bachelor of Science in Computer Science from California State University, Long Beach. I’m a growth-minded software engineer who enjoys building full-stack applications, clean user interfaces, and reliable backend systems. I’m especially interested in creating software that turns complex problems into simple, useful, and impactful tools.",
    "When I’m not programming, you can catch me working out, going on hikes, playing video games, and beginning my traveling journey.",
    "I still have a lot to learn as I begin my career, and I’m always open to exploring new opportunities."
  ]
} as const;

export const experienceItems: readonly ExperienceItem[] = [
  {
    title: "Incoming Software Engineer Intern",
    organization: "Advanced Spade Company",
    organizationUrl: "https://advancedspadecompany.com/",
    period: "Summer 2026"
  },
  {
    title: "Software Engineer Intern",
    organization: "Premier Elite National Basketball Team",
    organizationUrl: "https://www.instagram.com/premierelitela/",
    period: "Fall 2025",
    description: "Internal tools development."
  },
  {
    title: "Software Accelerate Apprenticeship",
    organization: "IBM",
    organizationUrl: "https://www.ibm.com/us-en",
    period: "Summer 2024",
    description: "cloud computing, AI"
  },
  {
    title: "Software Engineer Intern",
    organization: "Ani",
    organizationUrl: "https://www.aniiapp.com/",
    period: "Spring 2024",
    description: "Web application development."
  },
  {
    title: "Coding Coach",
    organization: "theCoderSchool",
    organizationUrl: "https://www.thecoderschool.com/",
    period: "Fall 2023 / Spring 2024",
    description: "Programming instructor."
  },
  {
    title: "Software Engineer Intern",
    organization: "Beads Factory",
    organizationUrl: "https://www.beadsfactory.com/?srsltid=AfmBOooVjnV11GVQ_O-OTKYau_0kVzHlUrnAhtkXQWJt9FuCpHHuNin1",
    period: "Summer / Fall 2022",
    description: "Shopify ecommerce web development."
  }
] as const;

export const leadershipItems: readonly LeadershipItem[] = [
  {
    title: "Industry Chair",
    organization: "Association for Computing Machinery: CSULB",
    period: "BeachHacks 2025"
  },
  {
    title: "Event Coordinator",
    organization: "GDSC"
  }
] as const;

export const projectItems = [
  {
    title: "Serenity",
    href: "http://github.com/Cole-Hartman/Serenity",
    description:
      "EEG based autism stress detection and relaxation platform built with Next.js, Supabase, BrainFlow, and BrainBrowser."
  },
  {
    title: "ThriveSites",
    href: "https://thrivesites.vercel.app/#",
    description:
      "Small business website platform built with Next.js, TypeScript, Tailwind, and Vercel."
  },
  {
    title: "SafetySnap",
    href: "https://github.com/Cole-Hartman/SafetySnap",
    description:
      "AI powered OSHA violation detection platform built with TypeScript, Next.js, React, and Gemini AI."
  },
  {
    title: "IBM Accelerate Full Stack Development Program",
    href: "https://www.credly.com/badges/e9943c6a-6f90-4ebb-8ce7-c2dcafe07712/linked_in_profile",
    description:
      "Full stack development program focused on JavaScript, React, Node.js, and REST APIs."
  },
  {
    title: "Lumo",
    href: "https://github.com/boatnoah/lumo",
    description:
      "Next.js and Supabase classroom engagement app for live sessions with slides, prompts, realtime responses, and chat."
  }
] as const;

export const socialMediaContent = {
  href: "https://lnk.bio/MahdiAlsalami",
  text: "I create programming content across multiple platforms, reaching over 2 million total views and growing a community of 2,000+ followers. I also host programming sessions and help support a Discord community of 170+ members focused on learning, building, and staying inspired."
} as const;

export const blogItems = [
  {
    title: "What I Wish I Knew Before Majoring in Computer Science",
    href: "https://medium.com/@mahdialsalami0/what-i-wish-i-knew-before-majoring-in-computer-science-5493336ef746",
    date: "2d ago"
  },
  {
    title: "Enhancing Appwrite’s: A Journey in Open Source Contribution By Mahdi Alsalami",
    href: "https://medium.com/@mahdialsalami0/enhancing-appwrites-a-journey-in-open-source-contribution-by-mahdi-alsalami-3505fb3ef229",
    date: "Sep 25, 2024"
  }
] as const;
