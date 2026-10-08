import { notFound } from "next/navigation";
import { caseStudies } from "@/content/case-studies";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const project = caseStudies.find((p) => p.slug === params.slug);
  if (!project) return {};

  let title = project.title;
  let description = project.description;

  if (project.slug === 'educhem' || project.slug === 'educhem-genai') {
    title = "EduChem_GenAI — AI-Integrated Learning Platform";
    description = "Case study of EduChem_GenAI, an AI-integrated chemistry learning platform built with Laravel, Vue, Inertia.js, PostgreSQL, and Generative AI.";
  } else if (project.slug === 'disiplin-pro') {
    title = "Disiplin PRO — School Discipline Management System";
    description = "Case study of Disiplin PRO, an ongoing school discipline management system built with Laravel, Inertia.js, and MySQL.";
  }

  const ogImage = project.heroImage ? project.heroImage.src : undefined;

  return {
    title,
    description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/projects/${project.slug}`,
      type: "article",
      images: ogImage ? [{ url: ogImage }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : [],
    },
  };
}

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const project = caseStudies.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="bg-white">
      {/* 01 — PROJECT INTRODUCTION (HERO) */}
      <Section className="pt-32 pb-24 md:pt-40 md:pb-32 relative min-h-[70vh] flex flex-col justify-end bg-zinc-950 text-white">
        {project.heroImage && (
          <div className="absolute inset-0 z-0 overflow-hidden bg-zinc-950">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image 
              src={project.heroImage.src} 
              alt={project.heroImage.alt || `${project.title} hero image`} 
              fill
              sizes="100vw"
              priority
              className="object-cover object-top opacity-30 grayscale mix-blend-luminosity" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/60 to-zinc-950" />
          </div>
        )}
        
        <Container className="relative z-10 flex flex-col justify-between h-full min-h-[50vh]">
          <div className="mb-24">
            <Link href="/#work" className="inline-flex items-center text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              <span className="mr-2">←</span>
              Back to Work
            </Link>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase">01 / Selected Project</span>
              <div className="h-px w-8 bg-zinc-800"></div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-8 leading-tight max-w-4xl">
              {project.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-2xl font-medium">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-x-16 gap-y-8 mt-20 pt-8 border-t border-zinc-800">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">Role</span>
                <span className="text-sm font-medium text-zinc-200">{project.role}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">Type</span>
                <span className="text-sm font-medium text-zinc-200">{project.type}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">Status</span>
                <span className="text-sm font-medium text-zinc-200">{project.status}</span>
              </div>
              {project.url && (
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">Link</span>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-200 hover:text-white inline-flex items-center transition-colors">
                    {project.url.replace('https://', '')} <span className="ml-1 text-zinc-500">↗</span>
                  </a>
                </div>
              )}
              {project.githubUrl && (
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">Source</span>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-200 hover:text-white inline-flex items-center transition-colors">
                    GitHub <span className="ml-1 text-zinc-500">↗</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* 02 — OVERVIEW */}
      {project.overview && (
        <Section className="py-24 md:py-32">
          <Container>
            <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
              <div className="w-full md:w-1/4">
                <span className="font-mono text-xs tracking-widest text-zinc-400 uppercase block mb-4">02</span>
                <h2 className="text-xl font-medium tracking-tight text-zinc-900">Overview</h2>
              </div>
              <div className="w-full md:w-3/4 max-w-4xl">
                <p className="text-3xl md:text-4xl text-zinc-900 font-medium leading-snug tracking-tight">
                  {project.overview}
                </p>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* 03 — CONTEXT */}
      {project.context && (
        <Section className="py-24 border-t border-zinc-100">
          <Container>
            <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
              <div className="w-full md:w-1/4">
                <span className="font-mono text-xs tracking-widest text-zinc-400 uppercase block mb-4">03</span>
                <h2 className="text-xl font-medium tracking-tight text-zinc-900">Context</h2>
              </div>
              <div className="w-full md:w-2/4">
                <p className="text-lg text-zinc-600 leading-relaxed">
                  {project.context}
                </p>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* 04 — PRODUCT WORKFLOW (PROCESS) */}
      {project.process && project.process.length > 0 && (
        <Section className="py-32 bg-[#F9F9F9] border-y border-zinc-100">
          <Container>
            <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start mb-24">
              <div className="w-full md:w-1/4">
                <span className="font-mono text-xs tracking-widest text-zinc-400 uppercase block mb-4">04</span>
                <h2 className="text-xl font-medium tracking-tight text-zinc-900">Workflow</h2>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mx-auto relative">
              {project.process.map((step, idx) => {
                const parts = step.split(' — ');
                const title = parts[0];
                const desc = parts[1];
                return (
                  <div key={idx} className="flex flex-col items-center flex-1 w-full text-center relative z-10 my-6 md:my-0 group px-4">
                    <div className="w-12 h-12 flex items-center justify-center border border-zinc-200 bg-white text-zinc-900 font-mono text-sm mb-6 relative z-10">
                      0{idx + 1}
                    </div>
                    <span className="text-xs font-medium tracking-widest text-zinc-900 uppercase mb-2">
                      {title}
                    </span>
                    {desc && (
                      <span className="text-sm text-zinc-500 max-w-[200px]">
                        {desc}
                      </span>
                    )}
                    {idx < project.process!.length - 1 && (
                      <div className="hidden md:block absolute h-[1px] bg-zinc-200 top-6 left-[50%] w-full -z-0"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>
      )}

      {/* 05 — REAL PRODUCT EVIDENCE */}
      {project.images && project.images.length > 0 && (
        <Section className="py-32">
          <Container>
            <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start mb-24">
              <div className="w-full md:w-1/4">
                <span className="font-mono text-xs tracking-widest text-zinc-400 uppercase block mb-4">05</span>
                <h2 className="text-xl font-medium tracking-tight text-zinc-900">Product Interface</h2>
              </div>
            </div>
            
            <div className="flex flex-col gap-32">
              {/* Image 0 (Homepage) Full width */}
              {project.images[0] && (
                <figure className="w-full">
                  <div className="bg-zinc-50 border border-zinc-200 p-2">
                    <Image src={project.images[0].src} alt={project.images[0].alt || `${project.title} screenshot 1`} width={1920} height={1080} sizes="100vw" className="w-full h-auto border border-zinc-200/50" />
                  </div>
                  {project.images[0].caption && (
                    <figcaption className="mt-6 text-sm text-zinc-500 font-medium flex gap-4 items-center">
                      <span className="w-4 h-px bg-zinc-300"></span> {project.images[0].caption}
                    </figcaption>
                  )}
                </figure>
              )}

              {/* Image 1 (Dashboard) Asymmetric Right */}
              {project.images[1] && (
                <div className="flex flex-col md:flex-row gap-12 items-end justify-end w-full">
                  <div className="w-full md:w-1/3 order-2 md:order-1 pb-4">
                    {project.images[1].caption && (
                      <p className="text-lg text-zinc-600 leading-relaxed font-medium">
                        {project.images[1].caption}
                      </p>
                    )}
                  </div>
                  <figure className="w-full md:w-2/3 order-1 md:order-2">
                    <div className="bg-zinc-50 border border-zinc-200 p-2">
                      <Image src={project.images[1].src} alt={project.images[1].alt || `${project.title} screenshot 2`} width={1440} height={900} sizes="(max-width: 768px) 100vw, 66vw" className="w-full h-auto border border-zinc-200/50" />
                    </div>
                  </figure>
                </div>
              )}
            </div>
          </Container>
        </Section>
      )}

      {/* 06 — AI INTEGRATION */}
      {project.aiIntegration && (
        <Section className="py-32 border-t border-zinc-100 bg-[#FBFBFB]">
          <Container>
            <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start mb-24">
              <div className="w-full md:w-1/4">
                <span className="font-mono text-xs tracking-widest text-zinc-400 uppercase block mb-4">06</span>
                <h2 className="text-xl font-medium tracking-tight text-zinc-900">AI Integration</h2>
              </div>
              <div className="w-full md:w-2/4">
                <p className="text-xl text-zinc-800 leading-relaxed">
                  {project.aiIntegration}
                </p>
              </div>
            </div>

            {project.images && project.images.length > 2 && (
               <div className="flex flex-col gap-24 mt-12 w-full max-w-5xl mx-auto">
                 {/* AI Tutor */}
                 {project.images[2] && (
                   <figure className="w-full">
                     <div className="bg-white border border-zinc-200 p-2">
                       <Image src={project.images[2].src} alt={project.images[2].alt || `${project.title} screenshot 3`} width={1920} height={1080} sizes="(max-width: 1024px) 100vw, 1024px" className="w-full h-auto border border-zinc-100" />
                     </div>
                     {project.images[2].caption && (
                       <figcaption className="mt-6 text-sm text-zinc-500 font-medium flex gap-4 items-center">
                         <span className="w-4 h-px bg-zinc-300"></span> {project.images[2].caption}
                       </figcaption>
                     )}
                   </figure>
                 )}
                 {/* AI Feedback */}
                 {project.images[3] && (
                   <figure className="w-full">
                     <div className="bg-white border border-zinc-200 p-2">
                       <Image src={project.images[3].src} alt={project.images[3].alt || `${project.title} screenshot 4`} width={1920} height={1080} sizes="(max-width: 1024px) 100vw, 1024px" className="w-full h-auto border border-zinc-100" />
                     </div>
                     {project.images[3].caption && (
                       <figcaption className="mt-6 text-sm text-zinc-500 font-medium flex gap-4 items-center justify-end">
                         {project.images[3].caption} <span className="w-4 h-px bg-zinc-300"></span>
                       </figcaption>
                     )}
                   </figure>
                 )}
               </div>
            )}
          </Container>
        </Section>
      )}

      {/* FEATURES (Fallback for simple projects without process/ai) */}
      {project.features && project.features.length > 0 && !project.process && (
        <Section className="py-24 border-t border-zinc-100">
          <Container>
            <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
              <div className="w-full md:w-1/4">
                <span className="font-mono text-xs tracking-widest text-zinc-400 uppercase block mb-4">Features</span>
                <h2 className="text-xl font-medium tracking-tight text-zinc-900">Key Features</h2>
              </div>
              <div className="w-full md:w-2/4">
                <ul className="flex flex-col gap-6">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="font-mono text-xs tracking-widest text-zinc-400 mt-1 mr-6 uppercase">0{idx + 1}</span>
                      <span className="text-lg text-zinc-800 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* 07 — ENGINEERING */}
      {project.technicalHighlights && project.technicalHighlights.length > 0 && (
        <Section className="py-32 bg-zinc-950 text-white border-t border-zinc-900">
          <Container>
            <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
              <div className="w-full md:w-1/4">
                <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase block mb-4">07</span>
                <h2 className="text-xl font-medium tracking-tight text-white">Engineering</h2>
              </div>
              <div className="w-full md:w-3/4 max-w-3xl">
                <div className="flex flex-col gap-10">
                  {project.technicalHighlights.map((highlight, idx) => (
                    <div key={idx} className="pb-10 border-b border-zinc-800 last:border-0 last:pb-0">
                      <p className="text-xl text-zinc-300 leading-relaxed font-medium">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* 08 — KEY TECHNICAL DECISIONS */}
      {project.keyDecisions && project.keyDecisions.length > 0 && (
        <Section className="py-32 bg-white">
          <Container>
            <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
              <div className="w-full md:w-1/4">
                <span className="font-mono text-xs tracking-widest text-zinc-400 uppercase block mb-4">08</span>
                <h2 className="text-xl font-medium tracking-tight text-zinc-900">Key Decisions</h2>
              </div>
              <div className="w-full md:w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
                  {project.keyDecisions.map((decision, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="font-mono text-xs tracking-widest text-zinc-400 mb-6 border-b border-zinc-200 pb-4">
                        0{idx + 1}
                      </span>
                      <h3 className="text-xl font-medium text-zinc-900 mb-4">{decision.title}</h3>
                      <p className="text-zinc-600 leading-relaxed">{decision.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}
      
      {/* 09 — OUTCOME */}
      {project.outcome && (
        <Section className="py-32 border-y border-zinc-100 bg-[#FAFAFA]">
          <Container>
            <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
              <div className="w-full md:w-1/4">
                <span className="font-mono text-xs tracking-widest text-zinc-400 uppercase block mb-4">09</span>
                <h2 className="text-xl font-medium tracking-tight text-zinc-900">Outcome</h2>
              </div>
              <div className="w-full md:w-2/4">
                <p className="text-2xl text-zinc-900 font-medium leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* 09.5 — NEXT DIRECTION (DISIPLIN PRO) */}
      {project.nextDirection && (
        <Section className="py-32 border-y border-zinc-100 bg-[#FAFAFA]">
          <Container>
            <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
              <div className="w-full md:w-1/4">
                <span className="font-mono text-xs tracking-widest text-zinc-400 uppercase block mb-4">Next Direction</span>
                <h2 className="text-xl font-medium tracking-tight text-zinc-900">Ongoing Work</h2>
              </div>
              <div className="w-full md:w-2/4">
                <p className="text-2xl text-zinc-900 font-medium leading-relaxed">
                  {project.nextDirection}
                </p>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* 10 — TECHNOLOGY */}
      <Section className="py-32 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
            <div className="w-full md:w-1/4">
              <span className="font-mono text-xs tracking-widest text-zinc-400 uppercase block mb-4">10</span>
              <h2 className="text-xl font-medium tracking-tight text-zinc-900">Stack</h2>
            </div>
            <div className="w-full md:w-3/4 max-w-4xl">
              <div className="flex flex-wrap gap-x-8 gap-y-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tight">
                    {tech}
                  </span>
                ))}
                {project.database && (
                  <span className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tight">
                    {project.database}
                  </span>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>
      
      {/* 11 — NEXT */}
      <Section className="py-32 border-t border-zinc-200">
        <Container>
          <div className="flex flex-col items-center text-center">
            <span className="font-mono text-xs tracking-widest text-zinc-400 uppercase mb-8 block">Next</span>
            <Link href="/#work" className="group inline-flex items-center text-3xl md:text-4xl lg:text-5xl font-medium text-zinc-900 transition-colors">
              <span className="border-b-2 border-transparent group-hover:border-zinc-900 pb-2 transition-colors">
                Back to selected work
              </span>
              <span className="ml-6 text-zinc-400 group-hover:text-zinc-900 group-hover:translate-x-2 transition-all">
                →
              </span>
            </Link>
          </div>
        </Container>
      </Section>
    </article>
  );
}
