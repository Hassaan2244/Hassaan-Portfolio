export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Analyst Software Engineer",
    company: "keepCodein",
    location: "Lahore",
    period: "Jan 2025 — Present",
    summary:
      "Full-stack and AI engineering — FastAPI, Django, GraphQL, React, Next.js, RAG pipelines, Auth0, Centrifugo, and Salesforce solutions.",
  },
  {
    role: "Frontend Development Intern",
    company: "Social Swirl",
    location: "Remote",
    period: "Sep 2024 — Dec 2024",
    summary:
      "Responsive React and Tailwind interfaces with a focus on performance and modern frontend practices.",
  },
];

export const education = {
  school: "University of Central Punjab",
  degree: "BS Computer Science",
  period: "2020 — 2025",
} as const;

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Backend",
    items: ["FastAPI", "Node.js", "GraphQL", "REST APIs", "Django"],
  },
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
  {
    label: "AI / LLM",
    items: [
      "LangChain",
      "LangGraph",
      "RAG",
      "OpenAI",
      "Google Gemini",
      "Pinecone",
      "HuggingFace",
    ],
  },
  {
    label: "Salesforce",
    items: ["Apex", "LWC", "Flows", "OAuth"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
  },
  {
    label: "Tools",
    items: ["Git", "Docker", "Auth0", "Centrifugo", "Postman", "Jira"],
  },
];
