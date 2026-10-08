export type ProjectCaseStudy = {
  slug: string;
  title: string;
  shortTitle?: string;
  description: string;
  role: string;
  type: string;
  status: string;
  technologies: string[];
  database?: string;
  overview: string;
  context?: string;
  challenge?: string;
  features?: string[];
  technicalHighlights?: string[];
  architecture?: string;
  uxConsiderations?: string[];
  process?: string[];
  outcome?: string;
  nextDirection?: string;
  url?: string;
  githubUrl?: string;
  heroImage?: {
    src: string;
    alt: string;
  };
  keyDecisions?: {
    title: string;
    description: string;
  }[];
  aiIntegration?: string;
  images?: {
    src: string;
    alt: string;
    caption: string;
  }[];
};

export const caseStudies: ProjectCaseStudy[] = [
  {
    slug: "educhem",
    title: "EduChem_GenAI",
    description: "An AI-integrated chemistry learning platform designed to support meaningful, contextual, and interactive chemistry learning.",
    role: "Full-Stack Developer",
    type: "Freelance",
    status: "Completed",
    technologies: [
      "Laravel",
      "Vue 3",
      "Inertia.js",
      "TypeScript",
      "PostgreSQL",
      "Generative AI"
    ],
    overview: "EduChem is a full-stack learning system where the educational model is reflected in the application's workflows, content structure, learning activities, evaluation process, and AI-assisted features. The platform supports structured chemistry learning, contextual learning (Socioscientific Issues), LC5E learning stages, student activities, AI Tutor assistance, progress tracking, and evaluation.",
    context: "The challenge was not simply building an LMS. It was connecting the learning workflow with the technology supporting it. The learning experience involves engaging with contextual issues, exploring concepts, explaining understanding, applying concepts, and evaluating understanding.",
    process: [
      "Engage — contextual issue / attention",
      "Explore — experiments / interactive exploration",
      "Explain — understanding supported by AI Tutor",
      "Elaborate — applying concepts to new challenges",
      "Evaluate — assessment and feedback"
    ],
    aiIntegration: "The AI Tutor is integrated into the learning experience to support students as they work through learning activities and conceptual exploration, guiding them through stages of exploration, evidence-based argumentation, and reflection. The AI Feedback system acts as an evaluation layer, participating in the broader learning workflow rather than existing as isolated 'AI magic'.",
    technicalHighlights: [
      "Laravel handles the application and domain logic.",
      "Inertia.js connects server-side application behavior with the Vue interface without requiring a separate frontend application architecture.",
      "PostgreSQL stores structured learning data (Classrooms, Topics, student answers, and AI chat logs).",
      "AI capabilities (Google Gemini) are integrated directly into the learning workflow.",
      "The frontend presents the resulting learning experience through Vue 3 and TypeScript.",
      "Role-Based Access Control (Spatie) separates administrators, teachers, and students."
    ],
    keyDecisions: [
      {
        title: "Inertia.js for the Frontend Bridge",
        description: "Using Inertia.js to connect Laravel application logic with a Vue interface allowed for a seamless SPA experience without maintaining a completely decoupled REST API architecture."
      },
      {
        title: "LC5E as Domain Structure",
        description: "Structuring learning content around the LC5E model rather than treating content as generic pages ensured the application workflow matched the educational workflow."
      },
      {
        title: "Contextual AI Integration",
        description: "Integrating AI into actual learning workflows instead of making it a detached chatbot page allowed the AI Tutor to provide relevant support based on the student's current phase."
      },
      {
        title: "Role-Based Data Boundaries",
        description: "Supporting role-based access for different system users ensured students, teachers, and administrators experience only the UI and data workflows relevant to them."
      }
    ],
    outcome: "EduChem_GenAI brings the learning model, student activities, AI assistance, and evaluation into a single digital learning environment.",
    url: "https://educhem.id",
    githubUrl: "https://github.com/Kimia-UM/educhem",
    heroImage: {
      src: "/images/edulanding.png",
      alt: "EduChem_GenAI homepage showing the platform's chemistry learning experience"
    },
    images: [
      {
        src: "/images/edulanding.png",
        alt: "EduChem_GenAI homepage",
        caption: "EduChem_GenAI product introduction and landing experience."
      },
      {
        src: "/images/dashsiswa.png",
        alt: "EduChem_GenAI student dashboard",
        caption: "The student dashboard transitions the user from a content platform into an active learning environment, tracking progress through the LC5E stages."
      },
      {
        src: "/images/chatbot.png",
        alt: "EduChem_GenAI AI Tutor interface",
        caption: "The AI Tutor provides interactive, contextual assistance during active learning phases."
      },
      {
        src: "/images/aifeedback.png",
        alt: "EduChem_GenAI AI Feedback interface",
        caption: "The AI Feedback system evaluates student responses, embedding AI directly into the assessment workflow."
      }
    ]
  },
  {
    slug: "disiplin-pro",
    title: "Disiplin PRO",
    description: "A school student-discipline monitoring system designed to help schools record, monitor, and manage student violation and achievement/tata tertib data in a more transparent and integrated way.",
    role: "Full-Stack Developer",
    type: "Freelance",
    status: "Ongoing",
    technologies: ["Laravel", "Inertia.js", "MySQL"],
    overview: "Disiplin PRO is designed to handle the complex workflow of student discipline tracking. It centralizes the recording of violations, the accumulation of penalty points, and the logging of positive achievements.",
    context: "Schools often struggle with fragmented discipline records, paper-based tracking, and delayed communication with parents. The challenge was building an integrated system that can securely centralize these records while supporting real-time reporting.",
    process: [
      "Pencatatan Poin — Logging violations and achievements systematically",
      "Laporan Real-Time — Generating immediate status reports for stakeholders",
      "Akses Orang Tua — Providing transparent access for parents to monitor progress",
      "Manajemen Tindak Lanjut — Managing follow-up actions and interventions"
    ],
    technicalHighlights: [
      "Laravel serves as the robust backend foundation for complex relational data.",
      "Inertia.js bridges the backend with a modern frontend without requiring a standalone API.",
      "MySQL manages the relational structure mapping students, rules, points, and violations."
    ],
    nextDirection: "The system architecture is currently being finalized. Next steps involve completing the parent portal interface, refining the point-calculation algorithms, and moving the system into user testing."
  }
];
