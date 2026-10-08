export type Project = {
  slug: string;
  name: string;
  role: string;
  technologies: string[];
  database?: string;
  status: "Completed" | "Ongoing";
  type: "Freelance";
  description: string;
  features: string[];
  url?: string;
  image?: {
    src: string;
    alt: string;
  };
};

export const projects: Project[] = [
  {
    slug: "educhem",
    name: "EduChem_GenAI",
    role: "Fullstack Developer",
    technologies: ["Laravel", "Inertia.js"],
    database: "PostgreSQL",
    status: "Completed",
    type: "Freelance",
    description: "A Learning Management System designed to support meaningful chemistry learning through Socioscientific Issues (SSI) and AI.",
    features: [
      "AI Tutor Interaktif",
      "Simulasi & Eksperimen",
      "Materi Terstruktur LC5E",
      "AI Chatbot",
      "AI Feedback"
    ],
    url: "https://educhem.id",
    image: {
      src: "/images/edulanding.png",
      alt: "EduChem_GenAI learning platform homepage"
    }
  },
  {
    slug: "disiplin-pro",
    name: "Disiplin PRO",
    role: "Fullstack Developer",
    technologies: ["Laravel", "Inertia"],
    database: "MySQL",
    status: "Ongoing",
    type: "Freelance",
    description: "A school student discipline monitoring system designed to help schools record, monitor, and manage student violation and achievement data transparently.",
    features: [
      "Pencatatan Poin",
      "Laporan Real-Time",
      "Akses Orang Tua",
      "Manajemen Tindak Lanjut"
    ]
  }
];
