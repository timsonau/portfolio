import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 lg:scroll-mt-0"
      aria-label="About me"
    >
      <SectionHeading>About</SectionHeading>

      {/* Profile Photo */}
      <div className="mb-8 flex items-start">
        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border-2 border-border shadow-lg shadow-accent/5 transition-all duration-500 hover:border-accent/40 hover:shadow-accent/10">
          <img
            src="/images/tim-son.jpg"
            alt="Tim Son smiling at Auburn University graduation"
            className="h-full w-full object-cover object-top"
            loading="eager"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
        <p>
          I'm a software engineer who specializes in{" "}
          <span className="text-foreground font-medium">
            building and scaling distributed systems
          </span>{" "}
          that serve millions of users. I care deeply about writing clean,
          maintainable code and designing architectures that are resilient by
          default.
        </p>

        <p>
          At{" "}
          <span className="text-foreground font-medium">GEICO</span>, I've
          progressed from Engineer I to{" "}
          <span className="text-accent">Senior Software Engineer</span> in
          under two years by consistently delivering high-impact systems. I
          architected an event tracking platform in{" "}
          <span className="text-foreground font-medium">Go</span> and{" "}
          <span className="text-foreground font-medium">Kubernetes</span> that
          handles{" "}
          <span className="text-accent">5,000+ requests per second</span>,
          replaced a legacy vendor solution, and saved the company over{" "}
          <span className="text-accent">$4M annually</span>.
        </p>

        <p>
          I'm passionate about the convergence of{" "}
          <span className="text-foreground font-medium">
            AI and infrastructure
          </span>
          . I recently built MCP-based backend services that give autonomous AI
          agents the ability to query and act on behavioral event data in real
          time -- bridging the gap between intelligent systems and production
          telemetry.
        </p>

        <p>
          I'm always looking for opportunities to work on{" "}
          <span className="text-foreground font-medium">
            challenging problems at scale
          </span>{" "}
          alongside teams that care about engineering excellence. Outside of
          work, I'm exploring the latest in cloud-native tooling and
          contributing to the open-source ecosystem.
        </p>
      </div>
    </section>
  );
}
