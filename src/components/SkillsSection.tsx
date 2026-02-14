import SectionHeading from "./SectionHeading";

const SKILL_CATEGORIES = [
  { title: "Languages", skills: ["Go", "Python", "Java", "JavaScript", "Swift", "Kotlin"] },
  { title: "Infrastructure", skills: ["Kubernetes", "Docker", "Helm", "Kafka", "AWS", "Azure"] },
  { title: "Data", skills: ["Snowflake", "Cassandra", "PostgreSQL", "Elasticsearch"] },
  { title: "AI & Tooling", skills: ["MCP", "LLM Agents", "Prometheus", "Grafana", "Splunk"] },
] as const;

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 lg:scroll-mt-0" aria-label="Technical skills">
      <SectionHeading>Skills</SectionHeading>
      <div className="flex flex-col gap-6 stagger" data-reveal>
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.title} className="reveal-child">
            <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{category.title}</h3>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <span key={skill} className="inline-flex items-center rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-card-foreground transition-all duration-300 hover:border-foreground/20 hover:text-foreground">
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
