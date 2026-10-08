import { projects } from "@/content/projects";
import { ProjectFeature } from "@/components/projects/ProjectFeature";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function SelectedWork() {
  return (
    <Section id="work" className="py-24 md:py-32">
      <Container>
        <div className="mb-20 md:mb-32">
          <h2 className="font-mono text-sm font-medium tracking-widest text-zinc-500 uppercase mb-6">
            Selected Work
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl text-zinc-900 font-medium tracking-tight max-w-2xl leading-snug">
            A curated selection of verified freelance projects, featuring full-stack development and complex system design.
          </p>
        </div>

        <div className="space-y-32 md:space-y-48">
          {projects.map((project, index) => (
            <ProjectFeature 
              key={project.slug} 
              project={project} 
              reverse={index % 2 !== 0} 
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
