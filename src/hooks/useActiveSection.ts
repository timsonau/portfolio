import { useEffect, useRef, useState } from "react";

const SECTION_IDS = ["about", "experience", "articles", "skills", "education"] as const;
type SectionId = (typeof SECTION_IDS)[number];

const ACTIVATION_Y = 140; // px from top where we decide "this section is active"
const SCROLL_END_DEBOUNCE_MS = 120;

export default function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState<SectionId>("about");
  const activeRef = useRef<SectionId>("about");

  const isProgrammaticScrollRef = useRef(false);
  const scrollEndTimerRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const computeActive = () => {
      // If we're at the very bottom, force last section active
      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (nearBottom) return SECTION_IDS[SECTION_IDS.length - 1];

      // Choose the last section whose top is above the activation line
      let current: SectionId = SECTION_IDS[0];
      for (const sec of sections) {
        const top = sec.getBoundingClientRect().top;
        if (top <= ACTIVATION_Y) current = sec.id as SectionId;
        else break; // because sections are in DOM order
      }
      return current;
    };

    const update = () => {
      rafRef.current = null;
      if (isProgrammaticScrollRef.current) return;

      const next = computeActive();
      if (next !== activeRef.current) {
        activeRef.current = next;
        setActiveSection(next);
      }
    };

    const onScroll = () => {
      // Debounce to detect scroll end (useful to unlock after clicks)
      if (scrollEndTimerRef.current) window.clearTimeout(scrollEndTimerRef.current);
      scrollEndTimerRef.current = window.setTimeout(() => {
        isProgrammaticScrollRef.current = false;
        // do one final sync at end
        const next = computeActive();
        if (next !== activeRef.current) {
          activeRef.current = next;
          setActiveSection(next);
        }
      }, SCROLL_END_DEBOUNCE_MS);

      if (rafRef.current == null) {
        rafRef.current = window.requestAnimationFrame(update);
      }
    };

    // initial sync
    const initial = computeActive();
    activeRef.current = initial;
    setActiveSection(initial);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current);
      if (scrollEndTimerRef.current) window.clearTimeout(scrollEndTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const a = (event.target as HTMLElement).closest("a");
      if (!a?.hash) return;

      const sectionId = a.hash.slice(1) as SectionId;
      if (!SECTION_IDS.includes(sectionId)) return;

      event.preventDefault();
      const section = document.getElementById(sectionId);
      if (!section) return;

      isProgrammaticScrollRef.current = true;
      activeRef.current = sectionId;
      setActiveSection(sectionId);

      section.scrollIntoView({ behavior: "smooth", block: "start" });

      // We don't use a fixed timeout; we unlock when scrolling stops via debounce.
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return activeSection;
}