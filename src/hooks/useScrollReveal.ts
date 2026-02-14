import { useEffect } from "react";

/**
 * Observes all [data-reveal] elements and adds the "revealed" class
 * when they scroll into the viewport. Pure CSS handles the animation.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
