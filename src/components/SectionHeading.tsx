interface SectionHeadingProps {
  children: string;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="sticky top-0 z-20 mb-8 bg-background/80 py-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-xl border-b border-border">
      {children}
    </h2>
  );
}
