import ExperienceCard from "./ExperienceCard";
import SectionHeading from "./SectionHeading";

const EXPERIENCES = [
  {
    dateRange: "06/2026 – Present",
    title: "Software Engineer",
    company: "McMaster-Carr",
    companyUrl: "https://www.mcmaster.com",
    description: "Working on the AI team building AI-powered chat experiences for customers.",
    technologies: ["AI"],
    scope: "AI chat experience",
    impact: "New AI chat product",
  },
  {
    dateRange: "02/2026 – 06/2026",
    title: "Senior Software Engineer",
    company: "GEICO",
    companyUrl: "https://www.geico.com",
    description: "Promoted to senior engineer to lead enterprise event tracking infrastructure processing 5,000+ req/s with 99.99% uptime. Architecting MCP-based services enabling AI agents to query behavioral data in real time.",
    technologies: ["Go", "Kubernetes", "Kafka", "MCP", "Snowflake"],
    scope: "Enterprise telemetry platform",
    impact: "$4M+ annual savings unlocked",
  },
  {
    dateRange: "02/2025 – 02/2026",
    title: "Software Engineer II",
    company: "GEICO",
    companyUrl: "https://www.geico.com",
    description: "Built the event tracking system from scratch in Go – replaced a vendor solution, saving $4M+ annually. Led the Swift SDK powering analytics across GEICO’s iOS app.",
    technologies: ["Go", "Kubernetes", "Swift", "React"],
    scope: "Tracking ingestion + mobile SDK",
    impact: "5k+ req/s pipeline throughput",
  },
  {
    dateRange: "03/2024 – 02/2025",
    title: "Software Engineer I",
    company: "GEICO",
    companyUrl: "https://www.geico.com",
    description: "Developed internal article search platform using Elasticsearch and a responsive UI in React, enabling fast access to indexed content in less than 150 ms ",
    technologies: ["React", "Elasticsearch"],
    scope: "Search platform for internal docs",
    impact: "<150ms query latency",
  },
  {
    dateRange: "05/2021 – 02/2024",
    title: "Software Developer",
    company: "UDA Technologies",
    companyUrl: "https://www.udatechnologies.com",
    description: "Led the OnPoint Proposal feature showcased at International Builders Show 2023. Hardened AWS infrastructure and built proactive monitoring pipelines.",
    technologies: ["AWS", "Grafana", "VB.NET", "JavaScript"],
    scope: "SaaS feature delivery + reliability",
    impact: "Flagship launch at IBS 2023",
  },
] as const;

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 lg:scroll-mt-0" aria-label="Work experience">
      <SectionHeading index="01">Experience</SectionHeading>
      <div className="stagger flex flex-col" data-reveal>
        {EXPERIENCES.map((exp) => (
          <ExperienceCard key={`${exp.company}-${exp.dateRange}`} {...exp} />
        ))}
      </div>
    </section>
  );
}
