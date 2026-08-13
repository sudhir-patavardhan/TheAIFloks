# Two Hills Lab

A research and writing repo for applying the **Two Hills of AI** framework (Automation vs. Invention × Individual vs. Institutional) to different domains, producing data-backed, publishable articles.

## The core question every article answers

> In this domain, what is everyone automating (table stakes) — and what previously-impossible problem could AI actually unravel (durable, compounding value)?

## Repo structure

```
two-hills-lab/
├── framework/                  # The canonical framework — the lens for everything
│   ├── two-hills-framework.md  # Distilled framework + application guide
│   └── original-linkedin-post.pdf
├── domains/                    # One folder per domain under analysis
│   └── _template/              # Copy this to start a new domain (e.g. domains/healthcare/)
│       ├── 00-research/        # Raw evidence: investments, data, sources
│       ├── 01-brainstorm/      # Grill-me sessions, hypotheses, open questions
│       ├── 02-analysis/        # Two Hills quadrant mapping + thesis
│       └── 03-article/         # Drafts → final
├── shared/                     # Cross-domain common understanding
│   ├── common-understanding.md # Our evolving beliefs, refined after every grill-me
│   └── unsolved-problems.md    # Master list of "impossible until AI" problems
├── skills/
│   └── grill-me/               # The adversarial brainstorming skill used in 01-brainstorm
└── publishing/
    └── checklist.md            # Evidence bar + pre-publish gate
```

## Workflow for each domain

1. **Copy the template**: `cp -r domains/_template domains/<domain-name>`
2. **Research** (`00-research/`): map current AI/tech investments in the domain — who's spending, on what, how much. Classify each into the 2x2. Log every claim with a source in `sources.md`.
3. **Hunt the impossible** (`00-research/unsolved-problems.md`): list the domain's long-standing "unsolvable" problems. For each, ask: what constraint made it unsolvable, and does AI remove that constraint?
4. **Grill** (`01-brainstorm/`): run `/grill-me` on the emerging thesis. Log the session verbatim. Surviving arguments graduate to `02-analysis/`; killed arguments get recorded too (they're future objection-handling material).
5. **Map** (`02-analysis/two-hills-map.md`): place the domain's initiatives into the four quadrants; identify the institutional-capability opportunity.
6. **Write** (`03-article/`): draft against the publishing checklist. Every load-bearing claim must trace back to `sources.md`.
7. **Update shared understanding**: after each domain, fold new insights into `shared/common-understanding.md`.

## Ground rules

- **No naked claims.** If it's in an article, it's in `sources.md` with a link and date.
- **Distinguish evidence tiers**: primary data (filings, earnings calls, peer-reviewed papers) > industry reports (Gartner, McKinsey, a16z) > news coverage > vendor marketing (use only as evidence of *what vendors claim*, never as evidence of outcomes).
- **The framework is falsifiable per-domain.** If a domain's evidence shows automation *is* the durable moat there, we write that. Credibility compounds; cheerleading doesn't.
