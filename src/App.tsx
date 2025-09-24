import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  ArrowRightIcon, 
  GithubIcon, 
  LinkedinIcon, 
  MailIcon, 
  PhoneIcon,
  MapPinIcon,
  CodeIcon,
  SmartphoneIcon,
  ServerIcon,
  LayoutIcon,
  DatabaseIcon,
  GraduationCapIcon,
  CalendarIcon,
  BriefcaseIcon,
  ArrowLeftIcon,

  MessageSquareIcon,
  Menu,
  Github,
  Linkedin,
  Mail,
  Download,

} from 'lucide-react'
import profilePic from './assets/profilepic.png'

import bookdLogo from './assets/bookd.png'
import tuLogo from './assets/tu.png'
import nsfLogo from './assets/nsf.png'
import techIcons from './assets/icons.json'
import appIcon1 from './assets/appicon1.png'
import appIcon2 from './assets/appicon2.png'
import appIcon3 from './assets/appicon3.png'
import appIcon4 from './assets/appicon4.png'
import appIcon5 from './assets/appicon5.png'
import appIcon6 from './assets/appicon6.png'
import appIcon7 from './assets/appicon7.png'
import appIcon8 from './assets/appicon8.png'
import appIcon9 from './assets/appicon9.png'
import appIcon10 from './assets/appicon10.png'

// App Screenshots
import app1screen1 from './assets/app1screenshots/app1screen1.png'
import app1screen2 from './assets/app1screenshots/app1screen2.png'
import app1screen3 from './assets/app1screenshots/app1screen3.png'
import app1screen4 from './assets/app1screenshots/app1screen4.png'
import app1screen5 from './assets/app1screenshots/app1screen5.png'
import app1screen6 from './assets/app1screenshots/app1screen6.png'
import app1screen7 from './assets/app1screenshots/app1screen7.png'

import app10screen1 from './assets/app10screenshots/01 – iPhone16.png'
import app10screen2 from './assets/app10screenshots/02 – iPhone16.png'
import app10screen3 from './assets/app10screenshots/03 – iPhone16.png'
import app10screen4 from './assets/app10screenshots/04 – iPhone16.png'
import app10screen5 from './assets/app10screenshots/05 – iPhone16.png'
import app10screen6 from './assets/app10screenshots/06 – iPhone16.png'

import pomo1 from './assets/app3screenshots/pomo1.png'
import pomo2 from './assets/app3screenshots/pomo2.png'
import pomo3 from './assets/app3screenshots/pomo3.png'
import pomo4 from './assets/app3screenshots/pomo4.png'
import pomo5 from './assets/app3screenshots/pomo5.png'
import pomo6 from './assets/app3screenshots/pomo6.png'

import hd1 from './assets/aihomescreenshots/hd1.png'
import hd2 from './assets/aihomescreenshots/hd2.png'
import hd3 from './assets/aihomescreenshots/hd3.png'
import hd4 from './assets/aihomescreenshots/hd4.png'

import penmo1 from './assets/penmoscreenshots/penmo1.png'
import penmo2 from './assets/penmoscreenshots/penmo2.png'
import penmo3 from './assets/penmoscreenshots/penmo3.png'
import penmo4 from './assets/penmoscreenshots/penmo4.png'
import penmo5 from './assets/penmoscreenshots/penmo5.png'

import party1 from './assets/partyscreenshots/party1.png'
import party2 from './assets/partyscreenshots/party2.png'
import party3 from './assets/partyscreenshots/party3.png'

import topdf1 from './assets/topdf/1.png'
import topdf2 from './assets/topdf/2.png'
import topdf3 from './assets/topdf/3.png'

import wl1 from './assets/weightlog/wl1.png'
import wl2 from './assets/weightlog/wl2.png'
import wl3 from './assets/weightlog/wl3.png'
import wl4 from './assets/weightlog/wl4.png'

import im1 from './assets/invoice/im1.png'
import im2 from './assets/invoice/im2.png'
import im3 from './assets/invoice/im3.png'
import im4 from './assets/invoice/im4.png'
import im5 from './assets/invoice/im5.png'

import hh1 from './assets/hwhelper/hh1.png'
import hh2 from './assets/hwhelper/hh2.png'
import hh3 from './assets/hwhelper/hh3.png'
import hh4 from './assets/hwhelper/hh4.png'
import hh5 from './assets/hwhelper/hh5png.png'




// Screenshot mappings
const appScreenshots = {
  1: {
    screens: [app10screen1, app10screen2, app10screen3, app10screen4, app10screen5, app10screen6],
    name: "Mobile Automation MCP Server"
  },
  2: {
    screens: [app1screen1, app1screen2, app1screen3, app1screen4, app1screen5, app1screen6, app1screen7],
    name: "iOS App 4"
  },
  3: {
    screens: [pomo1, pomo2, pomo3, pomo4, pomo5, pomo6],
    name: "Pomodoro Timer: Fokis"
  },
  4: {
    screens: [hd1, hd2, hd3, hd4],
    name: "AI Home Design"
  },
  5: {
    screens: [penmo1, penmo2, penmo3, penmo4, penmo5],
    name: "Penmo: Expense Tracker"
  },
  6: {
    screens: [party1, party2, party3],
    name: "Party Games: Queestion games"
  },
  7: {
    screens: [im1, im2, im3, im4, im5],
    name: "Invoice Maker & Easy Estimate"
  },
  8: {
    screens: [wl1, wl2, wl3, wl4],
    name: "Weight Loss Tracker: WeightLog"
  },
  9: {
    screens: [hh1, hh2, hh3, hh4, hh5],
    name: "AI Homework Helper: AI Scanner"
  },
  10: {
    screens: [topdf1, topdf2, topdf3],
    name: "Image to PDF: Convert to PDF"
  }
}



// Portfolio data
const portfolioData = {
  hero: {
    greeting: "Hi, I'm Abdalla",
    title: "Software Engineer & iOS Developer. I love building things and helping people.",
    description: "Building elegant mobile experiences and scalable software solutions",
    image: profilePic,
    resumeUrl: "#"
  },
  about: {
    bio: "Computer Science graduate from Towson University with expertise in iOS development and full-stack engineering. Currently leading the development of Ten App Store applications while specializing in Swift, React, and modern backend technologies. Passionate about creating intuitive user experiences and building scalable systems that serve thousands of users daily.",
    highlights: [
      "10 Apps on App Store",
      "Full-Stack Developer",
      "iOS & Mobile Expert",
      "D.C. Metro Area"
    ]
  },
  experience: [
    {
      id: 1,
      position: "iOS Developer",
      company: "Self Employed — Remote",
      period: "Jan 2025 - Present",
      description: [
        "Published and maintained over ten native iOS applications on the App Store, achieving over 2,000 downloads and an average 4.6 rating",
        "Manage projects end to end in an Agile/Scrum environment with a partner, guiding each app from initial wireframing and UI design through development, QA testing, and App Store release",
        "Build scalable, maintainable codebases using SwiftUI, UIKit, StoreKit, and MVVM architecture, leveraging Combine and async/await for reactive, high-performance features"
      ],
      tech: ["Swift", "SwiftUI", "UIKit", "StoreKit", "MVVM", "Combine", "Async/Await"]
    },
    {
      id: 2,
      position: "Computer Science Tutor",
      company: "Towson University — College of Computing & Information Sciences",
      period: "Sep 2024 - May 2025",
      description: [
        "Tutored university students in Object-Oriented Programming and Data Structures & Algorithms, simplifying complex concepts for better understanding",
        "Provided personalized guidance and problem-solving strategies to enhance students' coding proficiency and logical thinking",
        "Assisted students with coding assignments, exam preparation, and debugging, leading to improved academic performance"
      ],
      tech: ["Java", "Python", "Data Structures", "Algorithms", "Object-Oriented Programming"]
    },
    {
      id: 3,
      position: "Data Science Research Fellow",
      company: "National Science Foundation (NSF) — Baltimore, MD",
      period: "Sep 2024 - Dec 2024",
      description: [
        "Used Python (pandas) and SQL to clean, merge, and analyze Baltimore City crime and resource datasets, applying regression analysis and simple clustering to uncover relationships",
        "Built interactive dashboards with Tableau and Matplotlib to highlight trends, then presented actionable insights and recommendations to NSF and university stakeholders"
      ],
      tech: ["Python", "Pandas", "SQL", "Tableau", "Matplotlib", "Regression Analysis", "Clustering"]
    }
  ],
  projects: [
    {
      id: 1,
      name: "Journal App: Diary with Lock",
      description: "",
      icon: appIcon8,
      year: "2025",
      highlights: []
    },
    {
      id: 2,
      name: "Bookd: Reading Tracker & TBR",
      description: "React, TypeScript, Node.js, AWS",
      icon: appIcon1,
      year: "2024",
      highlights: ["Real-time collaboration", "WebSocket sync", "MongoDB storage"]
    },
    {
      id: 3,
      name: "Pomodoro Timer: Fokis",
      description: "React, Go, GraphQL, Docker",
      icon: appIcon4,
      year: "2024",
      highlights: ["AI-powered analysis", "LLM integration", "Rust service"]
    },
    {
      id: 4,
      name: "AI Home Design & Planner",
      description: "React, FastAPI, PostgreSQL",
      icon: appIcon10,
      year: "2025",
      highlights: ["Real-time data", "Back-testing engine", "Strategy analysis"]
    },
    {
      id: 5,
      name: "Expense Tracker: Penmo",
      description: "C++, TCP/IP, Non-Blocking I/O",
      icon: appIcon2,
      year: "2023",
      highlights: ["High-performance", "Event-driven", "From scratch"]
    },
    {
      id: 6,
      name: "Party Games: Game Night",
      description: "React, TypeScript, Rollup.js",
      icon: appIcon7,
      year: "2024",
      highlights: ["NPM package", "Plug-and-play", "AI integration"]
    },
    {
      id: 7,
      name: "Image to PDF: Convert to PDF",
      description: "Swift, SwiftUI, Firebase",
      icon: appIcon3,
      year: "2024",
      highlights: ["App Store published", "1000+ users", "Real-time sync"]
    },
    {
      id: 8,
      name: "Weight Loss Tracker: WeightLog",
      description: "Swift, UIKit, Core Data",
      icon: appIcon5,
      year: "2024",
      highlights: ["Offline support", "GPT-4 integration", "25% engagement boost"]
    },
    {
      id: 9,
      name: "Invoice Maker & Easy Estimate",
      description: "SwiftUI, CloudKit",
      icon: appIcon9,
      year: "2024",
      highlights: ["Cloud sync", "Push notifications", "In-app purchases"]
    },
    {
      id: 10,
      name: "AI Homework Helper: AI Scanner",
      description: "Swift, Firebase Auth",
      icon: appIcon6,
      year: "2024",
      highlights: ["Secure auth", "Social login", "User analytics"]
    }
  ],
  technicalProjects: [
    {
      id: 1,
      name: "University Marketplace",
      date: "Feb 2025",
      tech: ["React", "Node.js", "MongoDB", "Express", "Firebase Auth", "Stripe"],
      icon: LayoutIcon,
      githubUrl: "https://github.com/Abdalla2024/COSC484_Project",
      description: [
        "Built secure campus marketplace (MERN, Firebase Auth) enabling verified .edu sign-ups, real-time chat, and Stripe-powered payments.",
        "Designed flexible MongoDB schemas and optimized queries to ensure smooth loading and filtering of marketplace items."
      ]
    },
    {
      id: 2,
      name: "nVolve — Event Discovery App",
      date: "Nov 2024",
      tech: ["Swift", "SwiftUI", "Alamofire", "CoreLocation", "MapKit"],
      icon: SmartphoneIcon,
      githubUrl: "https://github.com/Abdalla2024/nVolve",
      description: [
        "Developed SwiftUI app displaying geolocated events; used Alamofire + Codable for REST API consumption and CoreLocation for GPS services.",
        "Implemented a MapKit-based interface with filtering and favorites features to help users find and bookmark nearby events."
      ]
    },
    {
      id: 3,
      name: "Movie Recommender Web App",
      date: "May 2024",
      tech: ["Java", "Spring", "MySQL", "HTML", "CSS", "JavaScript", "OpenAI GPT-3", "Docker"],
      icon: MessageSquareIcon,
      githubUrl: "https://github.com/Abdalla2024/Movie_Recommender",
      description: [
        "Collaborated in an Agile team of 4 to design a responsive UI (HTML/CSS/JS) and build a RESTful backend (Java, Spring) interfacing with MySQL and OpenAI GPT-3 to suggest films.",
        "Implemented JWT-based authentication and deployed the application in a Dockerized environment for public access."
      ]
    }
  ],
  skills: {
    languages: ["Java", "Swift", "Python", "JavaScript/TypeScript", "Go", "Rust", "C/C++", "C#", "SQL"],
    frontend: ["React", "Angular", "SwiftUI", "UIKit", "HTML/CSS"],
    backend: ["Node.js", "Spring Boot", "Django", "Express", "gRPC", "FastAPI"],
    tools: ["Git/GitHub", "Docker", "Kubernetes", "AWS", "CI/CD", "Linux"],
    databases: ["PostgreSQL", "MongoDB", "Firebase", "Core Data", "Redis"],
    platforms: ["iOS", "Kafka", "RESTful APIs", "Terraform", "Agile"]
  },
  education: {
    degree: "Bachelor of Science in Computer Science",
    school: "Towson University",
    location: "Towson, MD",
    period: "Aug 2021 - May 2025",
    gpa: "3.8",
    highlights: [
      "Computer Science Graduate",
      "Cum Laude",
      "Software Engineering Focus",
      "Mobile Development"
    ]
  },
  contact: {
    email: "abdallaa2024@gmail.com",
    phone: "+1 (443) 640-8169",
    location: "Baltimore, MD",
    linkedin: "https://www.linkedin.com/in/abdalla-abdelmagid-4b763b29b/",
    github: "https://github.com/Abdalla2024"
  }
}

// Hero Section with About Me
function HeroSection() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.2,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    }),
  }

  return (
    <section id="home" className="flex items-start justify-center px-4 pt-28 pb-24">
      <div className="container max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Picture - Left Side */}
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex-shrink-0"
          >
            <Avatar className="w-48 h-48 md:w-64 md:h-64">
              <AvatarImage 
                src={portfolioData.hero.image} 
                alt="Profile picture" 
                className="object-cover object-left"
              />
              <AvatarFallback className="text-4xl">AA</AvatarFallback>
            </Avatar>
          </motion.div>

          {/* Content - Right Side */}
          <div className="flex-1 text-center md:text-left space-y-8">
            <motion.div
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="space-y-2"
            >
              <p className="text-lg text-muted-foreground">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Abdalla Abdelmagid
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Software Engineer & iOS Developer
              </p>
            </motion.div>

            <motion.div
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold">About</h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                I am a computer science graduate from Towson University with expertise in iOS development and full-stack engineering. I currently lead the development of over ten App Store applications while specializing in Swift, React, and modern backend technologies. I am passionate about creating intuitive user experiences and building scalable systems that serve thousands of users daily.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Work Experience Timeline
function ExperienceSection() {
  const getExperienceLogo = (expId: number) => {
    switch (expId) {
      case 1: // iOS Developer
        return bookdLogo
      case 2: // Computer Science Tutor
        return tuLogo
      case 3: // Data Science Research Fellow
        return nsfLogo
      default:
        return null
    }
  }

  return (
    <section id="experience" className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">
              Work Experience
            </h2>
          </motion.div>
          
          <div className="relative">
            {/* Central timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-border hidden md:block" />
            
            {/* Mobile timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-border md:hidden" />
            
            {portfolioData.experience.map((exp, index) => {
              const logo = getExperienceLogo(exp.id)
              const isLeft = index % 2 === 0
              
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative mb-12"
                >
                  {/* Desktop layout - alternating sides */}
                  <div className="hidden md:flex items-start relative">
                    {/* Timeline node positioned absolutely in center */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 pt-1 z-10">
                      <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center border-4 border-primary shadow-lg">
                        {logo && (
                          <img
                            src={logo}
                            alt={`${exp.position} logo`}
                            className="w-12 h-12 rounded-sm"
                          />
                        )}
                      </div>
                    </div>

                    {isLeft ? (
                      <>
                        {/* Content on left with speech bubble */}
                        <div className="w-5/12">
                          <motion.div 
                            className="relative"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                          >
                            <Card className="p-6">
                              <div className="flex flex-col items-start mb-4">
                                <Badge variant="outline" className="mb-2">
                                  <CalendarIcon className="mr-1 h-3 w-3" />
                                  {exp.period}
                                </Badge>
                                <h3 className="text-xl font-semibold">{exp.position}</h3>
                                <p className="text-muted-foreground">{exp.company}</p>
                              </div>
                              <ul className="text-muted-foreground mb-4 space-y-2">
                                {exp.description.map((bullet, bulletIndex) => (
                                  <li key={bulletIndex} className="flex items-start">
                                    <span className="text-primary mr-2 mt-1">-</span>
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                              <div className="flex flex-wrap gap-2">
                                {exp.tech.map((tech, techIndex) => (
                                  <Badge key={techIndex} variant="secondary" className="text-xs">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </Card>
                            {/* Speech bubble arrow pointing right */}
                            <div className="absolute top-6 -right-2 w-0 h-0 border-l-8 border-l-border border-t-8 border-t-transparent border-b-8 border-b-transparent"></div>
                            <div className="absolute top-6 -right-1 w-0 h-0 border-l-8 border-l-background border-t-8 border-t-transparent border-b-8 border-b-transparent"></div>
                          </motion.div>
                        </div>
                        
                        {/* Empty space on right */}
                        <div className="w-7/12"></div>
                      </>
                    ) : (
                      <>
                        {/* Empty space on left */}
                        <div className="w-7/12"></div>
                        
                        {/* Content on right with speech bubble */}
                        <div className="w-5/12">
                          <motion.div 
                            className="relative"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                          >
                            <Card className="p-6">
                              <div className="flex flex-col items-start mb-4">
                                <Badge variant="outline" className="mb-2">
                                  <CalendarIcon className="mr-1 h-3 w-3" />
                                  {exp.period}
                                </Badge>
                                <h3 className="text-xl font-semibold">{exp.position}</h3>
                                <p className="text-muted-foreground">{exp.company}</p>
                              </div>
                              <ul className="text-muted-foreground mb-4 space-y-2">
                                {exp.description.map((bullet, bulletIndex) => (
                                  <li key={bulletIndex} className="flex items-start">
                                    <span className="text-primary mr-2 mt-1">-</span>
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                              <div className="flex flex-wrap gap-2">
                                {exp.tech.map((tech, techIndex) => (
                                  <Badge key={techIndex} variant="secondary" className="text-xs">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </Card>
                            {/* Speech bubble arrow pointing left */}
                            <div className="absolute top-6 -left-2 w-0 h-0 border-r-8 border-r-border border-t-8 border-t-transparent border-b-8 border-b-transparent"></div>
                            <div className="absolute top-6 -left-1 w-0 h-0 border-r-8 border-r-background border-t-8 border-t-transparent border-b-8 border-b-transparent"></div>
                          </motion.div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Mobile layout - all on right side */}
                  <div className="md:hidden relative flex items-start">
                    {/* Timeline logo */}
                    <div className="absolute left-2 w-8 h-8 bg-background rounded-full flex items-center justify-center border-2 border-primary">
                      {logo && (
                        <img
                          src={logo}
                          alt={`${exp.position} logo`}
                          className="w-6 h-6 rounded-sm"
                        />
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="ml-16 flex-1">
                      <Card className="p-4">
                        <div className="mb-4">
                          <div className="flex flex-col mb-2">
                            <Badge variant="outline" className="mb-2 w-fit">
                              <CalendarIcon className="mr-1 h-3 w-3" />
                              {exp.period}
                            </Badge>
                            <h3 className="text-xl font-semibold">{exp.position}</h3>
                            <p className="text-muted-foreground">{exp.company}</p>
                          </div>
                          <ul className="text-muted-foreground mb-4 space-y-2">
                            {exp.description.map((bullet, bulletIndex) => (
                              <li key={bulletIndex} className="flex items-start">
                                <span className="text-primary mr-2 mt-1">-</span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2">
                            {exp.tech.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// Apps Section
function AppsSection() {
  const [showAllApps, setShowAllApps] = useState(false)
  const visibleApps = showAllApps ? portfolioData.projects : portfolioData.projects.slice(0, 6)
  
  return (
    <section id="projects" className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">Apps</h2>
          </motion.div>

          <div className="space-y-8">
            {visibleApps.map((project, index) => {
              const hasScreenshots = appScreenshots[project.id as keyof typeof appScreenshots]
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {/* App Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={project.icon}
                      alt={project.name}
                      className="w-16 h-16 rounded-xl hover:scale-105 transition-transform duration-300"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {project.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.year}
                      </p>
                    </div>
                  </div>
                  
                  {/* Screenshots */}
                  {hasScreenshots && (
                    <div className="ml-20">
                      <Carousel 
                        opts={{
                          align: "start",
                          loop: true,
                        }}
                        className="w-full"
                      >
                        <CarouselContent className="-ml-2 md:-ml-4">
                          {hasScreenshots.screens.map((screenshot, screenshotIndex) => (
                            <CarouselItem key={screenshotIndex} className="pl-0 md:pl-0 basis-1/2 md:basis-1/3">
                              <div className="relative group">
                                <img
                                  src={screenshot}
                                  alt={`${hasScreenshots.name} screenshot ${screenshotIndex + 1}`}
                                  className="max-w-[80%] h-auto rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                      </Carousel>
                    </div>
                  )}
                </motion.div>
              )
            })}
            
            {/* See More / See Less Button */}
            {portfolioData.projects.length > 6 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex justify-center pt-8"
              >
                <Button 
                  variant="outline" 
                  onClick={() => setShowAllApps(!showAllApps)}
                  className="flex items-center gap-2"
                >
                  {showAllApps ? (
                    <>
                      Show Less
                      <ArrowLeftIcon className="w-4 h-4 rotate-90" />
                    </>
                  ) : (
                    <>
                      See More Apps ({portfolioData.projects.length - 6} more)
                      <ArrowLeftIcon className="w-4 h-4 -rotate-90" />
                    </>
                  )}
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// Projects Section
function ProjectsSection() {
  return (
    <section id="technical-projects" className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">Projects</h2>
          </motion.div>

          <div className="space-y-8">
            {portfolioData.technicalProjects.map((project, index) => {
              const Icon = project.icon
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex gap-4">
                    {/* Project Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    
                    {/* Project Content */}
                    <div className="flex-1">
                      {/* Project Name */}
                      <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      {/* Date */}
                      <p className="text-sm text-muted-foreground mb-2">
                        {project.date}
                      </p>
                      
                      {/* Tech Stack Tags with GitHub Link */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {/* GitHub Source Badge */}
                        {project.githubUrl && (
                          <Badge 
                            className="text-xs bg-black hover:bg-black/90 text-white cursor-pointer"
                            onClick={() => window.open(project.githubUrl, '_blank')}
                          >
                            <GithubIcon className="w-3 h-3 mr-1" />
                            Source
                          </Badge>
                        )}
                      </div>
                      
                      {/* Description Points */}
                      <ul className="space-y-2">
                        {project.description.map((point, pointIndex) => (
                          <li key={pointIndex} className="text-sm text-muted-foreground leading-relaxed flex items-start">
                            <span className="text-primary mr-2 mt-1">-</span>
                            <span dangerouslySetInnerHTML={{ __html: point }} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// Tech Stack Section with Auto-Scrolling Icons
function TechStackSection() {
  // Duplicate the array three times to create seamless loop
  const originalTechs = techIcons.technologies
  const technologies = [...originalTechs, ...originalTechs, ...originalTechs]
  
  // Calculate the scroll percentage dynamically based on actual number of technologies
  // We need to scroll through exactly one set of the original technologies
  const totalItems = technologies.length // 63 items (21 * 3)
  const originalItemCount = originalTechs.length // 21 items
  const scrollPercentage = -(800 * originalItemCount) / totalItems // -(100 * 21) / 63 = -33.33%
  
  return (
    <section id="tech-stack" className="py-8 bg-background">
      {/* <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">Technologies</h2>
          </motion.div>
        </div>
      </div> */}
      
      {/* Auto-scrolling tech icons with blur edges */}
      <div 
        className="relative max-w-3xl mx-auto overflow-hidden"
        // style={{
        //   maskImage: 'linear-gradient(to right, transparent, black 5%, black 25%, transparent)',
        //   WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 85%, transparent)',
        // }}
      >
        {/* Scrolling container */}
        <motion.div 
          className="flex gap-14"
          animate={{
            x: ["0%", `${scrollPercentage}%`],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 16, // Faster animation to show all 21 technologies efficiently
              ease: "linear",
            },
          }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 group"
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.2 }}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="w-16 h-16 flex items-center justify-center">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      // style={{ filter: "grayscale(100%)" }} 
                      className="w-14 h-14 object-contain transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tech.name}</p>
                </TooltipContent>
              </Tooltip>
            </motion.div>
          ))}
        </motion.div>
        {/* Left veil */}
  <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent dark:from-neutral-900" />

{/* Right veil */}
<div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent dark:from-neutral-900" />
      </div>
    </section>
  )
}

// Skills Section
function SkillsSection() {
  return (
    <section id="skills" className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold">
              Skills & Technologies
            </h2>
          </motion.div>
          <TechStackSection />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-48">
                <div className="flex items-center mb-4">
                  <CodeIcon className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-lg font-semibold">Languages</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.languages.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-48">
                <div className="flex items-center mb-4">
                  <LayoutIcon className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-lg font-semibold">Frontend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.frontend.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Backend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-48">
                <div className="flex items-center mb-4">
                  <ServerIcon className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-lg font-semibold">Backend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.backend.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-48">
                <div className="flex items-center mb-4">
                  <BriefcaseIcon className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-lg font-semibold">Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.tools.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Databases */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-48">
                <div className="flex items-center mb-4">
                  <DatabaseIcon className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-lg font-semibold">Databases</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.databases.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Platforms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-48">
                <div className="flex items-center mb-4">
                  <SmartphoneIcon className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-lg font-semibold">Platforms</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.platforms.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Education Section
function EducationSection() {
  return (
    <section id="education" className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">
              Education
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                  <GraduationCapIcon className="h-10 w-10 text-primary mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold">{portfolioData.education.degree}</h3>
                    <p className="text-muted-foreground">{portfolioData.education.school}</p>
                    <p className="text-sm text-muted-foreground">GPA: {portfolioData.education.gpa}</p>
                  </div>
                </div>
                <div className="flex flex-col md:items-end">
                  <Badge variant="outline" className="mb-2">
                    {portfolioData.education.period}
                  </Badge>
                  <Badge variant="default">
                    {portfolioData.education.location}
                  </Badge>
                </div>
              </div>
              <Separator className="my-6" />
              <div>
                <h4 className="font-semibold mb-3">Achievements & Activities</h4>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.education.highlights.map((highlight, index) => (
                    <Badge key={index} variant="secondary">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Contact Section
function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setFormStatus({ type: null, message: '' })

    try {
      // Initialize EmailJS with environment variables
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      if (result.status === 200) {
        setFormStatus({ 
          type: 'success', 
          message: 'Message sent successfully! I\'ll get back to you soon.' 
        })
        formRef.current?.reset()
      }
    } catch (error) {
      console.error('Email send error:', error)
      setFormStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again or email me directly.' 
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">
              Let's Connect
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MailIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">{portfolioData.contact.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <PhoneIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">{portfolioData.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPinIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-muted-foreground">{portfolioData.contact.location}</p>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="flex gap-4">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => window.open(portfolioData.contact.linkedin, '_blank')}
                >
                  <LinkedinIcon className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => window.open(portfolioData.contact.github, '_blank')}
                >
                  <GithubIcon className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </div>
              
              <div className="mt-4">
                <Button 
                  size="default" 
                  variant="default" 
                  className="w-full"
                  onClick={() => {
                    const link = document.createElement('a')
                    link.href = '/resume.pdf'
                    link.download = 'Abdalla_Abdelmagid_Resume.pdf'
                    link.click()
                  }}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <input
                      type="text"
                      name="user_name"
                      className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Your name"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <input
                      type="email"
                      name="user_email"
                      className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="your.email@example.com"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Tell me about your project..."
                      required
                      disabled={isLoading}
                    />
                  </div>
                  
                  {/* Status message */}
                  {formStatus.type && (
                    <div className={`p-3 rounded-md text-sm ${
                      formStatus.type === 'success' 
                        ? 'bg-green-500/10 text-green-600 dark:text-green-400' 
                        : 'bg-red-500/10 text-red-600 dark:text-red-400'
                    }`}>
                      {formStatus.message}
                    </div>
                  )}
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        Sending...
                        <motion.div
                          className="ml-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Apps", href: "#projects" },
    { name: "Projects", href: "#technical-projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    { name: "GitHub", href: portfolioData.contact.github, icon: Github },
    { name: "LinkedIn", href: portfolioData.contact.linkedin, icon: Linkedin },
    { name: "Email", href: `mailto:${portfolioData.contact.email}`, icon: Mail },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      // Don't offset for home and contact sections
      if (href === "#home" || href === "#contact") {
        element.scrollIntoView({ behavior: "smooth" })
      } else {
        // Offset by 50px for other sections to account for fixed navbar
        const elementPosition = (element as HTMLElement).offsetTop - 50
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth"
        })
      }
    }
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">Abdalla</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Links */}
        <div className="hidden md:flex items-center space-x-4">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <Button key={link.name} variant="ghost" size="icon" asChild>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <Icon className="h-4 w-4" />
                  <span className="sr-only">{link.name}</span>
                </a>
              </Button>
            )
          })}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-lg font-medium transition-colors hover:text-primary"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex items-center space-x-4 pt-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <Button key={link.name} variant="ghost" size="icon" asChild>
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        <Icon className="h-4 w-4" />
                        <span className="sr-only">{link.name}</span>
                      </a>
                    </Button>
                  )
                })}
              </div>
            </div>
          </SheetContent>
        </Sheet>
        </div>
      </div>
    </header>
  )
}

// Main Portfolio Component
function App() {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <HeroSection />
        <ExperienceSection />
        <AppsSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </div>
    </TooltipProvider>
  )
}

export default App
