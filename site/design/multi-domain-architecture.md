# theAIFolks.com — Multi-Domain Architecture (v2)

*Design-pass output. Extends `site/design/architecture.md` (the v1, single-domain design), triggered by `site/design-brief.md`'s "Addendum 2026-08 — Multi-domain scale." Input content: `domains/fashion/00-research/` (still the only real domain content — now five files, not four) and `shared/unsolved-problems.md` (the real four-entry cross-domain registry). Companion deliverable: an updated HTML mockup. No site codebase exists yet — this document and the mockup are the design, not an implementation.*

## Why a new file, not an edit to `architecture.md`

`architecture.md` is a complete, self-consistent record of a real decision point: at one domain, with zero comparison need, a single-page front door was the right call, and it says so with reasoning (§9.2 names the exact trigger for revisiting: *"once 2+ domains are published"*). Overwriting that document in place would erase the auditable trail of *why* — at 1-domain scale — no `/reports` index and no domain-landing page existed. This lab's whole premise is showing your work; the design record should hold itself to the same standard. So: this is a new document that supersedes specific sections of `architecture.md` (called out below), while `architecture.md` remains the intact v1 record. A one-line pointer has been added to the top of `architecture.md` so anyone landing there first is redirected here. Nothing in `architecture.md`'s §0 positioning, §3 visual direction, §5 evidence-log-in-page reasoning, §6 research-stage honesty, or §7 email-capture *principle* is contradicted — those stand. What changes is the site map, the content model's cardinality, and the home page's job.

**Sections this document supersedes:** §1 (site map), §2 (content model table), part of §7 (capture mechanism, given the new GitHub Pages constraint), §9.2 (partially — see below). Everything else in `architecture.md` still applies and isn't repeated here.

---

## 0. Hosting & technical constraints (new)

Confirmed mid-pass: theAIFolks.com will ship on **GitHub Pages** — static output only. No server-side rendering, no application backend, no database, ever, at any phase this design anticipates.

Implications for the Build phase (not decided here, just scoped so Build doesn't waste a cycle considering server options):
- The site needs either a static-site generator with a GitHub Actions or native Pages build step (Jekyll has zero-config native GitHub Pages support; Astro, 11ty, and Hugo all work via an Actions build step) or hand-authored static HTML/CSS/JS. All are compatible with everything in this design — nothing here assumes routing, cookies, sessions, or a database.
- Every interactive pattern in this design (evidence-log tier filter, Research Materials sticky sub-nav, Unsolved Problems domain filter) must be pure client-side JS operating on data baked into the page at build time. That's already how the mockup is built — this constraint doesn't change any pattern, it just confirms none of them may grow a server dependency later.
- **Email capture** (`architecture.md` §7): a static host cannot run its own capture endpoint. Every notify-me / subscribe field in this design must post to a third-party static-friendly form service via that service's client-side snippet or form-`action` URL — e.g. Buttondown, ConvertKit, or Formspree. This changes nothing about the component's visual design (still a plain input + button, still cadence-free copy, still four placements) — only what the `<form action>` points to and that submission redirects to/confirms via the third party rather than an app server. Vendor choice is a Build-phase decision, not a design one.

---

## 1. Site map v2

Seven page types (up from five). Each new one is justified against the addendum's three-content-types requirement.

| # | Page type | URL pattern | Status vs. v1 |
|---|---|---|---|
| 1 | **Home** | `/` | Redesigned — see §2. No longer a single-domain front door; a genuine multi-domain directory. |
| 2 | **Domain landing page** | `/domains/<domain>` (e.g. `/domains/fashion`) | **New.** Fans out to that domain's three content types. See §3. |
| 3 | **Report / article page** | `/domains/<domain>/report` | Same content model as `architecture.md` §4 (masthead → exec summary → use cases → Two Hills Map → blindspots → evidence log). URL moved from `/reports/<domain>` — see §7. |
| 4 | **Standalone executive summary** | `/domains/<domain>/report/summary` | Unchanged in substance; URL nested under the moved report path. |
| 5 | **Research Materials** | `/domains/<domain>/research` | **New.** The generic template for a domain's `00-research/` folder. See §4. |
| 6 | **Unsolved Problems index** | `/problems` | **New.** Cross-domain, filterable, pulls from `shared/unsolved-problems.md`. See §5. |
| 7 | **Methodology** | `/methodology` | Unchanged (`architecture.md` §1). |
| 8 | **About** | `/about` | Unchanged. |

**Still deliberately not built:** a separate `/reports` index distinct from Home (see §2's reasoning), a cross-domain comparison/rating view (still out of scope — see §6 for why the new Problems index is *not* that page), account/login, comments, tag/category taxonomy.

---

## 2. Home: the split question, decided

The brief asks explicitly whether Home and a separate Reports index should now split. **Decision: no — not yet, and not for the reason that might seem obvious.**

The naive argument for splitting is "more domains = a longer list = it needs its own page." That doesn't hold yet: even at Fashion + four announced-but-unstarted domains (five cards), a directory grid is nowhere near the length that earns a dedicated index page — this is the same "premature index for a problem that doesn't exist yet" reasoning `architecture.md` §1 used to reject `/reports` at one domain, just not yet falsified by scale.

What *does* change is Home's job. At one domain, Home could plausibly double as that domain's front door. At five-and-growing, Home has to do two things that now compete for space: (a) pitch the lab and the framework to a first-time visitor, and (b) function as an honest, scannable directory. The redesign resolves this by tightening the pitch (hero + "how we work" strip get shorter, not deleted) and giving the directory real structure — two visually distinct zones, not one long card list:

- **Published & in research** — domains with real content (currently: Fashion, "In Research"). Full-width cards, one per domain, matching the existing `domain-card` pattern from `architecture.md`/the v1 mockup: status chip, real description drawn from actual research, real stats, a link into the domain landing page, and a notify-me capture.
- **Planned** — domains announced but not started (Real Estate, Primary Education, Hospitals, Pharmaceuticals, in the order the human announced them — see open item in §9). Visually quieter, smaller cards, in a `2` or `3`-column grid: domain name, a neutral one-line description of what the domain *would* cover (not a thesis — there isn't one), a "Planned" status chip using a dashed border rather than a new color (reusing the visual grammar `architecture.md` already established for "unverified" — dashed means "not yet real," consistently, across the whole site), and a notify-me capture with copy that says plainly research hasn't started. No stats, no source count, no quote, no thesis fragment — nothing invented. This is the same honesty discipline `architecture.md` §6 applied to Fashion's "In Research" status, now applied one notch further down the confidence ladder to domains with *nothing* yet.

**Revisit trigger, stated the same way `architecture.md` §9.2 stated its own:** once the directory holds enough real (not planned) domains that the pitch content and the directory genuinely compete for above-the-fold space — a plausible number is somewhere around 8–10 published/in-research domains — a dedicated `/reports` (or `/domains`) index earns its place and Home can shrink back toward pure positioning. Not decided now; noted so it isn't silently designed around later.

---

## 3. Domain landing page (new)

`/domains/<domain>` is the hub a domain's Home card and any inbound link (social, search) lands on. It answers "what does this lab have on X" in one screen, then fans out. Anatomy:

1. **Domain masthead** — domain name, status (In Research / Published / Planned), one-line thesis pull-quote *only if one exists* (Fashion's candidate thesis, verbatim from the research report, exactly as `architecture.md` §6 already established as honest practice — never a placeholder thesis for Planned domains, which don't render this page at all, see below).
2. **Three fan-out cards, equal visual weight** (deliberately not a primary/secondary hierarchy — the addendum treats all three content types as first-class, not the report-plus-two-appendices):
   - **The Report** → links to `/domains/<domain>/report` (or, pre-graduation, a labeled "research-stage preview," same convention as `architecture.md` §6).
   - **Research Materials** → links to `/domains/<domain>/research`, with a live count ("5 research documents," "58 sources") so the card itself demonstrates the evidence discipline before a reader even clicks through.
   - **Unsolved Problems from this domain** → a filtered view, same card component as the cross-domain index (§5), showing only this domain's entries (Fashion: 3), each linking out to the full cross-domain index with the filter pre-applied.
3. **Notify-me capture**, same component as the Home card.

**A domain with no research yet (Planned) does not have a landing page** — its Home card is the whole of its public footprint. Generating `/domains/real-estate` today with three empty/placeholder fan-out cards would be worse than the current gap: it would imply structure and progress that don't exist. The honesty discipline extends to *page existence itself*, not just page content.

---

## 4. Research Materials — the generic template (new)

This is the piece the addendum flags as genuinely new: the raw research, addressable on its own, not just the evidence-log section embedded in the article. It has to represent an arbitrary, growing set of files per domain — Fashion alone now has five (`fashion-ai-domain-report.md`, `sources.md`, `investment-landscape.md`, `unsolved-problems.md`, `industry-challenges.md`), and nothing about the `00-research/` folder shape caps that number.

**Design decision, extending the same reasoning `architecture.md` §5 used for the evidence log:** one page per domain, with N sections (N = however many research documents that domain has), a sticky sub-nav across them, and stable per-section (and, within the evidence log, per-row) anchor permalinks. Not one URL per file. Splitting into five-and-growing separate pages would fragment a reader's ability to move between "here's the synthesis" and "here's the receipt for that claim" — the exact appendix problem the evidence-log decision already rejected, now at the scale of a whole folder instead of one section.

**The template models document *types*, not file names**, so it works for a domain that hasn't been invented yet:

| Document type | What it is | Fashion's file | Required? |
|---|---|---|---|
| **Domain Report** (synthesis) | The narrative overview tying the domain's findings together | `fashion-ai-domain-report.md` | Effectively yes — the entry point |
| **Structural Challenges** (AI-agnostic) | Root problems researched *without reference to AI*, per the framework's "hunt the impossible" step | `industry-challenges.md` | Optional — Fashion is the first domain to have one; the template must not assume every domain will |
| **Unsolved Problems** (binding-constraint analysis) | Per-problem test of whether AI removes the constraint or just accelerates work inside it | `unsolved-problems.md` | Yes — this is also the source feed for the cross-domain index (§5) |
| **Investment & Initiative Landscape** | The 2×2 classification table or discussion | `investment-landscape.md` | Yes |
| **Evidence Log** | Numbered, dated, tiered source table + "Known gaps" | `sources.md` | Yes |

Reading order on the page follows the narrative arc this ordering implies (synthesis → root problems found independent of AI → whether AI actually solves them → where the money's actually going → the full receipts), not folder alphabetical order or a fixed file count. A domain that never gets a Structural Challenges pass (most won't, at least not for a while) simply has four sections instead of five; the sub-nav and page don't reference a missing fifth item. Each section header carries a document-type badge (reusing the existing tier-badge/status-chip visual language) so a skimming reader always knows which of these five roles they're looking at, regardless of the domain.

The Evidence Log section here **is the same component** as the one embedded in the article page (`architecture.md` §5) — same filterable, fully-counted, scrollable table, same "Known gaps" block — not a second, divergent implementation. The article page's evidence-log section can, in Build, literally transclude this one; the design doesn't need two sources of truth for 58 rows.

---

## 5. Unsolved Problems — the cross-domain index (new)

`/problems`. The addendum's own framing: *"a list that could spark the imagination for problem solvers and investors."* Populated for real, now, with the four entries already evidenced in `shared/unsolved-problems.md`:

1. Keeping E2E UI tests current as apps evolve — Quality engineering — *Solved (reference case)*
2. Overproduction & inventory waste — Fashion — *Automation in disguise (mixed, needs verification)*
3. Authentication & counterfeiting at resale scale — Fashion — *Genuine invention candidate*
4. Fit & body-diverse sizing — Fashion — *Promising but unproven*

**How "inspiring" coexists with "rigorous," concretely:** each entry is a two-layer card, not a diluted one-liner and not a dense academic table either.
- **Collapsed (browsing) state** — what makes this page scannable and imagination-sparking: the problem stated as a question or a named constraint ("Why couldn't authenticity be verified before the fact — only inspected for afterward?"), a **status pill** (Solved / Genuine invention candidate / Automation in disguise / Promising but unproven / Still unsolvable — reusing the same verdict vocabulary `unsolved-problems.md` already uses, not a marketing rewrite of it), and the domain tag.
- **Expanded (on click) state** — the full binding-constraint analysis verbatim: why it was considered unsolvable, the binding constraint named precisely, whether AI removes it (with the "script-generation trap" honesty check intact), evidence anyone is attempting it with source numbers, the institutional-capability formulation, and the verdict. This is a direct, unshortened render of the domain's `unsolved-problems.md` entry — the inspiring framing lives entirely in the collapsed state's *headline*, never in a rewrite of the analysis itself. Every source number in the expanded view links out to that domain's Research Materials evidence log (§4), so "spark the imagination" never means "trust me" — it always means "here's exactly how far the evidence actually goes."

**Filter model:** chips by domain (Fashion, Quality engineering, and — inertly, greyed, unclickable — the four Planned domains, present only so a visitor understands the list will grow, never implying they have entries yet). Same filter-chip component already built for the evidence-log tier filter — one interaction pattern, reused, not reinvented.

**Why this is not `architecture.md` §9.2's "cross-domain comparison/index view"** — worth stating explicitly since both are cross-domain pages introduced at the same trigger point. §9.2 describes a *domain-rating* view (e.g., "which domains found an institutional-capability candidate vs. none") — something that compares domains against each other along a shared axis. This page does the opposite: it's *problem*-first, not domain-first; a reader browses constraints, not a leaderboard of industries. Nothing here ranks Fashion against a future Real Estate entry. §9.2 remains genuinely open and undecided — building the Problems index doesn't quietly resolve it, and Build should not treat this page as having satisfied that open item.

---

## 6. Content model v2 (generalized)

`architecture.md` §2's pipeline-artifact→component table was written against Fashion's four then-existing files. Generalized:

| Pipeline artifact (per domain) | Public component | Page |
|---|---|---|
| `03-article/draft.md` (or `00-research/<domain>-ai-domain-report.md` pre-graduation) | Article body + Executive Summary panel | Report page + standalone summary |
| `00-research/investment-landscape.md` | The Two Hills Map (2×2) | Report page section; also a Research Materials document |
| `00-research/sources.md` | Evidence Log | Report page section (shared component, see §4) *and* Research Materials |
| `00-research/unsolved-problems.md` | Binding-constraint cards | Domain landing (filtered) + `/problems` (full) + Research Materials document |
| `00-research/industry-challenges.md` (or any future AI-agnostic structural-problems file) | Structural Challenges section | Research Materials document only — this doesn't have a dedicated report-page slot; it's upstream context, not a claim about AI |
| `01-brainstorm/grill-me-log.md` | Stress-tested note | Report page, folded into methodology note (unchanged from v1) |
| *(the domain's `00-research/` folder as a whole)* | Research Materials page | New — see §4 |
| *(this domain's subset of `shared/unsolved-problems.md`)* | Filtered Unsolved Problems cards | Domain landing page |

No Fashion-specific file names are hardcoded above — the table maps folder *roles*, which is what makes it usable for Real Estate or Hospitals the day their `00-research/` folders exist.

---

## 7. URL namespace: `/reports/<domain>` → `/domains/<domain>`

`architecture.md` used `/reports/<domain>` because, at one content type per domain, "the domain page" and "the report page" were the same thing. That's no longer true — a domain now has three addressable public things plus a hub. Renaming the root to `/domains/<domain>` and nesting the report under it (`/domains/<domain>/report`) makes the namespace describe what's actually there instead of privileging the report as if it were still the only content type. This is a judgment call, not a forced one — flagged explicitly in §9.

---

## 8. Open items — flagged explicitly (new, plus carried forward)

Carried forward unchanged from `architecture.md` (still open, not resolved by this pass):
- **§9.1 (renumbered here as reference only)** — sourcing-transparency-as-differentiator is still unconfirmed by the human in words.
- **§9.2** — a true cross-domain *comparison/rating* view remains out of scope; per §5 above, the new Problems index is a different thing and does not resolve this.

New, from this pass:
- **Home/Reports split trigger (§2)** — the "~8–10 published domains" threshold is my estimate, not the human's; sanity-check it.
- **URL rename (§7)** — `/reports/<domain>` → `/domains/<domain>` is a structural change to a scheme the prior pass established; flagging for explicit sign-off since nothing forces it strictly (an alternative: keep `/reports/<domain>` as the report, add `/domains/<domain>` only as the hub — rejected here because it leaves two competing "domain root" URLs, but it's a real alternative).
- **Research Materials as one page with growing sections (§4)** — works cleanly at Fashion's five documents; unverified whether it still works at, say, fifteen. No redesign proposed now; flagged as a future scale question, same posture as `architecture.md` §9.2.
- **"Quality engineering" as a filter chip on `/problems` (§5)** — it's a real registry entry but not a domain in the confirmed roster (Fashion, Real Estate, Primary Education, Hospitals, Pharmaceuticals) — it predates the domain pipeline entirely (its deep-dive link target is `framework/two-hills-framework.md`, not a `domains/` folder). Proposed treatment: tag it "Reference case" rather than a domain pill, and link to Methodology instead of a domain landing page. Not explicitly confirmed by the human — flag for sign-off.
- **Planned-domain ordering on Home (§2)** — currently follows the order the human listed them in the addendum (Real Estate, Primary Education, Hospitals, Pharmaceuticals). No stated rationale for that order (alphabetical vs. priority vs. announcement sequence) — flag before treating it as meaningful.
- **Hosting/build tooling and form-capture vendor (§0)** — deliberately left as a Build-phase decision, not designed here; flagged only so it's on record before Build starts.

---

## 9. Non-goals held (unchanged, reaffirmed at v2 scale)

Everything `architecture.md` §10 lists still holds, unmodified by going multi-domain: no vendor-comparison chrome anywhere (including the new Problems index — see §5's explicit distinction from a rating view), no comments/likes/social mechanics, no paywall/billing UI, no cadence promise, no account/login. Adding a server-side capture backend is now additionally, explicitly off the table — not just deferred but structurally excluded by the GitHub Pages hosting decision (§0).
