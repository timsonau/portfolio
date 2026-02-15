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
    <nav className="hidden lg:flex flex-col gap-3" aria-label="In-page navigation">
      {NAV_ITEMS.map(({ id, label }) => {
        const isActive = activeSection === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            className="group flex items-center gap-4 py-0.5 transition-all duration-300"
            aria-current={isActive ? "location" : undefined}
          >
            <span
              className="h-px bg-foreground transition-all duration-500 ease-out"
              style={{ width: isActive ? 64 : 28, opacity: isActive ? 1 : 0.2 }}
            />
            <span
              className={`text-[11px] font-medium tracking-[0.2em] transition-all duration-300 ${
                isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
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
