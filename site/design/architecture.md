# theAIFolks.com — Design Architecture

*Design-pass output. Input: `site/design-brief.md` and `site/01-brainstorm/grill-me-log.md`. Test content: `domains/fashion/00-research/` (the only real content in the repo — research-stage, not yet through `01-brainstorm`/`02-analysis`/`03-article`). Companion deliverable: an HTML mockup covering the home, article, and standalone executive-summary views, built against the real Fashion & Luxury research. No site codebase exists yet — this document and the mockup are the design, not an implementation.*

> **Status: this is the v1, single-domain design pass — extended, not replaced, by [`multi-domain-architecture.md`](./multi-domain-architecture.md).** That document was triggered by the confirmed move to multiple domains (see `site/design-brief.md`'s "Addendum 2026-08") and supersedes this doc's §1 (site map), §2 (content model table), part of §7 (capture mechanism), and part of §9.2. Everything else here — positioning (§0), visual direction (§3), article anatomy (§4), the evidence-log-in-page reasoning (§5), research-stage honesty (§6), and the non-goals (§10) — still stands and isn't repeated there. Read this doc first for the *why*, then the v2 doc for what changed at multi-domain scale.

---

## 0. Positioning, restated

Two Hills Lab publishes evidence-graded AI strategy research, one industry at a time, using one proprietary framework (Two Hills: Automation vs. Invention × Individual vs. Institutional) applied consistently. The reference class is **Stratechery — a single analyst voice, small operation, authority from evidence discipline — not a Gartner Magic Quadrant multi-vendor comparison platform.** "Gartner" survives only as a visual-seriousness cue (structured 2×2s, clean data tables, maturity diagrams for each domain's *own* quadrant) — never as literal vendor-rating chrome, and never as a cross-company comparison. The audience is people making AI strategy and investment decisions (CTOs, corporate strategy, PE/VC) — not a general tech-news readership, so no comments, likes, or reverse-chronological feed as the organizing principle.

Everything below is designed against that, and against the brief's non-negotiables: free access with email capture (no paywall infrastructure at launch), a first-class shareable executive-summary artifact per article, and — as a flagged, unconfirmed working hypothesis — the evidence log itself as the platform's trust mechanic.

---

## 1. Site map & page types

Five page types. Each is justified against a specific brief requirement; none is invented for its own sake.

| # | Page type | URL pattern | Justifies against |
|---|---|---|---|
| 1 | **Home** | `/` | Brief: "home/index of domain reports." Doubles as the front door explaining the framework and the lab, since at launch there is exactly one domain to index. |
| 2 | **Domain / article page** | `/reports/<domain>` (e.g. `/reports/fashion`) | Brief's content model: "the article itself" + its 2×2 + its evidence log + its blindspots, as one coherent report — not split across a blog-post/tag/category structure the brief explicitly rejects. |
| 3 | **Standalone executive summary** | `/reports/<domain>/summary` | Brief's non-negotiable must-have: "a distinct, LinkedIn-shareable executive-summary artifact... its own URL/card/OG-image treatment, not just the article's first paragraph." |
| 4 | **Methodology** | `/methodology` | Load-bearing for the trust mechanic: explains the Two Hills framework, the P/R/N/V evidence-tier system, and the grill-me adversarial-review step, so a skeptical reader can audit *how* a report was built, not just read its output. Linked from every article's evidence-log section. |
| 5 | **About** | `/about` | Brief's positioning: authority from "evidence discipline and consistency, not headcount or peer-review scale." A page that says plainly this is a small operation is part of *earning* that positioning, not undermining it — Stratechery's masthead does the same work. |

**Email capture** is not a page — it's a recurring component (home hero footer, per-domain "notify me" on an in-research card, end-of-article, and reachable from the header). A dedicated `/subscribe` landing page (for a social bio link) is a reasonable v1.1 addition but wasn't built into the mockup; it would just be the same component full-bleed.

**Deliberately not built:**
- **No `/reports` index separate from home.** With one domain, a second index page is a placeholder for a problem that doesn't exist yet. Home *is* the index; see §9 for when this should split.
- **No cross-domain comparison/quadrant page.** Explicit non-goal — see §9.
- **No account/login, comments, or tag/category taxonomy.** Not supported by the brief's audience or access model.

---

## 2. Content model — pipeline artifact → page component

The public site must represent five things per published domain (per the brief) without exposing the internal `00-research` → `03-article` folder structure. Mapping:

| Pipeline artifact | Public component | Where it lives |
|---|---|---|
| `03-article/draft.md` (final article; `00-research/fashion-ai-domain-report.md` stands in for it pre-graduation) | Main article body — narrative sections with inline citation markers | Article page, body |
| Article's own opening/closing synthesis | **Executive Summary panel** — a distinct bordered block, not the article's lead paragraph | Article page, first section below the masthead, *and* its own standalone page |
| `00-research/investment-landscape.md` (quadrant classification table) | **The Two Hills Map** — an SVG 2×2 with the domain's own initiatives plotted, numbered, and legended | Article page, own section + sticky-nav entry |
| `00-research/sources.md` (numbered, tiered evidence log + "Known gaps") | **Evidence Log** — filterable table (all/P/R/N/V), full source count always visible, "Known gaps" reproduced as its own block | Article page, own section + sticky-nav entry — see §5 for why this is a section and not a separate page |
| `01-brainstorm/grill-me-log.md` (surviving/killed adversarial attacks) | A "stress-tested" note near the evidence log, once a domain has a completed grill-me session (Fashion doesn't yet — see §6) | Article page, folded into the methodology note until there's enough content to warrant its own block |
| `00-research/unsolved-problems.md` (binding-constraint analysis) | Feeds the two "institutional capability candidate" callout cards next to the quadrant map (e.g. Aura Blockchain Consortium, forecast-to-shelf loop) | Article page, alongside the quadrant map |

The public site never shows a `00-research`/`01-brainstorm` label. It shows a maturity signal instead (see §6).

---

## 3. Visual direction

### What's borrowed, specifically, and why

| Source | What's taken | What's explicitly *not* taken |
|---|---|---|
| **Stratechery** | Narrow reading column (~680–700px) for the article body; minimal chrome; no hero photography; restraint — color and decoration are functional, never ornamental; text density over whitespace-as-luxury. | Its literal typeface or exact layout — the goal is the *editorial-restraint principle*, not a skin. |
| **Gartner / Bain / McKinsey report visual seriousness** | Structured 2×2 diagrams with labeled axes and quadrant names; tiered/numbered data tables; a masthead-style report header (title, one-line thesis, date, domain tag) mimicking a report cover; a disciplined, mostly-two-hue-plus-neutrals palette. | Multi-vendor rating chrome, "leader/challenger" badges, anything implying peer comparison — there is no comparison in this content, and the brief is explicit that this must not be designed as if there were. |

### The chosen visual metaphor: cartographic survey report

Rather than default to generic "SaaS dashboard" or "blog" chrome, the visual system leans into a metaphor the repo's own language already supplies: the framework is literally named **Two Hills**, and its own analysis artifact is literally called `two-hills-map.md`. The mockup treats the site as a *survey report* — quadrant charts read like plotted terrain maps (numbered site markers + a legend, axis labels styled like map legends), the masthead carries a very restrained topographic contour-line motif, and the evidence log reads like a field ledger (monospace numerals, tiered "stamps"). This is a deliberate choice to avoid a templated look, and it's substantive, not decorative: the quadrant chart's honesty (see below) is the same instinct as a surveyor's map — plot only what was actually measured.

### Palette

Four hue families, each doing exactly one job (no color is reused across jobs):

- **Ink & paper** — a cool stone paper (`#F4F5F3` light / `#14181A` dark) and a cool charcoal ink (`#1B2220` / `#EDEFEC`), avoiding the generic warm-cream-plus-serif-plus-terracotta combination common to templated AI-generated design.
- **Accent (indigo, "surveyor's ink")** — `#453D82` light / `#9791DD` dark — used *only* for links, CTAs, and interactive affordances. Never doubles as a data-viz color, so a reader is never unsure whether purple means "click here" or "this data point."
- **Quadrant markers (orange = Process Automation at Scale, teal = Institutional Capability)** — `#C15A1E`/`#0E8A6C` light, `#E17C3D`/`#2FB68F` dark. These two are the only quadrants with real plotted data in the Fashion domain; Personal Productivity and Individual Invention render as neutral, honestly-labeled empty regions rather than being padded with invented markers.
- **Evidence-tier ramp (P→R→N→V)** — a single navy hue stepped by lightness (darkest/strongest = Primary, lightest/faintest = Vendor), not four unrelated colors. This is deliberate: P/R/N/V is a trust *ranking*, not a category, so it's encoded as an ordinal ramp — the same visual logic as a confidence scale — rather than four arbitrary categorical colors that would imply no order between them.

Every categorical/ordinal palette above was run through a CVD-safety and contrast validator (OKLCH lightness bands, chroma floor, protanopia/deuteranopia ΔE separation, WCAG contrast against both the light and dark surface) before being locked — not eyeballed.

### Typography

Three roles, each with a reason:
- **Display serif** (`Iowan Old Style` / `Palatino` / system fallback) — headlines, the masthead wordmark, pull-quote thesis statements. Gives the publication a print-report gravitas that most SaaS/blog sites (all-sans) don't reach for, without requiring a custom webfont.
- **UI/body sans** (system sans stack) — running prose, navigation, labels. Chosen for density and legibility over the long analytical sections; this is where Stratechery's "restraint" principle lives most directly.
- **Monospace** (`SF Mono` / `IBM Plex Mono` / system fallback) — every citation number, evidence-log row, date, and tier badge. This is the single most deliberate typographic choice: rendering sourcing data in a ledger/citation register visually signals "this is a record," reinforcing the sourcing-transparency mechanic every time a reader's eye crosses a number.

### Layout principles

- A capped reading column for long-form prose; full-bleed structured grids (the quadrant map, the evidence table, the "how we work" strip) allowed to run wider, matching how a printed report alternates prose columns with full-width figures.
- Near-zero border-radius throughout (2px, functionally invisible) — a "printed document" precision rather than soft SaaS rounding, and a deliberate departure from the generic `rounded-lg`-everywhere look.
- The evidence log is a *scrollable, filterable, always-fully-counted* table (not paginated, not truncated to "top 5 sources") — see §5.

---

## 4. Article page anatomy

Top to bottom, as built in the mockup (`/reports/fashion`):

1. **Masthead** — domain tag (Fashion & Luxury), title, one-line thesis as a pull-quote (drawn verbatim from the research report's own candidate thesis — see §6 on why this is honest, not invented), byline, source count, read time.
2. **Sticky sub-navigation** — Summary · How It's Used · The Two Hills Map · Blindspots · Evidence Log. This single row is what operationalizes "the evidence log is first-class, not a footnote": it's one click away from anywhere on the page, at all times, exactly like every other major section.
3. **Executive Summary panel** — visually distinct bordered block, share affordances (LinkedIn / copy-link / "open standalone" icons), the real summary paragraph, and four pull-quote stat tiles each carrying its own citation.
4. **How AI Is Actually Being Used** — the domain narrative, broken into named use-case rows (Design & product development, Virtual try-on & fit, Demand forecasting, …), every load-bearing number carrying an inline citation that jumps to its evidence-log row.
5. **The Two Hills Map** — the domain's own 2×2, not a vendor quadrant: numbered markers (solid for verified, dashed outline for flagged-unverified), a legend, and two callout cards for the domain's institutional-capability candidates.
6. **Blindspots & Challenges** — a distinct grid, deliberately given equal visual weight to the "How It's Used" section rather than being minimized. A platform whose trust mechanic is transparency has to show its skepticism as prominently as its optimism.
7. **Evidence Log** — full source count, tier-filter chips, scrollable table, "Known gaps" block. See §5.
8. **Methodology note + email capture + footer.**

---

## 5. The evidence log: section, not a separate page — and why

The brief flags this as the platform's proposed trust mechanic and asks that it be surfaced as "first-class... not a footnote." Two designs were considered:

- **A. A dedicated `/reports/fashion/evidence` page**, linked from the article.
- **B. A full section on the article page itself**, with its own sticky-nav entry and anchor permalinks for individual sources (`#src-22`).

**Chosen: B.** Splitting the log onto a separate page would, paradoxically, do exactly what the brief warns against — it would turn the evidence log back into an appendix a reader has to *leave* the article to consult, which is functionally identical to "a footnote," just with extra clicks. Keeping it in-page, with a persistent sub-nav entry equal in weight to "How It's Used," makes the evidence log structurally equal to the analysis, not subordinate to it. Individual source rows still get stable anchor IDs so they're citable/linkable on their own — which gets most of page-B's benefit (a shareable, permanent reference) without the cost.

The log is deliberately **not truncated**: the mockup renders and counts all 58 sources from `sources.md`, filterable by tier (All / Primary / Report / News / Vendor), inside a scrolling container so the page stays navigable. The "Known gaps" subsection — sources.md's own admission of what *wasn't* verified (the unconfirmed Zara/Inditex figures, the absent fit-algorithm bias study, the order-of-magnitude disagreement in market-sizing) — is reproduced as part of this same block, not hidden. Showing what a report *doesn't* know is, per the brief's working hypothesis, exactly the kind of radical transparency that substitutes for the brand history Two Hills Lab doesn't have.

---

## 6. Handling research-stage content honestly

Fashion has completed only `00-research`; `01-brainstorm`, `02-analysis`, and `03-article` are still template placeholders in the repo. Two views were needed from this one domain:

- **Home** shows Fashion truthfully: an "In Research" status chip, a per-domain "notify me" capture, and a link to a *labeled preview* of the article rather than a "Read report" link that would overclaim.
- **The article page** renders the content **as it will look once published**, per the task brief, using the research report as the article body stand-in (it's the only real prose that exists). The one honesty concession: the masthead thesis is the research report's own explicitly-flagged *candidate* thesis ("the durable AI moat in fashion isn't a better forecast or a cheaper photoshoot — it's who controls the shared, verifiable data infrastructure a garment carries from factory to resale") — a real sentence from `fashion-ai-domain-report.md`, not an invented headline. A live build should gate the actual publish action on the domain reaching `03-article` / passing `publishing/checklist.md`; the mockup exists to prove out the *rendering*, not to imply Fashion is ready today.

---

## 7. Email capture

No dedicated account system — capture is a persistent, low-friction input field, in four places: the home hero footer (general newsletter), a per-domain "notify me when this publishes" field on any in-research domain card, an end-of-article field, and the header CTA. Copy is deliberately cadence-free per the brief's non-goal ("no fixed publishing-cadence promise") — e.g. *"Get new domain reports when they publish. No cadence promised — just a note the day a new report goes live."* No paywall copy, no tier language, anywhere.

**A seam left open, not built:** the Executive Summary / full-article split already gives the content a natural gate boundary (summary always free, full analysis + evidence log behind a future paywall) if paid tiers are added later, per the brief's instruction not to foreclose that option. Nothing in this pass implements gating logic.

---

## 8. Mockup

Published via the Artifact tool: three views in one file — Home, Article (Fashion & Luxury), and the standalone Executive Summary — switchable via a labeled reviewer toolbar that is visually distinct from the site's own chrome (so it's never mistaken for real site navigation). Self-contained, theme-aware (light/dark via `prefers-color-scheme` and the artifact viewer's explicit toggle), responsive. All figures, quotes, and evidence-log rows are transcribed from `domains/fashion/00-research/fashion-ai-domain-report.md` and `sources.md` — nothing invented.

---

## 9. Open items — flagged explicitly, not silently assumed

### 9.1 Sourcing-transparency-as-differentiator — **unconfirmed, needs the human's explicit sign-off or kill**

The brief is explicit that this is "a candidate differentiator, not a settled decision." This design pass treats it as true and builds around it structurally (evidence log gets a sticky-nav slot equal to the analysis, full 58-source count always visible, "Known gaps" given its own labeled block) — but that is a design bet, not a validated one. If, after Fashion publishes, this doesn't land with the target audience (CTOs/strategy/PE-VC), the evidence log should shrink back toward a conventional "sources" footer link without touching anything else in this architecture — the rest of the site doesn't depend on the evidence log's prominence to function.

### 9.2 Cross-domain comparison/index view — **out of scope for v1, noted as a v2 seed**

Per the brief's explicit non-goal, no comparison chrome was designed. The home page's domain grid is deliberately just a list of independent report cards, each with its own thesis and its own 2×2 — never a shared axis or side-by-side rating. Once 2+ domains are published, the natural v2 question is whether a light cross-domain index (e.g. "which domains found an institutional-capability candidate vs. none") earns its place — that page doesn't exist today and its shape isn't decided; noting it here only so it isn't silently designed-around or silently designed-in later.

---

## 10. Non-goals held (confirming what was deliberately not built)

- No literal multi-vendor quadrant/comparison page.
- No comments, likes, or social-feed mechanics anywhere.
- No paywall or billing UI (a seam is left, per §7, nothing implemented).
- No cadence promise in any subscriber-facing copy.
- No account/login system.
