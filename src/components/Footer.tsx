export default function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-muted-foreground lg:pb-0">
      <p className="leading-relaxed">
        Loosely designed and coded by{" "}
        <span className="text-foreground font-medium">Tim Son</span>. Built with{" "}
        <a
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground font-medium transition-colors duration-300 hover:text-accent"
        >
          React
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground font-medium transition-colors duration-300 hover:text-accent"
        >
          Tailwind CSS
        </a>
        , deployed on{" "}
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground font-medium transition-colors duration-300 hover:text-accent"
        >
          Vercel
        </a>
        .
      </p>
    </footer>
  );
}
