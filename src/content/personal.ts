export type PersonalProject = {
  slug: string;
  title: string;
  role: string;
  stack: string;
  outcome: string;
  highlights: string[];
  /** Optional — wire up later when URLs are ready */
  github?: string;
  /** Compact = denser type block; wide = full editorial */
  density: "wide" | "compact";
};

export const personalProjects: PersonalProject[] = [
  {
    slug: "ai-interview-platform",
    title: "AI Interview Platform",
    role: "Full product",
    density: "wide",
    stack: "FastAPI · React · Gemini · AssemblyAI · Hume AI",
    outcome:
      "End-to-end AI interview product — job posts, applications, scheduling, and automated conversational interviews in one workflow.",
    highlights: [
      "Built a platform for managing postings, candidates, interview scheduling, and AI-driven interview sessions.",
      "Integrated speech-to-text, conversational AI, text-to-speech, video recording, and transcript generation.",
      "Shipped an admin dashboard to review responses, manage interviews, and access recordings.",
    ],
  },
  {
    slug: "faq-rag-chatbot",
    title: "FAQ RAG Chatbot",
    role: "Retrieval",
    density: "wide",
    stack: "LangChain · Pinecone · HuggingFace · BM25 · CrossEncoder",
    outcome:
      "Hybrid retrieval chatbot that combines dense vector search and sparse keyword ranking for sharper FAQ answers.",
    highlights: [
      "Combined Pinecone embeddings with BM25 keyword ranking and CrossEncoder reranking.",
      "Designed document ingestion and retrieval pipelines with LangChain.",
      "Tuned the hybrid stack for relevance beyond single-method vector search.",
    ],
  },
  {
    slug: "ai-calendar-assistant",
    title: "AI Calendar Assistant",
    role: "Agent",
    density: "compact",
    stack: "LangChain · Google Gemini · FastAPI",
    outcome:
      "Conversational calendar agent that creates, updates, reschedules, cancels, and queries events in natural language.",
    highlights: [
      "Connected LangChain and Gemini to execute calendar operations through backend APIs.",
      "Kept multi-turn conversational context while running create, update, and cancel flows.",
      "Exposed calendar actions as a FastAPI-backed assistant interface.",
    ],
  },
  {
    slug: "youtube-transcript-chatbot",
    title: "YouTube Transcript Chatbot",
    role: "RAG",
    density: "compact",
    stack: "Python · LangChain · OpenAI",
    outcome:
      "RAG chatbot over YouTube transcripts — extract, summarize, and answer context-aware questions.",
    highlights: [
      "Extracted video transcripts and grounded answers with retrieval-augmented generation.",
      "Generated summaries and handled follow-up questions against transcript context.",
      "Built the pipeline with LangChain and OpenAI for end-to-end Q&A.",
    ],
  },
];
