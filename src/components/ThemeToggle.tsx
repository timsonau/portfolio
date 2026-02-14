import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-foreground/30 hover:text-foreground"
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
