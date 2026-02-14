import ExperienceCard from "./ExperienceCard";
import SectionHeading from "./SectionHeading";

const EXPERIENCES = [
  {
    dateRange: "Mar 2024 -- Present",
    title: "Software Engineer II",
    company: "GEICO",
    companyUrl: "https://www.geico.com",
    description: [
      "Built a highly available event tracking system using Go and deployed via Kubernetes, handling 5,000+ requests/second across multiple consumer platforms while persisting analytics data in Snowflake, saving over $4,000,000 in vendor contracts.",
      "Tech lead for the Swift package, responsible for providing event tracking capabilities within the official GEICO iOS application.",
      "Reduced CI/CD build times by 70% by optimizing workflows in Azure DevOps, enabling faster release cycles.",
      "Led operational readiness with full observability coverage, including metrics, traces, and health probes, maintaining a 99.99% SLA.",
      "Developed an MCP-based backend service allowing autonomous AI agents to access, analyze, and act on behavioral event data in real time.",
      "Developed an article search platform using Elasticsearch and a responsive UI in React, enabling fast access to indexed content in less than 150ms.",
    ],
    technologies: [
      "Go",
      "Kubernetes",
      "Snowflake",
      "Swift",
      "Kafka",
      "Azure DevOps",
      "Prometheus",
      "Grafana",
      "Elasticsearch",
      "React",
      "MCP",
    ],
  },
  {
    dateRange: "Oct 2023 -- Feb 2024",
    title: "Software Developer I",
    company: "UDA Technologies",
    companyUrl: "https://www.udatechnologies.com",
    description: [
      "Hardened data storage by enabling MFA Delete on critical AWS S3 buckets, preventing unauthorized deletion.",
      "Created proactive alert pipelines using Grafana and Prometheus, reducing the time to detection of system anomalies by 20%.",
    ],
    technologies: ["AWS S3", "Grafana", "Prometheus"],
  },
  {
    dateRange: "May 2021 -- Aug 2022",
    title: "Software Developer Co-Op",
    company: "UDA Technologies",
    companyUrl: "https://www.udatechnologies.com",
    description: [
      "Led the OnPoint Proposal feature that was showcased at the International Builders Show 2023, using VB.NET, JavaScript, and TX Text Control.",
    ],
    technologies: ["VB.NET", "JavaScript", "TX Text Control"],
  },
] as const;

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 lg:scroll-mt-0" aria-label="Work experience">
      <SectionHeading>Experience</SectionHeading>

      <div className="group/list flex flex-col gap-12">
        {EXPERIENCES.map((experience) => (
          <ExperienceCard key={`${experience.company}-${experience.dateRange}`} {...experience} />
        ))}
      </div>
    </section>
  );
}
