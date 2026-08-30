import SectionHeading from "./SectionHeading";

const SKILL_CATEGORIES = [
  { title: "Languages & Frameworks", skills: ["Go", "Python", "Java", "Spring Boot", "JavaScript", "React", "Swift", "Kotlin"] },
  { title: "Infrastructure", skills: ["Kubernetes", "Docker", "Helm", "Kafka", "AWS", "Azure"] },
  { title: "Data", skills: ["Snowflake", "Cassandra", "PostgreSQL", "Elasticsearch"] },
  { title: "AI & Tooling", skills: ["MCP", "LLM Agents"] },
  { title: "Observability", skills: ["Prometheus", "Grafana", "OpenTelemetry"] },
] as const;

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 lg:scroll-mt-0" aria-label="Technical skills">
      <SectionHeading index="04">Skills</SectionHeading>
      <div className="stagger flex flex-col gap-5" data-reveal>
        {SKILL_CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="reveal-child flex flex-col gap-1.5 border-b border-border/70 pb-5 last:border-b-0 last:pb-0 sm:flex-row sm:gap-6"
          >
            <h3 className="w-48 shrink-0 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
              {category.title}
            </h3>
            <p className="text-sm leading-relaxed text-foreground/85">
              {category.skills.join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
