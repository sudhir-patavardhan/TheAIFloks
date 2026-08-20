# Grill-Me Sessions — Publishing Platform (theAIFolks.com)

One section per session. Run via the /grill-me skill (see /skills/grill-me/SKILL.md).

## Session 2026-08 — Target claim: "theAIFolks.com should look and feel like a Gartner analyst platform — evidence-graded research artifacts organized by domain and maturity, not a reverse-chronological blog feed"

### Attacks raised
1. **Counterexample / constraint (combined):** "Gartner-style" is ambiguous between literal Magic-Quadrant peer-comparison (many vendors rated against each other, backed by large analyst staff) and Stratechery-style analyst voice (one proprietary framework, small operation, authority from consistency + evidence discipline). Two Hills' actual content shape — one domain's 2x2 thesis, grilled and sourced — maps to the second, not the first.
2. **Evidence / audience:** A blog can be exactly as rigorous as an analyst report mechanically (Stratechery is a blog by plumbing). "Not a blog" has to do real work beyond aesthetics — depends entirely on who the reader is and what they need from the site.
3. **Incumbent's rebuttal:** A skeptical exec asks "why trust this over Gartner/McKinsey?" Incumbents don't show their work (opaque "Gartner clients" citations). This repo's own ground rules (sources.md, evidence tiers, no naked claims) already force radical sourcing transparency — proposed as the actual trust mechanic substituting for brand history.
4. **Falsifiability, evidence-grounded:** The closest reference-class reports found during the Fashion domain research (McKinsey State of Fashion, Bain Luxury Report, BCG luxury AI — sources.md #47/#48/#50) are all free, cross-subsidized by consulting arms. Stratechery's paywall works because its competitors are free-with-ads, not free-with-consulting-upsell. TheAIFolks.com doesn't have that upsell (yet) — a same-day paywall risks the free-competitor problem.

### Claim survived / died / mutated
- **Verdict:** Mutated (twice) and survived in final form.
- **Surviving form of the claim:** theAIFolks.com is a **Stratechery-style research publication** — one proprietary framework (Two Hills) applied consistently, not a Gartner Magic-Quadrant peer-rating platform — for people making **AI strategy and investment decisions**. It borrows Gartner's visual seriousness (structured frameworks, data-viz, maturity/quadrant visuals) without literal vendor-rating chrome. No comments, no likes, no reverse-chron feed as the primary organizing principle. Trust comes from **radical sourcing transparency** (the evidence log is a first-class, visible part of every article, not a footnote) rather than brand history — *proposed, not yet explicitly confirmed by the user in words; carry forward as a strong recommendation, flag for revision.* Access is **free with email capture** for now (paid tiers deferred until there's a back-catalog and proven demand — deliberately avoiding the free-competitor trap). Every article ships a distinct, **LinkedIn-shareable executive-summary artifact**, separate from the full sourced analysis.
- **What evidence would settle it:** Whether sourcing-transparency-as-trust-mechanic actually lands with the target audience (AI strategy/investment decision-makers) is untested — first real signal will be reader/subscriber reaction once the first article (Fashion) publishes. → research task for after launch, not blocking design.

### Decisions locked (via direct user confirmation, not attacks)
- **Reference class:** Stratechery-style, confirmed directly.
- **Audience:** People making AI strategy and investment decisions; no social mechanics.
- **Access model:** Free now with email capture; paid tiers are a later decision.
- **Build timing:** Design now, using the Fashion domain (00-research complete) as the sole test content — the domain template's recurring shapes (2x2 grids, source tables, quadrant maps) hold regardless of topic.

### Graduated to design brief
- [x] Surviving claim moved to `site/design-brief.md`
- [x] Open items flagged: sourcing-transparency principle needs explicit confirmation; no publishing cadence set yet; a cross-domain comparison/index view is a plausible v2 once 2+ domains are complete (seed of an actual "quadrant" view) — not v1 scope.
