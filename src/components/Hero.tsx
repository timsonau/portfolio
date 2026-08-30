import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <header className="relative flex min-h-[86vh] flex-col justify-center overflow-hidden border-b border-border/70 px-6 pb-16 pt-24 sm:px-8">
      <span aria-hidden="true" className="hero-mark pointer-events-none select-none">
        &rdquo;
      </span>

      <div className="relative mx-auto w-full max-w-3xl">
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

        <h1 className="editorial-title hero-enter hero-delay-2 mt-8 text-7xl font-semibold leading-[0.92] tracking-tight text-foreground sm:text-8xl lg:text-[7rem]">
          Tim Son
        </h1>

        <p className="hero-enter hero-delay-3 mt-8 max-w-xl font-serif text-2xl italic leading-snug text-foreground/80 sm:text-3xl">
          Distributed systems, cloud infrastructure, and AI-powered tooling
          &mdash; built to hold up at production scale.
        </p>

        <div className="hero-enter hero-delay-4 mt-10">
          <SocialLinks />
        </div>
      </div>
    </header>
  );
}
