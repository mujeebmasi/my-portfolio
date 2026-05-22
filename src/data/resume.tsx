import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
 
import { Python } from "@/components/ui/svgs/python";
import {
  FastApiLogo,
  GitLogo,
  JavaScriptLogo,
  MachineLearningLogo,
  MongoDbLogo,
  NlpLogo,
  PandasLogo,
  PyTorchLogo,
  RestApiLogo,
  SqlLogo,
} from "@/components/ui/svgs/tech-stack";

export const DATA = {
  name: "Shaikh Abdul Mujeeb Masi",
  initials: "SAMM",
  url: "https://github.com/mujeebmasi",
  location: "Hyderabad, Telangana, India",
  locationLink: "https://www.google.com/maps/place/Hyderabad",
  description:
    "Skilled in FastAPI, Python, React, LangChain, and LLM-based applications.",
  summary:
    "Experienced in building backend APIs and AI-powered projects, with interests in backend engineering, Generative AI, and scalable systems.",
  avatarUrl: "/me.png.png",
  highlights: [
    "Backend APIs with FastAPI and Python",
    "RAG pipelines and LangChain-powered retrieval applications",
    "LLM-based applications and automation",
  ],
  skills: [
    { name: "React", icon: ReactLight },
    
    { name: "Python", icon: Python },
    { name: "JavaScript", icon: JavaScriptLogo },
    { name: "FastAPI", icon: FastApiLogo },
    { name: "REST APIs", icon: RestApiLogo },
    { name: "SQL", icon: SqlLogo },
    { name: "MongoDB", icon: MongoDbLogo },
    { name: "Machine Learning", icon: MachineLearningLogo },
    { name: "LangChain", icon: NlpLogo },
    { name: "Pandas", icon: PandasLogo },
    { name: "PyTorch", icon: PyTorchLogo },
    { name: "Git", icon: GitLogo },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "shaikhabdulmujeeb0415@gmail.com",
    tel: "+91 6302138327",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mujeebmasi",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mujeebmasi/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:shaikhabdulmujeeb0415@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Salesforce Agentforce Club",
      href: "https://www.linkedin.com/in/mujeebmasi/",
      badges: [],
      location: "Vardhaman College of Engineering",
      title: "Core Group Member",
        logoUrl: "/salesforce.png",
      start: "Sep. 2025",
      end: "Apr. 2026",
      description:
        "- Led initiatives on Salesforce Agentforce and enterprise AI workflows.\n- Organized and conducted a hackathon with 300+ participants.\n- Mentored 1000+ students in building automation workflows using Salesforce.",
    },
    {
      company: "Skills4Future",
      badges: [],
      href: "https://www.aicte-india.org/",
      location: "Virtual",
      title: "Artificial Intelligence & Data Analytics Intern",
      logoUrl: "/edunettt.png",
      start: "Aug. 2025",
      end: "Sep. 2025",
      description:
        "- Completed a 4-week AI and Data Analytics internship focused on real-world sustainability datasets.\n- Performed data preprocessing, data cleaning, and exploratory data analysis workflows.",
    },
  ],
  education: [
    {
      school: "Vardhaman College of Engineering",
      href: "https://vardhaman.org/",
      degree: "B.Tech in Computer Science and Engineering (AI & ML)",
      logoUrl: "/vardhaman.png",
      start: "Aug. 2023",
      end: "Apr. 2027",
    },
    {
      school: "Narayana Junior College",
      href: "https://www.narayanagroup.com/",
      degree: "Intermediate - PCM",
      logoUrl: "/narayana.png",
      start: "Jul. 2021",
      end: "May 2023",
    },
    {
      school: "Dilsukhnagar High School",
      href: "https://www.google.com/maps/search/Dilsukhnagar+High+School",
      degree: "State Board",
      logoUrl: "/dps.png",
      start: "May 2014",
      end: "May 2021",
    },
  ],
  projects: [
    {
      title: "Second Brain - Content Management Platform",
      href: "https://github.com/mujeebmasi/Second-Brain",
      dates: "May 2026",
      active: true,
      description:
        "Built a full-stack second brain application to save, organize, and share YouTube links, tweets, and notes. Developed a FastAPI backend with JWT authentication, REST APIs, MongoDB integration, and CRUD functionality. Implemented responsive frontend using React and TypeScript with dynamic content rendering and API integration. Deployed frontend on Vercel and backend on Render with environment variable management and production configuration. Configured CORS handling, API communication, and cloud database connectivity using MongoDB Atlas.",
      technologies: ["React", "FastAPI", "MongoDB", "Vercel", "Render"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/mujeebmasi/Second-Brain",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "AI Multi-Agent Research System",
      href: "https://github.com/mujeebmasi/multiagent-system",
      dates: "May 2026",
      active: true,
      description:
        "Built a multi-agent AI research pipeline using LangChain and LangGraph for automated web research workflows. Implemented agent orchestration with specialized search, scraping, writing, and critique agents. Integrated Tavily web search and custom web scraping tools using BeautifulSoup and Requests. Developed structured research report generation with critique and feedback loops for iterative refinement.",
      technologies: ["LangChain", "FastAPI", "Streamlit"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/mujeebmasi/multiagent-system",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "LearnEra - AI Learning Assistant",
      href: "https://github.com/mujeebmasi",
      dates: "Sep. 2025 - Oct. 2025",
      active: true,
      description:
        "Developed an AI assistant to filter and deliver relevant learning resources. Built LLM-based content extraction and ranking workflows, designed prompt pipelines for focused and structured outputs, and worked with API-driven LLM systems and response optimization.",
      technologies: ["LLMs", "APIs", "Prompt Engineering"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/mujeebmasi",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Hybrid WOA-PSO Feature Optimization for Malware Classification",
      href: "https://github.com/mujeebmasi/advanced-whale-optimization-algorithm",
      dates: "Dec. 2025 - Apr. 2026",
      active: true,
      description:
        "Developing a malware detection pipeline using Hybrid Whale Optimization plus PSO. The project focuses on optimizing feature selection, improving classification performance, and applying explainability techniques for model transparency.",
      technologies: ["Machine Learning", "Optimization", "Explainability", "Python"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/mujeebmasi/advanced-whale-optimization-algorithm",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
