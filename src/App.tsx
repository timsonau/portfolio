import { motion } from "framer-motion";
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

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const heroChildVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

export default function App() {
  const activeSection = useActiveSection();
  const { x, y } = useMouseGlow();

  return (
    <div className="relative">
      {/* Cursor spotlight glow -- only visible on large screens */}
      <div
        className="pointer-events-none fixed inset-0 z-30 hidden transition-opacity duration-500 lg:block"
        style={{
          background: `radial-gradient(800px circle at ${x}px ${y}px, var(--glow-color), transparent 70%)`,
        }}
        aria-hidden="true"
      />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:flex lg:justify-between lg:gap-4 lg:px-24 lg:py-0">
        {/* ---- Left Column: Sticky Sidebar ---- */}
        <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <motion.div
            className="flex flex-col gap-4"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Profile photo + theme toggle row */}
            <motion.div variants={heroChildVariants} className="flex items-start justify-between">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border border-border transition-all duration-500 hover:shadow-lg">
                <img
                  src={`${import.meta.env.BASE_URL}images/tim-son.jpg`}
                  alt="Tim Son, Senior Software Engineer"
                  className="h-full w-full object-cover object-top"
                  loading="eager"
                />
              </div>
              <ThemeToggle />
            </motion.div>

            <motion.h1
              variants={heroChildVariants}
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
            >
              <a href="/" className="hover:text-highlight transition-colors duration-300">
                Tim Son
              </a>
            </motion.h1>

            <motion.h2
              variants={heroChildVariants}
              className="text-lg font-medium tracking-tight text-muted-foreground"
            >
              Senior Software Engineer at GEICO
            </motion.h2>

            <motion.p
              variants={heroChildVariants}
              className="max-w-xs leading-relaxed text-muted-foreground"
            >
              I design and build distributed systems that serve millions of
              users and save companies millions of dollars.
            </motion.p>

            {/* Desktop Navigation */}
            <motion.div variants={heroChildVariants} className="mt-12">
              <Navigation activeSection={activeSection} />
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="mt-8 lg:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <SocialLinks />
          </motion.div>
        </header>

        {/* ---- Right Column: Scrollable Content ---- */}
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
