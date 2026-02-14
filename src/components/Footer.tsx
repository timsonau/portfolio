export default function Footer() {
  return (
    <footer className="pb-16 text-sm text-muted-foreground lg:pb-0" data-reveal>
      <p>
        {"Built by "}
        <span className="text-foreground">Tim Son</span>
        {" with "}
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="text-foreground transition-colors duration-300 hover:text-highlight">React</a>
        {" & "}
        <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-foreground transition-colors duration-300 hover:text-highlight">Tailwind</a>
        .
      </p>
    </footer>
  );
}
