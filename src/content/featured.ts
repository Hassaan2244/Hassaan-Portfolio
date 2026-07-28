export type FeaturedProject = {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  focus: string;
  stack: string;
  outcome: string;
  impact: string;
  highlights: string[];
  /** Only set when a public live URL exists */
  liveUrl?: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "jaren-ai",
    title: "Jaren AI",
    subtitle: "AI-Powered Salesforce Renewal Automation Platform",
    role: "Backend & AI",
    focus: "Salesforce renewal automation",
    stack:
      "Python · FastAPI · OpenAI · Salesforce · Apex · LWC · Salesforce Flows · OAuth",
    outcome:
      "Developed an enterprise AI-powered renewal automation platform that streamlined Salesforce Opportunity renewals by automating document processing, contract comparison, renewal justification generation, and pricing anomaly detection.",
    impact:
      "Reduced manual effort by replacing repetitive renewal tasks with an AI-driven workflow integrated into Salesforce.",
    highlights: [
      "Built backend services using Python and FastAPI to retrieve vendor quote PDFs and email attachments, orchestrate AI analysis, and update Salesforce records with structured outputs.",
      "Designed Salesforce functionality using Apex, Lightning Web Components (LWC), OAuth, and Salesforce REST APIs, enabling users to review AI-generated insights and manage approval workflows.",
      "Developed the Quote Anomaly Detection module using OpenAI Structured Outputs to identify pricing changes, contract modifications, product additions/removals, and renewal inconsistencies while generating structured JSON for downstream automation.",
      "Reduced manual effort by replacing repetitive renewal tasks with an AI-driven workflow integrated into Salesforce.",
    ],
  },
  {
    slug: "my-home-pathway",
    title: "My Home Pathway",
    subtitle: "Realtor Dashboard & Real-Time Messaging Platform",
    role: "Frontend",
    focus: "Realtime multi-role messaging",
    stack:
      "Next.js · React · Auth0 · React Query · Zustand · Centrifugo",
    outcome:
      "Developed the Realtor Dashboard by extending the existing Lender Dashboard, implementing Realtor-specific workflows, lead management features, and user interface enhancements.",
    impact:
      "Delivered scalable production-ready messaging and realtor workflows across multiple dashboards.",
    highlights: [
      "Integrated frontend modules with backend REST APIs, Auth0 authentication, React Query, and Zustand to support secure and responsive application workflows.",
      "Implemented a real-time messaging system using Centrifugo, enabling secure communication between Realtors, Realtor Associates, Lenders, Buyers, and Administrators through role-based conversation channels.",
      "Developed chat functionality including conversation management, unread message synchronization, live message delivery, and messaging workflows integrated with backend APIs.",
      "Collaborated with backend developers to deliver scalable production-ready features and maintain a consistent user experience across multiple dashboards.",
    ],
  },
  {
    slug: "seminargo",
    title: "Seminargo",
    subtitle: "Enterprise Event & Hotel Booking Platform",
    role: "Full-stack",
    focus: "Booking & reporting logic",
    stack: "React · GraphQL · TypeScript",
    outcome:
      "Developed and maintained features for a production event and hotel booking platform, implementing enhancements across reservation management, hotel services, and booking workflows.",
    impact:
      "Improved reporting accuracy and restricted sensitive hotel decline data to authorized users.",
    liveUrl: "https://lister.seminargo.com/",
    highlights: [
      "Improved reservation reporting by correcting the Early Bird Report business logic, ensuring reservation counts were based on hotel confirmation dates rather than initial customer inquiries.",
      "Implemented business logic improvements across reservation and service management workflows, including fixes for service quantity persistence, reservation status handling, and reporting accuracy.",
      "Enhanced application security by restricting hotel decline reasons to authorized Seminargo users, preventing sensitive internal information from being exposed to customers.",
      "Partnered with product managers to translate booking and reservation requirements into production-ready features, conducting peer code reviews, validating functionality in development, and supporting staging releases before production deployment.",
    ],
  },
  {
    slug: "bidcaribbean",
    title: "BidCaribbean",
    subtitle: "Vehicle Marketplace & Auction Platform",
    role: "Frontend",
    focus: "Real-time bidding & live auction UX",
    stack:
      "React · Node.js · Express · PostgreSQL · Pusher",
    outcome:
      "Worked primarily on the React frontend of BidCaribbean, a vehicle marketplace with real-time bidding and payments. Contributed feature work and bug fixes across the bidding experience, with light involvement on the Node.js / Express backend that powers live auctions.",
    impact:
      "Recreated the live bidding screen with a clear countdown so users can see time left and how the auction flow works.",
    liveUrl: "https://bidcaribbean.co/",
    highlights: [
      "Recreated the bidding screen in React, including a live countdown timer so users can track remaining auction time and understand how the bidding page works.",
      "Built and refined responsive bidding views for a clearer, more usable live-auction layout.",
      "Fixed frontend bugs and shipped UI improvements across bidding and related marketplace flows.",
      "Collaborated around a realtime stack (Pusher, Express, PostgreSQL, concurrency controls) — focused on frontend, with limited backend support.",
    ],
  },
];
