import AboutSection from "./components/AboutSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import SkillsSection from "./components/SkillsSection";
import SocialLinks from "./components/SocialLinks";
import useActiveSection from "./hooks/useActiveSection";
import useMouseGlow from "./hooks/useMouseGlow";

export default function App() {
  const activeSection = useActiveSection();
  const { x, y } = useMouseGlow();

  return (
    <div className="relative">
      {/* Cursor spotlight glow - only visible on large screens */}
      <div
        className="pointer-events-none fixed inset-0 z-30 hidden transition-opacity duration-300 lg:block"
        style={{
          background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(56, 189, 248, 0.06), transparent 80%)`,
        }}
        aria-hidden="true"
      />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:flex lg:justify-between lg:gap-4 lg:px-24 lg:py-0">
        {/* ──────────── Left Column: Sticky Sidebar ──────────── */}
        <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              <a href="/">Tim Son</a>
            </h1>

            <h2 className="text-lg font-medium tracking-tight text-foreground/80">
              Senior Software Engineer at GEICO
            </h2>

            <p className="max-w-xs text-muted-foreground leading-relaxed">
              I design and build distributed systems that serve millions of
              users and save companies millions of dollars.
            </p>

            {/* Desktop Navigation */}
            <div className="mt-12">
              <Navigation activeSection={activeSection} />
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8 lg:mt-0">
            <SocialLinks />
          </div>
        </header>

        {/* ──────────── Right Column: Scrollable Content ──────────── */}
        <main className="flex flex-col gap-24 pt-24 lg:w-1/2 lg:py-24">
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <EducationSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
