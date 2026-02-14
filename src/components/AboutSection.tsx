import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 lg:scroll-mt-0" aria-label="About me">
      <SectionHeading>About</SectionHeading>
      <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed" data-reveal>
        <p>
          {"I build "}
          <span className="text-foreground">distributed systems at scale</span>
          {" \u2014 the kind that handle thousands of requests per second, save millions in costs, and run so reliably you forget they\u2019re there."}
        </p>
        <p>
          {"Currently a "}
          <span className="text-foreground">Senior Software Engineer at GEICO</span>
          {", where I architect event tracking infrastructure in Go and Kubernetes, and explore the intersection of "}
          <span className="text-foreground">AI and production systems</span>
          {" through MCP-based services for autonomous agents."}
        </p>
      </div>
    </section>
  );
}
