# Common Understanding

Our evolving shared beliefs across domains. Updated after every grill-me session and every completed domain analysis. Date-stamp changes.

## Core beliefs (held with confidence)
- Invention subsumes automation; the reverse is not true. (framework, 2026-08)
- Efficiency everyone can purchase is the new baseline, not a differentiator. (framework, 2026-08)
- Durable value = new abilities embedded in how the organization works: compounding, hard to copy. (framework, 2026-08)
- A proprietary AI engine is not a moat by itself — it must compound on *genuinely exclusive* data. Confirmed twice: fashion (payment-fraud analogy — Visa/Mastercard models durable because of the exclusive transaction graph, not the model) and ad-servers (AppLovin/AXON and Unity/Vector, on owned closed-loop data, vs. The Trade Desk/Kokai, an equally real 8-year engine on open supply + an open identity standard — formally stripped of its moat rating, Morningstar 2026-03). Corollary: distinguish exclusive/closed data from open standards branded "proprietary" (UID2). (ad-servers, 2026-08)

## Working hypotheses (under test)
- Most domains' AI investment is concentrated in the bottom half of the 2x2. (test per-domain; held in fashion 10/12 and ad-servers ~40 of ~67 claims)
- The binding-constraint analysis (does AI remove the constraint, or accelerate within it?) reliably separates invention from automation-in-disguise. (held in both domains so far; in ad-servers it caught "agent-to-agent negotiation" as automation-in-disguise — the protocols' own specs have no negotiation step)
- In fast-moving infrastructure domains, Individual Invention is a staging step, not an end state — single-partner pilots either generalize to IC or commoditize to PA within quarters. (ad-servers, 2026-08; test in slower domains)

## Open questions
- Are there domains where process automation genuinely IS the moat (regulatory, scale, or data-network effects)?
- How do we measure "compounding" empirically, not just narratively?
- Does the "engine + exclusive data" moat pattern exist outside closed ecosystems (mobile SDK networks)? Our two clean cases are both mobile; no open-web company has produced the combination yet. (ad-servers, 2026-08)

## Things we changed our minds about
- **Transacting/coordination infrastructure ("who connects the parties") is not itself where the moat sits — even when it's new and currently proprietary.** Ad-servers grill session (2026-08): the working thesis started as "the moat is whoever controls the agentic orchestration layer" (the system routing AI buyer/seller agents to transact). The Prebid.js counterexample killed it: header bidding's dominant infrastructure standardized around an open, non-profit-governed protocol, not a proprietary rail — the companies plugging into it stayed commoditized. Revised view: transacting/protocol/plumbing layers are structurally prone to standardization once multiple parties need interop (regardless of who builds the first proprietary version); the durable moat sits one layer up (the proprietary intelligence deciding how to use the plumbing) and one layer over (the exclusive data feeding that intelligence). Worth testing on every future domain that has an emerging "coordination layer" story (marketplaces, agent-to-agent protocols, any new two-sided matching system).
- (record further reversals here — they make the best article material)
