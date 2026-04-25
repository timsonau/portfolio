interface SectionHeadingProps {
  children: string;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="sticky top-0 z-20 mb-6 flex items-center border-b border-border/70 bg-background/90 py-4 backdrop-blur-md">
      <h2 className="editorial-title text-sm font-semibold tracking-[0.06em] text-foreground/80">
        {children}
      </h2>
    </div>
  );
}
