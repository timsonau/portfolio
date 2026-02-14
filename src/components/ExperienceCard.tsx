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
    <article className="reveal-child group relative grid pb-1 transition-all duration-300 lg:grid-cols-8 lg:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition-all duration-300 lg:block lg:group-hover:bg-card/80 lg:group-hover:shadow-[inset_0_0_0_1px_var(--border)]" />
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
        <div className="mt-3 flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <span key={tech} className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-foreground/70">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
