import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="group relative flex h-10 w-10 items-center justify-center rounded-[0.9rem] border border-border/90 bg-card/80 text-muted-foreground transition-all duration-300 hover:border-accent/40 hover:text-foreground"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun size={15} strokeWidth={1.5} className="transition-transform duration-300 group-hover:rotate-45" />
      ) : (
        <Moon size={15} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-rotate-12" />
      )}
    </button>
  );
}
