import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 lg:scroll-mt-0" aria-label="About me">
      <SectionHeading index="01">About</SectionHeading>
      <div className="stagger" data-reveal>
        <p className="reveal-child drop-cap max-w-2xl text-xl leading-relaxed text-foreground sm:text-2xl">
          I build high-signal platforms that stay reliable under
          production-scale load &mdash; shipping incrementally, instrumenting
          aggressively, and optimizing from real telemetry rather than
          guesswork.
        </p>
        <p className="reveal-child mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
          I focus on systems where reliability and developer velocity both
          matter. Most work sits at the intersection of backend
          architecture, observability, and practical AI integration.
        </p>
      </div>
    </section>
  );
}
