interface SectionHeadingProps {
  children: string;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="sticky top-0 z-20 -mx-6 mb-4 w-screen max-w-none bg-background/80 px-6 py-5 text-sm font-bold uppercase tracking-widest text-foreground backdrop-blur-md lg:sr-only">
      {children}
    </h2>
  );
}
