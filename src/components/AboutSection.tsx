import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 lg:scroll-mt-0" aria-label="About me">
      <SectionHeading>About</SectionHeading>

      <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
        <p>
          I'm a software engineer who thrives on building{" "}
          <span className="text-foreground font-medium">enterprise-grade distributed systems</span>{" "}
          that operate at scale. My work sits at the intersection of backend architecture
          and platform engineering, where reliability and performance are non-negotiable.
        </p>

        <p>
          Currently at{" "}
          <span className="text-foreground font-medium">GEICO</span>, I architect and
          ship high-availability services handling{" "}
          <span className="text-accent">5,000+ requests per second</span> across multiple
          consumer platforms. I lead the development of event tracking infrastructure
          in <span className="text-foreground font-medium">Go</span>, deployed via{" "}
          <span className="text-foreground font-medium">Kubernetes</span>, that has saved the
          company over{" "}
          <span className="text-accent">$4M+ in vendor contracts</span>.
        </p>

        <p>
          I'm also deeply interested in the intersection of{" "}
          <span className="text-foreground font-medium">AI and developer tooling</span>{" "}
          {"--"} recently building MCP-based backend services that enable autonomous
          AI agents to access and act on behavioral data in real time.
        </p>

        <p>
          When I'm not writing code, you'll find me exploring new technologies,
          contributing to open-source projects, and continuously pushing the boundaries
          of what's possible with modern infrastructure.
        </p>
      </div>
    </section>
  );
}
