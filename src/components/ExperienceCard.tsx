import { ArrowUpRight } from "lucide-react";

interface ExperienceCardProps {
  dateRange: string;
  title: string;
  company: string;
  companyUrl?: string;
  description: string;
  technologies: readonly string[];
  scope: string;
  impact: string;
}

export default function ExperienceCard({
  dateRange,
  title,
  company,
  companyUrl,
  description,
  technologies,
  scope,
  impact,
}: ExperienceCardProps) {
  return (
    <article className="reveal-child group border-b border-border/70 py-8 first:pt-0 last:border-b-0">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h3 className="editorial-title text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
          {companyUrl ? (
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-baseline gap-1.5 transition-colors duration-300 hover:text-highlight"
            >
              <span>{title}</span>
              <ArrowUpRight size={16} className="inline-block shrink-0 translate-y-0.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ) : (
            title
          )}
        </h3>
        <span className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          {dateRange}
        </span>
      </div>

      <p className="mt-1 text-sm font-medium text-highlight">
        {company} &middot; {scope}
      </p>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{description}</p>

      <p className="pull-rule mt-5 max-w-xl font-serif text-lg italic leading-snug text-accent">
        {impact}
      </p>

      <p className="mt-5 text-[11px] uppercase tracking-[0.12em] text-muted-foreground/70">
        {technologies.join(" · ")}
      </p>
    </article>
  );
}
