import { Project } from "@/content/projects";

export function ProjectMeta({ project }: { project: Project }) {
  return (
    <div className="font-mono text-xs md:text-sm space-y-3 pt-4 border-t border-zinc-100">
      <div className="grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] gap-4 text-zinc-500">
        <span className="font-medium text-zinc-900">ROLE</span>
        <span>{project.role}</span>
      </div>
      <div className="grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] gap-4 text-zinc-500">
        <span className="font-medium text-zinc-900">STACK</span>
        <span>{project.technologies.join(' / ')}</span>
      </div>
      {project.database && (
        <div className="grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] gap-4 text-zinc-500">
          <span className="font-medium text-zinc-900">DATABASE</span>
          <span>{project.database}</span>
        </div>
      )}
      <div className="grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] gap-4 text-zinc-500">
        <span className="font-medium text-zinc-900">STATUS</span>
        <span className={project.status === 'Completed' ? 'text-zinc-900' : 'text-zinc-500'}>
          {project.status.toUpperCase()}
        </span>
      </div>
      <div className="grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] gap-4 text-zinc-500">
        <span className="font-medium text-zinc-900">FEATURES</span>
        <span>{project.features.join(' · ')}</span>
      </div>
    </div>
  );
}
