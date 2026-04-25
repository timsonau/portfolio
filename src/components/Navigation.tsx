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
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Command Map
      </p>
      {NAV_ITEMS.map(({ id, label }) => {
        const isActive = activeSection === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            className="group flex items-center gap-3 rounded-md border border-transparent px-2 py-1.5 transition-all duration-300 hover:border-border/70 hover:bg-background/60"
            aria-current={isActive ? "location" : undefined}
          >
            <span
              className="h-px rounded-full bg-accent transition-all duration-500 ease-out"
              style={{ width: isActive ? 42 : 18, opacity: isActive ? 0.9 : 0.3 }}
            />
            <span
              className={`text-[11px] font-semibold tracking-[0.16em] transition-all duration-300 ${
                isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground/90"
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
