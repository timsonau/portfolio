import ExperienceCard from "./ExperienceCard";
import SectionHeading from "./SectionHeading";

const EXPERIENCES = [
  {
    dateRange: "2026 \u2014 Present",
    title: "Senior Software Engineer",
    company: "GEICO",
    companyUrl: "https://www.geico.com",
    description: "Leading enterprise event tracking infrastructure processing 5,000+ req/s with 99.99% uptime. Architecting MCP-based services enabling AI agents to query behavioral data in real time.",
    technologies: ["Go", "Kubernetes", "Kafka", "MCP", "Snowflake"],
  },
  {
    dateRange: "2025 \u2014 2026",
    title: "Software Engineer II",
    company: "GEICO",
    companyUrl: "https://www.geico.com",
    description: "Built the event tracking system from scratch in Go \u2014 replaced a vendor solution, saving $4M+ annually. Led the Swift SDK powering analytics across GEICO\u2019s iOS app.",
    technologies: ["Go", "Kubernetes", "Swift", "Elasticsearch", "React"],
  },
  {
    dateRange: "2024 \u2014 2025",
    title: "Software Engineer I",
    company: "GEICO",
    companyUrl: "https://www.geico.com",
    description: "Established full observability coverage across distributed services \u2014 metrics, distributed traces, and health probes \u2014 maintaining a 99.99% SLA.",
    technologies: ["Go", "Kubernetes", "Prometheus", "Grafana"],
  },
  {
    dateRange: "2021 \u2014 2024",
    title: "Software Developer",
    company: "UDA Technologies",
    companyUrl: "https://www.udatechnologies.com",
    description: "Led the OnPoint Proposal feature showcased at International Builders Show 2023. Hardened AWS infrastructure and built proactive monitoring pipelines.",
    technologies: ["AWS", "Grafana", "VB.NET", "JavaScript"],
  },
] as const;

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 lg:scroll-mt-0" aria-label="Work experience">
      <SectionHeading>Experience</SectionHeading>
      <div className="group/list flex flex-col gap-10 stagger" data-reveal>
        {EXPERIENCES.map((exp) => (
          <ExperienceCard key={`${exp.company}-${exp.dateRange}`} {...exp} />
        ))}
      </div>
    </section>
  );
}
