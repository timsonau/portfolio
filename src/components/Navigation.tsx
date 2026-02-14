import { motion } from "framer-motion";

interface NavigationProps {
  activeSection: string;
}

const NAV_ITEMS = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "articles", label: "ARTICLES" },
  { id: "skills", label: "SKILLS" },
  { id: "education", label: "EDUCATION" },
] as const;

export default function Navigation({ activeSection }: NavigationProps) {
  return (
    <nav className="hidden lg:flex flex-col gap-4" aria-label="In-page navigation">
      {NAV_ITEMS.map(({ id, label }) => {
        const isActive = activeSection === id;

        return (
          <a
            key={id}
            href={`#${id}`}
            className="group flex items-center gap-4 transition-all duration-300"
            aria-current={isActive ? "location" : undefined}
          >
            <motion.span
              className="h-px bg-foreground"
              animate={{
                width: isActive ? 64 : 32,
                opacity: isActive ? 1 : 0.3,
              }}
              transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            />
            <span
              className={`text-xs font-medium tracking-[0.2em] transition-all duration-300 ${
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground group-hover:text-foreground"
              }`}
            >
              {label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
