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
      <SectionHeading>Skills</SectionHeading>
      <div className="section-frame flex flex-col gap-6 stagger" data-reveal>
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.title} className="reveal-child border-b border-border/60 pb-4 last:border-b-0 last:pb-0">
            <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="editorial-chip inline-flex items-center px-2.5 py-1 text-[11px] font-medium text-card-foreground transition-all duration-300 hover:border-accent/35 hover:text-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
