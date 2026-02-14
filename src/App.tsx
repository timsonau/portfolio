import { useEffect } from "react";
import AboutSection from "./components/AboutSection";
import ArticlesSection from "./components/ArticlesSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import SkillsSection from "./components/SkillsSection";
import SocialLinks from "./components/SocialLinks";
import ThemeToggle from "./components/ThemeToggle";
import useActiveSection from "./hooks/useActiveSection";
import useMouseGlow from "./hooks/useMouseGlow";

export default function App() {
  const activeSection = useActiveSection();
  const { x, y } = useMouseGlow();

  // Scroll-reveal: observe all [data-reveal] elements, add .revealed on enter
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
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
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* Cursor glow */}
      <div
        className="pointer-events-none fixed inset-0 z-30 hidden transition-opacity duration-500 lg:block"
        style={{
          background: `radial-gradient(800px circle at ${x}px ${y}px, var(--glow-color), transparent 70%)`,
        }}
        aria-hidden="true"
      />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:flex lg:justify-between lg:gap-4 lg:px-24 lg:py-0">
        {/* Left: Sticky Sidebar */}
        <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div className="flex flex-col gap-4">
            {/* Photo + toggle */}
            <div className="flex items-start justify-between hero-enter hero-delay-1">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-border transition-all duration-500 hover:shadow-lg">
                <img
                  src="/images/tim-son.jpg"
                  alt="Tim Son"
                  className="h-full w-full object-cover object-top"
                  loading="eager"
                />
              </div>
              <ThemeToggle />
            </div>

            <h1 className="hero-enter hero-delay-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              <a href="/" className="transition-colors duration-300 hover:text-highlight">Tim Son</a>
            </h1>

            <h2 className="hero-enter hero-delay-3 text-lg font-medium text-muted-foreground">
              Senior Software Engineer
            </h2>

            <p className="hero-enter hero-delay-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Distributed systems, cloud infrastructure, and AI-powered tooling.
            </p>

            {/* Nav */}
            <div className="hero-enter hero-delay-5 mt-12">
              <Navigation activeSection={activeSection} />
            </div>
          </div>

          {/* Social */}
          <div className="hero-enter hero-delay-6 mt-8 lg:mt-0">
            <SocialLinks />
          </div>
        </header>

        {/* Right: Scrollable Content */}
        <main className="flex flex-col gap-28 pt-24 lg:w-1/2 lg:py-24">
          <AboutSection />
          <ExperienceSection />
          <ArticlesSection />
          <SkillsSection />
          <EducationSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
