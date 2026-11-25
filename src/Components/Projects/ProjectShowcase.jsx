import { ArrowUpRight, Github } from 'lucide-react';
import FinAppPreview from './FinAppPreview';
import ProjectGallery from './ProjectGallery';

export default function ProjectShowcase({ project }) {
  return (
    <article className="py-12 first:pt-4 border-b border-[#1A4027]/15 dark:border-gray-800 last:border-b-0">
      {/* Meta superior */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#1A4027] text-[#1ED760] dark:bg-[#1ED760]/15 dark:text-[#1ED760]">
            {project.index}
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">
            {project.category}
          </span>
        </div>
        <span className="font-mono text-xs text-gray-500 dark:text-gray-500">
          {project.year}
        </span>
      </div>

      {/* Grade 12 colunas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        <div className="lg:col-span-7">
          {project.previewType === 'finapp-ui' ? (
            <FinAppPreview />
          ) : (
            <ProjectGallery images={project.gallery} projectTitle={project.title} />
          )}
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1A4027] dark:text-white">
              {project.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-[#1A4027]/75 dark:text-[#1ED760]/90">
              {project.subtitle}
            </p>
            <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-gray-700 dark:text-gray-300">
              {project.summary}
            </p>
          </div>

          {/* Destaques objetivos */}
          <ul className="space-y-2">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1ED760] shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Stack */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] font-medium px-2.5 py-1 rounded border border-[#1A4027]/20 dark:border-gray-700 bg-[#F4F5F4] dark:bg-[#151E2E] text-[#1A4027] dark:text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          {(project.liveUrl || project.repoUrl) && (
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-semibold bg-[#1A4027] text-white dark:bg-[#1ED760] dark:text-[#111827] hover:opacity-90 transition-opacity"
                >
                  Acessar projeto
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium border border-[#1A4027]/25 dark:border-gray-700 text-[#1A4027] dark:text-gray-200 hover:border-[#1ED760] hover:text-[#1A4027] dark:hover:text-[#1ED760] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Código
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
