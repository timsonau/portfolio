import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <header className="relative overflow-hidden border-b border-border/70 px-6 pb-14 pt-16 sm:px-8 sm:pt-24 md:pb-20">
      <span
        aria-hidden="true"
        className="hero-mark pointer-events-none select-none"
      >
        TS
      </span>

      <div className="relative mx-auto max-w-3xl">
        <div className="hero-enter hero-delay-1 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full border border-border shadow-sm">
            <img
              src={`${import.meta.env.BASE_URL}images/tim-son.jpg`}
              alt="Tim Son"
              className="h-full w-full object-cover object-top"
              loading="eager"
            />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Software Engineer &middot; McMaster-Carr
          </p>
        </div>

        <h1 className="editorial-title hero-enter hero-delay-2 mt-7 text-6xl font-semibold leading-[0.96] tracking-tight text-foreground sm:text-7xl lg:text-[5.25rem]">
          Tim Son
        </h1>

        <p className="hero-enter hero-delay-3 mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          I build distributed systems and cloud infrastructure that hold up at
          production scale, and lately, AI-powered tooling that makes teams
          faster.
        </p>

        <div className="hero-enter hero-delay-4 mt-8">
          <SocialLinks />
        </div>
      </div>
    </header>
  );
}
