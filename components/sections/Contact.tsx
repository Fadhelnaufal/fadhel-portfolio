import { contact } from "@/content/contact";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

export function Contact() {
  return (
    <Section
      id="contact"
      className="py-24 md:py-32 lg:py-48 bg-white border-t border-zinc-200"
    >
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
          <div className="max-w-2xl">
            <h2 className="font-mono text-sm font-medium tracking-widest text-zinc-500 uppercase mb-8">
              {contact.eyebrow}
            </h2>
            <p className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-zinc-900 leading-tight mb-8">
              {contact.title}
            </p>
            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-lg">
              {contact.description}
            </p>
          </div>

          <div className="w-full md:w-auto shrink-0 pb-2 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
            {contact.actions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className="group inline-flex items-center gap-2 text-lg md:text-xl font-medium text-zinc-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="border-b border-zinc-900 group-hover:text-zinc-600 group-hover:border-zinc-600 pb-1 transition-colors">
                  {action.label}
                </span>
                <span className="text-zinc-400 group-hover:text-zinc-600 group-hover:translate-x-1 transition-all">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
