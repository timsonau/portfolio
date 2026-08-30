interface NavigationProps {
  activeSection: string;
}

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "articles", label: "Writing" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
] as const;

export default function Navigation({ activeSection }: NavigationProps) {
  return (
    <nav
      className="sticky top-0 z-30 border-b border-border/70 bg-background"
      aria-label="In-page navigation"
    >
      <div className="mx-auto flex max-w-3xl items-center gap-6 px-6 py-4 sm:px-8">
        <a
          href="#top"
          className="editorial-title shrink-0 text-sm font-semibold tracking-[0.06em] text-foreground transition-colors duration-300 hover:text-highlight"
        >
          TS
        </a>
        <div className="nav-fade flex shrink-0 gap-5 overflow-x-auto sm:gap-7">
          {NAV_ITEMS.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? "location" : undefined}
                className={`whitespace-nowrap border-b-2 pb-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ${
                  isActive
                    ? "border-accent text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground/90"
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
