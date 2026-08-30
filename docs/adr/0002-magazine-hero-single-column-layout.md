# Layout redesign: single-column magazine/editorial layout

[ADR-0001](0001-visual-redesign-warm-editorial-identity.md) fixed the color/typography identity but kept the structural layout: a sticky left sidebar (name, nav, socials) beside a scrolling right column of sections. That structure is a very common portfolio template (the Brittany Chiang layout), and recoloring it wasn't enough to stop it reading as templated. Replaced it with a single-column magazine layout: a horizontal top nav, a full-bleed typographic hero, and numbered chapter headings (`01 About`, `02 Experience`, ...) running down one centered column. The warm/editorial palette and type system from ADR-0001 are unchanged — only the structural layout and copy presentation move.

A first pass at this layout kept the every-item-in-a-bordered-box treatment from the old design (`.editorial-card`) and tag-chip clusters (`.editorial-chip`) underneath the new hero/nav — structurally different, visually still a generic boxed-card template. Revised to remove boxed cards and chip clusters everywhere: rows are separated by hairline rule dividers instead of borders, tag/tech lists render as plain typographic runs (`Go · Kubernetes · Kafka`) instead of pill badges, and each Experience entry's standout metric is pulled out as an italic serif line with a left accent rule (`.pull-rule`) — a recurring "pull-quote" device reused for the About section's lead sentence (rendered with a drop cap) and echoed by a large translucent closing-quote mark (`”`) as the hero's watermark. The hero itself is now a full `min-h-[86vh]` opening statement rather than a modestly-sized top block.

## Considered options

- **Bento grid** (modular cards of varying sizes on one dashboard-like scroll) — rejected: reads as a SaaS product page rather than a personal, editorial portfolio; also a lot of layout surface for five sections' worth of content.
- **Numbered chapters as a full print-magazine layout** (thin scroll-progress rail, slower reading rhythm) — partially adopted: kept the numbered-chapter heading treatment, but folded it into the magazine-hero direction rather than building it as a separate, heavier scrollytelling layout.
- **Kept the sticky sidebar, restyled only** — rejected: this is the thing being fixed; restyling again would repeat ADR-0001's mistake of treating the problem as a coloring exercise.

## Notable decisions inside the direction

- **Solid nav background, no `backdrop-blur`.** A translucent/blurred sticky nav ghosted the hero content scrolling underneath it — a distracting glassmorphism artifact rather than a deliberate effect. Nav uses a solid background instead.
- **Mobile nav scrolls horizontally with a fade mask**, rather than wrapping or collapsing into a hamburger menu — five short section labels don't justify a menu-button interaction, and the fade signals scrollability without extra JS state.
- **Dropped `comic-tim.png`** (the asset produced for the now-removed xkcd theme) from the hero in favor of the plain headshot (`tim-son.jpg`), consistent with ADR-0001's decision to drop the comic theme entirely.

## Consequences

- Section labels were tightened for the tighter editorial voice ("My Articles" → "Writing"); the underlying anchor id (`#articles`) and all facts (dates, titles, employers, metrics) are unchanged — copy changes remain presentation-only, per ADR-0001.
- `useActiveSection` (scroll-position-based, not IntersectionObserver) needed no changes — it already computes activity from document-level section positions rather than layout structure, so it works unmodified against the new single-column flow.
- `SectionHeading` now takes an `index` prop (`"01"`–`"05"`) and is no longer individually sticky per section; only the top nav is sticky.
- `.editorial-card`, `.editorial-chip`, `.section-frame`, and `.photo-frame` (all box/chip treatments from ADR-0001) are removed from `index.css` as unused; `.pull-rule` is added as the new recurring accent device.
- The About section was dropped entirely — the hero's italic tagline already carries that introductory statement, and a separate About block was redundant next to it. Chapters are renumbered accordingly: `01 Experience`, `02 Writing`, `03 Skills`, `04 Education`. `.drop-cap` (introduced for About's lead sentence) was removed along with it, as it has no other user.
