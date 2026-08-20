# Domain Report: AI in the Fashion Industry

*Research phase output — 00-research. Every claim below carries a source number (#) traceable to `sources.md`. Not yet grilled (01-brainstorm) or mapped to a final thesis (02-analysis) — see "Status & next steps" at the end.*

## Executive summary

Fashion's AI story tracks the Two Hills pattern closely. Spend is real and rising — tech investment as a share of sales is projected to nearly double by 2030 (#48), and AI is now named executives' single biggest opportunity for 2026, ahead of product differentiation and sustainability (#47). But almost all of it is landing in **Process Automation at Scale**: forecasting, virtual try-on, trend prediction, content generation, and post-hoc authentication are all now purchasable SaaS layers that any competitor can also buy. That's consistent with the framework's expectation, and with the data: ~60% of fashion and luxury companies self-report "emerging" or "stagnating" AI maturity despite the spend increase (#51). Two exceptions look like genuine institutional-capability candidates — vertically-integrated forecast-to-shelf loops and cross-brand digital product passports — detailed below.

The blindspots are not fringe concerns. They're already producing lawsuits, union statements, an FTC enforcement sweep, and the first US state law specifically regulating AI-generated model likenesses.

## How AI is actually being used

**Design & product development.** PVH (Calvin Klein, Tommy Hilfiger) has the largest disclosed enterprise deal, embedding OpenAI's tools across design, demand planning, inventory, and consumer engagement (#1, #2). McKinsey estimates generative AI could add $150–275B to apparel/fashion/luxury operating profits within 3–5 years, about a quarter of it from design (#3) — a market-wide estimate, which is itself a sign this is commoditizing rather than differentiating.

**Virtual try-on & fit.** This is the strongest evidence of AI genuinely removing a constraint rather than just accelerating work. Zalando's AI-built 3D avatars report up to a 40% return-rate reduction in an early pilot (#6); ASOS partly attributes a 160bps returns cut to its AIUTA-built try-on tool (#5, #7). Shoppers' actual body shape is informing fit decisions that used to be pure guesswork against a population average.

**Demand forecasting & inventory.** Widely deployed — SKU-level forecast accuracy reportedly moving from ~60% to ~75%, with inventory cuts of 5–15% (#8) — against a backdrop where overproduction is genuinely large (2.5–5B excess items, $70–140B, in 2023 alone; #45) and margin damage is visible (Nike's 190bps margin hit from discounting, #9). The much-repeated Zara/Inditex figures (85% full-price sell-through) recur constantly in trade coverage but were **not** traced to any primary source in this research pass — treat as unconfirmed (#10).

**Personalization & styling.** Stitch Fix's AI now drives an estimated 75% of client selections through its Outfit Creation Model and a new conversational Style Assistant, working alongside ~1,600 human stylists rather than replacing them (#11, #19).

**Trend forecasting.** Heuritech's computer-vision platform processes millions of social images daily and reportedly serves competing luxury houses including Louis Vuitton and Dior (#14) — a useful illustration of the commoditizing baseline: if the same vendor is feeding the same trend signal to rival maisons, that signal cannot be anyone's differentiator, and may actively push design toward convergence (see Blindspots).

**Marketing, content & AI models.** This is the most publicly volatile use case. Mango ran what it calls fashion's first fully AI-generated campaign, dropping models, photographers, and stylists from the production entirely (#15, #28). Levi's (2023) and H&M (2025) both moved to AI-generated or AI-licensed model likenesses and both drew public and union pushback (#16, #17, #27). Guess ran a fully synthetic model in Vogue with minimal AI disclosure and drew a much larger backlash (#29, #30).

**Authentication & counterfeiting.** Two distinct approaches: computer-vision inspection after the fact (Entrupy, eBay's Certilogo acquisition — #20, #21) versus digital identity assigned at the point of manufacture (the Aura Blockchain Consortium, backed by LVMH, Prada, Cartier, and OTB across 40M+ products — #22). This split is the clearest automation-vs-invention contrast found in the whole domain (see `unsolved-problems.md`).

**Resale & circular economy.** ThredUp reports AI now handles tagging, pricing, and discovery, and posted a 79.5% gross margin in Q2 2025 after $400M+ in automation investment (#23).

## Where the investment is concentrated

Nearly everything above is **Process Automation at Scale (PA)**: a purchasable layer automating an existing job (predicting, fitting, imaging, inspecting, tagging) faster or cheaper. That's the expected bottom-half concentration the framework predicts — see `investment-landscape.md` for the full quadrant mapping. Two candidates break the pattern and look like real **Institutional Capability**: a vertically-integrated forecast-to-shelf production loop (evidence for the specific claims is currently unverified) and the Aura cross-brand provenance consortium (well-evidenced). Full analysis in `unsolved-problems.md`.

## Blindspots & challenges

**Bias baked into a narrowing data pool.** Runway plus-size representation fell to 0.3% of looks in AW2025 (from 0.8% the prior season), with sizes 0–4 at 97.7% (#25) — precisely the imagery increasingly used to train fashion AI. Academic work on generative-AI bias confirms models trained on skewed data reproduce that skew in outputs (#26). No study was found that directly measures bias *inside* fit/sizing algorithms specifically — a real gap, not a settled finding.

**AI models displacing human labor, with real institutional pushback.** Levi's (2023), Mango (2024), H&M (2025), and Guess (2025) each drew backlash for using AI-generated or AI-licensed models in place of photoshoots (#27, #28, #29, #30). This isn't just social-media noise: Equity and Bectu union leaders publicly warned about thin AI protections in H&M's model agreements and trickle-down job loss for stylists and makeup artists (#17); the Model Alliance's research found 87% of surveyed fashion workers concerned about AI, with a 2025 follow-up study (with Data & Society and Cornell's Worker Institute) finding the impact falls unevenly along racial and gender lines (#43). New York responded with the **Fashion Workers Act** (signed Dec 2024, consent provisions effective June 2025) — the first US law requiring written model consent before creating an AI "digital replica" (#44).

**IP and copyright exposure.** Shein faces an active lawsuit alleging its AI-driven trend-detection pipeline routes designs to factories without human copyright review (#31), following an earlier suit that settled. A model sued Rainbow Shops alleging AI altered her catalog photos into images she never posed for or consented to (#33). On the other side, the UK High Court largely dismissed Getty Images' copyright claims against Stability AI over training-data use (#32) — a landmark ruling that narrows, rather than expands, what counts as infringement, and a genuine falsification data point against the "AI training is legally settled to be infringing" assumption.

**Environmental cost hiding inside sustainability claims.** Industry sustainability researchers flag that AI's own compute footprint is rarely counted against fashion's sustainability commitments, and that efficiency gains could be offset by the environmental cost of the AI systems themselves (#34) — training a single large model can emit on the order of hundreds of tons of CO2 (#35).

**Counterfeiting and deepfakes at platform scale.** Counterfeits are estimated at ~2.5% of global trade, ~$464B (#36). A Reuters investigation found Meta itself projected ~$16B in revenue (≈10% of 2024 total) from scam and counterfeit-goods ads, including AI deepfake celebrity endorsements (#37) — a supply-side problem fashion brands don't control.

**Algorithmic homogenization.** Peer-reviewed work names "cultural homogenisation" as a distinct ethical risk when AI design and forecasting tools are trained on the same trending-image pools (#38) — directly relevant given Heuritech serves multiple competing luxury houses (#14).

**Privacy exposure from try-on tools.** Charlotte Tilbury settled a $2.925M Illinois biometric-privacy (BIPA) class action over facial-geometry data collected via its virtual try-on tools (#40); similar suits are pending against L'Oréal, Estée Lauder, MAC, Decorté, and LVMH (#41) — a pattern, not a one-off, directly implicating the same try-on category driving the fit-improvement gains cited above.

**Overproduction risk cuts both ways.** The same forecasting tools marketed to reduce fast fashion's waste (2.5–5B excess items, $70–140B in 2023; #45) could just as easily help fast-fashion players produce — and waste — faster, since the fastest AI adopters are often the fastest-cycle brands. Coverage raises this as an open question rather than a settled one.

**AI-washing has legal teeth.** The FTC's "Operation AI Comply" sweep (Sept 2024) established that exaggerated "AI-powered" marketing claims can trigger federal enforcement (#46) — relevant to any fashion brand's AI-marketing copy, not just the vendors selling the tools.

## Flagship reports now in this research folder

- **McKinsey × BoF, *The State of Fashion 2026*** (Nov 2025, free) — the industry's flagship annual outlook; names AI the top opportunity for 2026 (#47)
- **McKinsey × BoF, *The State of Fashion: Technology*** (May 2022, free) — the tech-investment special edition underpinning the spend-trend figures above (#48)
- **McKinsey, *Generative AI: Unlocking the Future of Fashion*** (Mar 2023) — the $150–275B profit-upside estimate (#3, #49)
- **Bain & Company × Comité Colbert, *5th Luxury & Technology Report*** (Jun 2026, free) — luxury-specific AI priority and consumer-usage data (#50)
- **BCG, *Executive Perspectives: AI-First Fashion and Luxury*** (Nov 2025) — luxury AI maturity data; verify directly before load-bearing use, fetch was blocked in this pass (#51)
- **Coresight Research, *The Future of Fashion, Shaped by Technology*** (Aug 2024, gated) — US apparel/footwear supply-chain AI (#52)
- **World Economic Forum, "Physical AI" in fashion manufacturing** (Mar 2026, free) — factory-floor AI and textile waste (#57)
- **BoF Insights, *The Complete Playbook for Generative AI in Fashion*** (2023, gated) — case-study series (#58)

Market-sizing reports (Precedence Research, Grand View Research, Statista, Gartner) are logged in `sources.md` #53–56 but disagree with each other by an order of magnitude or were inaccessible — flagged there as low-confidence, not repeated here.

## What's still unverified

The full list lives at the bottom of `sources.md`. The two most consequential gaps: (1) the widely-repeated Zara/Inditex AI performance figures have no primary-source backing found in this pass, despite anchoring a lot of "AI works in fashion" folklore; (2) no study was found measuring bias *inside* AI fit/sizing algorithms specifically, as distinct from the well-documented bias in runway/imagery representation.

## Status & next steps

This report closes the `00-research` phase (this file + `sources.md` + `investment-landscape.md` + `unsolved-problems.md`). Two problems in `unsolved-problems.md` — cross-brand authentication infrastructure and fit/sizing — look like genuine invention candidates worth defending under adversarial pressure. Per the repo workflow, next is `01-brainstorm`: run `/grill-me` on the strongest candidate thesis (a natural target: *"the durable AI moat in fashion isn't a better forecast or a cheaper photoshoot — it's who controls the shared, verifiable data infrastructure a garment carries from factory to resale"*) before it graduates to `02-analysis/two-hills-map.md`.
