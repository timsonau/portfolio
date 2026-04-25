import { Github, Linkedin, Mail } from "lucide-react";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/timsonau",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://linkedin.com/in/tim-son",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "mailto:heeyoon.timson@gmail.com",
    label: "Email",
    icon: Mail,
  },
] as const;

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-5" role="list" aria-label="Social links">
      {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto") ? undefined : "_blank"}
          rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
          className="rounded-[0.9rem] border border-transparent p-2 text-muted-foreground transition-all duration-300 hover:border-border hover:bg-card/70 hover:text-accent"
          aria-label={label}
          role="listitem"
        >
          <Icon size={20} strokeWidth={1.5} />
        </a>
      ))}
    </div>
  );
}
