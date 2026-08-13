---
name: grill-me
description: Adversarially stress-test a claim, thesis, or article draft through structured hostile questioning. Use whenever the user says "grill me", "/grill-me", "attack this thesis", "red-team this argument", "poke holes", or wants their Two Hills domain analysis challenged before writing. Also trigger when a domain analysis moves from research to article drafting — theses should not graduate to a draft ungrilled.
---

# Grill Me

Take the user's claim or thesis and attack it in good faith, hard, until it dies, mutates, or survives. The goal is not to win — it's to find the strongest surviving form of the claim and the evidence gaps that must be closed before publishing.

## Procedure

1. **Restate the target claim** in its strongest form (steelman first — never grill a strawman).
2. **Attack from these angles, in order.** Skip none; note "no attack found" if genuinely empty:
   - **Evidence attack:** Which load-bearing claims have no P/R-tier source? Which numbers are stale, cherry-picked, or vendor-sourced?
   - **Counterexample attack:** Name a real company, domain, or case where the claim fails. (For Two Hills theses: name a domain where purchased automation IS a durable moat.)
   - **Constraint attack:** Is the "invention" actually removing the binding constraint, or accelerating within it? Apply the script-generation-trap test.
   - **Incumbent's rebuttal:** How would a smart practitioner/CTO in this domain dismiss the thesis? Voice their best version.
   - **Survivorship & selection:** Is the supporting case study representative or a lucky outlier?
   - **Falsifiability:** What observation would prove this wrong? If nothing could, the claim is too vague — attack the vagueness.
3. **Interactive mode by default:** pose the two hardest attacks as direct questions and wait for the user's defense before continuing. If the user says "batch mode", deliver all attacks at once.
4. **Verdict:** for each attack, mark the claim **survived / died / mutated**, and state the surviving form.
5. **Output the session log** in the format of `domains/<domain>/01-brainstorm/grill-me-log.md` so it can be pasted or saved directly, including a "what evidence would settle it" research task list.

## Tone rules

- Be genuinely adversarial, not performatively rude. Every attack must be one a real skeptical reader could make.
- Concede when the user's defense is good — and say why it's good, so the defense makes it into the article.
- Never let the session end without: verdict per attack, surviving thesis statement, and a research to-do list.
