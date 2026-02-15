import SectionHeading from "./SectionHeading";

export default function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24 lg:scroll-mt-0" aria-label="Education">
      <SectionHeading>Education</SectionHeading>
      <div className="flex flex-col gap-8 stagger" data-reveal>
        <div className="reveal-child group relative grid lg:grid-cols-8 lg:gap-4">
          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition-all duration-300 lg:block lg:group-hover:bg-card/80 lg:group-hover:shadow-[inset_0_0_0_1px_var(--border)]" />
          <div className="z-10 mb-1 mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground lg:col-span-2">08/2019 - 05/2023</div>
          <div className="z-10 lg:col-span-6">
            <h3 className="font-medium text-foreground leading-snug">B.S. Computer Science</h3>
            <p className="mt-0.5 text-sm text-muted-foreground">Auburn University</p>
            <div className="flex flex-wrap gap-1.5">
              <span className="mt-2 inline-flex rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-semibold text-highlight">4.0 GPA</span>
              <span className="mt-2 inline-flex rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-semibold text-highlight">Summa Cum Laude</span>
            </div>
           
          </div>
        </div>
        <div className="reveal-child group relative grid lg:grid-cols-8 lg:gap-4">
          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition-all duration-300 lg:block lg:group-hover:bg-card/80 lg:group-hover:shadow-[inset_0_0_0_1px_var(--border)]" />
          <div className="z-10 mb-1 mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground lg:col-span-2">10/2025</div>
          <div className="z-10 lg:col-span-6">
            <h3 className="font-medium text-foreground leading-snug">CKAD (Certified Kubernetes Application Developer)</h3>
            <p className="mt-0.5 text-sm text-muted-foreground">Cloud Native Computing Foundation</p>
            <div className="flex flex-wrap gap-1.5">
              <span className="mt-2 inline-flex rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-semibold text-highlight">Kubernetes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
