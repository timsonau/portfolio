import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 lg:scroll-mt-0" aria-label="About me">
      <SectionHeading>About</SectionHeading>
      <div className="editorial-card stagger p-5" data-reveal>
        <div className="reveal-child grid gap-2 border-b border-border/70 pb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground lg:grid-cols-3">
          <span>Mission</span>
          <span>Operating Model</span>
          <span>Primary Systems</span>
        </div>
        <div className="reveal-child mt-3 grid gap-2 text-sm lg:grid-cols-3">
          <p className="text-muted-foreground">Build high-signal platforms that remain reliable under production-scale load.</p>
          <p className="text-muted-foreground">Ship incrementally, instrument aggressively, and optimize from real telemetry.</p>
          <p className="text-muted-foreground">Event ingestion pipelines, cloud-native services, and AI-assisted developer tooling.</p>
        </div>
        <p className="reveal-child mt-4 text-sm leading-relaxed text-muted-foreground">
          I focus on systems where reliability and developer velocity both matter. Most work sits at the intersection of backend architecture, observability, and practical AI integration.
        </p>
      </div>
    </section>
  );
}
