interface SectionHeadingProps {
  children: string;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="sticky top-0 z-20 -mx-6 mb-8 w-screen max-w-none bg-background/80 px-6 py-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-xl lg:sr-only">
      {children}
    </h2>
  );
}
