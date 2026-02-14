interface NavigationProps {
  activeSection: string;
}

const NAV_ITEMS = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
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
            <span
              className={`h-px transition-all duration-300 ${
                isActive
                  ? "w-16 bg-foreground"
                  : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
              }`}
            />
            <span
              className={`text-xs font-medium tracking-widest transition-colors duration-300 ${
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
