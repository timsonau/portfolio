import ExperienceCard from "./ExperienceCard";
import SectionHeading from "./SectionHeading";

const EXPERIENCES = [
  {
    dateRange: "Feb 2026 -- Present",
    title: "Senior Software Engineer",
    company: "GEICO",
    companyUrl: "https://www.geico.com",
    description: [
      "Promoted to senior engineer after consistently delivering high-impact, cross-team platform initiatives that improved system reliability and reduced operational costs at scale.",
      "Leading the design and roadmap of enterprise event tracking infrastructure serving all consumer-facing platforms, processing 5,000+ requests/second with 99.99% uptime.",
      "Driving AI-infrastructure convergence by architecting MCP-based backend services that enable autonomous AI agents to access, analyze, and act on behavioral event data in real time.",
      "Mentoring engineers across the org on distributed systems design patterns, observability best practices, and Kubernetes-native application development.",
    ],
    technologies: [
      "Go",
      "Kubernetes",
      "Kafka",
      "Snowflake",
      "MCP",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    dateRange: "Feb 2025 -- Feb 2026",
    title: "Software Engineer II",
    company: "GEICO",
    companyUrl: "https://www.geico.com",
    description: [
      "Architected a highly available event tracking system in Go deployed via Kubernetes, handling 5,000+ requests/second across multiple consumer platforms while persisting analytics data in Snowflake -- saving over $4,000,000 in vendor contracts.",
      "Served as tech lead for the Swift event tracking SDK, powering analytics across the official GEICO iOS application used by millions.",
      "Reduced CI/CD build times by 70% by optimizing Azure DevOps workflows, accelerating the entire team's release velocity.",
      "Developed a full-text article search platform using Elasticsearch and React, delivering sub-150ms query responses at scale.",
    ],
    technologies: [
      "Go",
      "Kubernetes",
      "Snowflake",
      "Swift",
      "Elasticsearch",
      "React",
      "Azure DevOps",
    ],
  },
  {
    dateRange: "Mar 2024 -- Feb 2025",
    title: "Software Engineer I",
    company: "GEICO",
    companyUrl: "https://www.geico.com",
    description: [
      "Led operational readiness across distributed services with full observability coverage -- metrics, distributed traces, and health probes -- maintaining a 99.99% SLA.",
      "Built core service components for event ingestion pipeline, contributing to a system that would scale to handle thousands of requests per second.",
    ],
    technologies: [
      "Go",
      "Kubernetes",
      "Prometheus",
      "Grafana",
      "Splunk",
      "Docker",
      "Helm",
    ],
  },
  {
    dateRange: "Oct 2023 -- Feb 2024",
    title: "Software Developer I",
    company: "UDA Technologies",
    companyUrl: "https://www.udatechnologies.com",
    description: [
      "Hardened data storage by enabling MFA Delete on critical AWS S3 buckets, preventing unauthorized deletion of production assets.",
      "Created proactive alert pipelines using Grafana and Prometheus, reducing time to detection of system anomalies by 20%.",
    ],
    technologies: ["AWS S3", "Grafana", "Prometheus"],
  },
  {
    dateRange: "May 2021 -- Aug 2022",
    title: "Software Developer Co-Op",
    company: "UDA Technologies",
    companyUrl: "https://www.udatechnologies.com",
    description: [
      "Led the OnPoint Proposal feature showcased at the International Builders Show 2023, building a document generation engine used by thousands of construction professionals.",
    ],
    technologies: ["VB.NET", "JavaScript", "TX Text Control"],
  },
] as const;

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 lg:scroll-mt-0"
      aria-label="Work experience"
    >
      <SectionHeading>Experience</SectionHeading>

      <div className="group/list flex flex-col gap-12">
        {EXPERIENCES.map((experience) => (
          <ExperienceCard
            key={`${experience.company}-${experience.dateRange}`}
            {...experience}
          />
        ))}
      </div>
    </section>
  );
}
