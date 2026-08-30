import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-border/70" data-reveal>
      <div className="mx-auto max-w-3xl px-6 py-20 sm:px-8">
        <p className="editorial-title max-w-xl text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
          Let&rsquo;s talk about what you&rsquo;re building.
        </p>
        <div className="mt-9 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="mailto:heeyoon.timson@gmail.com"
            className="text-sm font-medium text-highlight underline decoration-border underline-offset-4 transition-colors duration-300 hover:text-accent"
          >
            heeyoon.timson@gmail.com
          </a>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
