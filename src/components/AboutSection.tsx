import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 lg:scroll-mt-0" aria-label="About me">
      <SectionHeading>About</SectionHeading>
      <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed" data-reveal>
        <p>
          {"An engineer with a proven track record of delivering high impact "}
          <span className="text-foreground">distributed systems at scale.</span>
        </p>
        <p>
          {"Currently a "}
          <span className="text-foreground">Software Engineer at GEICO</span>
          {", where I architect event tracking infrastructure in Go and Kubernetes, and explore the intersection of "}
          <span className="text-foreground">AI and production systems</span>
          {" through MCP-based services for autonomous agents."}
        </p>
      </div>
    </section>
  );
}
