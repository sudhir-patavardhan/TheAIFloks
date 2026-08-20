# Design Brief: theAIFolks.com

*Synthesized from `01-brainstorm/grill-me-log.md` (session 2026-08). This is the input to the site design work — not itself the design.*

## What this is

The public publishing platform for Two Hills Lab's domain reports (see repo root `README.md` for the framework and pipeline). Each report — like the completed `domains/fashion/00-research/` output — is a sourced, evidence-tiered analysis of how AI is actually being used in an industry, what's commoditizing (automation), and where the durable institutional-capability opportunity is (invention).

## Reference class — be precise about this

**Stratechery-style, not Gartner-Magic-Quadrant-style.** One proprietary framework (Two Hills), applied consistently across domains, by a small operation. Authority comes from evidence discipline and consistency, not headcount or peer-review scale. "Gartner" survives only as a *visual seriousness* cue — structured frameworks, clean data-viz, maturity/quadrant visuals for the 2x2 — not as literal multi-vendor peer-comparison ratings. Do not design a "quadrant of competing companies" — there isn't one; each domain gets one thesis.

## Audience

People making AI strategy and investment decisions — CTOs, corporate strategy, PE/VC evaluating AI plays. Not a general consumer/tech-news audience. No comments, no likes, no social feed mechanics.

## The trust mechanic (working hypothesis — flagged, not yet confirmed by the user in words)

Incumbent analyst firms (Gartner, McKinsey) don't show their work — they cite "clients" opaquely. This lab's own ground rules already force the opposite: every claim traces to a numbered, dated, tiered source (see `shared/common-understanding.md`, `publishing/checklist.md`, and `domains/fashion/00-research/sources.md` as the working example — 58 sources, P/R/N/V tiers, explicit "known gaps" section). **Proposal: make the evidence log a first-class, visible part of every published article — not a footnote or an appendix link.** This is a candidate differentiator, not a settled decision — flag it in your output as something the user should explicitly sign off on or kill.

## Access model

Free with email capture, for now. No paywall at launch — deliberately, because the closest reference-class reports (McKinsey State of Fashion, Bain Luxury Report, BCG luxury AI — see `domains/fashion/00-research/sources.md` #47/#48/#50) are all free, cross-subsidized by their authors' consulting arms. This lab doesn't have that upsell yet, so a same-day paywall risks the free-competitor problem Stratechery doesn't face. Paid tiers are an explicit later decision once there's a back-catalog and proven demand — design should not foreclose adding this later (e.g. leave room for a paywall boundary between summary and full analysis) but should not build it now.

## Must-have: shareable executive summary

Every article needs a distinct, LinkedIn-shareable executive-summary artifact — separate from the full sourced analysis. Design should treat this as a first-class content type (its own URL/card/OG-image treatment), not just "the first paragraph of the article."

## Content model — map the real pipeline to public pages

The repo's actual content pipeline (see `domains/_template/README.md`) produces, per domain:
- `00-research/` — sources.md (numbered, tiered evidence log), investment-landscape.md (2x2 initiative classification), unsolved-problems.md (binding-constraint analysis)
- `01-brainstorm/` — grill-me sessions (adversarial stress-testing log)
- `02-analysis/` — two-hills-map.md (final quadrant placement + thesis)
- `03-article/` — the finished, publishable draft

**The public site does not need to expose this internal folder structure.** What it needs is a content model that can represent, per published domain: (1) the article itself, (2) its executive summary, (3) its 2x2/quadrant visualization, (4) its full evidence log (in service of the transparency principle above), and (5) optionally, the grilled thesis's surviving/killed attacks as supporting material for skeptical readers. Design the page types and information architecture around that, not around blog post/tag/category conventions.

Use `domains/fashion/00-research/` as the concrete first test case — it's the only domain with real content right now (fashion-ai-domain-report.md, sources.md, investment-landscape.md, unsolved-problems.md). It has not yet been through `01-brainstorm`/`02-analysis`/`03-article`, so treat it as research-stage content for mockup purposes, not a finished article — the mockup should still work once it graduates to a finished article.

## Explicit non-goals for v1

- No literal multi-vendor "quadrant" comparison page (there's only one thesis per domain right now).
- No comments, likes, or social feed mechanics.
- No paywall/billing infrastructure.
- No fixed publishing-cadence promise (e.g. "new report every month") — cadence hasn't been set; don't bake a commitment into subscriber-facing copy that the pipeline can't back up yet (a real risk raised and unresolved during grilling).

## Addendum 2026-08 — Multi-domain scale

Fashion is domain 1 of many. Confirmed future domains (illustrative, not exhaustive — more will follow): **real estate, primary education, hospitals, pharmaceuticals**. The site's generic pages must be built domain-agnostic now, not fashion-specific — every template should work identically for a domain that doesn't exist yet.

**Three public content types per domain**, not one:
1. **The Report/Article** — as already speced in `site/design/architecture.md` §4.
2. **Research Materials** — the raw research behind the article, surfaced as its own accessible thing, not just the embedded evidence-log section on the article page. Maps to a domain's `00-research/` folder (e.g. for Fashion: `sources.md`, `investment-landscape.md`, `unsolved-problems.md`, `industry-challenges.md`, the domain report itself). Needs a generic page template — this is new, not covered by the existing architecture doc.
3. **Unsolved Problems** — each domain contributes entries to a **cross-domain, public Unsolved Problems index**. Explicit purpose, in the user's own words: *"a list that could spark the imagination for problem solvers and investors."* This is a new page type, not the same as the per-article quadrant callouts. Real seed content already exists at `shared/unsolved-problems.md` (4 real, evidenced entries: the quality-engineering reference case, plus Fashion's overproduction/authentication/sizing problems) — use it. This page's framing is closer to "here are real, evidenced problems nobody's cracked yet" than a dry academic table; it's meant to be inspiring and browsable, filterable by domain, but every entry must still carry its binding-constraint analysis and source trail — no diluting the evidence discipline for the sake of being inspiring.

**Generic pages needed now:** Home becomes a genuine multi-domain directory (§9.2 of the existing architecture doc flagged this exact trigger — "once 2+ domains are published" — treat the *announcement* of more domains as license to design for it now, even before they're researched). A domain landing page that fans out to its Report / Research Materials / Unsolved Problems. A generic Research Materials template. The new cross-domain Unsolved Problems index. Reconsider whether Home and a Reports index should now split (the existing doc left this open).

**Non-negotiable honesty constraint:** only Fashion has real content. Real estate / primary education / hospitals / pharmaceuticals must appear as honest roadmap placeholders (e.g. "Planned" / "Not yet started") on the Home directory — never fabricated stats, theses, or research for domains that haven't been researched. This is the same discipline already applied to Fashion's own "In Research" status; apply it symmetrically to every not-yet-started domain.

**Mode:** this is still the design phase (spec + mockup), not a real codebase — `site/README.md` tracks Build as a separate, not-yet-started phase, and no domain has reached `03-article` yet. Continue in that mode (updated/extended spec + an updated mockup artifact). If you believe real implementation should start now instead, say so explicitly in your report rather than silently switching modes.

## Open items carried forward (not blocking, but flag in your output)

- Sourcing-transparency-as-differentiator: proposed, not explicitly confirmed by the user.
- A cross-domain index/comparison view is a plausible v2 once 2+ domains are complete (the seed of an actual "quadrant" view) — note it as a future direction, don't design it now.
