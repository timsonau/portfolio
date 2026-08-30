# Visual redesign: warm/editorial identity, single theme

The site's dual dark-HUD/xkcd-comic theme system (`src/index.css`) reads as a generic AI-generated-tool aesthetic — dark background, neon cyan/purple gradient glow, glassy bordered cards — closer to a shadcn-default look than an intentional design. Decided to consolidate to **one** theme: a light, warm/editorial palette (replacing the current cool dark HUD and the comic theme both), with personality carried through typography, color, and a restrained visual motif rather than custom illustration or mascot work. PostHog's site was the reference point for *qualities* — restraint, one confident accent, consistency across every surface — not its specific colors, to avoid reading as copied from a recognizable dev-tool brand.

## Considered options

- **Kept the dual-theme system** (dark HUD + comic), redesigning both — rejected: doubles the design surface for a single-person portfolio, and one strong point of view reads as more deliberate than a toggle.
- **Dark-warm base** (espresso/charcoal background, warm accent) — rejected in favor of a light/cream base, per direct preference.
- **Bespoke illustration/mascot work** (in the spirit of PostHog's hedgehog) — deferred: real asset-production cost that a lighter type/color/motif system doesn't need to pay for the same "intentional, not generic" signal. Can be added later.

## Consequences

Content copy may be edited and restructured for the new design, but no facts (dates, titles, metrics, employers) may be added or changed — copy changes are presentation-only.
