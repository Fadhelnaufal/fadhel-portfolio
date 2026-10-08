export type Capability = {
  number: string;
  title: string;
  description: string;
};

export const capabilities: Capability[] = [
  {
    number: "01",
    title: "Full-Stack Web Applications",
    description:
      "Building complete web applications across interface, application logic, data structures, and operational workflow.",
  },
  {
    number: "02",
    title: "Data-Driven Systems",
    description:
      "Designing systems that handle structured data, role-based access, and real-time reporting for operational transparency.",
  },
  {
    number: "03",
    title: "AI-Integrated Applications",
    description:
      "Integrating practical AI capabilities into existing workflows, including contextual chatbots, intelligent tutoring, and automated feedback loops.",
  },
  {
    number: "04",
    title: "Interface & Experience",
    description:
      "Implementing responsive, accessible interfaces with clear information hierarchy, thoughtful usability, and high-quality interaction design.",
  },
];
