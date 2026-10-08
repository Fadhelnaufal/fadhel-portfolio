import { aboutIntro, workProcess } from "@/content/about";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function About() {
  return (
    <Section id="about" className="py-24 md:py-32 bg-[#FAFAFA]">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24 md:mb-40">
          <div className="w-full lg:w-5/12">
            <h2 className="font-mono text-sm font-medium tracking-widest text-zinc-500 uppercase mb-6">
              {aboutIntro.heading}
            </h2>
            <p className="text-3xl md:text-4xl lg:text-5xl text-zinc-900 font-medium tracking-tight leading-snug">
              {aboutIntro.title}
            </p>
          </div>

          <div className="w-full lg:w-7/12 flex flex-col justify-end space-y-10 lg:space-y-12">
            <div className="space-y-6">
              {aboutIntro.description.map((paragraph, idx) => (
                <p key={idx} className="text-xl md:text-2xl text-zinc-700 leading-relaxed font-medium tracking-tight max-w-2xl">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="font-mono text-xs md:text-sm text-zinc-500 space-y-3 pt-8 border-t border-zinc-200">
              {aboutIntro.metadata.map((item, i) => (
                <div key={i}>{item}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-24 md:space-y-32">
          {workProcess.map((step, index) => {
            // Alternating zig-zag layout: 01 right, 02 left, 03 right, 04 left
            const isRight = index % 2 === 0;
            return (
              <div
                key={step.number}
                className={`w-full md:w-8/12 lg:w-6/12 flex flex-col space-y-6 md:space-y-8 ${
                  isRight ? "md:self-end" : "md:self-start"
                }`}
              >
                <div className="flex justify-between items-end border-b border-zinc-200 pb-6">
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
                    {step.title}
                  </h3>
                  <span className="font-mono text-sm tracking-widest text-zinc-400">
                    {step.number}
                  </span>
                </div>
                <p className="text-zinc-600 leading-relaxed text-base md:text-lg">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
