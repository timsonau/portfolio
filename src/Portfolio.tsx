import { useEffect, useCallback } from "react";
import ArticlesSection from "./components/ArticlesSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import SkillsSection from "./components/SkillsSection";
import useActiveSection from "./hooks/useActiveSection";

export default function Portfolio() {
  const activeSection = useActiveSection();

  const observeReveals = useCallback(() => {
    const elements = document.querySelectorAll("[data-reveal]:not(.revealed)");
    if (elements.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return observer;
  }, []);

  // Initial + dynamic reveals: MutationObserver watches for new [data-reveal] nodes
  useEffect(() => {
    let io = observeReveals();

    const mo = new MutationObserver(() => {
      io?.disconnect();
      io = observeReveals();
    });

    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io?.disconnect();
      mo.disconnect();
    };
  }, [observeReveals]);

  return (
    <div id="top" className="relative">
      <Navigation activeSection={activeSection} />
      <Hero />
      <main className="mx-auto flex max-w-3xl flex-col gap-20 px-6 pb-32 pt-16 sm:px-8 sm:pt-20 md:gap-28">
        <ExperienceSection />
        <ArticlesSection />
        <SkillsSection />
        <EducationSection />
      </main>
      <Footer />
    </div>
  );
}
