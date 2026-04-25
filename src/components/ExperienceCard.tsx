import { ArrowUpRight } from "lucide-react";

interface ExperienceCardProps {
  dateRange: string;
  title: string;
  company: string;
  companyUrl?: string;
  description: string;
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
    <article className="editorial-card reveal-child group relative grid p-4 transition-all duration-300 lg:grid-cols-8 lg:gap-4 lg:hover:-translate-y-0.5 lg:hover:!opacity-100 lg:group-hover/list:opacity-55">
      <header className="z-10 mb-2 mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground lg:col-span-2">
        {dateRange}
      </header>
      <div className="z-10 lg:col-span-6">
        <h3 className="font-medium leading-snug">
          {companyUrl ? (
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-baseline gap-1 text-foreground transition-colors duration-300 group-hover:text-highlight"
            >
              <span>{title} &middot; {company}</span>
              <ArrowUpRight size={14} className="inline-block shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ) : (
            <span className="text-foreground">{title} &middot; {company}</span>
          )}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="editorial-chip inline-flex items-center px-2.5 py-1 text-[11px] font-medium text-foreground/75">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
