import SectionHeading from "./SectionHeading";

const COLLEGE_TAGS = ["4.0 GPA", "Summa Cum Laude", "AI Club Officer"] as const;

export default function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24 lg:scroll-mt-0" aria-label="Education">
      <SectionHeading index="04">Education</SectionHeading>
      <div className="stagger flex flex-col" data-reveal>
        <div className="reveal-child border-b border-border/70 py-8 first:pt-0">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="editorial-title text-2xl font-semibold text-foreground sm:text-3xl">
              B.S. Computer Science
            </h3>
            <span className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              08/2019 &ndash; 05/2023
            </span>
          </div>
          <p className="mt-1 text-sm font-medium text-highlight">Auburn University</p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.12em] text-muted-foreground/70">
            {COLLEGE_TAGS.join(" · ")}
          </p>
        </div>

        <div className="reveal-child border-b border-border/70 py-8 last:border-b-0">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="editorial-title text-2xl font-semibold text-foreground sm:text-3xl">
              CKAD (Certified Kubernetes Application Developer)
            </h3>
            <span className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              10/2025
            </span>
          </div>
          <p className="mt-1 text-sm font-medium text-highlight">Cloud Native Computing Foundation</p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.12em] text-muted-foreground/70">
            Kubernetes
          </p>
        </div>
      </div>
    </section>
  );
}
