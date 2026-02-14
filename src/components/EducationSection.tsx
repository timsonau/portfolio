import { Award, GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

export default function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24 lg:scroll-mt-0" aria-label="Education and certifications">
      <SectionHeading>Education</SectionHeading>

      <div className="flex flex-col gap-8">
        {/* Degree */}
        <ScrollReveal delay={0}>
          <div className="group relative grid lg:grid-cols-8 lg:gap-4">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition-all duration-300 lg:block lg:group-hover:bg-card lg:group-hover:shadow-[0_0_0_1px_var(--border)]" />

            <div className="z-10 mb-2 mt-1 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground lg:col-span-2">
              <GraduationCap size={14} />
              <span>Aug 2019 -- May 2023</span>
            </div>

            <div className="z-10 lg:col-span-6">
              <h3 className="font-medium text-foreground leading-snug">
                Bachelor of Science in Computer Science
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">Auburn University</p>
              <p className="mt-2 inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-semibold text-highlight">
                GPA: 4.0 / 4.0
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Certification */}
        <ScrollReveal delay={0.1}>
          <div className="group relative grid lg:grid-cols-8 lg:gap-4">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition-all duration-300 lg:block lg:group-hover:bg-card lg:group-hover:shadow-[0_0_0_1px_var(--border)]" />

            <div className="z-10 mb-2 mt-1 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground lg:col-span-2">
              <Award size={14} />
              <span>October 2025</span>
            </div>

            <div className="z-10 lg:col-span-6">
              <h3 className="font-medium text-foreground leading-snug">
                Certified Kubernetes Application Developer
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">CKAD Certification</p>
              <p className="mt-2 inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-highlight">
                Cloud Native Computing Foundation
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
