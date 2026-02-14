import { ArrowUpRight } from "lucide-react";

interface ExperienceCardProps {
  dateRange: string;
  title: string;
  company: string;
  companyUrl?: string;
  description: readonly string[];
  technologies: readonly string[];
}

export default function ExperienceCard({
  dateRange,
  title,
  company,
  companyUrl,
  description,
  technologies,
}: ExperienceCardProps) {
  return (
    <article className="group relative grid pb-1 transition-all lg:grid-cols-8 lg:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-all lg:block lg:group-hover:bg-card/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

      <header className="z-10 mb-2 mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground lg:col-span-2">
        {dateRange}
      </header>

      <div className="z-10 lg:col-span-6">
        <h3 className="font-medium leading-snug">
          {companyUrl ? (
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-baseline gap-1 text-foreground transition-colors duration-300 group-hover:text-accent"
            >
              <span>
                {title} {"·"} {company}
              </span>
              <ArrowUpRight
                size={14}
                className="inline-block shrink-0 translate-y-px transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          ) : (
            <span className="text-foreground">
              {title} {"·"} {company}
            </span>
          )}
        </h3>

        <ul className="mt-2 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
          {description.map((item, index) => (
            <li key={index} className="relative pl-4 before:absolute before:left-0 before:top-[10px] before:h-1 before:w-1 before:rounded-full before:bg-muted-foreground/50">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
