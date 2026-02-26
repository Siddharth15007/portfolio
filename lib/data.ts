// /lib/data.ts — ALL content data

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const aboutCards = [
  {
    icon: '📱',
    title: 'Mobile Architect',
    desc: '4+ years shipping production Flutter apps with BLoC, Riverpod, and Firebase — architecting for scale, not just shipping features.',
  },
  {
    icon: '🧠',
    title: 'AI Systems Engineer',
    desc: 'Advanced RAG, agent orchestration, evaluation pipelines, and on-device inference — building AI that actually works in production.',
  },
  {
    icon: '⚡',
    title: 'Agentic Automation',
    desc: 'Multi-agent workflows with n8n and LLM tool-calling — automating real ops (CRM, invoices, reports) with measurable ROI.',
  },
  {
    icon: '🔬',
    title: 'Edge AI Specialist',
    desc: 'Flutter + TFLite for privacy-first, offline-capable inference. Few people can ship AI that runs entirely on-device.',
  },
]

export type TagVariant = 'default' | 'hot' | 'ai' | 'au'

export interface SkillTag {
  label: string
  variant: TagVariant
}

export interface SkillCategory {
  icon: string
  name: string
  glowColor: string
  iconBg: string
  iconBorder: string
  tags: SkillTag[]
}

export const skillCategories: SkillCategory[] = [
  {
    icon: '🧠',
    name: 'AI Systems & LLMs',
    glowColor: 'rgba(157,111,255,0.15)',
    iconBg: 'rgba(157,111,255,0.1)',
    iconBorder: 'rgba(157,111,255,0.2)',
    tags: [
      { label: 'Agent Orchestration', variant: 'ai' },
      { label: 'Advanced RAG', variant: 'ai' },
      { label: 'Hybrid Search + Rerankers', variant: 'ai' },
      { label: 'Tool / Function Calling', variant: 'ai' },
      { label: 'Streaming Responses', variant: 'ai' },
      { label: 'LlamaIndex', variant: 'ai' },
      { label: 'GPT-4o / Claude API', variant: 'ai' },
    ],
  },
  {
    icon: '📊',
    name: 'Evaluation Engineering',
    glowColor: 'rgba(255,157,61,0.12)',
    iconBg: 'rgba(255,157,61,0.09)',
    iconBorder: 'rgba(255,157,61,0.2)',
    tags: [
      { label: 'RAGAS', variant: 'hot' },
      { label: 'LangSmith Evals', variant: 'hot' },
      { label: 'Hallucination Testing', variant: 'default' },
      { label: 'Structured Outputs', variant: 'default' },
      { label: 'Guardrails', variant: 'default' },
      { label: 'Chunking Strategies', variant: 'default' },
      { label: 'Retrieval Metrics', variant: 'default' },
    ],
  },
  {
    icon: '⚡',
    name: 'Agentic Automation',
    glowColor: 'rgba(0,212,170,0.12)',
    iconBg: 'rgba(0,212,170,0.09)',
    iconBorder: 'rgba(0,212,170,0.18)',
    tags: [
      { label: 'n8n Workflows', variant: 'au' },
      { label: 'Multi-Agent Systems', variant: 'au' },
      { label: 'Make (Integromat)', variant: 'au' },
      { label: 'Browser Automation', variant: 'au' },
      { label: 'Webhook Pipelines', variant: 'au' },
      { label: 'Email Automation', variant: 'au' },
      { label: 'RPA Automation', variant: 'au' },
    ],
  },
  {
    icon: '📱',
    name: 'Mobile & Edge AI',
    glowColor: 'rgba(56,139,253,0.12)',
    iconBg: 'rgba(56,139,253,0.09)',
    iconBorder: 'rgba(56,139,253,0.18)',
    tags: [
      { label: 'Flutter', variant: 'hot' },
      { label: 'Dart', variant: 'hot' },
      { label: 'Flutter BLoC', variant: 'hot' },
      { label: 'TFLite (On-Device ML)', variant: 'hot' },
      { label: 'Riverpod', variant: 'default' },
      { label: 'Multimodal AI (Whisper)', variant: 'ai' },
      { label: 'Xamarin / C#', variant: 'default' },
    ],
  },
  {
    icon: '☁️',
    name: 'Backend & Cloud',
    glowColor: 'rgba(255,107,107,0.1)',
    iconBg: 'rgba(255,107,107,0.09)',
    iconBorder: 'rgba(255,107,107,0.18)',
    tags: [
      { label: 'Firebase', variant: 'hot' },
      { label: 'Supabase', variant: 'default' },
      { label: 'Vector Databases', variant: 'ai' },
      { label: 'Data Pipelines / ETL', variant: 'default' },
      { label: 'ASP.NET Core', variant: 'default' },
      { label: 'REST APIs', variant: 'default' },
      { label: 'Python (ML / Automation)', variant: 'ai' },
    ],
  },
  {
    icon: '🛠️',
    name: 'Tools & Platforms',
    glowColor: 'rgba(0,212,170,0.1)',
    iconBg: 'rgba(0,212,170,0.07)',
    iconBorder: 'rgba(0,212,170,0.15)',
    tags: [
      { label: 'Android Studio', variant: 'default' },
      { label: 'VS Code', variant: 'default' },
      { label: 'Git / GitHub', variant: 'default' },
      { label: 'Postman', variant: 'default' },
      { label: 'Figma', variant: 'default' },
      { label: 'LangChain', variant: 'default' },
      { label: 'Next.js / TypeScript', variant: 'default' },
    ],
  },
]

export interface Experience {
  id: string
  label: string
  period: string
  role: string
  company: string
  description: string
  tags: string[]
}

export const experiences: Experience[] = [
  {
    id: 'projecttree',
    label: 'Projecttree',
    period: 'Aug 2023 — Present · Full-Time',
    role: 'Flutter App Developer',
    company: 'Projecttree (OctaNode) · Surat, India',
    description:
      'Leading Flutter application development across enterprise domains. Architecting BLoC-based state management, Firebase real-time integrations, and multi-tenant data flows for FMS, mySeva, and BKMS platforms. Responsible for end-to-end feature delivery and maintaining code quality across large-scale apps.',
    tags: ['Flutter BLoC', 'Firebase', 'Real-time Data', 'Enterprise Apps'],
  },
  {
    id: 'ebizz',
    label: 'Ebizz Infotech',
    period: 'Dec 2021 — Aug 2023 · Full-Time',
    role: 'Flutter App Developer',
    company: 'Ebizz Infotech · Surat, India',
    description:
      'Delivered 6+ cross-platform Flutter applications spanning fintech (TNFX), hospitality (McGrath), healthcare (Hospital), and events (Trasol Expo, HQMena). Worked directly with international clients and external backend teams via Skype, translating requirements into production-ready mobile products.',
    tags: ['Riverpod', 'BLoC', 'Fintech', 'Healthcare', 'Client Management'],
  },
  {
    id: 'freelance',
    label: 'Freelance',
    period: 'Jun 2021 — Dec 2021 · Freelance',
    role: 'Flutter Developer',
    company: 'Independent · Remote',
    description:
      'Delivered end-to-end Flutter solutions for clients independently — handling everything from architecture design and API integration to delivery and client communication. Specialized in Riverpod, BLoC, and Firebase integrations.',
    tags: ['Flutter', 'Firebase', 'API Integration', 'Full Ownership'],
  },
  {
    id: 'smegenys',
    label: 'Smegenys',
    period: 'Nov 2019 — Apr 2021 · Full-Time',
    role: 'Xamarin App Developer',
    company: 'Smegenys · Surat, India',
    description:
      'Built REST APIs with ASP.NET Core backed by MySQL, then integrated them into Xamarin.Forms apps using C#. Contributed to client applications QiTech and NHF, establishing a strong foundation in cross-platform mobile and API-first development.',
    tags: ['Xamarin', 'ASP.NET Core', 'MySQL', 'C#'],
  },
  {
    id: 'knovator',
    label: 'Knovator',
    period: 'Jul 2018 — Dec 2018 · Internship',
    role: 'Laravel Framework Trainee',
    company: 'Knovator · Surat, India',
    description:
      'Built RESTful APIs, user authentication flows, and password management systems using Laravel. Collaborated with the development team to integrate APIs into existing systems, gaining hands-on backend and API design experience.',
    tags: ['Laravel', 'REST APIs', 'PHP', 'Authentication'],
  },
]

export interface Project {
  title: string
  emoji: string
  badge: string
  badgeStyle: React.CSSProperties
  visualBg: string
  description: string
  stack: string[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'SmartFlow — Agentic Business Automation',
    emoji: '⚡',
    badge: 'Multi-Agent · Featured',
    badgeStyle: {
      background: 'rgba(0,212,170,0.14)',
      border: '1px solid rgba(0,212,170,0.32)',
      color: 'var(--a2)',
    },
    visualBg: 'linear-gradient(135deg, #040f28, #0e0820, #041828)',
    description:
      'Multi-agent platform using n8n orchestration with LLM tool-calling to autonomously handle invoice processing, WhatsApp follow-ups, CRM updates, and scheduled reporting — reducing manual ops by 70%+. Agents coordinate across tools via structured outputs and webhook pipelines. Flutter dashboard for real-time monitoring.',
    stack: ['n8n', 'Agent Orchestration', 'OpenAI', 'Flutter', 'WhatsApp API', 'Supabase', 'Webhooks'],
    featured: true,
  },
  {
    title: 'Persistent AI Assistant — Memory Architecture',
    emoji: '🤖',
    badge: 'Multi-Agent · Memory',
    badgeStyle: {
      background: 'rgba(157,111,255,0.18)',
      border: '1px solid rgba(157,111,255,0.38)',
      color: '#c4b5fd',
    },
    visualBg: 'linear-gradient(135deg, #041828, #0a1a3e, #12071e)',
    description:
      'Flutter assistant with a layered long-term memory architecture — episodic, semantic, and procedural. Uses advanced RAG with hybrid retrieval and reranking. Voice input via Whisper. Fully on-device memory store via TFLite embedding — zero cloud dependency for core reasoning.',
    stack: ['Flutter', 'Advanced RAG', 'Whisper', 'TFLite', 'Claude API', 'Hybrid Search'],
  },
  {
    title: 'Edge AI Image Classifier',
    emoji: '🧠',
    badge: 'Edge AI · On-Device',
    badgeStyle: {
      background: 'rgba(255,107,107,0.14)',
      border: '1px solid rgba(255,107,107,0.28)',
      color: '#ff9898',
    },
    visualBg: 'linear-gradient(135deg, #041f18, #0a2d2a, #041820)',
    description:
      'Flutter + TFLite app running a custom-trained classification model with zero cloud calls. Quantized for mobile — sub-100ms inference latency on mid-range hardware. Demonstrates that meaningful AI can be privacy-first and fully offline.',
    stack: ['Flutter', 'TFLite', 'Python', 'Model Quantization', 'Edge Inference'],
  },
  {
    title: 'Agentic Report Generator',
    emoji: '📊',
    badge: 'Agentic AI',
    badgeStyle: {
      background: 'rgba(255,157,61,0.14)',
      border: '1px solid rgba(255,157,61,0.28)',
      color: '#ffbd6f',
    },
    visualBg: 'linear-gradient(135deg, #1a0808, #260818, #080c1a)',
    description:
      'Autonomous agent with ETL pipeline — ingests data from multiple APIs, evaluates output quality via structured scoring, summarizes with LLMs, and delivers formatted reports to Slack or email on schedule. Built with hallucination guardrails and retrieval evaluation.',
    stack: ['Agent Orchestration', 'Python', 'Make', 'GPT-4o', 'ETL Pipeline', 'Slack API'],
  },
  {
    title: 'Weather App · BLoC Architecture',
    emoji: '🌤️',
    badge: 'Mobile · OSS',
    badgeStyle: {
      background: 'rgba(56,139,253,0.14)',
      border: '1px solid rgba(56,139,253,0.32)',
      color: 'var(--a1)',
    },
    visualBg: 'linear-gradient(135deg, #1a1008, #1e0e00, #100818)',
    description:
      'Production-grade Flutter weather app showcasing advanced BLoC state management patterns, OpenWeather API integration, and smooth animated visualizations. Open-source reference implementation.',
    stack: ['Flutter', 'BLoC', 'OpenWeather API', 'Animations'],
  },
]
