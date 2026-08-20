# Current AI/Tech Investment Landscape — Fashion Industry

Goal: map where money and attention are going in this domain, and classify it into the 2x2.

## Funding & spend snapshot

- **Total AI investment in domain:** No single reliable aggregate figure. Market-sizing estimates disagree by an order of magnitude — Precedence Research: $2.23B (2024) → $60.57B by 2034, 39.1% CAGR (source #53); Grand View Research shows two internally-inconsistent figures on its own site (#54); Statista's figure was inaccessible (#55). Treat any single "AI-in-fashion market size" headline number with skepticism.
- **Largest named initiatives:** PVH Corp. × OpenAI enterprise-wide deal spanning design, demand planning, inventory, and consumer engagement (#1, #2); eBay's acquisition of Certilogo for authentication (#20); the Aura Blockchain Consortium's shared provenance infrastructure across LVMH/Prada/Cartier/OTB (#22).
- **Enterprise budget trend:** Tech spend as % of sales projected to rise from 1.6–1.8% (2021) to 3–3.5% by 2030 (#48). Among luxury houses specifically, AI's share of top-3 corporate priorities rose from 5% (2024) to 22% (2026) (#50) — but ~60% of fashion/luxury companies still self-report "emerging" or "stagnating" AI maturity despite the spend (#51). Spend is rising faster than measurable impact.

## Initiative classification (the key table)

| Initiative / vendor category | What it does | Quadrant (PP / PA / II / IC) | Evidence (source #) |
|---|---|---|---|
| Generative design tools (PVH×OpenAI, Style3D) | AI-assisted sketching, 3D prototyping, faster ideation | PA — accelerates existing design workflow, not a new capability | #1, #2, #3, #4 |
| Virtual try-on / fitting (ASOS×AIUTA, Zalando 3D avatars, Stitch Fix Vision) | Predicts fit/appearance from customer data, cuts returns | PA today; **IC-potential** if fit/return data closes the loop back into design (not yet observed) | #5, #6, #7, #11 |
| Demand forecasting & inventory (generic SaaS) | Predicts SKU-level demand, optimizes stock | PA — purchasable forecasting layer bolted onto an unchanged, slow production cycle | #8, #9, #45 |
| Vertically-integrated forecast-to-shelf loop (Inditex/Zara-style, as claimed) | Short lead times + in-season sell-through data adjusting near-term production | **IC candidate** — but the specific KPI figures in circulation are unverified (see #10); treat as plausible, unconfirmed | #10 |
| Hyper-personalization / styling (Stitch Fix Outfit Creation, Style Assistant) | AI-generated outfit/styling recommendations at scale | PA, with a data-moat (25 years of client feedback) that's harder to copy than a typical SaaS purchase | #11, #19 |
| Trend forecasting (Heuritech and similar) | Computer vision over social/runway imagery to predict trends | PA — commoditized signal; the *same* vendor serves competing luxury houses, which is itself a homogenization risk, not just a productivity win | #14 |
| Marketing/content generation (Mango, generic genAI imagery tools) | Replaces photoshoots with generated campaign imagery | PA — automates an existing production process (photography → generation) | #15, #28 |
| AI models / digital humans (Levi's×Lalaland, H&M digital twins, Guess) | Synthetic or licensed-likeness models in place of new photoshoots | PA — automates model/photographer labor; not a new capability, a cheaper substitute for an old one | #16, #17, #18, #29 |
| Customer service (Stitch Fix Style Assistant, generic retail chatbots) | Automates stylist/customer-service conversations | PA | #19 |
| Post-hoc authentication (Entrupy, Certilogo/eBay) | Computer-vision inspection of physical goods to detect counterfeits | PA — automates the human authenticator's pattern-matching; still probabilistic, still after-the-fact, still purchasable by any single reseller | #20, #21 |
| Digital product passports (Aura Blockchain Consortium) | Assigns verifiable digital identity to goods **at the point of manufacture**, shared across a multi-brand consortium | **IC** — moves authenticity upstream from inference to origin; hard to copy because it requires industry-wide cooperation, not just a vendor contract | #22 |
| Resale/circular-economy automation (ThredUp, Trove) | AI handles tagging, pricing, routing of secondhand goods | PA | #23, #24 |

PP = Personal Productivity · PA = Process Automation at scale · II = Individual Invention · IC = Institutional Capability

## Observed concentration

As the framework predicts: **heavy concentration in the bottom half (PP/PA)**. Nearly every AI use case currently deployed at scale in fashion — forecasting, virtual try-on, trend prediction, content generation, post-hoc authentication, resale automation — is a *purchasable* layer bolted onto an otherwise unchanged process. Any competitor with a budget can buy the same forecasting SaaS, the same virtual try-on widget, the same trend-forecasting subscription (#3, #14, #48). This is the commoditizing baseline the framework predicts, and the evidence (#50: 60% of luxury firms report no measurable AI impact despite rising spend) suggests most of this investment hasn't yet even delivered the automation payoff cleanly, let alone a durable moat.

Two initiatives stand out as genuine **institutional-capability candidates**, both because the intelligence lives upstream of the commoditized layer and both require structural, hard-to-copy commitments rather than a vendor contract:

1. **Vertically-integrated forecast-to-shelf loops** (Inditex/Zara-style) — *if* the unverified claims hold up, this is AI embedded in a compressed physical supply chain, not just a better prediction. Needs primary-source verification (see gap in sources.md).
2. **Cross-brand digital product passports** (Aura Blockchain Consortium) — authenticity established at manufacture, shared infrastructure across LVMH/Prada/Cartier/OTB, not for sale to a single retailer.

Both are explored in depth in `unsolved-problems.md`.
