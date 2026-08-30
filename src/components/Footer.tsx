import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-border/70" data-reveal>
      <div className="mx-auto flex max-w-3xl flex-col items-start gap-6 px-6 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="editorial-title text-sm font-semibold text-foreground">
            Tim Son
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Software Engineer, based in the US.
          </p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}
