import { Project } from "@/content/projects";
import { ProjectMeta } from "./ProjectMeta";
import Link from "next/link";
import Image from "next/image";

interface ProjectFeatureProps {
  project: Project;
  reverse?: boolean;
}

const ProjectVisual = ({ project }: { project: Project }) => {
  if (project.image) {
    return (
      <div className="relative w-full aspect-[4/3] lg:aspect-[16/10] bg-zinc-100 border border-zinc-200 overflow-hidden group">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
    );
  }

  // Restrained fallback visual for projects without screenshots
  return (
    <div className="relative w-full aspect-[4/3] lg:aspect-[16/10] bg-zinc-50 border border-zinc-200 overflow-hidden group flex flex-col items-center justify-center p-8">
      <div className="relative z-10 text-center space-y-4">
        <span className="font-mono text-xs tracking-[0.2em] text-zinc-400 uppercase">
          In Development
        </span>
        <h4 className="text-xl md:text-2xl font-medium tracking-tight text-zinc-300">
          System currently in development
        </h4>
      </div>
    </div>
  );
};

export function ProjectFeature({ project, reverse = false }: ProjectFeatureProps) {
  return (
    <div className={`flex flex-col gap-12 lg:gap-20 lg:items-center ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
      <div className="w-full lg:w-5/12 flex flex-col space-y-8">
        <header className="space-y-4">
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">{project.name}</h3>
          <p className="text-base md:text-lg text-zinc-600 leading-relaxed max-w-lg">
            {project.description}
          </p>
        </header>

        <ProjectMeta project={project} />

        <div className="pt-4">
          <Link 
            href={`/projects/${project.slug}`}
            className="inline-flex items-center group font-medium text-zinc-900 hover:text-zinc-600 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 px-1 py-0.5 rounded-sm"
          >
            View case study
            <span className="ml-2 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-7/12">
        <Link href={`/projects/${project.slug}`} className="block focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 group-focus:ring-2">
          <ProjectVisual project={project} />
        </Link>
      </div>
    </div>
  );
}
