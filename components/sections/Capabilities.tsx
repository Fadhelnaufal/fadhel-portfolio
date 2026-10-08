import { capabilities } from "@/content/capabilities";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function Capabilities() {
  return (
    <Section id="capabilities" className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <h2 className="font-mono text-sm font-medium tracking-widest text-zinc-500 uppercase mb-6">
              Capabilities
            </h2>
            <p className="text-3xl md:text-4xl lg:text-5xl text-zinc-900 font-medium tracking-tight leading-snug">
              What I build.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-zinc-200" />
            {capabilities.map((cap) => (
              <div
                key={cap.number}
                className="group border-b border-zinc-200 py-10 md:py-14 flex flex-col md:flex-row gap-6 md:gap-12"
              >
                <div className="font-mono text-sm tracking-widest text-zinc-400 md:w-16 shrink-0 transition-colors duration-500 group-hover:text-zinc-900">
                  {cap.number}
                </div>
                <div className="flex-1 space-y-4 md:space-y-5">
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
                    {cap.title}
                  </h3>
                  <p className="text-base md:text-lg text-zinc-600 leading-relaxed max-w-xl">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
