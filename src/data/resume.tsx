import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import type { ReactNode, SVGProps } from "react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
 
import { Python } from "@/components/ui/svgs/python";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import {
  FastApiLogo,
  GitLogo,
  JavaScriptLogo,
  LlmLogo,
  NlpLogo,
  RagLogo,
  RedisLogo,
  RestApiLogo,
  SqlLogo,
  TypeScriptLogo,
  VercelLogo,
} from "@/components/ui/svgs/tech-stack";

type HackathonLink = {
  href: string;
  icon: ReactNode;
  title: string;
};

// icon is optional: skills without a logo render as a plain text pill
type Skill = {
  name: string;
  icon?: (props: SVGProps<SVGSVGElement>) => ReactNode;
};

type OpenSourceEntry = {
  project: string;
  href: string;
  dates: string;
  badge: string;
  description: string;
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
    "Full-stack and AI engineer building with TypeScript, Next.js, Python, and LLM-based applications.",
  summary:
    "B.Tech student (AI & ML) who builds full-stack products and AI systems, from RAG pipelines and live speech translation to evaluation tools for voice agents. Currently a contract AI engineer, with interests in backend engineering, Generative AI, and scalable systems.",
  avatarUrl: "/me.png.png",
  highlights: [
    "Full-stack apps with Next.js, NestJS and FastAPI",
    "RAG pipelines with LangChain and Redis vector search",
    "Merged open-source PRs to Screenpipe and Supabase",
  ],
  skills: [
    { name: "TypeScript", icon: TypeScriptLogo },
    { name: "JavaScript", icon: JavaScriptLogo },
    { name: "Python", icon: Python },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Tailwind CSS" },
    { name: "NestJS" },
    { name: "FastAPI", icon: FastApiLogo },
    { name: "Socket.IO" },
    { name: "WebRTC" },
    { name: "REST APIs", icon: RestApiLogo },
    { name: "SQL", icon: SqlLogo },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Prisma" },
    { name: "Redis", icon: RedisLogo },
    { name: "RAG", icon: RagLogo },
    { name: "LangChain", icon: NlpLogo },
    { name: "LLMs", icon: LlmLogo },
    { name: "Docker", icon: Docker },
    { name: "Git", icon: GitLogo },
    { name: "Vercel", icon: VercelLogo },
  ] as Skill[],
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
        "On-demand contract engineer on a remote coding-support platform, helping clients debug and complete features.",
    },
    {
      company: "Salesforce Agentforce Club",
      href: "https://www.linkedin.com/in/mujeebmasi/",
      badges: [],
      location: "Vardhaman College of Engineering",
      title: "Core Group Member",
        logoUrl: "/salesforce.png",
      start: "Sep. 2025",
      end: "Sep. 2026",
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
  openSource: [
    {
      project: "Screenpipe",
      href: "https://github.com/screenpipe/screenpipe/pulls?q=is%3Apr+author%3Amujeebmasi+is%3Amerged",
      dates: "2026",
      badge: "YC S26 · 4 merged PRs",
      description:
        "Fixed meeting detection in Rust: app names were matched as plain substrings, so adding the Dia browser would also have flagged NVIDIA and Windows Media Player as browsers; switched to word-boundary matching and added tests. Also fixed the dev web server resolving the wrong app root, made a CLI test build its database path portably, and documented a Windows install error.",
    },
    {
      project: "Supabase SDK",
      href: "https://github.com/supabase/sdk/pull/137",
      dates: "Sep. 2026",
      badge: "Merged",
      description:
        "Fixed the PostgREST type generator: computed fields matched by argument type instead of name, INOUT arguments counted, foreign tables included.",
    },
  ] as OpenSourceEntry[],
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
      technologies: ["Next.js", "NestJS", "Socket.IO", "WebRTC", "FastAPI", "PostgreSQL"],
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
      technologies: ["Python", "FastAPI", "Pydantic", "Jinja2", "OpenAI SDK"],
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
        "Built a RAG app that indexes a user's top 15 GitHub READMEs into Redis vector search, so questions about any repository are answered from that repository's own text. Cut embedding cost with 1,500-character overlapping chunks, batched Gemini embedding calls (32 texts across 5 workers) and a 24-hour SHA cache that skips unchanged READMEs. FastAPI backend with PostgreSQL for accounts, OTP email sign-up and background indexing jobs.",
      technologies: ["React", "FastAPI", "Redis", "PostgreSQL", "LangChain", "Groq", "Gemini"],
      links: [
        {
          type: "Website",
          href: "https://redis-rag.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/mujeebmasi/redis-rag",
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
          href: "https://github.com/mujeebmasi/conditional-rag-workflow",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
