import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import type { ReactNode } from "react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
 
import { Python } from "@/components/ui/svgs/python";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import {
  ChromaDbLogo,
  FaissLogo,
  FastApiLogo,
  GitLogo,
  JavaScriptLogo,
  LangGraphLogo,
  LlmLogo,
  MachineLearningLogo,
  MongoDbLogo,
  NlpLogo,
  PandasLogo,
  PyTorchLogo,
  RagLogo,
  RedisLogo,
  RenderLogo,
  SqlLogo,
  TypeScriptLogo,
  VercelLogo,
} from "@/components/ui/svgs/tech-stack";

type HackathonLink = {
  href: string;
  icon: ReactNode;
  title: string;
};

type HackathonEntry = {
  title: string;
  dates?: string;
  image?: string;
  location?: string;
  description?: string;
  links?: HackathonLink[];
};

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
    { name: "TypeScript", icon: TypeScriptLogo },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Node.js", icon: Nodejs },
    { name: "FastAPI", icon: FastApiLogo },
    { name: "SQL", icon: SqlLogo },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MongoDB", icon: MongoDbLogo },
    { name: "Redis", icon: RedisLogo },
    { name: "Machine Learning", icon: MachineLearningLogo },
    { name: "LangChain", icon: NlpLogo },
    { name: "LangGraph", icon: LangGraphLogo },
    { name: "RAG", icon: RagLogo },
    { name: "LLMs", icon: LlmLogo },
    { name: "FAISS", icon: FaissLogo },
    { name: "ChromaDB", icon: ChromaDbLogo },
    { name: "Vercel", icon: VercelLogo },
    { name: "Render", icon: RenderLogo },
    { name: "Pandas", icon: PandasLogo },
    { name: "PyTorch", icon: PyTorchLogo },
    { name: "Git", icon: GitLogo },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
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

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Drytis",
      badges: [],
      href: "https://drytis.com/",
      location: "Remote",
      title: "AI Computer Science Engineer (Contract)",
      logoUrl: "/drytis.png",
      start: "Aug. 2026",
      end: "Present",
      description:
        "Provide live and asynchronous engineering support to clients, including pair programming, debugging, and completing application features across varied software stacks. Apply prompt engineering and AI coding tools in a cloud-based development environment to accelerate client delivery.",
    },
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
        "Led initiatives on Salesforce Agentforce and enterprise AI workflows. Organized and conducted a hackathon with 300+ participants. Mentored 1000+ students in building automation workflows using Salesforce.",
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
        "Completed a 4-week AI and Data Analytics internship focused on real-world sustainability datasets. Performed data preprocessing, data cleaning, and exploratory data analysis workflows.",
    },
  ],
  hackathons: [] as HackathonEntry[],
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
      title: "Meet Translate - Live Multilingual Meetings",
      href: "https://github.com/mujeebmasi/meeting-translate",
      dates: "Oct. 2026",
      active: true,
      description:
        "Built a video-meeting app where participants speaking Hindi, Telugu, Tamil or Kannada are heard in English by everyone else, as live captions and a spoken English voice. Wired a speech-recognition service to a backend that translates each utterance in real time, and shows the original speech transliterated into English letters under every caption. Split the system into a frontend, a backend and a separate ASR service, and covered it with an automated test suite.",
      technologies: ["TypeScript", "Next.js", "Python", "ASR", "WebRTC"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/mujeebmasi/meeting-translate",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Voice Agent Eval Harness",
      href: "https://github.com/mujeebmasi/voice-agent-eval-harness",
      dates: "Sep. 2026",
      active: true,
      description:
        "Built an evaluation harness that runs scripted adversarial conversations against a voice or chat support agent and scores it on escalation correctness, language fidelity and interruption handling. Reports escalation precision and recall instead of a single pass rate, so an agent that escalates everything cannot look good, and flags agents that silently switch back to English or answer a stale topic after the customer changes subject.",
      technologies: ["Python", "LLM Evaluation"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/mujeebmasi/voice-agent-eval-harness",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "RedisRAG - AI-Powered GitHub Profile Analyzer",
      href: "https://redis-rag.vercel.app/",
      dates: "Jul. 2026",
      active: true,
      description:
        "Developed a production-ready Retrieval-Augmented Generation (RAG) platform that analyzes GitHub repositories by indexing README files into Redis vector search and enabling AI-powered conversations with source-grounded responses. Engineered an optimized embedding pipeline using Google Gemini REST API with SHA-based caching, batch embedding, recursive text chunking, and cosine similarity search to reduce re-indexing latency and API overhead. Built scalable FastAPI APIs with PostgreSQL persistence, containerized the application using Docker, and optimized cloud deployment with background task processing and dynamic Redis index management.",
      technologies: ["FastAPI", "Redis", "PostgreSQL", "React", "Gemini", "Docker"],
      links: [
        {
          type: "Website",
          href: "https://redis-rag.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/mujeebmasi/RedisRAG",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Conditional RAG Workflow using LangGraph",
      href: "https://rag-based-langgraph-assistant.streamlit.app/",
      dates: "Jun. 2026",
      active: true,
      description:
        "Designed a conditional Retrieval-Augmented Generation (RAG) workflow using LangGraph that intelligently routes user queries to either direct LLM inference or document retrieval based on query intent. Built a semantic retrieval pipeline by processing PDF documents into vector embeddings, indexing them with FAISS, and retrieving relevant context using LangChain for grounded response generation. Developed an interactive Streamlit application integrated with Groq LLM to deliver low-latency, context-aware responses with modular workflow orchestration for extensibility.",
      technologies: ["Python", "LangGraph", "LangChain", "FAISS", "Groq", "Streamlit"],
      links: [
        {
          type: "Website",
          href: "https://rag-based-langgraph-assistant.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/mujeebmasi",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
