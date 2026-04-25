interface SectionHeadingProps {
  children: string;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="editorial-title sticky top-0 z-20 mb-6 border-b border-border/70 bg-background/90 py-4 text-sm font-semibold tracking-[0.06em] text-foreground/80 backdrop-blur-md">
      {children}
    </h2>
  );
}
