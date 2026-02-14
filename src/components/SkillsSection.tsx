import SectionHeading from "./SectionHeading";

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center rounded-full border border-border bg-card/50 px-3 py-1.5 text-xs font-medium text-card-foreground transition-colors duration-300 hover:border-accent/30 hover:text-accent"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    skills: ["Golang", "Python", "Java", "JavaScript", "Swift", "Kotlin"],
  },
  {
    title: "Databases",
    skills: ["Cassandra", "PostgreSQL", "Elasticsearch", "Snowflake"],
  },
  {
    title: "Frameworks",
    skills: ["Spring Boot", "React"],
  },
  {
    title: "AI",
    skills: ["MCP", "LLM Agent Integration"],
  },
  {
    title: "Messaging",
    skills: ["Kafka"],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS (S3, EC2, Lambda)",
      "Azure",
      "Docker",
      "Kubernetes",
      "Helm",
      "GitHub Actions",
    ],
  },
  {
    title: "Observability & Monitoring",
    skills: ["Prometheus", "Grafana", "Splunk"],
  },
] as const;

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 lg:scroll-mt-0" aria-label="Technical skills">
      <SectionHeading>Skills</SectionHeading>

      <div className="flex flex-col gap-8">
        {SKILL_CATEGORIES.map((category) => (
          <SkillCategory key={category.title} {...category} />
        ))}
      </div>
    </section>
  );
}
