# Master List: "Impossible Until AI" Problems

Cross-domain registry. Each entry links to the domain folder where it's analyzed in depth.

| Problem | Domain | Binding constraint | AI removes it? | Status | Deep dive |
|---|---|---|---|---|---|
| Keeping E2E UI tests current as apps evolve | Quality engineering | Scripts encode implementation, not intent | Yes — intelligence lives in intent understanding | Solved (reference case) | framework/two-hills-framework.md |
| Overproduction & inventory waste | Fashion | Slow feedback loop between demand signal and shelf | Mostly no as deployed (better forecast, same slow cycle) — unconfirmed exception for vertically-integrated players | Automation in disguise (mixed, needs verification) | domains/fashion/00-research/unsolved-problems.md |
| Authentication & counterfeiting at resale scale | Fashion | Expert attention doesn't scale; authenticity only inferable after the fact | Yes, when identity is assigned at manufacture (Aura Consortium) — no, when CV just automates post-hoc inspection (Entrupy) | Genuine invention candidate (provenance-at-origin); automation in disguise (post-hoc CV) | domains/fashion/00-research/unsolved-problems.md |
| Fit & body-diverse sizing | Fashion | No scalable way to capture individual body data cheaply | Partially — real return-rate reduction, but data representativeness unverified and design-loop not yet closed | Promising but unproven | domains/fashion/00-research/unsolved-problems.md |
| Resale-side provenance verification (the "last mile") | Fashion | Provenance ground truth now exists at manufacture (Aura, 40M+ items; EU DPP mandate ~2028) — but no evidence anyone queries it where secondhand counterfeiting actually lives: thrift, consignment, resale marketplaces | Constraint already removed upstream; the unbuilt piece is the query/verification layer at the point of resale — an integration and adoption problem, not a research problem | **Open opportunity** — flagged for problem solvers/investors (2026-08, from the fashion article's grill session) | domains/fashion/01-brainstorm/grill-me-log.md |
