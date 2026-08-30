interface SectionHeadingProps {
  index: string;
  children: string;
}

export default function SectionHeading({ index, children }: SectionHeadingProps) {
  return (
    <div className="mb-8 flex items-baseline gap-4 border-b border-border/70 pb-4">
      <span className="editorial-title text-sm font-semibold text-muted-foreground/50">
        {index}
      </span>
      <h2 className="editorial-title text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {children}
      </h2>
    </div>
  );
}
