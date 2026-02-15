import { useEffect, useRef, useState } from "react";

const SECTION_IDS = ["about", "experience", "articles", "skills", "education"] as const;

type SectionId = (typeof SECTION_IDS)[number];

const HYSTERESIS = 0.12; // how much more visible a new section must be to "win"
const SCROLL_LOCK_MS = 700;

export default function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState<SectionId>("about");
  const activeRef = useRef<SectionId>("about");

  const isScrollingRef = useRef(false);
  const unlockTimerRef = useRef<number | null>(null);

  // Keep latest ratios for ALL sections (not just changed entries)
  const ratiosRef = useRef<Record<string, number>>({});

  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    // init ratios
    sections.forEach((s) => (ratiosRef.current[s.id] = 0));

    const pickByCenter = () => {
      const centerY = window.innerHeight * 0.35; // "reading line" a bit above center feels nicer
      let bestId: SectionId = activeRef.current;
      let bestDist = Number.POSITIVE_INFINITY;

      for (const sec of sections) {
        const rect = sec.getBoundingClientRect();
        // distance from the center line to the section's vertical span
        const dist =
          centerY < rect.top
            ? rect.top - centerY
            : centerY > rect.bottom
              ? centerY - rect.bottom
              : 0;

        if (dist < bestDist) {
          bestDist = dist;
          bestId = sec.id as SectionId;
        }
      }
      return bestId;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;

        // update stored ratios for any entries that changed
        for (const entry of entries) {
          ratiosRef.current[entry.target.id] = entry.isIntersecting ? entry.intersectionRatio : 0;
        }

        const current = activeRef.current;
        const currentRatio = ratiosRef.current[current] ?? 0;

        // find best ratio across ALL sections
        let bestId = current;
        let bestRatio = currentRatio;

        for (const id of SECTION_IDS) {
          const r = ratiosRef.current[id] ?? 0;
          if (r > bestRatio) {
            bestRatio = r;
            bestId = id;
          }
        }

        // If nothing is intersecting (common with small sections + margins), use center heuristic
        if (bestRatio === 0) {
          bestId = pickByCenter();
          bestRatio = ratiosRef.current[bestId] ?? 0;
        }

        // Hysteresis: don't switch unless clearly better
        if (bestId !== current && bestRatio >= currentRatio + HYSTERESIS) {
          activeRef.current = bestId;
          setActiveSection(bestId);
        } else if (bestId === current && current !== activeSection) {
          // keep state synced if needed
          setActiveSection(current);
        }
      },
      {
        // Smaller margins = less “ghost intersections” for tiny sections
        rootMargin: "-30% 0px -55% 0px",
        threshold: Array.from({ length: 11 }, (_, i) => i / 10), // 0,0.1,...1.0 gives stable ratios
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest("a");
      if (!target || !target.hash) return;

      const sectionId = target.hash.substring(1) as SectionId;
      if (!SECTION_IDS.includes(sectionId)) return;

      event.preventDefault();
      const section = document.getElementById(sectionId);
      if (!section) return;

      // lock updates during programmatic smooth scroll
      isScrollingRef.current = true;
      activeRef.current = sectionId;
      setActiveSection(sectionId);

      section.scrollIntoView({ behavior: "smooth", block: "start" });

      if (unlockTimerRef.current) window.clearTimeout(unlockTimerRef.current);
      unlockTimerRef.current = window.setTimeout(() => {
        isScrollingRef.current = false;
      }, SCROLL_LOCK_MS);
    };

    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
      if (unlockTimerRef.current) window.clearTimeout(unlockTimerRef.current);
    };
  }, []);

  return activeSection;
}