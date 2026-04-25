import SectionHeading from "./SectionHeading";
const COLLEGE_TAGS = [
  "4.0 GPA", "Summa Cum Laude", "AI Club Officer"
] as const;

export default function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24 lg:scroll-mt-0" aria-label="Education">
      <SectionHeading>Education</SectionHeading>
      <div className="flex flex-col gap-8 stagger" data-reveal>
        <div className="editorial-card reveal-child group relative grid p-4 lg:grid-cols-8 lg:gap-4">
          <div className="z-10 mb-1 mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground lg:col-span-2">08/2019 - 05/2023</div>
          <div className="z-10 lg:col-span-6">
            <h3 className="font-medium text-foreground leading-snug">B.S. Computer Science</h3>
            <p className="mt-0.5 text-sm text-muted-foreground">Auburn University</p>
            <div className="flex flex-wrap gap-2">
              {
                COLLEGE_TAGS.map((tag, i) => (
                  <span key={i} className="editorial-chip mt-2 inline-flex px-2.5 py-1 text-[11px] font-semibold text-highlight">{tag}</span>
                ))
              }
            </div>
           
          </div>
        </div>
        <div className="editorial-card reveal-child group relative grid p-4 lg:grid-cols-8 lg:gap-4">
          <div className="z-10 mb-1 mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground lg:col-span-2">10/2025</div>
          <div className="z-10 lg:col-span-6">
            <h3 className="font-medium text-foreground leading-snug">CKAD (Certified Kubernetes Application Developer)</h3>
            <p className="mt-0.5 text-sm text-muted-foreground">Cloud Native Computing Foundation</p>
            <div className="flex flex-wrap gap-1.5">
              <span className="editorial-chip mt-2 inline-flex px-2.5 py-1 text-[11px] font-semibold text-highlight">Kubernetes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
